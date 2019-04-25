console.log("app.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "Never forget again",
    options: ["One", "Two"]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are you options: " : "No Options"}</p>
        <ol>
            <li>Thing one</li>
            <li>Thing two</li>
        </ol>
    </div>
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

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log("add one", count);
};

const minusOne = () => {
    count--;
    renderCounterApp();
    console.log("minus one", count);
};

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log("reset", count);
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={reset} className="button">Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();