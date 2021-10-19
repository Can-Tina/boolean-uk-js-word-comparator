const wordOne = prompt("Give me a word");
const wordTwo = prompt("Give me another word");
let output = " "

if (wordOne.length > wordTwo.length) {
    output = "is longer than"
}

else if (wordOne.length == wordTwo.length) {
    output = "is equal to"
}

else {
    output = "is shorter than"
}

document.getElementById("length").innerHTML = `
<h1>${wordOne} ${output} ${wordTwo}</h1>
`;