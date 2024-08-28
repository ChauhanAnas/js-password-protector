const protector = require('./index')

const password = protector.getPasswordHash("Anas@136")

const result = protector.verifyPassword("Anas@136",password)
if(result){
    console.log({Message: "Password match",
        status:"Login"
    })
}else{
    console.log({Message: "Password does't match",
        status:"Try again later"
    })
}