// Logic (functional)

function main() {
    return Rx.Observable.timer(0, 1000)
        .map(i => `Seconds elapsed ${i}`)
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

var sink = main();

DOMEffect(sink);
consoleLogEffect(sink);