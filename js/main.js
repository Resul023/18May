randomDot(20,430,400);
let areaSize = document.querySelector('.area ')
let circleMove = document.querySelector('.area .circle')
let isValue = false;
window.addEventListener('keydown',function(i){
    if(i.keyCode == 16){
        isValue = true;
    }
    
})
window.addEventListener('keyup',function(i){
    if(i.keyCode == 16){
        isValue = false;
    }
})

window.addEventListener('click',function(i){

    if((i.offsetX-40<=areaSize.offsetWidth-circleMove.offsetWidth && i.offsetX-40>=0)&&(i.offsetY-40<=areaSize.offsetHeight-circleMove.offsetHeight&&i.offsetY-40>=0)){
        circleMove.style.left = (i.offsetX-40) +'px';
        circleMove.style.top = (i.offsetY-40) + 'px';
    }

})

let speed = 3;
window.addEventListener('keydown',function(i){
    
    console.log(Math.random())
    
    if(isValue){
        speed = 10 ;

    }
    else{
        speed = 3;
    }
   
    if(i.keyCode == 39){
        
        if(areaSize.offsetWidth-circleMove.offsetWidth>(circleMove.offsetLeft+speed))
        {
            circleMove.style.left =circleMove.offsetLeft +speed+'px'
        }
        else{
            circleMove.style.left = (areaSize.offsetWidth-circleMove.offsetWidth)+'px';
        }
        
        
    }
    else if(i.keyCode == 37){

        
        if( (circleMove.offsetLeft-speed)>0 ){
            circleMove.style.left = circleMove.offsetLeft-speed+'px'
        }
        else{
            circleMove.style.left = 0 +'px'
        }
        

    }

    else if(i.keyCode==38){
        if(( circleMove.offsetTop-speed)>0 ){
            circleMove.style.top = circleMove.offsetTop-speed+'px'
        }
        else{
            circleMove.style.top = 0+'px'
        }
        
    }
    else if(i.keyCode==40){
        if((areaSize.offsetHeight-circleMove.offsetHeight)>(circleMove.offsetTop+speed)){
            circleMove.style.top = circleMove.offsetTop+speed+'px'
        }
        else{
            circleMove.style.top =areaSize.offsetHeight-circleMove.offsetHeight +'px'
        }
        
    }

    

})


function randomDot(count,maxTop,maxLeft){
    let areaAdd = document.getElementById('areaId')
    for(let i=0 ;i<count;i++){
        let newDot = document.createElement('div');
        newDot.classList.add('newDots');

        let dotTop;
        do{

            dotTop = Math.ceil(Math.random()*1000)

        }
        while(dotTop>maxTop)

        let dotLeft;
        do{

            dotLeft = Math.ceil(Math.random()*1000)

        }
        while(dotLeft>maxLeft)
        newDot.style.left = dotLeft +'px';
        newDot.style.top = dotTop +'px';

        areaAdd.appendChild(newDot);
    }

}









