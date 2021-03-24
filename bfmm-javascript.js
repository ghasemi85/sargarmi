function iner5(){
    document.getElementById("texttime").innerHTML = "5 ثانیه صبر کنید";
    setTimeout(iner4, 1000)
}
function iner4(){
    document.getElementById("texttime").innerHTML = "4 ثانیه صبر کنید";
    setTimeout(iner1, 1000)
}
function iner1(){
    document.getElementById("texttime").innerHTML = "3 ثانیه صبر کنید";
    setTimeout(iner2, 1000)
}
function iner2(){
    document.getElementById("texttime").innerHTML = "2 ثانیه صبر کنید";
    setTimeout(iner3, 1000)
}
function iner3(){
    document.getElementById("texttime").innerHTML = "1 ثانیه صبر کنید";
    setTimeout(iner0, 1000)
}
function iner0(){
    document.getElementById("texttime").innerHTML = "0 ثانیه صبر کنید";
    setTimeout(linksite, 1000)
}
function linksite(){
    location.href = "https://idpay.ir/m1385";
}
function mysite(){
    location.href = "http://mr-gh.ir";
}