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

let user = {
    name: "Ryan",
    age: 30,
    location: "San Diego"
};

// let userName = "Ryan Minor";
// let userAge = 30;
// let userLocation = "San Diego";

let templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>

);


const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
