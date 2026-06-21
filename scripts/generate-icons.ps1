# Generates a consistent brand icon set for INNOVEXA DIGITAL from the source logo.
# Run: powershell -NoProfile -ExecutionPolicy Bypass -File scripts/generate-icons.ps1
Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$root   = Split-Path -Parent $PSScriptRoot
$srcSquare = Join-Path $root "public/logo/INNOVEXA LOGO.png"   # arrow mark + DIGITAL
$srcLockup = Join-Path $root "public/logo/innovexa-logo.png"   # arrow + INNOVEXA DIGITAL wordmark
$srcFavicon = Join-Path $root "scripts/assets/favicon-source.png" # user-supplied favicon artwork (build-only, not served)
$appDir = Join-Path $root "app"
$pubDir = Join-Path $root "public"

function New-HQGraphics($bmp) {
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality= [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  return $g
}

# --- 1. Extract the arrow mark ONLY (top region of the lockup, before the wordmark) ---
$src = [System.Drawing.Image]::FromFile($srcLockup)
$cropFracH = 0.60
$workW = 1024
$workH = [int]($workW * $cropFracH)
$work = New-Object System.Drawing.Bitmap($workW, $workH)
$g = New-HQGraphics $work
$g.DrawImage($src,
  (New-Object System.Drawing.Rectangle(0,0,$workW,$workH)),
  (New-Object System.Drawing.Rectangle(0,0,$src.Width, [int]($src.Height*$cropFracH))),
  [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$src.Dispose()

$minX=$workW; $minY=$workH; $maxX=0; $maxY=0
for ($y=0; $y -lt $workH; $y+=2) {
  for ($x=0; $x -lt $workW; $x+=2) {
    if ($work.GetPixel($x,$y).A -gt 40) {
      if ($x -lt $minX) {$minX=$x}; if ($x -gt $maxX) {$maxX=$x}
      if ($y -lt $minY) {$minY=$y}; if ($y -gt $maxY) {$maxY=$y}
    }
  }
}
$bw = [Math]::Max(1, $maxX-$minX); $bh = [Math]::Max(1, $maxY-$minY)
$mark = New-Object System.Drawing.Bitmap($bw, $bh)
$g = New-HQGraphics $mark
$g.DrawImage($work,
  (New-Object System.Drawing.Rectangle(0,0,$bw,$bh)),
  (New-Object System.Drawing.Rectangle($minX,$minY,$bw,$bh)),
  [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$work.Dispose()
Write-Host "Arrow mark extracted: ${bw}x${bh}"

# --- helper: draw a branded square icon (dark gradient bg + centered arrow) ---
function Save-Icon($size, $path, $padFrac) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = New-HQGraphics $bmp
  $rect = New-Object System.Drawing.Rectangle(0,0,$size,$size)
  $c1 = [System.Drawing.Color]::FromArgb(255, 14, 22, 41)   # #0E1629
  $c2 = [System.Drawing.Color]::FromArgb(255, 4, 7, 16)     # #040710
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c1, $c2, 115.0)
  $g.FillRectangle($brush, $rect)
  $brush.Dispose()

  # soft cyan glow top-left
  $glow = New-Object System.Drawing.Drawing2D.GraphicsPath
  $gd = [int]($size*0.9)
  $glow.AddEllipse((New-Object System.Drawing.Rectangle([int](-$size*0.2),[int](-$size*0.25),$gd,$gd)))
  $pgb = New-Object System.Drawing.Drawing2D.PathGradientBrush($glow)
  $pgb.CenterColor = [System.Drawing.Color]::FromArgb(70, 18, 231, 255)
  $pgb.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 18, 231, 255))
  $g.FillPath($pgb, $glow)
  $pgb.Dispose(); $glow.Dispose()

  # centered arrow preserving aspect ratio
  $pad = [int]($size*$padFrac)
  $avail = $size - 2*$pad
  $scale = [Math]::Min($avail / $mark.Width, $avail / $mark.Height)
  $dw = [int]($mark.Width*$scale); $dh = [int]($mark.Height*$scale)
  $dx = [int](($size-$dw)/2); $dy = [int](($size-$dh)/2)
  $g.DrawImage($mark, (New-Object System.Drawing.Rectangle($dx,$dy,$dw,$dh)))
  $g.Dispose()
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host "  wrote $path ($size)"
}

# --- 2. App icons + maskable manifest icons (dark brand set) ---
Save-Icon 180 (Join-Path $appDir "apple-icon.png") 0.18
Save-Icon 192 (Join-Path $pubDir "icon-192.png")  0.22   # maskable safe zone
Save-Icon 512 (Join-Path $pubDir "icon-512.png")  0.22   # maskable safe zone

# --- 3. favicon.ico (proper multi-size PNG-in-ICO) from the user-supplied artwork ---
$favSrc = [System.Drawing.Image]::FromFile($srcFavicon)
function Get-PngBytes($size) {
  $bmp = New-Object System.Drawing.Bitmap($size,$size)
  $g = New-HQGraphics $bmp
  # source artwork is square and includes its own background — render it edge to edge
  $g.DrawImage($favSrc, (New-Object System.Drawing.Rectangle(0,0,$size,$size)))
  $g.Dispose()
  $ms=New-Object System.IO.MemoryStream
  $bmp.Save($ms,[System.Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
  return ,$ms.ToArray()
}
$sizes = @(16,32,48,64,128,256)
$pngs = @{}
foreach ($s in $sizes) { $pngs[$s] = Get-PngBytes $s }
$icoPath = Join-Path $appDir "favicon.ico"
$fs = [System.IO.File]::Create($icoPath)
$bw2 = New-Object System.IO.BinaryWriter($fs)
$bw2.Write([UInt16]0); $bw2.Write([UInt16]1); $bw2.Write([UInt16]$sizes.Count)  # ICONDIR
$offset = 6 + 16*$sizes.Count
foreach ($s in $sizes) {
  $len = $pngs[$s].Length
  $bw2.Write([Byte]($(if($s -ge 256){0}else{$s})))   # width
  $bw2.Write([Byte]($(if($s -ge 256){0}else{$s})))   # height
  $bw2.Write([Byte]0); $bw2.Write([Byte]0)           # colors, reserved
  $bw2.Write([UInt16]1); $bw2.Write([UInt16]32)      # planes, bpp
  $bw2.Write([UInt32]$len); $bw2.Write([UInt32]$offset)
  $offset += $len
}
foreach ($s in $sizes) { $bw2.Write($pngs[$s]) }
$bw2.Flush(); $bw2.Close(); $fs.Close()
$favSrc.Dispose()
Write-Host "  wrote $icoPath"

# --- 4. Social share image (Open Graph / Twitter) 1200x630 ---
function Save-OG($path) {
  $W=1200; $H=630
  $bmp=New-Object System.Drawing.Bitmap($W,$H)
  $g=New-HQGraphics $bmp
  $rect=New-Object System.Drawing.Rectangle(0,0,$W,$H)
  $brush=New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect,
    [System.Drawing.Color]::FromArgb(255,9,16,33), [System.Drawing.Color]::FromArgb(255,3,6,14), 120.0)
  $g.FillRectangle($brush,$rect); $brush.Dispose()
  # cyan glow left, violet glow right
  function Add-Glow($cxf,$cyf,$cr,$cg,$cb) {
    $cx=[int]($W*$cxf); $cy=[int]($H*$cyf); $r=360
    $gp=New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp.AddEllipse((New-Object System.Drawing.Rectangle(($cx-$r),($cy-$r),(2*$r),(2*$r))))
    $pg=New-Object System.Drawing.Drawing2D.PathGradientBrush($gp)
    $pg.CenterColor=[System.Drawing.Color]::FromArgb(60,$cr,$cg,$cb)
    $pg.SurroundColors=@([System.Drawing.Color]::FromArgb(0,$cr,$cg,$cb))
    $g.FillPath($pg,$gp); $pg.Dispose(); $gp.Dispose()
  }
  Add-Glow 0.10 0.30 18 231 255
  Add-Glow 0.85 0.62 140 92 246
  # full lockup logo centered-upper
  $logo=[System.Drawing.Image]::FromFile($srcLockup)
  $lh=[int]($H*0.46); $lscale=$lh/$logo.Height; $lw=[int]($logo.Width*$lscale)
  $g.DrawImage($logo,(New-Object System.Drawing.Rectangle([int](($W-$lw)/2),[int]($H*0.16),$lw,$lh)))
  $logo.Dispose()
  # tagline
  $font=New-Object System.Drawing.Font("Segoe UI",30,[System.Drawing.FontStyle]::Bold)
  $sf=New-Object System.Drawing.StringFormat; $sf.Alignment=[System.Drawing.StringAlignment]::Center
  $tb=New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(235,150,225,255))
  $bullet=[char]0x2022
  $g.DrawString("BUILD   $bullet   AUTOMATE   $bullet   SCALE", $font, $tb,
    (New-Object System.Drawing.RectangleF(0,[single]($H*0.74),[single]$W,80)), $sf)
  $font.Dispose(); $tb.Dispose()
  $g.Dispose()
  $bmp.Save($path,[System.Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
  Write-Host "  wrote $path (1200x630)"
}
Save-OG (Join-Path $appDir "opengraph-image.png")
Copy-Item (Join-Path $appDir "opengraph-image.png") (Join-Path $appDir "twitter-image.png") -Force
Copy-Item (Join-Path $appDir "opengraph-image.png") (Join-Path $pubDir "og.png") -Force
Write-Host "  wrote app/twitter-image.png + public/og.png (1200x630)"

$mark.Dispose()
Write-Host "DONE"
