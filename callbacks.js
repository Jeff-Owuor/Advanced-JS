const getUsername = (callback) => {
    console.log("Getting username...")
    setTimeout(()=>{
        let username = "Jeff"
        console.log(`Username=${username}`)
        callback(username)
    },3000)
}
const validateUsername = (name,callback)=>{
    console.log("Validating username...")
    if(name.length>=1){
        console.log("Valid Username!")
        callback()
    }else{
        console.log("Invalid Username! Please try again!")
    }
}
const getPassword = (callback) => {
    console.log(`Getting password...`)
    setTimeout(()=>{
        let password = `upgrad`
        console.log(password)
        callback(password)
    },3000)
}
const validatePassword = (passkey,callback) => {
    console.log(`Validating password...`)
    if(passkey.length>=1){
        console.log("Valid Password!")
        callback()
    }else{
        console.log(`Invalid Password! Please try again!`)
    }
}

const done = () => {
    console.log(`BOTH VALID!`)
}


const login = () => {
    getUsername(name => {
        validateUsername(name,() =>{
            getPassword(password => {
                validatePassword(password,()=>{
                    done()
                })
            })
        })
    })
}
login()



