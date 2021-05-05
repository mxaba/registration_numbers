var numberPlate = document.querySelector('.numberPlate').innerHTML
var compliedNuPlate = Handlebars.compile(numberPlate)
var regNumbersListTemp = document.querySelector('.regNumbersListTemp').innerHTML


var errr = document.querySelector('.errorTemp')
var succTemp = document.querySelector('.succTemp')


let informationRegNumbersTemp = []

if (localStorage['registrationNumbersTemp']){
    informationRegNumbersTemp = JSON.parse(localStorage['registrationNumbersTemp'])
}

var createTemp = registrationFunction()
createTemp.initMyLocal(informationRegNumbersTemp)

function addRegistrationTemp(){
    var regFieldTemp = document.querySelector('.regFieldTemp').value
    // console.log(regFieldTemp)
    var validateReg = createTemp.addRegToList(regFieldTemp)

    if (!validateReg) {
        document.querySelector('.regFieldTemp').value = ""
        errr.innerHTML = createTemp.getErrors();
        error()
        // regFieldTemp = ''
        return
    } else {
        var regFieldTemp = document.querySelector('.regFieldTemp').value
        // console.log(regFieldTemp)
        // var regNumberElem = createElem(regFieldTemp)
        // document.getElementById('RegistrationList').appendChild(regNumberElem)
        localStorage.setItem('registrationNumbersTemp', JSON.stringify(createTemp.getMyLocal()))
        regNumbersListTemp = compliedNuPlate({numberListTemplate: informationRegNumbersTemp})
        console.log(compliedNuPlate({numberListTemplate: informationRegNumbersTemp}))
        document.querySelector('.regNumbersListTemp').innerHTML = compliedNuPlate({numberListTemplate: informationRegNumbersTemp})
        succTemp.innerHTML = "Registration added.."
        setTimeout(function(){
            succTemp.innerHTML = ""
        }, 3000)
        document.querySelector('.regFieldTemp').value = ""
    }

}

function error(){
    setTimeout(function(){
        errr.innerHTML = ''
    }, 2500)
}

document.querySelector('.addBtnTemp').addEventListener('click', addRegistrationTemp)

document.querySelector('.resetBtnTemp').addEventListener('click', function(){
    localStorage.removeItem('registrationNumbersTemp')
    document.querySelector('.clearMessageTem').innerHTML = 'The storage will be cleared in 3 seconds!'
    setTimeout(function(){
        location.reload()
    }, 3000)
})
