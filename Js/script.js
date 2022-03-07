let akanMale =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

let akanFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

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
        document.getElementById("congrats").innerHTML = ("HURRAY!!!");
        document.getElementById("congrats").style.color = "#CCD6F6"
        document.getElementById("congrats").style.fontSize = "50px"

        document.getElementById("second").innerHTML = (" You were born on " +days[birthDay]+ " And Your Akan name is " +akanFemale[birthDay]);
        document.getElementById("second").style.fontSize = "30px"
        document.getElementById("second").style.color = "#CCD6F6"
        
        



        

    }
    else{
        document.getElementById("congrats").innerHTML = ("HURRAY!!!");
        document.getElementById("congrats").style.color = "#CCD6F6"
        document.getElementById("congrats").style.fontSize = "50px"
        
        document.getElementById("second").innerHTML = (" You were born on " +days[birthDay]+ " And Your Akan name is " +akanMale[birthDay]);
        document.getElementById("second").style.fontSize = "30px"
        document.getElementById("second").style.color = "#CCD6F6"


    }

   
   
    

    
})

function resetall(){
    document.getElementById("congrats").innerHTML = ""
    document.getElementById("second").innerHTML = ""

}