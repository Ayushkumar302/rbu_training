// *******DOM*********

// DOM -> Document  Object Model
// console.log(document.all)
// const myLi = document.all[19]
// console.log(myLi)

// console.dir(document)
// console.log(document.URL)
// console.log(document.all)
// ************IDENTIFIER METHODS :-***********

// 1. getElementById()
// const myHeader = document.getElementById('header-title')
// console.log(myHeader)

// const myHeading = document.all[4];
// document.all[4].textContent = "Welcome to DOM"
// console.log(myHeading)

// // 2. getElementsByClassName
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// // 3. getElementsByTagName
// const myForms = document.getElementsByTagName('form')
// console.log(myForms)

// 4. querySelector(id/className/tagName)
// const myHeader = document.querySelector('form')
// console.log(myHeader)

// console.log(document.querySelector('.list-group-item'))

// // 5. querySelectorAll
// console.log(document.querySelectorAll('.list-group-item'))

// // DOM MANIPULATION METHODS :-
// const heading = document.querySelector('#header-title')

// 1. textContent -> text in b/w of the <> and </> of the elt
// heading.textContent = 'Welcome to DOM';

// 2. innerHTML -> 
// document.querySelector('#my-div').innerHTML = "<p>Hello...</p>"

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element

// CSS with JavaScript (.style)
// const secondHeading = document.querySelector('#second-heading')

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



// const listItems = document.getElementsByClassName('list-group-item')
// for (let i = 0; i < listItems.length; i++) {
//     // odd items
//     if (i % 2 == 0) {
//         listItems[i].style.backgroundColor = 'lightblue'
//     }

// }

// **************** EVENTS  in dom************** :-

// element.addEventListner( eventName, () => {} )
// element.addEventListner( eventName, fuctionName )

// const mybtn = document.getElementById('btn')

// //ES 5 syntax
// mybtn.addEventListener('click', () => {

//     console.log('button clicked');

// })
// // event dblclick - double click
// mybtn.addEventListener('dblclick', () => {

//     console.log('button clicked');

// })


// document.getElementById('item-one').addEventListener('click' , () => 
// {
//     console.log('item pone was clicked');
// }
// )

// // event  submit button  // it reloads the page again and again by clicking
// document.getElementById('submitBtn').addEventListener('click' , () =>  
// {
//     console.log('submit button clicked');
// })

// event parameter - ****meta data of an event**
// document.getElementById('submitBtn').addEventListener('click' , (params) =>    //parameter can be of any name
// {
//     params.preventDefault()
//     console.log('submit button clicked'); 
// })


// ****mouse  event****
// mouseenter
// document.getElementById('text-input').addEventListener('mouseenter' , ()=>
// {

//     console.log('cursor entered  the element');
// }


//)
// mouseleave
// document.getElementById('text-input').addEventListener('mouseenter' , ()=>
// {

//     console.log('cursor  left the element');
// }


// )

// *****focus event*****
// document.getElementById('text-input').addEventListener('focus' , ()=>
// {

//     console.log('element was focused!');
// }


//)
//********keyborad events******
// copy event
// document.getElementById('text-input').addEventListener('copy'  , ()=>

// {
//     console.log('data was copied');
// })

// // cut event
// document.getElementById('text-input').addEventListener('cut'  , ()=>

// {
//     console.log('data was cut');
// })

// // paste event
// document.getElementById('text-input').addEventListener('paste'  , ()=>

// {
//     console.log('data was pasted');
// })


// keydown event
// document.getElementById('text-input').addEventListener('keydown'  , ()=>

// {
//     console.log('key is down');
// })

// //keyup event
// document.getElementById('text-input').addEventListener('keyup'  , ()=>

// {
//     console.log('key is up');
// })

//keyuppress event
// document.getElementById('text-input').addEventListener('keypress'  , ()=>

// {
//     console.log('key is pressed');
// })



// for runtime 
// document.getElementById('text-input').addEventListener('keypress'  , (e)=>

// {
//     // console.log(e);
//     console.log(e.target.value);

// })

// alternavtive  -  for if user add any detail to text box and give its value after user finishes entering data
// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(document.getElementById('text-input').value)


// })


// FUN ACTIVITY 
// document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
//     console.log(e);
//     document.querySelector('#container-box').style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`
// })
// document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
//     document.querySelector('#container-box').style.backgroundColor = `rgb(100, ${e.offsetX}, ${e.offsetY})`   
// })

///*********DOM Relationships / DOM TRAVELSALS *********

//1. parentEelement
// console.log(document.getElementById('items').parentElement);

//2. childern 
// const items = document.getElementById('items').children
// for (let i = 0; i < items.length; i++) {
//    if (i%2==0) {
//     items[i].style.backgroundColor='lightblue'
//    }

// }

//3. siblings - previous sibling , Nextsibling
//siblings
// console.log(document.getElementById('head').previousElementSibling);

// nextsibling
// console.log(document.getElementById('head').nextElementSibling);

// creating html using js
// const myDiv = document.createElement('div')
// myDiv.textContent = 'Demo Text'
// myDiv.setAttribute('id', 'my-div')
// myDiv.setAttribute('class', 'my-div-class')

// // ADding element to the HTML - appendChild()
// document.getElementById('dummy-div').appendChild(myDiv)

// console.log(myDiv)


// Item Lister Application
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()
    const text = document.getElementById('text-input').value
    const newLi = document.createElement('li')
    newLi.textContent = text
    newLi.setAttribute('class', 'list-group-item')
    document.getElementById('items').appendChild(newLi)
})


