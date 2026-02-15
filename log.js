const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

const roleRadios = document.querySelectorAll('input[name="role"]');

const studentForm = document.getElementById('student-fields');
const clubForm = document.getElementById('club-fields');
const recruteurForm = document.getElementById('company-fields');

function hideAllForms() {
    studentForm.style.display = 'none';
    clubForm.style.display = 'none';
    recruteurForm.style.display = 'none';
}


registerBtn.addEventListener('click', () => {
   

    let selectedRole = null;

    roleRadios.forEach(radio => {
        if (radio.checked) {
            selectedRole = radio.value;
        }
    });
    if (!selectedRole) {
          return;
}




    if (selectedRole === 'etudiant') {
        studentForm.style.display = 'flex';
    } 
    else if (selectedRole === 'club') {
        clubForm.style.display = 'flex';
    } 
    else if (selectedRole === 'recruteur') {
        recruteurForm.style.display = 'flex';
    }
        container.classList.add('active');  

});


loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    hideAllForms();  
});
