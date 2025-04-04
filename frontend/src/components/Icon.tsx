export default function Icon({image}:{
    image:string;
}){ 
    return 
        <img
            className="h-[200px] w-[200px] rounded-full border-4 border-gray-300"
            src={image}
            alt="User Profile"
        ></img>
    // return <img className="" src=""></img>;
}

/*
REFER TO:
Lo-FI: User Profile
Tailwind CSS docs (useful!)

- basic reqs:
    circular border
    height (200px)
    width (200px)
    useful links:
        https://v3.tailwindcss.com/docs/border-radius
        https://v3.tailwindcss.com/docs/height
*/