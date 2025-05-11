"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { signInWithGoogle, signIn } from '../../services/auth'  // Updated to use services/auth

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errorMessage, setErrorMessage] = useState<string | null>(null);  // State for login errors

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  // Handle form submission for email/password login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData.email, formData.password);
      console.log("Login successful");
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  }

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log("Google login successful");
      router.push("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
      setErrorMessage("Google login failed. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="min-h-screen md:w-1/2 flex items-center justify-center bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <img src="/assets/Frame 4.png" alt="Login" className="w-[100px] h-[100px] object-cover opacity-50 -mb-20" />
        <div className="max-w-md text-center">
          <h1 className="text-black">Welcome Back</h1>
          <p className="text-black">Sign in to continue your journey</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-[50px]">Login</h2>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
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
              <Button type="submit" className="w-full text-violet-600 hover:text-violet-500">
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
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
              <GoogleLogin
                onSuccess={handleGoogleLogin}  // Call the Google login handler
                onError={() => setErrorMessage("Google login failed. Please try again.")}
                useOneTap={true}
                theme="outline"
                size="medium"
                shape="rectangular"
                logo_alignment="left"
                width="300"
                text="signin_with"
                containerProps={{ className: 'w-full flex items-center justify-center gap-2' }}
              />
            </GoogleOAuthProvider>
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
