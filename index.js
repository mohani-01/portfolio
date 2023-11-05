// will be used to check if scrolling is caused by a href or scrolling 
let scroll = true;

// check if submission is completed
let submitted = false;

changeSection();

// get div container for View Code and View Webiste
document.querySelectorAll('.see').forEach(div => {
    // in each container get each button
    const hyperlink = div.querySelectorAll('a')

    // for each button prevent click event if button's opacity is below 0.8 
    // this is to prevent accidental click because the button is not visible until user hover on that page
    hyperlink.forEach(element => {
        element.addEventListener("click", (event) => {
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
    if (scroll ) {
        const navbar = document.getElementById('navbarNav');


        document.querySelectorAll('section').forEach(section => {
            const total = Math.floor(Math.abs(section.getBoundingClientRect().bottom) + (Math.abs(section.getBoundingClientRect().top)));
            const height = Math.floor(section.getBoundingClientRect().height);
            if (  total === height) {
                const name = section.dataset.name;
                const currentLi = navbar.querySelector(`.${name}`);

                changeNavbar(navbar, currentLi )
            }
        })
    }
   
}



const toggler = document.querySelector('.navbar-toggler')



// Get the navbar container
document.querySelector('.navbar-nav').querySelectorAll('a').forEach(a => {
    // For each nav-links clicked if the nav bar is collapsed make the page not covered by the navbar
    a.addEventListener('click', () => {
        if (!window.getComputedStyle(toggler).display === 'none') {
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
            changeClassName([none], "contact-form error")
            document.querySelector('#feedback').innerHTML = "All Fields are required";
           changeClassName([document.querySelector('#feedback')],"error-div");
       
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

    // No Error so send the email 

    // Sending the data
    fetch("https://formsubmit.co/ajax/646613eabd667d1f253d05d759e2ebef", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
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

            // "Your form is sumbmitted successfully and I appricetate that's I will contact you As Soon as possible"
            //Your form is submitted successfully, Thank you for contacting and I will get back you as soon as possible'. We have received your inquiry and will get back to you within two business days. In the interim, please visit our blog. We’ve chosen for you some of our most popular articles.
            // Thank you for contacting us. We have received your inquiry and will get back to you within two business days. In the interim, please visit our blog. We’ve chosen for you some of our most popular articles.
            document.querySelector('#feedback').innerHTML = "<strong> Thank you </strong> for contacting us and I will get back to you as soon as possible.";
            changeClassName([document.querySelector('#feedback')], "success-div");
            submitted = true;
          }
    })
    .catch(error => console.log(error));


});



function checkChange(empty) {

    // check until the page is submitted
    console.log(submitted)
    
    // for each empty field check if they are not empty.
    empty.forEach(field => {
        field.addEventListener('input', () => {
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

function validate(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var address = document.getElementById[email].value;
    return (reg.test(email) == false) 
  
}


function checkEmail(email) {

    email.addEventListener('input', () => {
            if (!submitted) {
                if (validate(email.value)) {
                    changeClassName([email], "contact-form success")   
                } else {
                // document.querySelector('#feedback').innerHTML = "l!";
                    changeClassName([email], "contact-form error")  
                }
            }
        })
    }


function changeNavbar(container, newlink) {
    container.querySelectorAll('a').forEach(link => {
        link.style.borderBottomColor = 'transparent';
    })
    newlink.style.borderBottomColor = 'green';
}



function changeClassName(inputs, values) {
    inputs.forEach(input => {
        input.className = "";
        input.className = values;
    })
}