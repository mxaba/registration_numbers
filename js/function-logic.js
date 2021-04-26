function registrationFunction(regNumbersList){
    let myLocal = regNumbersList || []
    var error = ''
    
    function addRegToList(name){
        error = ''
        if (myLocal === '' || name == ''){
            error = 'Please enter a registration number!'
            return false
        }

        // if (!name.startsWith('CY') || !name.startsWith('CA') || !name.startsWith('CJ') || !name.startsWith('CL')){
        //     error = "We don't register/Support that here!"
        //     return false
        // }

        var regOne = /([A-Z]){2}\s+([0-9]){3}\s([0-9]){3}/g;
        var regexOne = regOne.test(name)

        var regTwo = /([A-Z]){2}\-+([0-9]){3}\-([0-9]){3}/g
        var regexTwo = regTwo.test(name)

        var reg = /[A-Z]{2}\s[0-9]{6}/g;
        var regex = reg.test(name)
        if (!regex && !regexOne && !regexTwo) {
            error = 'Please Check the registration exaple above'
            return false
        }

        if (!myLocal.includes(name)){
            myLocal.push(name)
            return true
        } else {
            error = 'Registration number already exist will be removed!'
        }
    }

    function getErrors(){
        return error
    }

    function getMyLocal(){
        return myLocal
    }

    function regFlitter(nameOfTown){
        var array = []
        myLocal.forEach(i => {
            if (i.startsWith(nameOfTown)){
                array.push(i)
            }
        })
        return array
    }

    return {
        regFlitter,
        getErrors,
        addRegToList,
        getMyLocal
    }
    
}