let akanMale =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

let akanFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let akanDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


let form =document.getElementById("form");


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let formData = new FormData(e.target);
    let myDate = new Date(formData.get("name"))
    let birthDay = myDate.getDay();
    
    

    
    
    var gender = document.getElementsByName("gender");
     
    

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            var GenderValue = gender[i].value;
            
    }
    if (GenderValue =="female"){
        
        document.getElementById("demo").innerHTML = ("YOU WERe BORN ON" +akanDays[birthDay]+ "and your akan name is" +akanFemale[birthDay]);

        
    }
    else{
        document.getElementById("demo").innerHTML = ("YOU WERe BORN ON" +"" +akanDays[birthDay]+ "and your akan name is" +akanMale[birthDay]);
        
    }
    
})

