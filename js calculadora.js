// pego os elementos do li
var btn = document.querySelectorA11( ".key li"),
input = document .querySelectorA11 (".input-valor"),
operador = document .querySelectorAll(".operador");


for(var i = 0 ; i < btn.length; i++){}
    document.onkeypress = function (event){}
        for(var e=0; e <= 10; e++){
            if(key === (48=e)){
                input.innerHTML += e;

            }
        }

        switch(key){
            case 42:
                input.innerHTML += "*";
                break;
            case 43:
                 input.innerHTML += "+";
            case 45:
                input.innerHTML += "-";
                  break
            case 46: 
                 input.innerHTML += ".";
                 break
            case 47:
                input.innerHTML += "/";
                break
            case 13: 
            case 61:
              var equacao = input.innerHTML;
               
              
if(equacao){
     try{
          input.innerHTML = eval (equacao);
    }
    catch (e) {
        alert ("Erro na exprecao");
    }
 }
break;
case 67:
case 99:
     input.innerHTML = "";
    break;
    default:
    break;

         };

btn [i].addEventlistener ("click", function(){
    var btnVal = this.innerHTML,
         inputval = input.innerHTML;
     console.log(btnVal)

                   
    switch(btnVal){
        case  "c":
        input.innerHTML = ""
        break;

     }
 
 })





                        