'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  })

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Login</h1>
        <p className="text-muted-foreground">Enter your email bellow to login to your account.</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <Label htmlFor="email" className="sr-only">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            className="w-full"
            {...form.register('email')}
          />
        </div>
        <Button type="submit" className="w-full">
          Send magic link
        </Button>
      </form>
    </div>
  )
}
