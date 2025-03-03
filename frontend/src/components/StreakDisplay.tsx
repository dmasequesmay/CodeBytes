export default function StreakDisplayer({numDays}:{
    numDays:number
}){
    return <div className="grid grid-cols-3">
        <div className="">
            <img src=""></img>
        </div>
        <div></div>
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