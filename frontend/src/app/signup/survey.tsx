"use client"

import { useState } from "react";

// For the survey items, use the button.tsx component found in the ui/ directory of components
// Use the various TextField components as needed.
const displays: React.ReactNode[] = [
    (
        <div>
            {/* TODO: Implement the First welcome screen here */}
        </div>
    ),
    (
        <div>
            {/* TODO: Implement the second welcome screen here */}
        </div>
    ),
    (
        <div>
            {/* TODO: Implement the First question of the survey here (progress bar at 1/3 and so on) */}
        </div>
    ),
    (
        <div>
            {/* TODO: Implement the second question of the survey here */}
        </div>
    ),
    (
        <div>
            {/* TODO: Implement the Third question of the survey here */}
        </div>
    ),
    (
        <div>
            {/* TODO: Implement "All set!" screen here"*/}
        </div>
    ),

]

export default function Survey() {
    const [displayIndex, updateDisplay] = useState(0);
    return (
        <div className="flex h-screen flex-col container">
            {/* TODO: Position this div to take up the entire height and about 60% width of the screen
            (use tailwind stylings) */}
            <div className="flex-1">
                {/* TODO: Dynamically display the ith item of the displays array (i.e. current val of DisplayIndex) */}
                
            </div>
            {/* TODO: This is where the <Continue /> component will go.
             Use tailwind classes to position this at the bottom right of the screen 
             Also pass in a function to update the displayIndex using the updateDisplay hook*/}
            <div className=" p-4 bg-gray-100">
                {/* Add your content here */}
            </div>
        </div>
    );
}
