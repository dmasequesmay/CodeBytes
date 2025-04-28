export default function MediumTextDisplay({text}:{
    text:string
}){
    return <div>
        <h2>
            {text}
        </h2>
    </div>;
}

/*
basic reqs:
    - dynamic display of the props.text property between
    the <h2></h2> tags
*/