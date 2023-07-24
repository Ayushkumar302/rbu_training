//*********ES 5 Function*********

// Syntax 
// function name(params) {
// function body 
// } 

//  let FunctionName =  function name(params) {
    
// }



// ES 5 
const add = function(a,b)
{
    return  a + b ;
}

console.log( add(20,30));

// ES 6 -   Array - [] ,  objects - {} ,  Array of Object - [{} , {} , {}]

const greetings = (Name , LastName) => {
    console.log(100/0); // infinity 
    console.log('string' + 100);            // string100
    console.log('string' - 100);            //Nan
    console.log('string' / 100);            //Nan
    console.log('string' * 100);            //Nan
    console.log('string' - "string2");      //Nan
    console.log( 100 + true);               //Nan
    console.log('string' + true);           //Nan

    return `hello ${Name} ${LastName}`
}
console.log(greetings('ayush' , 'kumar'));

