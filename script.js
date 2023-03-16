const bar=document.getElementById('bar');
const btn=document.getElementById('btn');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
    if (btn){
        btn.addEventListener('click',()=>{
            nav.classList.remove('active')
        })
}

const open = document.getElementById("open");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

open.addEventListener('click',()=>{
    modal.classList.add('show');
});

close.addEventListener('click',()=>{
    modal.classList.remove('show');
});