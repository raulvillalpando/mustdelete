/* 
function changeDeepestDiv(niuString){
    let element = document.body,
    flag = true;
    for(;flag;){
        if(element.firstElementChild == null){
            flag = false;
            element.innerHTML = niuString;
        }
        else{
            element = element.firstElementChild;
        }
    }
    console.log("Texto cambiado");
    return true;

} */

function showPar(){
  
    let contador = 1;
    while(document.getElementById("div_" + contador) != null){
        if(contador % 2 == 0){
            document.getElementById("div_" + contador).innerHTML = "Pares activos";
        }
        contador ++;
    }

}

function showNon(){
  
    let contador = 1;
    while(document.getElementById("div_" + contador) != null){
        if(contador % 2 != 0){
            document.getElementById("div_" + contador).innerHTML = "Nones activos";
        }
        contador ++;
    }

}
