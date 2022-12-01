//Add the async keyword infront of the arrow function to make it an asynchronous execution

let fun = async () => Promise.resolve("Ayieko")

fun().then(name=> console.log(`Hi my name is ${name}`))

const myFunc = async () => "Owuor"

myFunc().then(jina => console.log(`My last name is ${jina}`))

let carNamePromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("G-wagon")
        //reject("Car not found in database")
    },2000)
})

let getCarName = async () => {
     try{
        let name = await carNamePromise;
        console.log(`${name} is made in Germany`)
     }
     catch(err){
        console.log(err)
     }
}
getCarName()


let uploadPromise = new Promise((resolve,reject)=>{
    console.log('Uploading image...')
    setTimeout(()=>{
        resolve("Image was uploaded successfully!")
    },3000)
})

let uploadImage = async () => {
    try{
        let image  = await uploadPromise
        console.log(`Link to image ${image}`)
    }
    catch(err){
        console.log(err)
    }
    
}
uploadImage()

