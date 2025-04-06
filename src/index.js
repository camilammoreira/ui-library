import "./ui/styles/style.css";
import Tooltip from "./ui/tooltip";
import Dropdown from "./ui/dropdown";

// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// create dropdown
document.querySelectorAll(".dropdown").forEach(element => {
    const dropdown = new Dropdown(element);
    dropdown.init();
})
