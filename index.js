document.addEventListener('DOMContentLoaded', () => {
    changeSection();
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

    
    // document.querySelectorAll('svg').forEach(svg => { 
    //     svg.addEventListener('transitionend', () => {
    //         svg.style.transform = 'none';
    //     svg.addEventListener('mouseover', () => {
        
    //         if (svg.style.transform = 'none') {
    //             svg.style.transform = 'rotate('+ 15+ 'deg)';
    //         } 
    //     })
    //     })
        
        


    // });

    document.querySelectorAll('section').forEach(section => {
        // console.log(section.id, section.getBoundingClientRect().top)
        // console.log(section.id, section.getBoundingClientRect().height + section.getBoundingClientRect().top)
        // console.log(window.scrollY)
        // console.log(window.innerHeight)
    })

    const navbar = document.getElementById('navbarNav');
    navbar.querySelectorAll('a').forEach(ahref => {
        ahref.addEventListener('click', () => {
            navbar.querySelectorAll('a').forEach(event => {
                event.style.borderBottomColor = 'transparent';
            })
            ahref.style.borderBottomColor = 'green';

        })
    })
    window.addEventListener('wheel', () => {
        changeSection()
       
    })
})



function changeSection() {
    const navbar = document.getElementById('navbarNav');

    const section =  document.querySelector('#Projects');
    const total = Math.floor(Math.abs(section.getBoundingClientRect().bottom) + Math.floor(Math.abs(section.getBoundingClientRect().top)));
    const height = Math.floor(section.getBoundingClientRect().height);
    console.log(total, height, total === height)
//    console.log((Math.abs(section.getBoundingClientRect().bottom) + Math.floor(Math.abs(section.getBoundingClientRect().top))));
        
    // console.log((Math.abs(section.getBoundingClientRect().top) + Math.abs(section.getBoundingClientRect().bottom)),"Height", section.getBoundingClientRect().height, "Bottom>>",section.getBoundingClientRect().bottom, "Top>>>" ,(section.getBoundingClientRect().top), ">>", (section.getBoundingClientRect().height), window.scrollY);
    // console.log('bottom', section.getBoundingClientRect().bottom)
    // console.log(window.innerHeight)
    document.querySelectorAll('section').forEach(section => {
        const total = Math.floor(Math.abs(section.getBoundingClientRect().bottom) + (Math.abs(section.getBoundingClientRect().top)));
        const height = Math.floor(section.getBoundingClientRect().height);
        if (  total === height) {
            // console.log(section, total, height)
            // console.log(section)
            changeTop(section, navbar)
        }
      
        // console.log("bounding element", section,    section.getBoundingClientRect().y)
    //    console.log(section.getBoundingClientRect().top)
    })
}

function changeTop(currentSection, navbar) {
    // console.log("top", currentSection.getBoundingClientRect().y, window.scrollY)
    // console.log("bottom", currentSection.getBoundingClientRect().bottom + window.innerHeight, window.scrollY)
    document.querySelectorAll('section').forEach(section => {
        section.className = "";
    })
    const name = currentSection.dataset.name;
    // console.log("navbrar",navbar)
    const currentLi = navbar.querySelector(`.${name}`);
    // console.log(currentLi)
    navbar.querySelectorAll('a').forEach(ahref => {
        ahref.style.borderBottomColor = 'transparent';
    })
    currentLi.style.borderBottomColor = 'green';
    // currentSection.className = "border";
}

