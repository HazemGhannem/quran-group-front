import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuthShell } from "@/components/auth/AuthShell";
import { UnderConstructionNotice } from "@/components/auth/UnderConstructionNotice";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";


export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to continue your studies with The Quran Group.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Continue your journey with the Quran."
    >
      <UnderConstructionNotice>
        <p>
          The sign in page is under construction and, inshallah, will be
          available mid October. For the time being, email{" "}
          <a
            href="mailto:info@thequrangroup.com"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            info@thequrangroup.com
          </a>
          .
        </p>
      </UnderConstructionNotice>
      <form className="space-y-5">
        <fieldset disabled className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-primary transition-colors hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled
            className="h-11 w-full bg-gradient-primary shadow-soft"
          >
            Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </fieldset>
      </form>

      {/* Register */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        New here?{" "}
        <Link
          href="/register"
          className="font-medium text-primary hover:underline"
        >
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
