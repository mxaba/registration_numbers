var errorMessage = document.querySelector('.error')
var addBut = document.querySelector('.add')
var regNumbersList = document.querySelector('.regNumbersList')
var removeBut = document.querySelector('.remove')
var createRegistration = registrationFunction()

let information = JSON.parse(localStorage.getItem('registrationNo'))

if (localStorage.getItem('registrationNo')){
    for(let i = 0; i < information.length; i++){
        regNumbersList.innerHTML += '<div>' + information[i].registration + '</div>'
    }
}

addBut.addEventListener('click', function(){
    
    var regNumber = document.querySelector('.regNumber').value
    information = JSON.parse(localStorage.getItem('registrationNo'))
    if (createRegistration.error(regNumber) || !createRegistration.inputCheck(regNumber)){
        errorMessage.innerHTML = "Error in your input please check it"
    }
    setTimeout(function(){
        errorMessage.innerHTML = ''
    }, 3000)

    createRegistration.setRegistration(regNumber)
    createRegistration.setMyLocal()

    var registrationsStore = []
    var myLocalSto = createRegistration.getMyLocal()

    if (localStorage.getItem('registrationNo')){
        if (createRegistration.validateRegNumber(information)){
            return false
        } else {
            registrationsStore = JSON.parse(localStorage.getItem('registrationNo'))
            registrationsStore.push(myLocalSto)

            var regDiv = document.createElement('div')
            for (var i = 0; i < registrationsStore.length; i++){
                var elem = registrationsStore[i]
                regDiv.innerHTML = elem.registration
            } regNumbersList.appendChild(regDiv)
            regNumber = ''
            localStorage.setItem('registrationNo', JSON.stringify(registrationsStore))

        }
    } else {
        registrationsStore.push(myLocalSto)
        localStorage.setItem('registrationNo', JSON.stringify(registrationsStore))
        regNumber = ''
        regNumbersList.innerHTML = '<div>' + myLocalSto.registration + '</div>'
    }
})