var count=0;
var b = setInterval(()=>hide(),600)
function hide() {
    document.getElementById("comments").style = "display:none";
	count++;
	if(count==100){
	clearInterval(b);
	}
}


