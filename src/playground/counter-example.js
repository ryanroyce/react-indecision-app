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