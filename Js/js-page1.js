function myFunction(x) {
    x.classList.toggle("change");
  }




  var images = [
    'images/banners/0.webp',
    'images/banners/1.webp',
    'images/banners/2.webp',
    'images/banners/3.webp',
  ]
var slide = document.getElementById("slide");
slide.innerHTML='';
for (let index = 0; index < images.length; index++) {
    const element = images[index];
    slide.innerHTML += `<img src="${element}" style="max-width: 100%; max-height:100%" /> `;
}
var current = 0;
function go(direction){
    //true = next
    //falst = prev

    // Lấy width hiện tại 
    var element = document.getElementById("slide");
    var positionInfo = element.getBoundingClientRect();
    var width = positionInfo.width;


    
    if(direction==true && current<images.length){
        current++;
    }else if(current=>0){
        current--;
    }
    if(current>images.length-1){
        slide.style.marginLeft = 0 + 'px';
        current=0;
    }
    if(current<0){
        slide.style.marginLeft = width*4 + 'px';
        current=images.length-1;
    }
    slide.style.marginLeft = -(current*width) + "px";
    console.log(current);

}
var flag=null;
function autoplay(){
    if(flag==null){
        flag = setInterval("go(true)",5000);
        document.getElementById("autop").className='stop';
        document.getElementById("autop").innerHTML='STOP';

        console.log(flag);
    }else{
        clearInterval(flag);
        document.getElementById("autop").className='auto';
        document.getElementById("autop").innerHTML='AUTO';
        flag=null;
    }
}
autoplay();

