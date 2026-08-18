import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@gwm/shared"],
};

export default withPayload(nextConfig);
