"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInForm() {
  return (
    <form className="mt-6 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-sm text-emerald-600 hover:underline dark:text-emerald-300"
            href="/auth/forgot-password"
          >
            Forgot password?
          </Link>
        </div>
        <Input id="password" type="password" placeholder="••••••••" required />
      </div>

      <Button className="w-full bg-emerald-400 text-black hover:bg-emerald-300">
        Sign In
      </Button>

      <p className="text-center text-sm text-muted-foreground dark:text-white/70">
        Don’t have an account?{" "}
        <Link
          className="text-amber-500 hover:underline dark:text-amber-300"
          href="/auth/signup"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
