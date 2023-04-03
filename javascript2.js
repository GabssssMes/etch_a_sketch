function setUpPanel(pixel){
    let resolution=document.querySelector(".panel");
    resolution.innerHTML="";
    let mausdown=false;

    resolution.addEventListener("click",()=>{
        if(!mausdown) mausdown=true;
        else mausdown=false;
        
    });

    for(let i=0;i<pixel; i++){
        let row=document.createElement("div");
        row.setAttribute("class","row");
        for(let j=0;j<pixel; j++){
            let column=document.createElement("div");
            column.setAttribute("class","column");
            
            column.addEventListener("mousemove",()=>{
                if(mausdown){
                    paint(column);
                 }
                
            });
            
            row.appendChild(column); 
            
        }
        resolution.appendChild(row);  
    }
}
function setUpButtons(){
    const colorbuttons=document.querySelectorAll(".color");
    const resetbutton=document.getElementById("reset");
    const deletebutton=document.getElementById("delete");
    const rainbowbutton=document.querySelector(".rainbow");
    colorbuttons.forEach(button =>{
        button.addEventListener("click",()=>{
            color=button.id;
            mode="default";
        });
    });

    rainbowbutton.addEventListener("click",() =>{
        mode="rainbow";
    });

    resetbutton.addEventListener("click",() =>{
        setUpSite();
    });

    deletebutton.addEventListener("click",()=>{
        color="white";
        mode="default";
    });

}
function setUpSlider(){
    let slider = document.querySelector(".slider");
    let slidertext= document.getElementById("slidertext");
    slidertext.textContent=`${slider.value}x${slider.value}`;
    slider.oninput = function() {
        slidertext.textContent=`${slider.value}x${slider.value}`;
        setUpPanel(this.value);
    }
    return slider.value;
}
function setUpSite(){
    setUpPanel(setUpSlider());
    setUpButtons();
}
function paint(pixel){
    if(mode=="default") pixel.setAttribute("style",`background-color: ${color};`);
    else{
        let c1=Math.floor(Math.random()*255.9);
        let c2=Math.floor(Math.random()*255.9);
        let c3=Math.floor(Math.random()*255.9);
        color=`rgb(${c1}, ${c2}, ${c3})`;
        pixel.setAttribute("style",`background-color: ${color};`);
    }
}
window.onload=()=>{
    color="black";
    mode="default";
    setUpSite();

}