export function GET() {
  return Response.json({
    ok: true,
    service: "gwm-cms",
    timestamp: new Date().toISOString(),
  });
}
