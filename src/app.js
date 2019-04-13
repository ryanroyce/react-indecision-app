console.log("app.js is running!");

let template = (
    <div>
        <h1>Indecision App</h1>
        <p>Blah Blah Blah</p>
        <ol>
        <li>Thing one</li>
        <li>Thing two</li>
        </ol>
    </div>
    );

let userName = "Ryan Minor";
let userAge = 30; 
let userLocation = "San Diego";

let templateTwo = (
    <div>
    <h1>{userName.toUpperCase()}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
    </div>

);


const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
