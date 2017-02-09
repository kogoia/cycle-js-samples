// Logic (functional)

function main() {
    return {
        DOM: Rx.Observable.timer(0, 1000)
            .map(i => `Seconds elapsed ${i}`),
        Log: Rx.Observable.timer(0, 2000)
            .map(i => i * 2)
    }
}

// Effects iImperative)
function DOMDriver(text$) {
    text$.subscribe(text => {
        var container = document.querySelector("#app");
        container.textContent = text;
    });
}

function logDriver(msg$) {
    msg$.subscribe(console.log);
}

var drivers = {
    DOM: DOMDriver,
    Log: logDriver
}

function run(mainFn, drivers) {
    var sinks = mainFn();
    Object.keys(drivers).forEach(key => {
        drivers[key](sinks[key]);
    });
}

run(main, drivers);