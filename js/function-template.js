var numberPlate = document.querySelector('.numberPlate')
var errr = document.querySelector('.errorTemp')
var succTemp = document.querySelector('.succTemp')


let informationRegNumbersTemp = []

if (localStorage['registrationNumbersTemp']){
    informationRegNumbersTemp = JSON.parse(localStorage['registrationNumbersTemp'])
}

var createTemp = registrationFunction()
createTemp.initMyLocal(informationRegNumbersTemp)

function error(){
    setTimeout(function(){
        errr.innerHTML = ''
    }, 2500)
}

function addRegistrationTemp(){
    var regFieldTemp = document.querySelector('.regFieldTemp').value
    console.log(regFieldTemp)
    var validateReg = createTemp.addRegToList(regFieldTemp)

    if (!validateReg) {
        document.querySelector('.regFieldTemp').value = ""
        errr.innerHTML = createTemp.getErrors();
        error()
        // regFieldTemp = ''
        return
    } else {
        var regFieldTemp = document.querySelector('.regFieldTemp').value
        console.log(regFieldTemp)
        // var regNumberElem = createElem(regFieldTemp)
        // document.getElementById('RegistrationList').appendChild(regNumberElem)
        localStorage.setItem('registrationNumbersTemp', JSON.stringify(createTemp.getMyLocal()))
        succTemp.innerHTML = "Registration added.."
        setTimeout(function(){
            succTemp.innerHTML = ""
        }, 3000)
        
        document.querySelector('.regFieldTemp').value = ""
    }

}

document.querySelector('.addBtnTemp').addEventListener('click', addRegistrationTemp)