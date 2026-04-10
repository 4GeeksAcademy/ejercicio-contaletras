function contaLetras(palabra){
     const deletreo = palabra.split ('')
    const contador = []
       deletreo.forEach((letra) => {
        if (contador[letra]) {
             contador[letra] +=1 ;
        }else {
            contador[letra] = 1  ;      
        }
        })
     return contador ;
    } 
  
console.log(contaLetras("antonio")) ;
         
         
        
          
