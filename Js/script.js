let button = document.getElementById("btn");
let form = document.getElementById("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let formData = new FormData(e.target);
    let myDate = new Date(formData.get("name"));
    let birthDay = myDate.getDay();
    

    
})