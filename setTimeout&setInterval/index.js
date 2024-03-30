// setTimeout(
//     () => {
//     console.log('hello ram')
//    },
//      3000
 
//    )
let timer = 10
let timeInterval = setInterval(
               () => {
       console.log(timer--)
         },
           1000

      )

setTimeout(
     ()=> {
       clearInterval(timeInterval)
       console.log('Love you varsha')
     },
     10000

)