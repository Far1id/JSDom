let plusbtn = document.getElementById('plusbtn')
let minusbtn = document.getElementById('minusbtn')

let p = document.querySelectorAll('p')

// console.log(p);
// console.log(minusbtn);
// console.log(plusbtn);

let pSize = 20;

plusbtn.addEventListener('click', function(){
    p.forEach(elem => {
        pSize++;
        elem.style.fontSize = `${pSize}px `; 
    });
})

minusbtn.addEventListener('click', function(){
    p.forEach(elem => {
        pSize--;
        elem.style.fontSize = `${pSize}px `; 
    });
})


let applybtn = document.querySelector('#apply-btn') 

applybtn.addEventListener('click',function(){
    
    let inputcolor = document.querySelector('#color-input').value

    p.forEach(el => {
        el.style.color = inputcolor;
    })
})
