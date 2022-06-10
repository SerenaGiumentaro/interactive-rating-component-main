const submit = document.getElementById('submit')
const rateElements = document.querySelectorAll('.rating')
const rateState = document.querySelector('.rate-state')
const thanks = document.querySelector('.thanks')
const rateDisplay = document.getElementById('rate')
let rate = undefined;
let clicked = false;

// rate elements setting 
for(let elem of rateElements){
    elem.addEventListener('click', () => {
        if (clicked == false){
            for (let rate of rateElements){
                if (rate.classList.contains('rate-choosen')){
                    rate.classList.remove('rate-choosen')
                }
            }
            elem.classList.add('rate-choosen')
            rate = elem.textContent
            clicked = true
        }else{
            elem.classList.remove('rate-choosen')
            clicked = false
        }

    })
}

submit.addEventListener('click', () => {
    if(rate == undefined){
        alert('Per favore inserire una scelta')
    }else{
        rateState.style.display = 'none';
        thanks.style.display = 'flex'
        rateDisplay.textContent = rate
    }
})
