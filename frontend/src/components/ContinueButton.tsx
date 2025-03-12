export default function ContinueButton({imgSrc}:{
    imgSrc?:string
}){
    return <button className="">
        <span>CONTINUE</span>
        <img src="">
        {/* Make sure to include imgSrc within this element! */}
        </img>
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