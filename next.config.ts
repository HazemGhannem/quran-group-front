import type { NextConfig } from "next";

/** Sent on every response. Tightens the defaults without touching app code. */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework version.
  poweredByHeader: false,

  experimental: {
    // Inline CSS to skip the render-blocking stylesheet request.
    inlineCss: true,
  },

  // Courses hidden for now: /courses redirects home. Remove to restore.
  async redirects() {
    return [
      { source: "/courses", destination: "/", permanent: false },
      { source: "/courses/:path*", destination: "/", permanent: false },
    ];
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
