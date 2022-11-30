// syntax of promise object

//.then()
let promiseObj = new Promise((resolve,reject) => {
    console.log(`Getting data from database`)
    setTimeout(()=>{
        reject("An error occurred!")
    },3000)
})
promiseObj.then((val)=>{
    console.log(`Hi! my name is, ${val}`)
},(err)=>{
    console.log(`${err} Please Try again.`)
})
console.log(promiseObj)

//catch method
let anotherPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       reject(new Error(`An error occurred!!`))
    },2000)
})
anotherPromise.catch(err=>{
    console.log(`${err}`)
})

//using both catch and then methods

let promiseObj2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Asynchronous programming is actually not as hard as it seemed in the beginning")
        reject(new Error("404 - Page not found!!"))
    },4000)
})
promiseObj2.then((val)=>{
    console.log(`${val}`)
})
promiseObj2.catch((err)=>{
    console.log(`Error occurred = ${err}`)
})