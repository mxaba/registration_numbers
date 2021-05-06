var numberPlate = document.querySelector('.numberPlate').innerHTML
var compiledNuPlate = Handlebars.compile(numberPlate)
var regNumbersListTemp = document.querySelector('.regNumbersListTemp').innerHTML


var errr = document.querySelector('.errorTemp')
var succTemp = document.querySelector('.succTemp')


let informationRegNumbersTemp = []

if (localStorage['registrationNumbersTemp']){
    informationRegNumbersTemp = JSON.parse(localStorage['registrationNumbersTemp'])
}

var createTemp = RegistrationFunction()
createTemp.initMyLocal(informationRegNumbersTemp)

document.querySelector('.regNumbersListTemp').innerHTML = compiledNuPlate({numberListTemplate: informationRegNumbersTemp})

function filterRegTemp(){
    var filterTemp = document.querySelector('.radiofilterTemp:checked')
    if (filterTemp){
        // var checkfilter = filterTemp.value
        var checkfilter = createTemp.regfilter(filterTemp.value)
        console.log('ínside')
        if (checkfilter.length == 0){
            errr.innerHTML = filterTemp.value +' has no registration number plates!'
            error()
        }
        document.querySelector('.regNumbersListTemp').innerHTML = compiledNuPlate({numberListTemplate: checkfilter})
    }else {
        errr.innerHTML = 'Select Town First Please!'
        error()
    }
}

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
        regNumbersListTemp = compiledNuPlate({numberListTemplate: informationRegNumbersTemp})
        console.log(compiledNuPlate({numberListTemplate: informationRegNumbersTemp}))
        document.querySelector('.regNumbersListTemp').innerHTML = compiledNuPlate({numberListTemplate: informationRegNumbersTemp})
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
document.querySelector('.showBtnTemp').addEventListener('click', filterRegTemp)
document.querySelector('.resetBtnTemp').addEventListener('click', function(){
    localStorage.removeItem('registrationNumbersTemp')
    document.querySelector('.clearMessageTem').innerHTML = 'The storage will be cleared in 3 seconds!'
    setTimeout(function(){
        location.reload()
    }, 3000)
})
