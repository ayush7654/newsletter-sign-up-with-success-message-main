
document.addEventListener('DOMContentLoaded', function () {
const confirmedEmail = localStorage.getItem('subscribedEmail');
const emailElement = document.getElementById('confirmedEmail');

if (confirmedEmail) {
    emailElement.textContent = confirmedEmail;
    
}
});
function Dismiss(){
    window.location.href = 'index.html';
 
}
const dismiss = document.getElementById("DismissButton");
dismiss.addEventListener('click',Dismiss);





