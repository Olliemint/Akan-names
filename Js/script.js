

let button = document.getElementById("btn");
let form = document.getElementById("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // date constructor

    let formData = new FormData(e.target);
    let myDate = new Date(formData.get("name"));
    let birthDay = myDate.getDay();

    // gender fuctionality
    var gender = document.getElementsByName("gender");
     
    

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            var genderValue = gender[i].value;
            
    }
    
    // gender pick statements
    if (genderValue == "female"){
        document.getElementById("output").innerHTML = ("hurray");

    }
    else{
        alert("your gender is male")
    }
   
    

    
})