function registrationFunction(){
    let myLocal = {}
    let registrationNumber = ''

    function inputCheck(name){
        var capName = name.toUpperCase()
        return capName.startsWith('CA') || capName.startsWith('CAA') ||
                capName.startsWith('CJ') || capName.startsWith('CL')
    }

    function error(name){
        return name == '' || !isNaN(name)
    }

    function validateRegNumber(name){
        var repeat = false
        for (var i = 0; i < name.lenght; i++){
            var element = name[i]
            var regElement = element.registration
            if (myLocal[regElement] == undefined){
                myLocal[regElement] = 0
            } else {
                myLocal[regElement] += 1
            }
        }

        //closing the repaet of the function so that it doesn't duplicate
        var newRegistration = getMyLocal()
        for(var key in myLocal){
            if (myLocal.hasOwnProperty(newRegistration)){
                repeat = true
                break
            }
        }
        return repeat
    }

    function setRegistration(namePassed){
        registration = namePassed.toUpperCase()
    }

    function setMyLocal(){
        myLocal = {
            registration: registrationNumber
        }
    }

    function getMyLocal(){
        return myLocal
    }

    return {
        getMyLocal,
        setMyLocal,
        error,
        inputCheck,
        setRegistration,
        validateRegNumber
    }
    
}