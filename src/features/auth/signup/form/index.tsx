"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpForm() {
  return (
    <form className="mt-6 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first">First name</Label>
          <Input id="first" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last">Last name</Label>
          <Input id="last" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Create a password" required />
      </div>

      <Button className="w-full bg-emerald-400 text-black hover:bg-emerald-300">
        Create Account
      </Button>

      <p className="text-center text-sm text-muted-foreground dark:text-white/70">
        Already have an account?{" "}
        <Link className="text-amber-500 hover:underline dark:text-amber-300" href="/auth/signin">
          Sign in
        </Link>
      </p>
    </form>
  );
}
