
let result=document.getElementById("res")
function solve(val){
    result.value+=val
}
// function allclear(){
    
//     result.value=""
// } if you want to write a seperate function for AC

function dele(){
    result.value=result.value.slice(0,-1)
}
function eq(){
    let equat=eval(result.value)
    if(isNaN(equat)){
       result.value="nan"
    }else{
        result.value=equat
    }
}
