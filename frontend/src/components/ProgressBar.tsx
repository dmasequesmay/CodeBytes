export default function ProgressBar({moduleName, subsectionsFinished, total}:{
    moduleName:string,
    subsectionsFinished:number,
    total:number
}){
    return <div className="flex flex-col">
        <div>
            <p>{/* moduleName Goes here */}</p>
        </div>
        <div className="grid grid-cols-8 gap-2">
            <div>
                {/* Progress Bar goes here */}
            </div>
            <div>
                {/* Percentage goes here
                    to compute:
                        (subsectionsFinished/Total)*100 
                */}
            </div>
        </div>
    </div>;
}

/*
basic reqs:
    - text field to indicate name of the corresponding
        module
    - a progress bar to display current length of completition
        of some lesson
            i.e. 6/10, our 6 out of 10 subsections completed
            - to implement this, use: https://18.react.dev/reference/react-dom/components/progress
    - space to display the percentage

*/