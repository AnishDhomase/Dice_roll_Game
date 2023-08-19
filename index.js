var p1=Math.random();
p1=p1*6;
p1=Math.floor(p1) + 1;

var p2=Math.random();
p2=p2*6;
p2=Math.floor(p2) + 1;


if(p1==1){
    document.querySelector("#r-2  #c-2").classList.remove("hide");
}
else if(p1==2){
    document.querySelector("#r-1  #c-1").classList.remove("hide");
    document.querySelector("#r-3  #c-3").classList.remove("hide");
}
else if(p1==3){
    document.querySelector("#r-1  #c-1").classList.remove("hide");
    document.querySelector("#r-2  #c-2").classList.remove("hide");
    document.querySelector("#r-3  #c-3").classList.remove("hide");
}
else if(p1==4){
    document.querySelector("#r-1 #c-1").classList.remove("hide");
    document.querySelector("#r-1 #c-3").classList.remove("hide");
    document.querySelector("#r-3  #c-1").classList.remove("hide");
    document.querySelector("#r-3  #c-3").classList.remove("hide");
    
}
else if(p1==5){
    document.querySelector("#r-1 #c-1").classList.remove("hide");
    document.querySelector("#r-1 #c-3").classList.remove("hide");
    document.querySelector("#r-3  #c-1").classList.remove("hide");
    document.querySelector("#r-3  #c-3").classList.remove("hide");
    document.querySelector("#r-2  #c-2").classList.remove("hide");
}
else if(p1==6){
    document.querySelector("#r-1 #c-1").classList.remove("hide");
    document.querySelector("#r-1  #c-3").classList.remove("hide");
    document.querySelector("#r-2 #c-1").classList.remove("hide");
    document.querySelector("#r-2  #c-3").classList.remove("hide");
    document.querySelector("#r-3 #c-1").classList.remove("hide");
    document.querySelector("#r-3  #c-3").classList.remove("hide");
}


if(p2==1){
    document.querySelector("#r--2  #c--2").classList.remove("hide");
}
else if(p2==2){
    document.querySelector("#r--1  #c--1").classList.remove("hide");
    document.querySelector("#r--3  #c--3").classList.remove("hide");
}
else if(p2==3){
    document.querySelector("#r--1  #c--1").classList.remove("hide");
    document.querySelector("#r--2  #c--2").classList.remove("hide");
    document.querySelector("#r--3  #c--3").classList.remove("hide");
}
else if(p2==4){
    document.querySelector("#r--1 #c--1").classList.remove("hide");
    document.querySelector("#r--1 #c--3").classList.remove("hide");
    document.querySelector("#r--3  #c--1").classList.remove("hide");
    document.querySelector("#r--3  #c--3").classList.remove("hide");
    
}
else if(p2==5){
    document.querySelector("#r--1 #c--1").classList.remove("hide");
    document.querySelector("#r--1 #c--3").classList.remove("hide");
    document.querySelector("#r--3  #c--1").classList.remove("hide");
    document.querySelector("#r--3  #c--3").classList.remove("hide");
    document.querySelector("#r--2  #c--2").classList.remove("hide");
}
else if(p2==6){
    document.querySelector("#r--1 #c--1").classList.remove("hide");
    document.querySelector("#r--1  #c--3").classList.remove("hide");
    document.querySelector("#r--2 #c--1").classList.remove("hide");
    document.querySelector("#r--2  #c--3").classList.remove("hide");
    document.querySelector("#r--3 #c--1").classList.remove("hide");
    document.querySelector("#r--3  #c--3").classList.remove("hide");
}




if(p1>p2){
    document.querySelector("#result").textContent="p1 win !"
}
else if(p2>p1){
    document.querySelector("#result").textContent="p2 win !"
}
else{
    document.querySelector("#result").textContent="match tied !"
}

