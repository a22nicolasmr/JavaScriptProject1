function hello(){
    var nameDOM=document.getElementById("user");
    var name=nameDOM.value;
    var welcomeDOM=document.getElementById("welcome");
    if(name.length>2){
        welcomeDOM.innerHTML="Welcome "+name;
        welcomeDOM.style.borderWidth="0px";
        welcomeDOM.style.color="green";
        
    }else{
        welcomeDOM.style.color="blue";
        welcomeDOM.style.borderColor="red";
        welcomeDOM.style.borderStyle="dotted";
        welcomeDOM.style.borderWidth="5px";
        welcomeDOM.innerHTML="The user name is too short";
    }
    
}