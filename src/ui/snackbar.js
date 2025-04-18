import "./styles/snackbar.css"

class Snackbar {
    constructor(msg) {
        this.snackbar = document.createElement("div");
    }
    init() {
        this.snackbar.classList.add("snackbar");
        document.querySelector("body").appendChild(this.snackbar);
    }
    show(msg) {
        this.snackbar.textContent = msg;
        this.snackbar.classList.add("active");
        setTimeout(() => {
            this.snackbar.classList.remove("active");
        }, 4000)
    }
}

export { Snackbar as default }