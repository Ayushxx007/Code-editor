let output=document.querySelector("#output");

let htmlcode, csscode,jscode="";

let textarea=document.querySelectorAll(".leftpart textarea");

textarea.forEach((el,index)=>{

    el.addEventListener("keyup",()=>{
        if(index==0){
            htmlcode=el.value;

        }
        if(index==1){
            csscode=el.value; 

        }
        if(index==2){
            jscode=el.value;

        }
        output.contentDocument.body.innerHTML=htmlcode;
output.contentDocument.head.innerHTML=`<style>${csscode}</style>`;
output.contentWindow.eval(jscode);
    })


})