document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll(".description").forEach(div => {

        div.addEventListener('mouseover', () => {
            const see = div.querySelector('.see');
            const parent = div.parentElement;
            parent.addEventListener('animationend', () => {
                see.style.display = 'block';
            })




        })
        div.addEventListener('mouseout', () => {
            const see = div.querySelector('.see');
            const parent = div.parentElement;
            parent.addEventListener('transitionend', () => {

                see.style.display = 'none';
            })
        })
    })



    document.addEventListener('scrollend', () => {
    //    document.querySelector('body').style.backgroundColor = '';
    })
})


