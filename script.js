function buttonclick(val){
    document.getElementById("screen").value+=val;

}
console.log("woeking")

function cleardisplay(){
    document.getElementById("screen").value=""
}
console.log("working")
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}