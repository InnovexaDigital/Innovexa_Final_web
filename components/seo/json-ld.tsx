/**
 * Renders a JSON-LD <script> for structured data. Server component — no client JS.
 * Pass any schema.org object (or an @graph wrapper).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: it is data we control, and angle
      // brackets in any string field are escaped to avoid breaking out of the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}
