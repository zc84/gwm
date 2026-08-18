export function GET() {
  return Response.json({
    ok: true,
    service: "gwm-web",
    timestamp: new Date().toISOString(),
  });
}
