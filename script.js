document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success-message").classList.remove("hidden");
    this.reset();
});
