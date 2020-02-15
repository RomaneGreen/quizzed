function translatePigLatin(str) {
    let vowels = ['a','e','i','o','u']
    let word = '';
    let strA = str.split("")
     let ayLength = strA.length + 1
  //console.log(strA.length)
   
  if(!vowels.includes(strA[0])) {
    strA.push(strA[0])
    strA[0] = ""
  }
  
  while (strA.length !== ayLength ) {
  
    strA.push("ay")
    
  }
  
  console.log(strA.join(""))
  }
  
  translatePigLatin("california");