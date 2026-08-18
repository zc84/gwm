import Link from "next/link";

export default function CmsIndexPage() {
  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif", padding: 48 }}>
      <p style={{ color: "#d50032", fontWeight: 800, letterSpacing: 2 }}>GWM CMS</p>
      <h1 style={{ color: "#08152d", fontSize: 48, margin: "12px 0" }}>
        Content operations foundation
      </h1>
      <p style={{ color: "#4b5563", maxWidth: 640, lineHeight: 1.7 }}>
        Payload CMS is reserved for admin workflows, localized content, media and AI
        configuration. Epic 1 keeps the schema intentionally small.
      </p>
      <Link
        href="/admin"
        style={{
          display: "inline-block",
          marginTop: 28,
          background: "#d50032",
          color: "#fff",
          fontWeight: 800,
          padding: "12px 18px",
          textDecoration: "none",
        }}
      >
        Open admin
      </Link>
    </main>
  );
}
