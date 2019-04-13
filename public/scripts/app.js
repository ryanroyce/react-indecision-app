"use strict";

console.log("app.js is running!");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "Blah Blah Blah"
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

var user = {
    name: "Ryan",
    age: 30,
    location: "San Diego"
};

// let userName = "Ryan Minor";
// let userAge = 30;
// let userLocation = "San Diego";

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
