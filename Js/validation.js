function kiemtra1(){
    var ho = document.getElementById("ho");
    var ten = document.getElementById("ten");
    var ngay = document.getElementById("ngay");
    var email = document.getElementById("email");
    var password=document.getElementById("password");
    var error = document.getElementById("error");
    var errorMessage ="";
   
     if(ho.value ==""){
            errorMessage+="Họ không được để trống<br>";
     }

     if(ten.value==""){
        errorMessage+="Tên không được để trống<br>";
     }
     if(ngay.value==""){
        errorMessage+="Ngày không được để trống<br>";
     }
     if(email.value==""){
        errorMessage+="Email không được để trống<br>";
     }
     if(password.value==""){
        errorMessage+="Mật khẩu không được để trống<br>";
     }else if(password.value.length<6){
        errorMessage+="Mật khẩu ít nhất 6 ký tự";
     }
     if(errorMessage.length>0){
            error.innerHTML = errorMessage;
            return false;
     }else{
        error.innerHTML ="";
     }
}
