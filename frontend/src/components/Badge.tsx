export default function Badge({image, name, desc}:{
    image: string,
    name: string,
    desc: string
}){
    return <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl">
        <div>
            <img 
                src={image}
                alt={name}
                className="h-[150px] w-[150px] rounded-full border-4 border-gray-300"
                ></img>
        </div>
        <div className="mt-4 text-xl font-bold text-gray-800">
            {name}
        </div>
        <div className="mt-2 text-sm text-gray-600 text-center">
            {desc}
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
