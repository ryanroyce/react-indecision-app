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

var userName = "Ryan Minor";
var userAge = 30;
var userLocation = "San Diego";

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        userAge
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        userLocation
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
