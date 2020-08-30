const btn = document.querySelector("#comparar");

btn.addEventListener("click", function(event){
    event.preventDefault();
    const form = document.getElementById("form");
    const text1 = document.getElementById("text1").value;
    const text1Lower = text1.toLowerCase()
    const text2 = document.getElementById("text2").value;
    const text2Lower = text2.toLowerCase()
    
    
    if( text1Lower === text2Lower){
        const res = "O texto combina";
        const div = document.getElementById("resultado");        
        div.innerText = res ;
    } else {
        const res = "texto incompleto ou não combina";
        const div = document.getElementById("resultado");        
        div.innerText = res ;
    }

  

});





