export default function StreakDisplayer({numDays}:{
    numDays:number
}){
    return(
        <div className='flex justify-center w-200 mx-auto space-x-50 p-4 border border-white'>
          <div className='w-100 h-120 flex border-r-2 m-0'><img src='' alt='flame' width={320} height={320} /></div>
          <div className='pl-4 m-16 text-white flex flex-col justify-center'>
            <p className='flex justify-center text-4xl'>{numDays}</p>
            <p className='flex justify-center text-4xl'>Day Streak!</p>
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