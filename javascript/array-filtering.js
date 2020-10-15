let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let filtered = numbers.filter((numbers) => {return numbers % 2 === 0})


function funcao(num) {
    return num % 2 === 0
}

let filtered = numbers.filter(funcao(numbers))
console.log(filtered)