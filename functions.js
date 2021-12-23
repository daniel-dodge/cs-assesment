const addToZero =(nums) =>{
    for (let i = 0; i < nums.length; i++){
        for (let k = 0; k < nums.length; k++){
            if(nums[i] + nums[k] === 0 && i !== k){
                return true
            }

        }
    }
    return false
}
//runtime = O(n^2)
// space complexity = O(n)
// console.log(addToZero([1, 2, 3]))

const hasUniqueChars = (string) => {
    let arr = []
    let strArr = [...string.toLowerCase()]
    console.log(strArr)
     for (let i = 0; i < strArr.length; i++){
         if(arr.includes(strArr[i])){
             return false
             
        } else {
            arr.push(strArr[i])
         }
     }
     return true
}
// runtime = O(n)
// space complexity = O(n)
// console.log(hasUniqueChars("Moonday"))

const isPangram = (string) => {
let arr = []
let letters = string.toLowerCase().replace(/([^a-z])+/g,'')
for (let i = 0; i < letters.length; i++){
    if (!arr.includes(letters[i])){
        arr.push(letters[i])
    }
}
return arr.length === 26 ? true : false
}
// runtime = O(n)
// space complexity = O(n)
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

const findLongestWord = (arr) => {
    let longestCount = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longestCount){
            longestCount = arr[i].length
        }
    }
    return longestCount
}
// runtime = O(n)
// space complexity = O(n)
// console.log(findLongestWord(["hi", "hellodanfkdaj", "dklja", "fjadhfjdsfhdsuifndsj"]));