import "./styles/tabs.css"

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll(".trigger");
        this.contents = container.querySelectorAll(".content");
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener("click", e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e) {
        // remove current active class
        this.tabs.forEach(tab => tab.classList.remove("active"));
        // add active class to clicked element
        e.target.classList.add("active");
    }
    toggleContent(e) {
        // Get id of selected tab
        const tabId = e.target.getAttribute("data-target");

        // toggle active class to selected tab
        this.contents.forEach(content => {
            content.getAttribute("id") === tabId ? content.classList.add("active") : content.classList.remove("active");
        });
    }
}

export { Tabs as default }