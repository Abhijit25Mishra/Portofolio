function loadingpageanimation(){
    setTimeout(() => {
        var xyz = window.open("abc.html","_self");
    }, 2000);
}
function onout(){
    setTimeout(()=>{
        var xyz = window.open("index.html","_self");
    }, 1000);
}