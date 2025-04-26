"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GoogleLogin } from '@react-oauth/google';
import { signIn, signInWithGoogle } from '../../services/auth';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signIn(formData.email, formData.password)
      .then(() => {
        // Handle successful login
        console.log("Login successful");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center bg-white p-8">
        <div className="max-w-md text-center">
          <h1 className="text-black">Welcome Back</h1>
          <p className="text-black">Sign in to continue your journey</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-[50px]">Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="text-center">
              <Button type="submit" className="w-full flex items-center justify-center gap-2 text-violet-600 hover:text-violet-500">
                Login
              </Button>
            </div>
          </form>

          <div className='flex items-center justify-center my-4'>
            <div className='border-t border-white flex-grow'></div>
            <div className='flex justify-center w-auto mx-auto px-3 text-gray-400'>or Sign in with</div>
            <div className='border-t border-white flex-grow'></div>
          </div>

          <div className="flex gap-4 justify-center">
            <GoogleLogin
              onSuccess={signInWithGoogle}
              onError={() => {
                console.error('Google login failed');
              }}
              useOneTap={true}
              theme="outline"
              size="medium"
              shape="rectangular"
              logo_alignment="left"
              width="300"
              text="signin_with"
              containerProps={{ className: 'w-full flex items-center justify-center gap-2' }}
            />
            <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button">
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </Button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-violet-600 hover:text-violet-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}