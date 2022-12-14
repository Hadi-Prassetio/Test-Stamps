
const data = []
const result = []

for(let i=1;i<101;i++){

  data.push(i)
}

data.forEach(item=>{
  if(item % 3 ==0 && item % 5 == 0){
    item= "ApaBole"   
   }
  else if(item % 5 ==0){
    item = "Bole"
  }else if(item % 3 == 0){
    item = "Apa"
  }
  result.push(item)
})

console.log(result)
