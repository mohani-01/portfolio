// document.addEventListener('DOMContentLoaded', () => {
//    const BEFORE = document.getElementById('before')
//    const AFTER = document.getElementById('after')
//    const LANG = document.getElementById('lang')
   
//    let words = {'Javascript': {
//                "before": 'console.log("',
//                "after" : '");'
//                 },
//                 "Python": {
//                     "before": 'print("',
//                     "after": '")'
//                 },
//                 "C" : {
//                     "before": 'printf("',
//                     "after" : '");'
//                 },
//                 "C#" : {
//                     "before": 'Console.WriteLine("',
//                     "after" : '"):'
//                 },
//                 "Java": {
//                     "before": 'System.out.println("',
//                     "after" :'");'
//                 },
//                 "PHP": {
//                     "before": 'echo "',
//                     "after" : '";'
//                 }
//     }
   

//     const keys = Object.keys(words)
//     const change = setInterval(() => {
//         let index = Math.ceil(Math.random() * keys.length) - 1 ;
//         console.log(index)
//         AFTER.innerHTML = words[keys[index]].after;
//         LANG.innerHTML = keys[index];

//         document.getElementById('hello_world').style.color = "#" + Math.floor(Math. random()*16777215).toString(16);
//         console.log(Math.floor(Math. random()*16777215));
//         BEFORE.innerHTML = words[keys[index]].before;
//             // setTimeout(() => {

//             // }
//         // ,500)
//     }, 2000)

//     // for(let key in words) {
//     //     if (words.hasOwnProperty(key)) {
//     //         console.log(keys)
//     //     }
//     // }
//     // for (let i = 0, N = key.length; i < N; i++) {
//     //     console.log(key, words[newkey], words[key[i]])

        
//     // }
   
   
   
   
   
//     document.querySelectorAll('.see').forEach(div => {
//         div.style.display  = 'none';
//         console.log(div)
//     })

//     document.querySelectorAll(".pro").forEach(div => {

//         div.addEventListener('mouseover', () => {
//             const see = div.querySelector('.see');
//             const parent = div.parentElement;
//             div.querySelector('.description').addEventListener('mouseover', () => {

//                 see.style.display = 'flex';
//                 see.style.opacity = 1;  
//             })
//             // })


//         })
//         div.parentElement.addEventListener('mouseout', () => {
//             const see = div.querySelector('.see');
//             const parent = div.parentElement;
//             div.querySelector('.description').addEventListener('mouseout', () => {
//                 // 
//                 see.style.display = 'none';
//                 see.style.opacity = 0;
//             })
//         })
//     })



//     document.addEventListener('scrollend', () => {
//     //    document.querySelector('body').style.backgroundColor = '';
//     })
// })


