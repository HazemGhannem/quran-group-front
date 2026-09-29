import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuthShell } from "@/components/auth/AuthShell";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Reset your password",
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset your password"
      subtitle="Enter your email and we'll send you a link to set a new one."
    >
      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <Button
          type="submit"
          className="h-11 w-full bg-gradient-primary shadow-soft"
          disabled
        >
          Send reset link
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Remembered it?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}
