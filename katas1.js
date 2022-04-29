function contandoNumerosNegativos(x){
  let numeros = 0
  
  for (let i = 0; i < x.length; i++) {
    if(x[i] < 0){
      numeros++
    }
  }
  
  return numeros
}


function somaNumerosNegativos(x){
  
  let numeros = numerosNegativos(x)
  
  let soma = 0
  
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
  }

  return soma
}

function numerosPares(x){
  let pares = []
  
  for (let i = 0; i <= x; i++) {
    
    if(i % 2 == 0){
      pares.push(i)
    }
    
  }

  return pares
}

function numerosNegativos(x){
  let numeros = []
  
  for (let i = 0; i < x.length; i++) {
    if(x[i] < 0){
      numeros.push(x[i])
    }
  }
  
  return numeros
}

function eMaiorQueoLength(x){
  
  soma = 0
  
  for (let i = 0; i < x.length; i++) {
    soma += x[i]
  }

  if(soma > x.length){
    return true
  }else{
    return false
  }

}

function maisFive(x){
  let array = []
  
  for (let i = 0; i < x.length; i++) {
    array.push(x[i] + 5)
  }
  return array
}

function media(x){
  let array = []
  
  let mediaa = 0
  
  let soma = 0
  
  for (let o = 0; o < x.length; o++){
    soma += x[o]
  }

  mediaa = soma / x.length

  for (let p = 0; p < x.length; p++) {
    if(x[p] > mediaa){
      array.push(x[p])
    }
  }

  return array
}

function contadorDeA(x){
  let numeros = 0
  
  for (let i = 0; i < x.length; i++) {
    if(x[i].toLowerCase() == "a"){
      numeros++
    }
  }
  
  return numeros
}

function contadorDeString(x){
  let numeros = 0
  
  for (let i = 0; i < x.length; i++) {
    for(let p = 0; p < x[i].length; p++){
        numeros++
    }
  }
  
  return numeros
}
function separadorDeStringImpar(x){
  let array = []
  
  for (let i = 0; i < x.length; i++) {
    if(x[i].length % 2 == 1){
      array.push(x[i])
    }
  }
  
  return array
}

function trocadorDeOPor0(x){
  let texto = ""
  
  for (let i = 0; i < x.length; i++) {
    
    if(x[i].toLowerCase() == "o"){
      texto += "0"
    }else{
      texto += x[i]
    }
  }
 
  return texto
}

function trocadorDeP(x){
  let texto = ""
  
  for (let i = 0; i < x.length; i++) {
    
    if(x[i] == "p"){
      texto += "P"
    }else{
      texto += x[i]
    }
  }
  return texto
}



//Chamando as funçoes
contandoNumerosNegativos([1,-1,2,])
somaNumerosNegativos([41,-3,-30,71])
numerosPares([1,2])
numerosNegativos([1,-1,2])
eMaiorQueoLength([1,2])
maisFive([1,2])
media([4,2])
contadorDeA("aba")
contadorDeString("aba")
separadorDeStringImpar(["aa","a"])
trocadorDeOPor0("oau")
trocadorDeP("par")