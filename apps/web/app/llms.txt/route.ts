export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return new Response(
    [
      "# GWM Middle East MVP",
      "",
      "Static bilingual website MVP for GWM Middle East.",
      "",
      `- Homepage: ${siteUrl}/en`,
      `- Vehicles: ${siteUrl}/en/vehicles`,
      `- Service: ${siteUrl}/en/service`,
      `- Countries: ${siteUrl}/en/countries`,
      `- Contact forms: ${siteUrl}/en/forms`,
      `- News: ${siteUrl}/en/news`,
      "",
      "Arabic equivalents are available under /ar.",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
