let saveBtn = document.getElementById("save");
let rtvBtn = document.getElementById("retrieve");
let updateBtn = document.getElementById("update");
let myText = document.getElementById("text");
let myKey = document.getElementById("key");

saveBtn.addEventListener("click", function () {
    if (myText.value === '' || myKey.value === '') {
        alert("Fields are required!!");
    } 
    else if (localStorage.getItem(myKey.value) !== null) {
        alert("Key already exists!!");
    } 
    else {
        let valueExists = false;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === JSON.stringify(myText.value)) {
                valueExists = true;
                break;
            }
        }
        if (valueExists) {
            alert("Given note already exists!!");
        } else {
            alert("This will save the note!");
            localStorage.setItem(myKey.value, JSON.stringify(myText.value));
            }
    }
    });
    
rtvBtn.addEventListener("click", function () {
    if (myKey.value === '') {
        alert("Field is required!!");
    } else {
        let rtvText = localStorage.getItem(myKey.value);
        if (rtvText === null) {
            alert("Invalid Key!");
        } else {
            alert("This will retrieve note!");
            myText.value = JSON.parse(rtvText);  // Set the retrieved text in the text field
            }
            }
            });
            
            
updateBtn.addEventListener("click",function(){
    alert("This will update the note!");
    localStorage.setItem(myKey.value, JSON.stringify(myText.value));          
});




















// let saveBtn = document.getElementById("save");
// let rtvBtn = document.getElementById("backup");
// let myText = document.getElementById("text");
// let myKey = document.getElementById("key");

// saveBtn.addEventListener("click", function () {
//     if (myText.value === '' || myKey.value === '') {
//         alert("Fields are required!!");
//         }
//         else if(localStorage.getItem(myKey.value) !== null){
//             alert("Field exists already!!");    
//     }
//     else {
//             alert("This will save the note!");
//         localStorage.setItem(myKey.value, JSON.stringify(myText.value));
//     }
// });

// rtvBtn.addEventListener("click", function () {
//     if(myKey.value === ''){
//         alert("Field is required!!");
//     }
//     else if(localStorage.getItem(myKey.value) === null){
//         alert("Field not exists!!");    
// }
//     else{
//         alert("This will retrieve note!");
//         let rtvText = JSON.parse(localStorage.getItem(myKey.value));
//         myText.value = rtvText;  // Set the retrieved text in the text field
//     }
// });