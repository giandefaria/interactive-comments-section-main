const button = document.getElementsByClassName("teste");
const reply = document.create


//Crio uma div de reply, dentro dessa div, adiciono um botão de reply e o formulário
function criarComentário () {

    let newDiv = document.createElement("div");
    newDiv.className = "col-md-9 offset-md-3 box";
    newDiv.id = "reply";
    newDiv.innerHTML = `
    
    <form onsubmit="return false">
        <label for="coment">
            <input type="text" name="coment" id="coment" placeholder="Add a comment..." required>
        </label>
        <button onclick="saveComent()" type="submit">save</button>
    </form>
    `;
    document.querySelector("body > main > .teste").after(newDiv);

};


//função que salva o comentário no localstorage e cria um output com o comentário escrito 
function saveComent () {

    console.log("funcionando")
    let valueInput = document.getElementById("coment").value;
    localStorage.setItem("test", valueInput);
    text();

}

//função que pega o comentário no localstorage e adiciona na div criada, através de um output
function text () {

    document.querySelector("#reply").innerHTML = `
    
    <button onclick="edit()">Edit</button>
    <button onclick="remove()">Delete</button>
    <output id="finalcoment"></output>
    
    `;
   
    let outputValue = document.getElementById("finalcoment");
    outputValue.innerHTML = localStorage.getItem("test");
    
}


//comando de edição, abre a caixa do input e adiciona o valor no localStorage 
function edit () {

    document.querySelector("#reply").innerHTML = `
    
    <form onsubmit="return false">
        <label for="coment">
            <input type="text" name="coment" id="coment" placeholder="Add a comment..." required>
        </label>
        <button onclick="saveComent()" type="submit">save</button>
    </form>
    `;

    let valueInput = document.getElementById("coment");
    valueInput.value = localStorage.getItem("test");
}

function remove () {
    let element = document.getElementById("reply");
    element.remove();
};