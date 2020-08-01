
const mood = document.querySelector("h1");

document.querySelector("#love")
    .addEventListener("click", function () {
        store.dispatch({ type: "LOVE", payload: "✿♥‿♥✿" });
});

document.querySelector("#sleep")
    .addEventListener("click", function () {
        store.dispatch({ type: "SLEEP", payload: "( ⓥωⓥ)" });
});

document.querySelector("#grin")
    .addEventListener("click", function () {
        store.dispatch({ type: "GRIN", payload: "(￣ー￣)" });
});

document.querySelector("#run")
    .addEventListener("click", function () {
        store.dispatch({ type: "RUN", payload: "┗(＾0＾)┓" });
});


function renderFace() {
    mood.innerHTML = store.getState().mood;
}

renderFace()
store.subscribe(renderFace)