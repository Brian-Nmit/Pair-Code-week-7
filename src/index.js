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

console.log(removeStrings(array))
