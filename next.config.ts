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
    // Tailwind is atomic, so the stylesheet is small and highly cacheable with
    // the HTML. Inlining it removes the render-blocking CSS round-trip that
    // Lighthouse flagged as the head of the LCP dependency chain.
    inlineCss: true,
  },

  // Courses are hidden for now: any /courses URL (including course detail
  // pages) goes back to the home page. Temporary (307) so search engines
  // don't cache it; delete this block to bring the courses pages back.
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
