import { MouseEventHandler } from "react";

export default function ContinueButton({imgSrc, onClickEvent=()=>{}}:{
    imgSrc?:string,
    onClickEvent:MouseEventHandler<HTMLButtonElement>
}){
    return <button className="border-4 border-purple-500 bg-purple-500 rounded-full hover:bg-purple-600 hover:border-purple-600 transition-all duration-400 ease-in-out px-10 mx-auto py-0.5" onClick={onClickEvent}>
        <span className="text-white">CONTINUE</span>
        {imgSrc && <img src={imgSrc} />}
    </button>;
}

/*
basic reqs:
    (refer to Mid-Fi)
    - rounded border
        (refer to https://tailwindcss.com/docs/border-radius)
    - white background
        (refer to https://tailwindcss.com/docs/background-color)
    - bolded text
        (refer to https://tailwindcss.com/docs/font-weight)
    - (if applicable) display the icon next to "CONTINUE"
        within the button
        (refer to https://developer.mozilla.org/en-US/docs/Web/CSS/flex )
*/
