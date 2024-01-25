var progressbar = document.querySelectorAll(".skill-progress>div");
for(var bar of progressbar){
    initialize(bar);
}
function initialize(bar){
    bar.setAttribute("data-visited",false);
    bar.style.width = 0 + '%';
}
window.addEventListener('scroll',checkscroll);
function checkscroll(){
    for(let bar of progressbar){
        let coordinates = bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited") == "false") && (coordinates.top <= (window.innerHeight-coordinates.height))){
            bar.setAttribute("data-visited",true);
            fillbar(bar);
        }
        else if(coordinates.top > window.innerHeight){
            bar.setAttribute("data-visited",false);
            initialize(bar);
        }
    }
} 

function fillbar(bar){
    let targetvalue = bar.getAttribute('data-value');
    let curwidth = 0;
    let interval = setInterval(function (){
        if(curwidth >= targetvalue){
            clearInterval(interval);
            return;
        }
        curwidth++;
        bar.style.width = curwidth + '%';
    },8); 
} 