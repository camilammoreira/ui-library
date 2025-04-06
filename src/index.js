import "./ui/styles/main.css";
import Tooltip from "./ui/tooltip";
import Dropdown from "./ui/dropdown";
import Tabs from "./ui/tabs";
import Snackbar from "./ui/snackbar";

// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// create dropdown
document.querySelectorAll(".dropdown").forEach(element => {
    const dropdown = new Dropdown(element);
    dropdown.init();
})

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

document.querySelector(".snackbar-trigger").addEventListener("click", () => {
    snackbar.show("you clicked me! :)")
}

)