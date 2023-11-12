//al click di start genero la griglia
document.getElementById("genera").addEventListener("click",function(){

    GeneraGrid();
})

//funzione che genera la griglia
function GeneraGrid(){
    //svuoto lo stato precedente


    const grid = document.getElementById("grid");
    grid.innerHTML = "";


    const numBox = document.querySelector("#level").value;




    //genero tot quadrati all'interno della griglia
    for( i = 1 ; i <= numBox; i ++ ) {
        let box = generaBox(i);
        box.style.width = `calc(100% / ${Math.sqrt(numBox)})`;
        box.style.height = `calc(100% / ${Math.sqrt(numBox)})`;

        //funzione che mi gestisce il click dai quadrati
        box.addEventListener("click" , function(){
            box.classList.add("clicked");
            console.log(box.innerHTML);

        } )

        grid.appendChild(box);


    }

    
    
    
}


//funzione che genera i quadrati
function generaBox(num){

        const box = document.createElement("div")
        box.classList.add("box");
        box.innerText = num;

        return box;
}