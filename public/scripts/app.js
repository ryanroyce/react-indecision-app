"use strict";

console.log("app.js is running!");

var app = {
    title: "Indecision App",
    subtitle: "Never forget again",
    options: ["One", "Two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are you options: " : "No Options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Thing one"
        ),
        React.createElement(
            "li",
            null,
            "Thing two"
        )
    )
);

// const user = {
//     name: "Ryan",
//     age: 30,
//     location: "San Diego"
// };

// function getLocation(location1){
//     if (location1) {
//         return <p>Location: {location1}</p>
//     } 
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>

// );

var count = 0;
var addOne = function addOne() {
    console.log("add one");
};

var minusOne = function minusOne() {
    console.log("minus one");
};

var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne, className: "button" },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne, className: "button" },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset, className: "button" },
        "Reset"
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
