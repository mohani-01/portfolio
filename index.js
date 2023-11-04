let scroll = true;

changeSection();
//    const BEFORE = document.getElementById('before')
//    const AFTER = document.getElementById('after')
//    const LANG = document.getElementById('lang')

document.querySelectorAll('.see').forEach(div => {
    const hyperlink = div.querySelectorAll('a')

    hyperlink.forEach(element => {
        
        element.addEventListener("click", (event) => {
    
            if (parseFloat(window.getComputedStyle(div).getPropertyValue('opacity')) < 0.8 ) {
            
                event.preventDefault()
            }
        })
    });
})

    document.querySelectorAll('section').forEach(section => {
        // console.log(section.id, section.getBoundingClientRect().top)
        // console.log(section.id, section.getBoundingClientRect().height + section.getBoundingClientRect().top)
        // console.log(window.scrollY)
        // console.log(window.innerHeight)
    })

    const navbar = document.getElementById('navbarNav');
    navbar.querySelectorAll('a').forEach(ahref => {
        ahref.addEventListener('click', () => {
            scroll = false
            navbar.querySelectorAll('a').forEach(event => {
                event.style.borderBottomColor = 'transparent';
            })
            ahref.style.borderBottomColor = 'green';
            window.addEventListener('scrollend', () => {
                scroll = true
            })

        })
    })
    window.addEventListener('scroll', () => {
        changeSection()
       
    })

    window.addEventListener('scroll', () => {
        // changeSection();
    })




function changeSection() {
    if (scroll ) {
        const navbar = document.getElementById('navbarNav');

        const section =  document.querySelector('#Projects');
        const total = Math.floor(Math.abs(section.getBoundingClientRect().bottom) + Math.floor(Math.abs(section.getBoundingClientRect().top)));
        const height = Math.floor(section.getBoundingClientRect().height);
        // console.log(total, height, total === height)
    //    console.log((Math.abs(section.getBoundingClientRect().bottom) + Math.floor(Math.abs(section.getBoundingClientRect().top))));
            
        // console.log((Math.abs(section.getBoundingClientRect().top) + Math.abs(section.getBoundingClientRect().bottom)),"Height", section.getBoundingClientRect().height, "Bottom>>",section.getBoundingClientRect().bottom, "Top>>>" ,(section.getBoundingClientRect().top), ">>", (section.getBoundingClientRect().height), window.scrollY);
        // console.log('bottom', section.getBoundingClientRect().bottom)
        // console.log(window.innerHeight)
        document.querySelectorAll('section').forEach(section => {
            const total = Math.floor(Math.abs(section.getBoundingClientRect().bottom) + (Math.abs(section.getBoundingClientRect().top)));
            const height = Math.floor(section.getBoundingClientRect().height);
            if (  total === height) {
                changeTop(section, navbar)
            }
        })
    }
   
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


const toggler = document.getElementsByClassName('navbar-toggler')
const toggle = document.querySelector('.navbar-toggler')
console.log(toggler)
console.log(toggle)

console.log(toggle.getAttribute('aria-expanded'))
const ulContainer = document.getElementsByClassName('navbar-nav')


console.log(ulContainer)
document.querySelector('.navbar-nav').querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (event) => {
        if (window.getComputedStyle(toggle).display === 'none') {

            console.log(event.target)
        } else {
            toggle.click()
        }
        // console.log(event.target, window.getComputedStyle(toggle).display)
    })
})

document.getElementById('messageInput').addEventListener("input", (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 24 + 'px';   
    
    
})



// document.getElementById('email-address').addEventListener('input', (event) => {
//     const email = event.target.value;
//     if (email.trim().length > 5) {
//         console.log('listening')
//         console.log(document.getElementById('floatText').value)
//         if (document.getElementById('floatText').value){ 
//             document.getElementById('send').disabled = false;
//         }

//     }
// })




// fetch('https://django-js-mail.onrender.com/emails', {
//     method: 'POST',
//     body: JSON.stringify({
//       recipients: emailRecipients,
//       subject: emailSubject,
//       body: emailBody,
//     })
//   })      

//   .then(response =>  response.json())
//   .then(result => {



document.getElementById('send').addEventListener('click', (event) => {
    event.preventDefault()

   // https://github.com/github/fetch
    fetch("https://formsubmit.co/ajax/646613eabd667d1f253d05d759e2ebef", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById('emailInput').value,
            message: document.getElementById('messageInput').value
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
})




{/* <form action="https://formsubmit.co/your@email.com" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <button type="submit">Send</button>
</form> */}