Rx.Observable.timer(0, 1000)
    .map(i => `Seconds elapsed ${i}`)
    .subscribe(text => {
        var container = document.querySelector("#app");
        container.textContent = text;
    });