"use client"

import type React from "react"

import { use, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { signInWithGoogle, signIn, signUp } from '../../services/auth';
import { signInWithGoogle, signIn, signUp } from '../../mockAuth';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const router = useRouter();
  const steps = [
    { id: 1, label: "Sign up your account" },
    { id: 2, label: "Set up your workspace" },
    { id: 3, label: "Create your profile" }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: extract variables name and value from e.target
    // Hint: look into destructuring
    const { name, value } = e.target;
    // TODO: implement a function to update the targeted form data
    // with the extracted name and value
    // HINT: Look into the spread operator 
    setFormData(prevFormData => ({...prevFormData, [name]: value, }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // We'll be integrating firebase here later, but for now, go straight to the survey
    signUp(formData.email, formData.password);
    axios.post('http://localhost:5000/add-user', null, {
      params: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        bio: "Default",
        role: "User",
        dateJoined: new Date().toISOString()
      }
    });
    router.push(`/signup/survey?firstName=${formData.firstName}`);
  }
  
  const handleGoogleSignIn = async (credentialResponse: CredentialResponse) => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in failed:', error);
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="min-h-screen md:w-1/2 flex items-center justify-center bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <img src="/assets/Frame 14.png" alt="Login" className="w-[100px] h-[100px] object-cover opacity-50 -mb-20" />
        <div className="max-w-md text-center">
            {/* TODO: Implement Styling for "Get Started" */}
            <h1 className="text-black text-2xl font-bold mb-1">CodeBytes</h1>
            <h2 className="text-black text-xl font-semibold mb-2">Get Started with Us</h2>
            <p className="text-black/80 text-sm mb-8">Complete these steps to register your account</p>
            {/* TODO: Implement Styling for the three steps (refer to Midfis) */}
            <div className="space-y-4">
            {steps.map((step) => (
              <button
                key={step.id}
                className="flex items-center w-full bg-white rounded-full py-3 px-4 text-gray-800 font-medium transition-all hover:shadow-lg"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 bg-purple-600">
                  <span className="text-black text-xs">{step.id}</span>
                </div>
                {step.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-[50px]">Sign Up</h2>
            {/* TODO: Implement Styling here to reflect midfis */}
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
          <form onSubmit={handleSubmit} className="space-y-6 m-3">
            <div className="m-3">
              <div className="grid m-2 gap-4 space-y-2 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="m-2 space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="m-2 space-y-2">
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
              />
            </div>
            <div className="m-5 text-center">
              <Button variant="outline" type="submit" className="w-full flex items-center justify-center gap-2 text-violet-600 hover:text-violet-500">
                Create Account
              </Button>
            </div>
            </div>
          </form>
        <div className='flex items-center m-2'>
          <div className='border-t border-white flex-grow'></div>
          <div className='flex justify-center w-auto mx-auto'>or Sign Up with</div>
          <div className='border-t border-white flex-grow'></div>
        </div>
        {/* WARNING: Do NOT modify the css here; these control the Google/Github login options! */}
        {/* TODO: Wrap the existing google login button within the GoogleLogin component.
        ensure that it is hooked into the signInWithGoogle function (i.e. on success, communicate the login to the firebase auth)
        hint: look into the render attribute of GoogleLogin!
         */}
        <div className="flex gap-4">
          <div className="w-full">
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
              <GoogleLogin
                onSuccess={handleGoogleSignIn}
                onError={() => {
                  console.error('Login Failed');
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
            </GoogleOAuthProvider>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button">
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-violet-600 hover:text-violet-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}
