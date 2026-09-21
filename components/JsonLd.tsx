/**
 * Renders a JSON-LD structured-data block.
 *
 * `<` is escaped to its unicode form so a string in the payload can never
 * close the script tag — the sanitisation Next's JSON-LD guide calls for.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
