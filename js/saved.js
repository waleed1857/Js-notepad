window.onload = function () {
    displaySavedNotes();
};

function displaySavedNotes() {
    let savedNotes = document.getElementById("display");
    savedNotes.innerHTML = ""; // Clear previous notes

    // Loop through local storage items
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let note = JSON.parse(localStorage.getItem(key));
        savedNotes.innerHTML += `
            <div>
                <p>Key: ${key}</p>
                <p>Note:<br>${note}</p>
            </div>`;
    }
}