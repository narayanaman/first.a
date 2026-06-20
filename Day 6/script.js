 var a=document.getElementById("first");
 console.log(a.innerHTML);

 var b=document.getElementsByClassName("box");
 console.log(b[0].innerHTML);

 let c=document.getElementsByTagName("p");
 console.log(c[0].innerHTML);

 let d=document.querySelector("#test");
 console.log(d.innerHTML);

 let e=document.querySelectorAll("p.second");
 console.log(e[0].innerHTML);

 for(i=0; i<e.length; i++){
    e[i].innerHTML=i+ "Hello This New Text....";
 }
 