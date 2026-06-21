# Contact form → Google Sheet (one-time setup)

The contact form posts to `/api/contact` (on your own site), which forwards each submission to a
**Google Apps Script Web App** that appends a row to your Google Sheet. No email is sent.

```
Browser form  ──POST /api/contact──▶  Your Next.js API route  ──POST──▶  Apps Script Web App  ──▶  Google Sheet
```

## 1. Create the Sheet

1. Go to <https://sheets.google.com> and create a new spreadsheet (e.g. **"Innovexa Leads"**).
2. (Optional) Rename the first tab to `Leads`.

The script below writes the header row automatically, so you don't need to add titles by hand.

## 2. Add the Apps Script

1. In the sheet: **Extensions → Apps Script**.
2. Delete any boilerplate and paste this:

```javascript
var HEADERS = ['Submitted At', 'Full Name', 'Company / Brand', 'Email', 'Phone', 'Service', 'Budget', 'Timeline', 'Message'];
var TZ = 'Asia/Kolkata';

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName('Leads') || ss.getSheets()[0];
}

// Adds a bold, frozen header row if it isn't there yet.
function ensureHeader_(sheet) {
  var first = sheet.getLastRow() === 0 ? '' : String(sheet.getRange(1, 1).getDisplayValue()).trim();
  if (first !== HEADERS[0]) {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setValues([HEADERS])
      .setFontWeight('bold')
      .setBackground('#0b1327')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
}

// Run this ONCE manually (Run ▸ setupSheet) to format an existing sheet immediately.
function setupSheet() {
  var sheet = getSheet_();
  ensureHeader_(sheet);
  sheet.autoResizeColumns(1, HEADERS.length);
  for (var c = 1; c <= HEADERS.length; c++) {
    if (sheet.getColumnWidth(c) > 340) sheet.setColumnWidth(c, 340);
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // avoid race conditions on concurrent submits
  try {
    var sheet = getSheet_();
    var data = JSON.parse(e.postData.contents);
    ensureHeader_(sheet);

    var row = [
      Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm:ss'),
      data.full_name || '',
      data.company_brand || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.budget || '',
      data.timeline || '',
      data.message || ''
    ].map(function (v) { return String(v); });

    var target = sheet.getLastRow() + 1;
    var range = sheet.getRange(target, 1, 1, row.length);
    range.setNumberFormat('@'); // store everything as plain text -> "+91..." is NOT a formula
    range.setValues([row]);

    sheet.autoResizeColumns(1, row.length);
    for (var c = 1; c <= row.length; c++) {
      if (sheet.getColumnWidth(c) > 340) sheet.setColumnWidth(c, 340);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3. **Save** (disk icon).
4. (Optional but recommended) In the editor's function dropdown choose **`setupSheet`** and click **Run** once
   to add the header row, fix the `+phone` formatting, and size the columns on your existing sheet.

## 3. Deploy as a Web App

1. **Deploy → New deployment**.
2. Click the gear → **Web app**.
3. Set:
   - **Description:** `Innovexa contact form`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`  ← required so the server can POST to it.
4. **Deploy**, authorize the script when prompted (allow access to your sheet).
5. Copy the **Web app URL** — it ends in `/exec`. That is your webhook URL.

> When you change the script later, use **Deploy → Manage deployments → Edit → Version: New version**
> so the same `/exec` URL keeps working.

## 4. Add the URL to the app

- **Local dev:** put it in `.env.local`:

  ```env
  GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
  ```

- **Production (Vercel):** Project → Settings → Environment Variables → add
  `GOOGLE_SHEET_WEBHOOK_URL` with the same value, then redeploy.

This variable is **server-side only** (not `NEXT_PUBLIC_*`), so the URL is never exposed to visitors.

## 5. Test

Submit the form on the site. A new row should appear in the sheet within a second or two.
If you get the "Something went wrong" message, double-check:
- The deployment access is **Anyone**.
- `GOOGLE_SHEET_WEBHOOK_URL` is set (and the dev/prod server was restarted after adding it).
- The URL ends in `/exec` (not `/dev`).
