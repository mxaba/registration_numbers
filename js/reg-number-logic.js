function RegistrationFunction(){
    let myLocal = []
    var error = ''
    
    function addRegToList(name){
        error = ''
        if (myLocal === '' || name == ''){
            error = 'Please enter a registration number!'
            return false
        }

        if (!(name.length >= 6) || !(name.length <= 10)){
            error = 'Please a valid registration number!'
            return false
        }
        if (!/([A-Z]){2}\s+([0-9]){3}\s([0-9]){3}/.test(name) && !/([A-Z]){2}\s+([0-9]){3}\-([0-9]){3}/.test(name) && !/[A-Z]{2}\s[0-9]{4}/.test(name)) {
            error = 'Please Check the registration explained above'
            return false
        }

        if (!myLocal.includes(name)){
            myLocal.push(name)
            return true
        } else {
            error = 'Registration already there please check it under all!'
            myLocal.slice(name)
        }
    }

    function initMyLocal(array){
        myLocal = array
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
        initMyLocal,
        getErrors,
        addRegToList,
        getMyLocal
    }
    
}