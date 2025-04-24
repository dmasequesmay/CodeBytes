"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GoogleLogin } from 'react-google-login';
import { signInWithGoogle } from '../../services/auth';
export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: extract variables name and value from e.target
    // Hint: look into destructuring
    const { name, value } = null;
    // TODO: implement a function to update the targeted form data
    // with the extracted name and value
    // HINT: Look into the spread operator 
    setFormData()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center bg-white p-8">
        <div className="max-w-md text-center">
            {/* TODO: Implement Styling for "Get Started" */}
          <h1 className="">Get Started with Us</h1>
          <p className="">Complete these steps to register your account</p>
            {/* TODO: Implement Styling for the three steps (refer to Midfis) */}
          <div className="space-y-4 text-left">
            <div className="">
              <div className="">
                1
              </div>
              <span>Sign up your account</span>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="">
                2
              </div>
              <span>Set up your workspace</span>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="">
                3
              </div>
              <span>Create your profile</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="">Sign up Account</h2>
            {/* TODO: Implement Styling here to reflect midfis */}
            <p className="">Enter your personal data to create your account</p>
          </div>
        {/* WARNING: Do NOT modify the css here; these control the Google/Github login options! */}
        {/* TODO: Wrap the existing google login button within the GoogleLogin component.
        ensure that it is hooked into the signInWithGoogle function (i.e. on success, communicate the login to the firebase auth)
        hint: look into the render attribute of GoogleLogin!
         */}
          <div className="flex gap-4">
            <GoogleLogin
              clientId=""
              cookiePolicy={"single_host_origin"}
              onSuccess={() => { signInWithGoogle() } }
              onFailure={err => { console.error("Google login failed", err) }}
              render={() => (
                <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button">
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path
                      fill="#4285F4"
                      d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                    />
                  </g>
                </svg>
                Google
              </Button>
              )}
            />
            <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button">
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* TODO: 
            Add functionality + styling to the below form
            The form should have 4 fields:
            - First Name
            - Last Name
            - Email
            - Password
            each field's value should be linked to formData
            ensure that the correct event handler will handle storage of field data 
          */}  
          <form onSubmit={} className="space-y-6">
            <div className="">
              <div className="space-y-2">
                <label htmlFor="firstName" className="">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={}
                  onChange={}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={}
                  onChange={}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="">
                Email
              </label>
              <Input id="email" name="email" type="email" value={} onChange={} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={}
                onChange={}
                required
              />
            </div>

            <Button type="submit" className="">
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-violet-600 hover:text-violet-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
