const demo = ()=>{
    return new Promise((resolve, reject)=>{
        resolve("Welcome")
        // reject("error")
    })
}

const demo1 = ()=>{
    return new Promise((resolve, reject)=>{
        resolve("Welcome 1")
        // reject("error")
    })
}

const demo2 = ()=>{
    return new Promise((resolve, reject)=>{
        resolve("Welcome 2")
        // reject("error")
    })
}





Promise.race([demo(),demo1(),demo2()]).then((data)=>{
  console.log(data)
}).catch((e)=>{
    console.log(e)
})









