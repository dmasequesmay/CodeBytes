export default function StreakDisplayer({ numDays }: { numDays: number }) {
    return (
        <div className="grid grid-cols-5 w-fit mx-auto p-4 border border-white text-white">
            <div className="col-span-2 flex items-center justify-center border-r-2">
                <img src='' alt='flame' className="w-32 h-32" />
            </div>
            <div className="col-span-3 flex flex-col justify-center items-center pl-6">
                <p className="text-4xl">{numDays}</p>
                <p className="text-4xl">Day Streak!</p>
            </div>
        </div>
    );
}

/*
basic reqs:
    (see LoFi User Profile on Figma)
    - 40-60% split between Fire Icon & "N day streak" display
        (don't worry about the image for now)
        - hint: to attain the 40-60 split between the two
        nested divs, look into the col-span classes
            in https://tailwindcss.com/docs/grid-column
        
    
    https://tailwindcss.com/docs/grid-template-columns
    https://v2.tailwindcss.com/docs/divide-style
*/