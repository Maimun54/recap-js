let numbers = [1,2,3,4,5]

function calculate(a,b,c,d){
    console.log(`Sum: `+(a+b+c+d));
}
// calculate(5,10,15,20)
calculate.apply(null, numbers)