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
function DOMEffect(text$) {
    text$.subscribe(text => {
        var container = document.querySelector("#app");
        container.textContent = text;
    });
}

function consoleLogEffect(msg$) {
    msg$.subscribe(console.log);
}

var sinks = main();

DOMEffect(sinks.DOM);
consoleLogEffect(sinks.Log);