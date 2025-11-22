document.getElementById("userName").addEventListener("input", function () {
    if (this.value.trim() === "") {
        this.style.border = "2px solid red";
    } else {
        this.style.border = "2px solid green";
    }
});