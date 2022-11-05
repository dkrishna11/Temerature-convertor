let cel=document.getElementById("celsius");
let feh=document.getElementById("fehrenheit");

    // blur and focus starts

cel.addEventListener("focus", function(){
    cel.style.backgroundColor="#fa9c1b";
});

cel.addEventListener("blur", function(){
    cel.style.backgroundColor="white";
});

feh.addEventListener("focus", function(){
    feh.style.backgroundColor="#fa9c1b";
});

feh.addEventListener("blur", function(){
    feh.style.backgroundColor="white";
});

// blur and focus ends

// formula

cel.addEventListener("input", function(){
    let c=this.value;
    let f=(c*9/5)+32;
    feh.value=f;
});

feh.addEventListener("input", function(){
    let f=this.value;
    let c=(f-32)*5/9;
    cel.value=c;
});