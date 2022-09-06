var currentSize;
var goto =0;


function next(){
 
   currentSize = document.getElementById("slide");
    goto += currentSize.clientWidth;
    if(goto>(currentSize.clientWidth)*7){
            goto = (currentSize.clientWidth)*7;
    }
    document.getElementById("slide").scrollTo({
            top :0,
            left: goto,
            behavior: 'smooth'

    });
}


function prev(){
   currentSize = document.getElementById("slide");
    goto -= currentSize.clientWidth;
    if(goto<0){
            goto = 0;
    }
    document.getElementById("slide").scrollTo({
            top :0,
            left: goto,
            behavior: 'smooth'

    });
}

function goto1(i){
   
  
    currentSize = document.getElementById("slide");
    goto = currentSize.clientWidth;
    document.getElementById("slide").scrollTo({
        top :0,
        left: goto*i,
        behavior: 'smooth'

});
}