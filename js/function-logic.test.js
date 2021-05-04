describe('Plate Number Registration', function(){
    describe('Testing the error messages (Regex)', function(){
        it('Should return false and a message telling you to check the example above', function(){
            var registration = registrationFunction()
            assert.equal(false, registration.addRegToList('BD123456'))
            assert.equal(false, registration.addRegToList('0123456'))
            assert.equal(false, registration.addRegToList('BBBBBB'))
        })

        it('Should return appropriate error message when fomart is wrong', function(){
            var registration = registrationFunction()
            registration.addRegToList('BD123456')
            assert.equal('Please a valid registration number!', registration.getErrors())
            
            registration.addRegToList('0123456')
            assert.equal('Please a valid registration number!', registration.getErrors())

            assert.equal(false, registration.addRegToList('BBBBBB'))
            assert.equal('Please a valid registration number!', registration.getErrors())
        })

        it('Should return appropriate error message when already registered', function(){
            var registration = registrationFunction()
            registration.addRegToList('BD123456')
            assert.equal('Please a valid registration number!', registration.getErrors())
        })
    })

    describe('Testing error messages for Reg number that is not there', function(){
        var registration = registrationFunction() 
        it('Should return true when the number is not there', function(){           
            assert.equal(true, registration.addRegToList('CA 123 456')) 
            assert.equal(true, registration.addRegToList('CA 124 456')) 
            assert.equal(true, registration.addRegToList('CA 129 456')) 
        })

        it('Should return appropriate message when the address is already there', function(){
            var registration = registrationFunction()      
            registration.addRegToList('CA 123 456')
            registration.addRegToList('CA 124 456')
            registration.addRegToList('CA 129 456')
            registration.addRegToList('CA 129 456')
            assert.equal('Registration already there please check it under all!', registration.getErrors())
        })
    })

    describe('Testing error messages for Reg number that is there', function(){
        var registration = registrationFunction() 
        it('Should return true when the number is not there', function(){   
            registration.addRegToList('CA 123 456')        
            registration.addRegToList('CA 123 456')        
            assert.equal('Registration already there please check it under all!', registration.getErrors()) 
            registration.addRegToList('CA 124 456')
            registration.addRegToList('CA 124 456')
            assert.equal('Registration already there please check it under all!', registration.getErrors())
            registration.addRegToList('CA 129 456')
            registration.addRegToList('CA 129 456')
            assert.equal('Registration already there please check it under all!', registration.getErrors()) 
        })
    })

    describe('Testing the storage on arrays and if i am able to get the correct data', function(){
        var registration = registrationFunction() 
        it('Should return true when the number is not there', function(){   
            registration.addRegToList('CA 123 456')        
            registration.addRegToList('CA 123 496')
            registration.addRegToList('CA 124 456')
            registration.addRegToList('CA 124456')
            registration.addRegToList('CA 129 456')
            registration.addRegToList('CA-129-456')
            assert.deepEqual([ 'CA 123 456', 'CA 123 496', 'CA 124 456', 'CA 124456' ,'CA 129 456', 'CA-129-456' ], registration.getMyLocal()) 

            // assert.equal('', registration.getMyLocal())
            // assert.equal('', registration.getMyLocal()) 
        })
    })

    describe('Testing Flitter by Towns', function(){
        var registration = registrationFunction() 
        registration.addRegToList('CA 123 456')        
            registration.addRegToList('CA 123 496')
            registration.addRegToList('CA 124 456')
            registration.addRegToList('CA 124456')
            registration.addRegToList('CA 129 456')
            registration.addRegToList('CA-129-456')
            
            registration.addRegToList('CJ 123 456')        
            registration.addRegToList('CJ 123 496')
            registration.addRegToList('CJ 124 456')
            registration.addRegToList('CJ 124456')
            registration.addRegToList('CJ 129 456')
            registration.addRegToList('CJ-129-456')

            registration.addRegToList('CL 123 456')        
            registration.addRegToList('CL 123 496')
            registration.addRegToList('CL 124 456')
            registration.addRegToList('CL 124456')
            registration.addRegToList('CL 129 456')
            registration.addRegToList('CL-129-456')
        it('Should return Olny from Cape Town', function(){   
            assert.deepEqual([ 'CA 123 456', 'CA 123 496', 'CA 124 456', 'CA 124456' ,'CA 129 456', 'CA-129-456' ], registration.regFlitter('CA')) 

            // assert.equal('', registration.getMyLocal())
            // assert.equal('', registration.getMyLocal()) 
        })

        it('Should return Olny from Stellenbosch', function(){   
            assert.deepEqual([ 'CL 123 456', 'CL 123 496', 'CL 124 456', 'CL 124456' ,'CL 129 456', 'CL-129-456' ], registration.regFlitter('CL')) 

            // assert.equal('', registration.getMyLocal())
            // assert.equal('', registration.getMyLocal()) 
        })

        it('Should return Olny from Paarl', function(){   
            assert.deepEqual([ 'CJ 123 456', 'CJ 123 496', 'CJ 124 456', 'CJ 124456' ,'CJ 129 456', 'CJ-129-456' ], registration.regFlitter('CJ')) 

            // assert.equal('', registration.getMyLocal())
            // assert.equal('', registration.getMyLocal()) 
        })


    })
})