var errorMessage = document.querySelector('.error')
var addBut = document.querySelector('.add')
var regNumbersList = document.querySelector('.regNumbersList')
var removeBut = document.querySelector('.remove')
var createRegistration = registrationFunction()

let informationRegNumbers = []

if (localStorage.getItem('registrationNumber')){
    for(let i = 0; i < information.length; i++){
        regNumbersList.innerHTML += '<div>' + information[i].registration + '</div>'
    }
}

function addClicked(){
    if (JSON.parse(localStorage.getItem('registrationNumber')) != null){
        informationRegNumbers = JSON.parse(localStorage.getItem('registartionNumbers')) 
    } else {
        informationRegNumbers = []
    }
}

addBut.addEventListener('click', addClicked)