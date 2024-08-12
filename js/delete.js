let myKey = document.getElementById("key");
let delBtn = document.getElementById("delBtn");
delBtn.addEventListener("click", function () {
    if (delKey.value === '') {
        alert("Field is required!!");
    }
    else {
        let delKey = document.getElementById("delKey").value;
        localStorage.removeItem(delKey);
        alert("Your note is successfully deleted!");
    }
});