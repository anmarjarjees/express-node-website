// alert("test API Demo");
// Front-End JavaScript Code File:

/*
Using DOM to get a reference to the two buttons based on their IDs
To access "EventListener()" method and attach "click" event to them:
*/
const getFetchBtn = document.getElementById("getFetch");
const getAsyncBtn = document.getElementById("getAsync");

/*
To recap:
AddEventListener required arguments:
- The event type
- Callback function (oe we can write an inline anonymous arrow function as well)
*/
getFetchBtn.addEventListener('click', getDataFetch);
getAsyncBtn.addEventListener('click', getDataAsync);


const apiURL = 'http://localhost:3000/api/colors';

/*
 * This function fetches data from the server using fetch API.
 * It uses the traditional ".then()" chaining for handling promises.
 */
function getDataFetch() {
    // test:
    alert("fetch with .then()");
    /*
    To let the front-end bring data from the back-end, 
    we can use the same function that studied before: "fetch()" :-)

    Remember the basic fetch() template:
    fetch('http://example.com/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

    Link: https://github.com/anmarjarjees/js-frameworks/blob/main/week03/script2.js
    */
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => console.log(data));

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
}; // end getDataFetch()

// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// Example:
/*
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}
*/

// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// Example:
/*
for (const element of object) {

}
*/


/*
Let's also render these data nicely in the second example of using "async/await"
*/


/*
As we did/learned before, using async/await function "Syntactic Sugar" :-)
Link: https://en.wikipedia.org/wiki/Syntactic_sugar

This function will:
- return a promise
- work asynchronously 
Link: https://github.com/anmarjarjees/js-frameworks/blob/main/week03/script3.js
*/
async function getDataAsync() {
    // test:
    alert("fetch with await");


    /*
    NOTE:
    We used .then() to the get resolved promise asynchronously (without blocking)
    But since the current function has "async"
    So instead of chaining its values with .then(), we will use "await"

    Now await() stops the fetch() from assigning the returned value to "response",
    until there is a response from the API request to be given.
    Or until the promise from fetch has been fulfilled (resolved)

    Link: https://github.com/anmarjarjees/js-frameworks/blob/main/week03/script3.js
    */

    /* 
    NOTE:
    It's important to handle errors, especially with async code, as it may fail silently without proper handling.
    */

    try {
        const response = await fetch(apiURL);

        // test:
        // console.log(response);
        /*
        To recap:
        Now we need to deal with response (the returned result),
        we used .then() in the previous code then json() method
    
        No need for .then() when we have "async" function since we have "await" inside it
        we can use .json() method with another "await" keyword that will also returns a promise
        then e can parse it with json() method
        */
        const data = await response.json();

        /*
        Notice that if we remove the keyword "await" before response.json()
        output "data" will show: Promise {<pending>}
        */

        // Testing:
        console.log(data); // (3) [{…}, {…}, {…}]

        /*
        OUTPUT:
        (3) [{…}, {…}, {…}]
            0: {color: 'red', value: '#f00'}
            1: {color: 'green', value: '#0f0'}
            2: {color: 'blue', value: '#00f'}
            .....
            length: ........
            [[Prototype]]
        
        Since it's an array of object, we can use "for in" to print the key/value pairs
        */

        // VS Code will give us this template when using "for in", modify the variables:
        // Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        let ulContent = "<ul>";
        for (const element of data) {
            // test:
            // console.log(`${element.color} : ${element.value}`);
            ulContent += `<li>${element.color} : ${element.value}</li>`;
        }
        ulContent += "</ul>";

        // console.log(ulContent);

        document.getElementById("data").innerHTML = ulContent;
    } catch (error) {
        // Handling any errors that occurred during the fetch operation
        console.error('There has been an error with the fetch operation:', error);
    }
} // end getDataAsync();


/*
Here, we added a fallback async function that is commented out.
This shows how we can work with fetch and async/await.
*/
// async function getData() {
//     const response = await fetch(apiURL, ()=>{ });
// }
