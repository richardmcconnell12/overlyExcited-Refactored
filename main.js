let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let character = "!"
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
addExcitement = (theWordArray, character) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if (i % 3 === 0 && i !== 0) {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}${character}`
        } else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`
        }
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
    return theWordArray;
}

// Invoke the function and pass in the array
addExcitement(sentence, character)