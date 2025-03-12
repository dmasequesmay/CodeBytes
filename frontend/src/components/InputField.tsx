export default function InputField({fieldName, iconSrc,idName}:{
   fieldName:string,
   iconSrc:string,
   idName:string
}){
    return <div className="flex flex-col">
        <div>
            <p>{/* FieldName Goes here */}</p>
        </div>
        <div className="grid grid-cols-8 gap-2">
            <div>
                {/* Icon img tag goes here */}
            </div>
            <div>
                <input type="text" id=""></input>
            </div>
        </div>
    </div>;
}

/*
basic reqs:
    - display FieldName in the first div
    - display the icon + input field next to each other
        the second div is made up of a 8-column span,
        have the icon take up only the first column
        (hint: use col-span-N (N = # of columns))
        - add idName to the id attribuet of the input field
*/