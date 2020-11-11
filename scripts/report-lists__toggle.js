let tabs = function (self, id) {
    if (!self.classList.contains(".is-active")) {
        let activeButton = document.querySelector(".report-button.is-active");
        let activeContent = document.querySelector(".report-content.is-active");
        activeButton.classList.remove("is-active");
        activeContent.classList.remove("is-active");
        const content = document.querySelector(`[report-content-id="${id}"]`);
        content.classList.add('is-active');
        self.classList.add("is-active");
    }
}