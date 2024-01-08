let numbers = [1,2,3,4,5]

function calculate(a,b,c,d){
    console.log(`Sum: `+(a+b+c+d));
}
// calculate(5,10,15,20)
// calculate.apply(null, numbers)
calculate(...numbers)







let arrOne =[0,1,2,3,4,5]
let arrTwo =[6,7,8,9,10]
arrOne =arrOne.concat(arrTwo)
console.log(arrOne)