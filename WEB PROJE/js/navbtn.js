const signButton = document.getElementById('signbtn');
const signPage = document.querySelector('.full-screen-div'); 
const opensign = document.querySelector('.signup');
const exitButton = document.querySelector('.exit'); 
const closelogin = document.querySelector('.login');
const logbutton = document.getElementById('logbtn');


signButton.addEventListener('click', () => {
    signPage.style.display = 'flex'; 
    closelogin.style.display = 'none';
});

exitButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    signPage.style.display = 'none'; 
});


logbutton.addEventListener('click', (event) => {
    event.preventDefault(); 
    signPage.style.display = 'flex'; 
    opensign.style.display = 'none';
    closelogin.style.display = 'flex';
});


