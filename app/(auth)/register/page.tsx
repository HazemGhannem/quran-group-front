import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create your account and start studying with The Quran Group.",
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create an account"
      subtitle="Start your journey of sacred knowledge today."
    >
      <form className="space-y-5">
        {/* Account type */}
        {/* <div className="space-y-2">
          <Label htmlFor="role">I want to sign up as</Label>
          <Select id="role" name="role" defaultValue="">
            <option value="" disabled>
              Select your role
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </Select>
        </div> */}
        {/* Full name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
          />
        </div>
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
        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+xx xxx xxx xxx"
            autoComplete="tel"
          />
        </div>
        {/* Gender */}
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select id="gender" name="gender" defaultValue="">
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>
        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
        </div>
        {/* Confirm password */}
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm password</Label>
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
          />
        </div>
        {/* Submit */}
        <Button
          type="submit"
          className="h-11 w-full bg-gradient-primary shadow-soft"
        >
          Create account
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
