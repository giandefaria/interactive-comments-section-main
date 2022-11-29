const button = document.querySelectorAll(".button");
const reply = document.create

let array = [];
//Crio uma div de reply, dentro dessa div, adiciono um botão de reply e o formulário

for (let i = 0; i < button.length; i++) {
  
    array.push(i)
    console.log(array[i]);

    button[i].addEventListener('click', (e) => {
        
        let newDiv = document.createElement("div");
        newDiv.className = "col-sm-10 offset-sm-2 mt-4 box";
        newDiv.id = "reply";
        newDiv.innerHTML = `
        
        <form onsubmit="return false">
            <img class="user--avatar" src="" alt="user avatar">
            <label for="coment">
                <input type="text" name="coment" id="coment" placeholder="Add a comment...">
            </label>
            <button onclick="saveComent()" type="submit">save</button>
        </form>
        `;
  
        //puxei os parametros informados pelo evento e com ele descobri que consigo selecionar o box em que foi apertado o botão pela função path[1]
        //adicionei o comando para adicionar a nova div após o path[1]
        console.log(e);
        let event = e;
        console.log(event.path[1]);
        event.path[4].after(newDiv);
        loop();
    });
}

function criarComentário () {

    let newDiv = document.createElement("div");
    newDiv.className = "col-sm-10 offset-sm-2 box";
    newDiv.id = "reply";
    newDiv.innerHTML = `
    
    <form onsubmit="return false">
        <label for="coment">
            <input type="text" name="coment" id="coment" placeholder="Add a comment...">
        </label>
        <button onclick="saveComent()" type="submit">save</button>
    </form>
    `;
    document.querySelector("body > main > .teste").after(newDiv);

};


//função que salva o comentário no localstorage e cria um output com o comentário escrito 
function saveComent () {

    let valueInput = document.getElementById("coment").value;
    localStorage.setItem("test", valueInput);

    if (valueInput == "") {
        alert("Insert a message")
    } else {
         text();
      }

}

//função que pega o comentário no localstorage e adiciona na div criada, através de um output
function text () {

    document.querySelector("#reply").innerHTML = `
    <img class="user--avatar" src="" alt="user avatar">
    <button onclick="edit()">Edit</button>
    <button onclick="remove()">Delete</button>
    <output id="finalcoment"></output>
    
    `;
   
    let outputValue = document.getElementById("finalcoment");
    outputValue.innerHTML = localStorage.getItem("test");
    loop();
    
}


//comando de edição, abre a caixa do input e adiciona o valor no localStorage 
function edit () {

    document.querySelector("#reply").innerHTML = `
    
    <form onsubmit="return false">
        <img class="user--avatar" src="" alt="user avatar">
        <label for="coment">
            <input type="text" name="coment" id="coment" placeholder="Add a comment...">
        </label>
        <button onclick="saveComent()" type="submit">save</button>
    </form>
    `;

    let valueInput = document.getElementById("coment");
    valueInput.value = localStorage.getItem("test");
    loop();
}

function remove () {
    let element = document.getElementById("reply");
    element.remove();
};

