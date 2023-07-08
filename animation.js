// var progress = document.querySelectorAll(".skill-progress>div");
// var skillcontainer = document.getElementById("skills");
// initialize();
// function initialize(){
//     for(let bar of progress){
//         bar.style.width = 0 + '%';
//     }
// }
// window.addEventListener('scroll',wentskill);
// var animationdone = false;
// function animation(){
//     for(let bar of progress){
//         let targetvalue = bar.getAttribute('data-value');
//         let curwidth = 0;
//         let interval = setInterval(function (){
//             if(curwidth >= targetvalue){
//                 clearInterval(interval);
//                 return;
//             }
//             curwidth++;
//             bar.style.width = curwidth + '%';
//         },8); 
//     }
// }

// function wentskill(){
//     var coordinates = skillcontainer.getBoundingClientRect();
//     if(!animationdone && coordinates.top <= window.innerHeight){
//         animation();
//         animationdone = true;
//     }
//     else if(coordinates.top > window.innerHeight){
//         animationdone = false;
//         initialize();
//     }
// }

// next approach when you visit the bar then only it fires
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