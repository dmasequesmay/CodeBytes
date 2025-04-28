"use client"

import { useState } from "react";
import ContinueButton from "@/components/ContinueButton"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
// For the survey items, use the button.tsx component found in the ui/ directory of components
// Use the various TextField components as needed.


export default function Survey() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const displays: React.ReactNode[] = [
      (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-60 h-60 bg-gray-200 rounded-full" />
            <h1 className="text-2xl font-semibold">Welcome {firstName}!</h1>
            <p className="text-lg">My name is BitBit.</p>
          </div>
        ),
        (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-60 h-60 bg-gray-200 rounded-full" />
            <h1 className="text-xl font-semibold">Let’s begin your journey!</h1>
            <p className="text-md">But first, a few questions~</p>
          </div>
        ),
        (
          <div className="space-y-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-1/3" />
            </div>
            <h2 className="text-lg font-semibold">How would you describe your coding experience?</h2>
            <div className="space-y-2">
              <Button variant="outline">Just starting</Button>
              <Button variant="outline">Some experience</Button>
              <Button variant="outline">Pro/Professional</Button>
            </div>
          </div>
        ),
        (
          <div className="space-y-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-2/3" />
            </div>
            <h2 className="text-lg font-semibold">What languages do you want to learn or use?</h2>
            <div className="space-y-2">
              <Button variant="outline">Python</Button>
              <Button variant="outline">JavaScript</Button>
              <Button variant="outline">C++</Button>
              <Button variant="outline">Java</Button>
              <Button variant="outline">HTML/CSS</Button>
            </div>
          </div>
        ),
        (
          <div className="space-y-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-full" />
            </div>
            <h2 className="text-lg font-semibold">How much time do you want to commit to learning?</h2>
            <div className="space-y-2">
              <Button variant="outline">Some minutes daily</Button>
              <Button variant="outline">Several hours</Button>
              <Button variant="outline">All day every day</Button>
              <Button variant="outline">Three times a week</Button>
            </div>
          </div>
        ),
        (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-60 h-60 bg-gray-200 rounded-full" />
            <h1 className="text-2xl font-semibold">You’re all set!</h1>
          </div>
        ),
  
  ]
    const [displayIndex, updateDisplay] = useState(0);
    const router = useRouter();

    const handleContinue = () => {
        if (displayIndex === displays.length - 1) {
          // after the initial survey is done, redirect to dashboard
            router.push('/dashboard');
        } else {
            updateDisplay(i => Math.min(i + 1, displays.length - 1));
        }
    };

    return (
        <div className="flex h-screen flex-col container">
            {/* TODO: Position this div to take up the entire height and about 60% width of the screen
            (use tailwind stylings) */}
            <div className="flex-1 w-3/5 flex items-center justify-center">
                {/* TODO: Dynamically display the ith item of the displays array (i.e. current val of DisplayIndex) */}
                {displays[displayIndex]}
            </div>
            {/* TODO: This is where the <Continue /> component will go.
             Use tailwind classes to position this at the bottom right of the screen 
             Also pass in a function to update the displayIndex using the updateDisplay hook*/}
            <div className=" p-4 bg-gray-100 flex justify-end">
                <ContinueButton 
                    onClickEvent={handleContinue}
                />
            </div>
        </div>
    );
}
