var a =["mom","dady","me","sister","brother"];
var b =["mom.png","dad.png","me.png","sister.jpg","brother.jpg"];
var c =0;
function next(){
document.getElementById("name1").innerHTML=a[c];
document.getElementById("book").src=b[c];
c++;
}
