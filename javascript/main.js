// note-  anything that we see in javascript is an object
// its an interpredted language
// it execute line  by line 

console.log('hello from mainjs')
// console.lg('hii')

// print values in console  :- 
console.log('this is a log!')
console.warn('this is a warning!')
console.error('this is a error!')

// data types :-
// 1. primitive data types (PDTs) - 
// a. number
variable_one = 10000000 // it can be nagative, float , decimal, double 
console.log(variable_one)
console.log(typeof variable_one)

// b. string - ""  , '' , ``(B)
variable_one = 'welcome to js'
console.log(variable_one)
console.log(typeof variable_one)

// c. boolean data types - 
variable_two = false
console.log(variable_two)

// d. null
variable_three = null
console.log(variable_three)
console.log(typeof variable_three) //object - it is a mistake

//e. undefined
variable_four = undefined
console.log(variable_four)
console.log(typeof variable_four)

// console.log( variable_five) (error)

// *****Conditional statements :- *********

// ES5  
demo = 10
if (demo >= 0) {
    console.log(demo + ' is a +ve number')

} else {
    console.log(demo + 'is a -ve number')
}

// ES6 Syntax 
// condition ? TRUE : FALSE
// Limitiation :- TRUE / FALSE statements one-liner statements
demo2 = -10
demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`)