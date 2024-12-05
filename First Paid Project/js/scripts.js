

// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));

   
})

  // Remove all classes from text elements
  document.getElementById("igMedia").classList.remove("igClassBef");
  document.getElementById("fbMedia").classList.remove("fbClassBef");
  document.getElementById("eMedia").classList.remove("eClassBef");
  document.getElementById("cMedia").classList.remove("cClassBef");

function socialMedia(x){

    // Add classes based on the parameter 'x'
    if(x === 1){
        document.getElementById("igMedia").classList.toggle("igClassBef");
        document.getElementById("fbMedia").classList.remove("fbClassBef");
        document.getElementById("eMedia").classList.remove("eClassBef");
        document.getElementById("cMedia").classList.remove("cClassBef");
    }else if(x === 2){
        document.getElementById("fbMedia").classList.toggle("fbClassBef");
        document.getElementById("eMedia").classList.remove("eClassBef");
        document.getElementById("cMedia").classList.remove("cClassBef");
        document.getElementById("igMedia").classList.remove("igClassBef");
        
    }else if(x === 3){
        document.getElementById("eMedia").classList.toggle("eClassBef");
        document.getElementById("igMedia").classList.remove("igClassBef");
        document.getElementById("fbMedia").classList.remove("fbClassBef");
        document.getElementById("cMedia").classList.remove("cClassBef");
    }else if(x === 4){
        document.getElementById("cMedia").classList.toggle("cClassBef");
        document.getElementById("igMedia").classList.remove("igClassBef");
        document.getElementById("fbMedia").classList.remove("fbClassBef");
        document.getElementById("eMedia").classList.remove("eClassBef");
    }else{
        console.log("error");
    }
   
    return x;
}







