document.write("<hr>");

var contador=0;

for(var x=1; x<=20;x++){

    contador++;

    if(x%3==0&&x%5==0){
        document.write(x+" (Múltiplo de 3) (Múltiplo de 5)<br>");
    }else if(x%3==0){
        document.write(x+" (Múltiplo de 3)<br>");
    }else if(x%5==0){
        document.write(x+" (Múltiplo de 5)<br>");
    }else if(x%7==0){
        document.write(x+" (Múltiplo de 7)<br>");
    }else{
        document.write(x+"<br>");
    }
    
    if(contador%10==0){
        document.write("<hr>");
    }

}