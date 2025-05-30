// //random number 
let x = document.querySelector("#ele1");
x.addEventListener("mouseenter", function(){
  let r = Math.floor(Math.random()*1000);
  x.innerHTML = `<h1>${r}</h1>`;

})

x.addEventListener("mouseleave", function(){
  let r = Math.floor(Math.random()*100);
  x.innerHTML = `<h1>1</h1>`;

})

//red or green  colour
let y = document.querySelector("#ele2");
let clr = "red";
y.addEventListener("mouseenter", function()
{
  if( clr=="red")
{
    y.style.backgroundColor = "red";
    clr = "green";
}
   else if(clr=="green")
{
    y.style.backgroundColor = "green";
    clr = "blue";
}
  else
{
  y.style.backgroundColor = "blue";
  clr = "red";
}
}
)

 y.addEventListener("mouseleave", function()
{
y.style.backgroundColor = "white";

}
)

//random colour
let z = document.querySelector("#ele3");
z.addEventListener("mouseenter", function(){
   let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
     let r3 = Math.floor(Math.random()*256);
 z.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})

z.addEventListener("mouseleave", function(){
 z.style.backgroundColor = "white";
})

//change the colour if we touch 
let d  = document.querySelector("#ele4");
d.addEventListener("mouseenter", function(){
   x .style.backgroundColor = "red";
    y .style.backgroundColor = "green";
     z.style.backgroundColor =" blue";
 //d .style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})

d.addEventListener("mouseleave", function(){
 x.style.backgroundColor = "white";
  y.style.backgroundColor = "white";
   z.style.backgroundColor = "white";
})

