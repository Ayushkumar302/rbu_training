// *******DOM*********

// DOM -> Document  Object Model
// console.log(document.all)
// const myLi = document.all[19]
// console.log(myLi)

console.dir(document)
console.log(document.URL)
console.log(document.all)
// IDENTIFIER METHODS :-
// 1. getElementById()
// const myHeader = document.getElementById('header-title')
// console.log(myHeader)

const myHeading = document.all[4];
document.all[4].textContent = "Welcome to DOM"
console.log(myHeading)
// // 2. getElementsByClassName
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// // 3. getElementsByTagName
// const myForms = document.getElementsByTagName('form')
// console.log(myForms)

// 4. querySelector(id/className/tagName)
// const myHeader = document.querySelector('form')
// console.log(myHeader)

console.log(document.querySelector('.list-group-item'))

// 5. querySelectorAll
console.log(document.querySelectorAll('.list-group-item'))

// DOM MANIPULATION METHODS :-
const heading = document.querySelector('#header-title')

// 1. textContent -> text in b/w of the <> and </> of the elt
// heading.textContent = 'Welcome to DOM';

// 2. innerHTML -> 
// document.querySelector('#my-div').innerHTML = "<p>Hello...</p>"

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element

// CSS with JavaScript (.style)
const secondHeading = document.querySelector('#second-heading')

// JS Function - setTimeOut()
// Syntax -> setTimeOut( callfn, timeoutDelay (in ms) )
// setTimeout( () => {
//     secondHeading.style.backgroundColor = 'purple'
//     secondHeading.style.color = 'white'
//     secondHeading.style.padding = '10px'
//     secondHeading.style.textAlign = 'center'
// }, 3000)

// setTimeout(() => {
//     heading.innerHTML = "<h2>Welocme to DOM</h2>"
// }, 5000)

// document.getElementById('btn').textContent='press me'



const listItems = document.getElementsByClassName('list-group-item')
for (let i = 0; i < listItems.length; i++) {
    // odd items
    if (i % 2 == 0) {
        listItems[i].style.backgroundColor = 'lightblue'
    }

}

// EVENTS  in dom :-
const mybtn = document.getElementById('btn')

//ES 5 syntax
mybtn.addEventListener('click', () => {

    console.log('button clicked');

})
// event dblclick - double click
mybtn.addEventListener('dblclick', () => {

    console.log('button clicked');

})


document.getElementById('item-one').addEventListener('click' , () => 
{
    console.log('item pone was clicked');
}
)

// event  submit button  // it reloads the page again and again by clicking
document.getElementById('submitBtn').addEventListener('click' , () =>  
{
    console.log('submit button clicked');
})

// keyborad events
