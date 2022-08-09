function myfun(){
    let a=document.getElementById("n1").value;
    a=Number(a);
    let sum=0;
    let count=0;
    while(a>0){
        sum=sum+a%10;
        a=a/10;
        a=Math.trunc(a);
        count=count+1;
    }
    if(count==5){
        document.getElementById("square").style.width=sum+"px";
        document.getElementById("square").style.height=sum+"px";
        let rad=sum/5;
        document.getElementById("square").style.borderRadius=rad+"px";
      
    }else{
        document.getElementById("p1").style.color="red";
        document.getElementById("p1").innerHTML="Please enter 5 digits.";
		alert("Error: Enter Five Digit");
        document.getElementById("square").style.width="0px";
        document.getElementById("square").style.height="0px";
 
    }
	
    
}