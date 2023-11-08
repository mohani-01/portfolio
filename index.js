// will be used to check if scrolling is caused by a href or scrolling 
let scroll = true;

// check if submission is completed
let submitted = false;    

// start displaying element's inside About me section
startAboutMe()
// make where the window is display in and arrange navbar accordingly
changeSection();


// get div container for View Code and View Webiste
document.querySelectorAll('.see').forEach(div => {
    // in each container get each button
    const hyperlink = div.querySelectorAll('a')

    // for each button prevent click event if button's opacity is below 0.8 
    hyperlink.forEach(element => {
        element.addEventListener("click", (event) => {

            // this is to prevent accidental click because the button is not visible until user hover on that page
            if (parseFloat(window.getComputedStyle(div).getPropertyValue('opacity')) < 0.8 ) {
                event.preventDefault()
            }
        })
    });
})

// get the navbar link contiainer
const navbar = document.getElementById('navbarNav');

navbar.querySelectorAll('a').forEach(ahref => {
    // get all a href element's and if they are clicked change scroll variable to false 
    // to remove unnecessary css effect on the navbar elements
    ahref.addEventListener('click', () => {
        scroll = false
        // change style of current navbar 
        changeNavbar(navbar, ahref)
        
        window.addEventListener('scrollend', () => {
            scroll = true
        })

    })
})

// listen for scroll and change current section
window.addEventListener('scroll', () => {
    changeSection()
})


function changeSection() {
    // if the event not caused by hyperlink
    if (scroll) {
        // get the navbar container
        const navbar = document.getElementById('navbarNav');
        // get all the section
        document.querySelectorAll('section').forEach(section => {
            const total = Math.floor(Math.abs(section.getBoundingClientRect().bottom) + (Math.abs(section.getBoundingClientRect().top)));
            const height = Math.floor(section.getBoundingClientRect().height);
            // if the section is inside window display
            if (  total === height) {
                // get which section it is and make change on Navbar
                const name = section.dataset.name;
                const currentLi = navbar.querySelector(`.${name}`);

                changeNavbar(navbar, currentLi )
            }
        })
    }
}

// get bootsrap's togggler
const toggler = document.querySelector('.navbar-toggler')

// Get the navbar container
document.querySelector('.navbar-nav').querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        // For each nav-links clicked if the nav bar is collapsed make the page not covered by the navbar
        if (!(window.getComputedStyle(toggler).display === 'none')) {
            toggler.click()
        } 
    })
})

// resize the message page in contact-me section
document.getElementById('messageInput').addEventListener("input", (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 24 + 'px';     
})

// contact me page submission
document.getElementById('send').addEventListener('click', (event) => {
     event.preventDefault()
     // make the submittion varible false
     submitted = false;

     // get all the elements inside the form
    const name =  document.getElementById('nameInput');
    const email = document.getElementById('emailInput');
    const message = document.getElementById('messageInput');

    // create an array to go for each of them 
    const data = [name, email, message]

    //  empty array for empty element in the above fields
    let empty = new Array();

    
    // check if there are empty field
    data.forEach(info => {
        if ( info.value.trim() === '') {
            empty.push(info);
        }
    })

    // if there are empty fields
    if (empty.length > 0) {
        // change their style and give user Text description
        empty.forEach(none => {
            // change class name so give user visual effect 
            changeClassName([none], "contact-form error")
            changeClassName([document.querySelector('#feedback')],"error-div");
            // Give user Textual description about what happen
            document.querySelector('#feedback').innerHTML = "All Fields are required!";
       
        }) 

        // continuously listen for change
        checkChange(empty) 
        return;

    }


    // Change the style of email field and give user textual description if email is invalid
    if (validate(email.value)) { 
        changeClassName([email], "contact-form error")
        document.querySelector('#feedback').innerHTML = "Invaild E-mail!";
        changeClassName([document.querySelector('#feedback')], "error-div");

        // continously listen for change
        checkEmail(email);
        return;
    }


    // No error so sending the data
    fetch("https://formsubmit.co/ajax/646613eabd667d1f253d05d759e2ebef", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            // send name, email, and message
            name: name.value,
            email: email.value,
            message: message.value
        })
    })
    .then(response => response.json())
    .then(data => {

        //  returning a Thank you message for the user if it is successful
        if (data.success ) {
            email.value = '';
            name.value = '';
            message.value = '';

            changeClassName([data], "contact-form")

            // Show success message
            document.querySelector('#feedback').innerHTML = "<strong> Thank you </strong> for contacting us and I will get back to you as soon as possible.";
            changeClassName([document.querySelector('#feedback')], "success-div");

            // change submitted variable so checkChange and checkEmail stop checking input fields
            submitted = true;
          }
    })
    .catch(error => console.log(error));


});


function checkChange(empty) {
    
    // for each empty field check if they are not empty.
    empty.forEach(field => {
        field.addEventListener('input', () => {
            // if submitted only false changing their input field border color
                if (!submitted) {
                    if (field.value.trim().length > 0) {
                        changeClassName([field], "contact-form success")
                    } else {
                        changeClassName([field], "contact-form error")
                    }
                }
            })
        })
    }


function checkEmail(email) { 

    email.addEventListener('input', () => {
        // Check if the form is in the process fo submission
            if (!submitted ) {
                if (validate(email.value)) {
                    changeClassName([email], "contact-form success")   
                } else {
                // document.querySelector('#feedback').innerHTML = "l!";
                    changeClassName([email], "contact-form error")  
                }
            }
        })
    }


// check if the email is vaild or not 
function validate(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var address = document.getElementById[email].value;
    return (reg.test(email) == false) 
  
}


function changeNavbar(container, newlink) {
    // remove navbar-hover: class name which change display of nav-link in navbar from every element and 
    container.querySelectorAll('a').forEach(link => {
        link.classList.remove('navbar-hover')
    })

    // Only add it to the current section
    newlink.classList.add('navbar-hover');
}


// change class name
function changeClassName(inputs, values) {
    inputs.forEach(input => {
        input.className = "";
        input.className = values;
    })
}



// Visual effect at the start on load and reload
function startAboutMe() {

    // get each letter of Hello world
    const helloWorld = [...document.querySelector('.display-container').querySelectorAll('.display')]
    // then display then consecutively 
    for (let i = 0, N=helloWorld.length; i < N; i++) {
        setTimeout(function timer() {
            helloWorld[i].style.display = 'block';
        }, i * 250);
    }

    // start waving the hand and then display the name and full stack section
    setTimeout(() => {
        document.querySelector('.hand').style.animationName ='wave';
        document.querySelector('.detail-container').style.opacity = '1';
    }, 3000)

    // display  the detail text in about me section
    setTimeout(() => {
        document.querySelector('.specific').style.opacity = '1';
    }, 5000)

}