// task 1
let array = [1,2, "Jayden", 4,5, "Brian"]

function removeStrings(arr) {
    let new_arr = [] 
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            new_arr.push(arr[i])
        }     
    } 
    return new_arr 
}

// console.log(removeStrings(array))


// task 2
let array_of_arrays = [[1,2,3], [55,23,51], [100,4,9,45]]

function returnSubMax(arr) {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0]
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j]
            }
        }
        new_arr.push(max)
    }
    return new_arr
}

// console.log(returnSubMax(array_of_arrays))


// task 3

let length = 2; 
let width = 3;
    
function square(length, width){
    return length * width
}
console.log(square(length, width))
