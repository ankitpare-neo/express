const demo = ()=>{
    return new Promise((resolve, reject)=>{
        resolve("Hello")
    })
}

const demo1 = (data)=>{
    return new Promise((resolve, reject)=>{
        // reject(data+"   errorrrrr")
        resolve(data+"   data")
    })
}

const demo2 = (data)=>{
    return new Promise((resolve, reject)=>{
        resolve(data+ " Pare")
    })
}

// demo().then((data)=>{
//         return demo1(data)
// }).then((data)=>{
//     return demo2(data)
// }).then(d=>{
//     console.log(d)
// }).catch(e=>{
//     console.log(e)
// }).then(c=>{
//     console.log(c)
//     return demo2(c)
// })

// Promise.all([demo(), demo1(), demo2()]).then(data=>{
//     console.log(data)
//})



///////////////////////////////////////////
// for(let i = 1; i < 10; i++) {
//     console.log(i)
//     }
//////////////////////////////////////////

// console.log(1=='1')
// console.log(1==='1')

// // i = 1 + '1'
// // console.log(i)
//  i = 'a' - 'a'
// console.log(i)
console.log(null==undefined)
console.log(null===undefined)
console.log(typeof(null))
console.log(typeof(undefined))