


document.addEventListener("DOMContentLoaded", function(){
    let prof=document.getElementById("prof");
    if(prof){
        prof.onclick=function(e){
           
            e.preventDefault();//<- empeche la page de remonter


            let type=localStorage.getItem("userType");

            if(type==="etudiant"){
                window.location.href="profile-etud/profile.html";

            }else if(type === "club") {
                window.location.href ="profile-club/pclub.html";

            }else if (type === "societe") {
                window.location.href ="profile-sos/psos.html";

            }else{
                alert("Please log in first !!")
                window.location.href="login.html"
            }

        };
    }
});