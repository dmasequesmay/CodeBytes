export default function StreakDisplayer({numDays}:{
    numDays:number
}){
    return <div className="grid grid-cols-2 items-center border-4 border-white">
        <img src=""></img>
        <div className = "border-l-4 border-white">
            <p>{numDays}</p>
            <p>Day Streak!</p>
        </div>
    </div>;
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