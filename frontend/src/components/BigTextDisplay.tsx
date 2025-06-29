export default function BigTextDisplay({text}:{
    text:string
}){
    return <div>
        <h1>
            {/* grabs the text and puts it in the header */}
            {text}
        </h1>
    </div>;
}

/*
basic reqs:
    - dynamic display of the props.text property between
    the <h1></h1> tags
*/