const btn = document.querySelector("#comparar");

btn.addEventListener("click", function(event){
    event.preventDefault();
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;

    if(text1.length === text2.length){
         const comparacao = text1.localeCompare(text2)
         console.log(comparacao)

    }else{
        console.log("texto incompleto")
    }

     


});

