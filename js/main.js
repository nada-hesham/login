var sectionOne = document.querySelector("#one");
var sectionTwo = document.querySelector("#two");
var sectionThree = document.querySelector("#home-three");
var nameInput = document.querySelector("#text-up");
var emailInput = document.querySelector("#email-up");
var emailInputLogin = document.querySelector("#email");
var passInput = document.querySelector("#pass-up");
var passInputLogin = document.querySelector("#pass");
var btnSignUp = document.querySelector("#btnSignUp");
var aSignUp = document.querySelector("#a-SignUp");
var aSignin = document.querySelector("#a-Signin");
var btnLogin = document.querySelector("#btnLogin");
var btnLogout = document.querySelector("#btnLogout");
var pOne = document.querySelector("#p-one");
var pTwo = document.querySelector("#p-two");
var welcomeUser= document.querySelector("#welcome")
var signInList = [];

if(localStorage.getItem("data") !=null){
    signInList =JSON.parse(localStorage.getItem("data"));
    console.log(signInList)
}

function addData() {
    if (validationName() && validationEmail() && validationPass()) {
        console.log("addddddddddd");
        
        var user = {
            userName: nameInput.value,
            email: emailInput.value,
            pass: passInput.value,
        }
        console.log(signInList);
        
        signInList.push(user);
        pOne.classList.add("d-none");
        pTwo.classList.add("d-none");
        localStorage.setItem("data", JSON.stringify(signInList));
        console.log(signInList);
        sectionTwo.classList.add("d-none");
    sectionOne.classList.remove("d-none");
      

    } else if (validationName() && validationEmail() || validationEmail() && validationPass() || validationName() && validationPass()) {
        pOne.classList.add("d-none");
        pTwo.classList.remove("d-none");
    } else if (null) {
        pOne.classList.remove("d-none");
        pTwo.classList.add("d-none");
    }
    nameInput.classList.remove("is-valid", "is-invalid")
    emailInput.classList.remove("is-valid", "is-invalid")
    passInput.classList.remove("is-valid", "is-invalid")
}

function clearInput() {
    nameInput.value = null;
    emailInput.value = null;
    passInput.value = null;
    emailInputLogin.value = null;
    passInputLogin.value = null;
}

function login() {
    for (var i = 0; i < signInList.length; i++) {
         console.log(signInList[i].email);
         console.log(signInList[i].pass);
         console.log(emailInputLogin.value);
         console.log(passInputLogin.value);
         
        if (signInList[i].email == emailInputLogin.value && signInList[i].pass == passInputLogin.value) {
            
            console.log("ifffff ");
            
            localStorage.setItem("userName", JSON.stringify(signInList[i].userName))
            console.log(signInList[i].userName);
            
         var userNameFromStorage =localStorage.get("userName")
          console.log(userNameFromStorage)
            welcomeUser.innerHTML= "welcome" + userNameFromStorage;
            console.log(document.getElementById("welcome"));
            
            pOne.classList.add("d-none")
            pTwo.classList.add("d-none")
            sectionThree.classList.remove("d-none");
            sectionOne.classList.add("d-none");
        } else if (signInList[i].email == emailInputLogin || signInList[i].pass == null) {
            pOne.classList.add("d-none");
            pTwo.classList.remove("d-none");
        } else if (signInList[i].email == emailInputLogin || signInList[i].pass == null) {
            pOne.classList.add("d-none");
            pTwo.classList.remove("d-none");
        }else if (null) {
            pOne.classList.remove("d-none");
            pTwo.classList.add("d-none");
        }
        }
        clearInput()
    }


btnSignUp.addEventListener("click", function () {
    addData()
    clearInput();
  
});
btnLogin.addEventListener("click", function () {


login()
clearInput()
// sectionThree.classList.remove("d-none");
// sectionOne.classList.add("d-none");

});

aSignUp.addEventListener("click", function () {
    sectionOne.classList.add("d-none");
    sectionTwo.classList.remove("d-none");
});
aSignin.addEventListener("click", function () {
    sectionTwo.classList.add("d-none");
    sectionOne.classList.remove("d-none");
});
btnLogout.addEventListener("click", function () {
    sectionOne.classList.remove("d-none");
    sectionThree.classList.add("d-none");
});

function validationName() {
    var regex = /^\w{4,15}$/i;
    var testString = nameInput.value;

    if (regex.test(testString)) {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        return true;
    } else if (testString == null) {
        nameInput.classList.remove("is-valid")
        nameInput.classList.add("is-invalid")
        return false;
    }

}
function validationEmail() {
    var regex = /^.{3,20}(@.{3,11})(\.com)$/i;
    var testString = emailInput.value;

    if (regex.test(testString)) {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        return true;
    } else {
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")
        return false;
    }
}
function validationPass() {
    var regex = /^\w{4,15}$/i;
    var testString = passInput.value;
    if (regex.test(testString)) {
        passInput.classList.add("is-valid")
        passInput.classList.remove("is-invalid")
        return true;
    } else {
        passInput.classList.remove("is-valid")
        passInput.classList.add("is-invalid")
        return false;
    }

}











