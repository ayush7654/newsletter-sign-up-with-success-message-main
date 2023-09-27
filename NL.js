function subscribe(){
    const email = document.getElementById("email").value;
    localStorage.setItem('subscribedEmail', email);
    window.location.href = 'signupSucess.html';
    console.log("Its working");
}
const subButton = document.querySelector("#subscribe"); 
subButton.addEventListener('click',subscribe);