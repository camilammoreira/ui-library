import "./ui/styles/main.css";
import Tooltip from "./ui/tooltip";
import Dropdown from "./ui/dropdown";
import Tabs from "./ui/tabs";

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