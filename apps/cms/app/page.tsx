import Link from "next/link";

export default function CmsIndexPage() {
  return (
    <main
      style={{
        background: "#050506",
        color: "#f7f7f2",
        fontFamily: "Arial, Helvetica, sans-serif",
        minHeight: "100vh",
        padding: 48,
      }}
    >
      <p style={{ color: "#d50032", fontWeight: 800 }}>GWM Admin</p>
      <h1 style={{ fontSize: 48, lineHeight: 1, margin: "12px 0" }}>CMS coming soon</h1>
      <p style={{ color: "#a7abb2", maxWidth: 680, lineHeight: 1.7 }}>
        The MVP uses static repository content for the public website. CMS, editorial
        workflows and AI-assisted content operations are deferred, while API-backed
        customer journeys continue in the product roadmap.
      </p>
      <Link
        href="/"
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
        View status
      </Link>
    </main>
  );
}
