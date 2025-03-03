export default function Badge({image, name, desc}:{
    image: string,
    name: string,
    desc: string
}){
    return <div className="flex flex-col">
        <div>
            <img src=""></img>
        </div>
        <div>
            {/* Name Here */}
        </div>
        <div>
            {/* Description Here */}
        </div>
    </div>;
}

/*
basic reqs:
   - image: link to source image for badge
        circular border
        height (150px)
        width (150px)
   - name: name of badge
   - desc: a description of the badge
*/