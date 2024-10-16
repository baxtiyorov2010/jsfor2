let arr = [
    `non`, `gul`, `olcha`, `mashina`, `olma`
]
let nbor = [

]
let nyoq = [

]
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(`n`)) {
        nbor.push(arr[i])
    }else{
        nyoq.push(arr[i])
    }
}

console.log(nbor);
console.log(nyoq);