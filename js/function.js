var errorMessage = document.querySelector('.error')
var addBut = document.querySelector('.addBtn')
var resetBtn = document.querySelector('.resetBtn')
var clearMessage = document.querySelector('.clearMessage')
var showBtn = document.querySelector('.showBtn')
var succ = document.querySelector('.succ')

let informationRegNumbers = []

if (localStorage['registrationNumber']){
    informationRegNumbers = JSON.parse(localStorage['registrationNumber'])
}
var createRegistration = registrationFunction()
createRegistration.initMyLocal(informationRegNumbers)

numbersListHTML(createRegistration.getMyLocal())


function errors(){
    setTimeout(function(){
        errorMessage.innerHTML = ''
    }, 2500)
}

function createElem(name){
    var regNumbersList = document.createElement('li')
    var createdElem = document.createTextNode(name)
    regNumbersList.appendChild(createdElem)
    return regNumbersList
}

function addClicked(){
    var regField = document.querySelector('.regField').value
    var validateReg = createRegistration.addRegToList(regField)

    if (!validateReg) {
        document.querySelector('.regField').value = ""
        errorMessage.innerHTML = createRegistration.getErrors();
        errors()
        // regField = ''
        return
    } else {
        var regField = document.querySelector('.regField').value
        console.log(regField)
        var regNumberElem = createElem(regField)
        document.getElementById('RegistrationList').appendChild(regNumberElem)
        errorMessage.innerHTML = ''
        localStorage.setItem('registrationNumber', JSON.stringify(createRegistration.getMyLocal()))
        succ.innerHTML = "Registration added.."
        setTimeout(function(){
            succ.innerHTML = ""
        }, 3000)
        
        document.querySelector('.regField').value = ""
    }

}

function numbersListHTML(name){
    for (var i = 0; i < name.length; i++){
        var currentName = name[i]
        var regNumberElem = createElem(currentName)
        document.getElementById('RegistrationList').appendChild(regNumberElem)
    }
}

function flitter(){
    errorMessage.innerHTML = ''
    var radioFlitter = document.querySelector('.radioFlitter:checked')
    if (radioFlitter != null){
        var radioFlitterChecked = radioFlitter.value
        var regFlitterd = createRegistration.regFlitter(radioFlitterChecked)

        if (regFlitterd.length == 0){
            errorMessage.innerHTML = 'This town has no registration number plates!'
        }
        document.getElementById('RegistrationList').innerHTML = ''
        numbersListHTML(regFlitterd)
    } else {
        errorMessage.innerHTML = 'Select Town First Please!'
        errors()
    }
}


showBtn.addEventListener('click', flitter)
addBut.addEventListener('click', addClicked)

resetBtn.addEventListener('click', function(){
    localStorage.clear()
    clearMessage.innerHTML = 'The storage will be cleared in 3 seconds!'
    setTimeout(function(){
        location.reload()
    }, 3000)
})