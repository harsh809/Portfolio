var navmenutag = document.querySelectorAll(".nav-menu a");
var interval;
for(var i=0 ; i<navmenutag.length ; i++){
    navmenutag[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionid = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetsectionid);
        
        // interval = setInterval(movevertically,20,targetsection);
        interval = setInterval(function (){
            movevertically(targetsection);
        },20);
    });
}
function movevertically(targetsection){
    var coordinates = targetsection.getBoundingClientRect();
    console.log(coordinates);
    if(coordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    scrollBy(0,50);
}