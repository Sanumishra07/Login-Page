let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");

let fnFlag,lnFlag,eFlag,pFlag;
let firstName,lastName,email,password;
let fnTarget,lnTarget,eTarget,pTarget;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let message of emptyFieldMessage){
    message.classList.add("d-none");
}

formData.addEventListener("keyup" ,(event) =>{
    event.preventDefault();
    field = event.target.dataset.key;

    switch(field) {
        case "firstName":
            firstName = event.target.value;
            fnTarget=event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget=event.target;
            break;
        case "email":
            email = event.target.value;
            eTarget=event.target;
            break;
        case "password":
            password = event.target.value;
            pTarget=event.target;
            break;
        default:
            firstName = lastName =email = password = "";
    }
});

submitButton.addEventListener("click",(event) =>{
    event.preventDefault();
    console.log(fnTarget,lnTarget,eTarget,pTarget);
    if(firstName){
        emptyFieldMessage[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag=false;
        }else{
            errorMessages[0].classList.add("d-none");
            fnTarget.classList.remove("error");
            fnFlag=true;
        }
    }else{
        emptyFieldMessage[0].classList.remove("d-none");
    }

    if(lastName){
        emptyFieldMessage[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lnFlag=false;
        }else{
            errorMessages[1].classList.add("d-none");
            lnTarget.classList.remove("error");
            lnFlag=true;
        }
    }else{
        emptyFieldMessage[1].classList.remove("d-none");
    }

    if(email){
        emptyFieldMessage[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            eTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            fnFlag=false;
        }else{
            errorMessages[2].classList.add("d-none");
            eTarget.classList.remove("error");
            eFlag=true;
        }
    }else{
        emptyFieldMessage[2].classList.remove("d-none");
    }

    if(password){
        emptyFieldMessage[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            pTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            pFlag=false;
        }else{
            errorMessages[3].classList.add("d-none");
            pTarget.classList.remove("error");
            pFlag=true;
        }
    }else{
        emptyFieldMessage[3].classList.remove("d-none");
    }

    if(fnFlag && lnFlag && eFlag && pFlag){
        fnTarget.value = lnTarget.value = eTarget.value = pTarget.value = "";
        window.location.href = "successpage.html";
    }
});


showPasswordBtn.addEventListener("click",(event) =>{
    event.preventDefault();
    if(pTarget.getAttribute("type") === "text"){
        pTarget.setAttribute("type","password");
    }else{
        pTarget.setAttribute("type","text");
    }
});
