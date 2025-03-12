export default function DailyStreak({streak}:{
    streak:number
}){
    return <p>

    </p>;
}

/*
basic reqs:
    Display the sentence
        "X-day streak, "
        followed by:
            if X < 5: " you're getting there!"
            else: " keep it up!"
        Where "X" is displayed in a much bigger font
        than the rest of the sentence.
    hint: to handle the conditional second half of the sentence,
    use the JS ternary operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    
    hint: to make one part of the text within the <p> </p> tags larger,
    use <span></span> & the classes defined here: https://tailwindcss.com/docs/font-size

    Remember to use className and not class for React components.
    */