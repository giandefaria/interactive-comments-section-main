const button = document.querySelectorAll(".button");
let edit = document.querySelectorAll(".edit");
let reply = document.querySelectorAll(".reply");

let editArray = 0;
//Crio uma div de reply, dentro dessa div, adiciono um botão de reply e o formulário

let teste
let id = 1;
let mention;

for (let i = 0; i < button.length; i++) {
  
    //array.push(i)
    //console.log(array[i]);

    button[i].addEventListener('click', (e) => {
        let newDiv = document.createElement("div");
        newDiv.className = "col-sm-11 offset-sm-1 mt-4 reply box sendBox  userReply";
        newDiv.id = "reply";
        newDiv.innerHTML = `
        
        <form onsubmit="return false" class="sendBox--form">
            <img class="user--avatar" src="" alt="user avatar">
            <label for="coment" class="box--comment">
                <span class="span"></span><input type="text" name="coment" id="coment" class="box--comment--input" placeholder="Add a comment...">
            </label>
            <button class="send content insert" onclick="saveComent()" type="submit">REPLY</button>
        </form>
        `;
  
        //puxei os parametros informados pelo evento e com ele descobri que consigo selecionar o box em que foi apertado o botão pela função path[1]
        //adicionei o comando para adicionar a nova div após o path[1]
        console.log(e);
        let event = e;
        console.log(event.path[1]);
        event.path[4].after(newDiv);
        mention = event.path[5].id;
        loop();
    });
}

function criarComentario () {

    let newDiv = document.createElement("div");
    newDiv.className = "col-sm-12 mb-4 teste";
    newDiv.id = "user--coment";
    newDiv.innerHTML = `
    
    <div class="rating"></div>
    <div class="user--data">
        <div class="user">
            <div class="user--info">
                <img class="user--avatar" src="" alt="user avatar">
                <h1 class="user--id">amyrobson</h1>
                <h2 class="time">1 month ago</h2>
            </div>
            
            <div class="d-flex">
                <button class="delete" onclick="del()"><img src="images/icon-delete.svg" alt="delete">Delete</button>
                <button class="edit" onclick="editar()"><img src="images/icon-edit.svg" alt="edit"> Edit</button>
            </div>
        </div>
        
        <div class="message">
            <output id="finalcoment insert"></output>
        </div>
    </div>    
    `;
    document.querySelector("body > main > .sendBox").before(newDiv);
    loop();
};

/*let content;
let caminhoEditar;
function localizar () {
    content = document.querySelectorAll(".content")
    console.log("ok")

    for (let i = 0; i < content.length; i++) {
        
        content[i].addEventListener('click', (e) => {
            let evento = e;
            console.log(evento);

            caminhoEditar = evento.path[2];
        })
        
    }
};*/

//setInterval(localizar, 1000);


//função que salva o comentário no localstorage e cria um output com o comentário escrito 
/*function saveComent () {

    let valueInput = document.getElementById("coment").value;
    localStorage.setItem(mention, valueInput);

    if (valueInput == "") {
        alert("Insert a message")
    } else {
         text(editArray);
         setUserName();
         refreshArray();
      }

}*/

function saveComent () {
    let saveButton = document.querySelectorAll(".insert");
    for (let i = 0; i < saveButton.length; i++) {
        saveButton[i].addEventListener('click', (e) => {

            editArray = i;
            let event = e;
            console.log(event);
            let caminho = event.path[2];
            let valueInput = document.getElementById("coment").value;
            localStorage.setItem(mention, valueInput);
        
            if (valueInput == "") {
                alert("Insert a message")
            } else {
                 text(caminho, i);
                 setUserName();
                 refreshArray();
              }


        })

    
    }

}

//função que pega o comentário no localstorage e adiciona na div criada, através de um output
function text (caminho, i) {
    console.log(caminho, i);
    let reply = document.querySelectorAll(".userReply");

    for (let i = 0; i < reply.length; i++) {
        
        let arrayReply = i;
        
    }
    reply[editArray].innerHTML = `

    <div class="rating">
        <img class="plus" src="images/icon-plus.svg" alt="icon plus">
        <output type="number" id="rating">0</output>
        <img class="minus" src="images/icon-minus.svg" alt="icon minus">
    </div>
    <div class="user--data">
        <div class="user">
            <div class="user--info">
                <img class="user--avatar" src="" alt="user avatar">
                <h1 class="user--id">amyrobson</h1>
                <h2 class="time">1 month ago</h2>
            </div>
            
            <div class="d-flex">
                <button class="delete" onclick="del()"><img src="images/icon-delete.svg" alt="delete">Delete</button>
                <button class="edit" onclick="editar()"><img src="images/icon-edit.svg" alt="edit"> Edit</button>
            </div>
        </div>
        
        <div class="message">
            <span class="span"></span><output class="finalcoment insert"></output>
        </div>
    </div>    
    
    `;
   
    let outputValue = document.querySelectorAll(".insert");
    let mentionValue = document.querySelectorAll(".span");
    console.log(outputValue);

    outputValue[editArray].innerHTML = localStorage.getItem(mention);
    mentionValue[editArray].innerHTML = "@" + mention + " ";
 


    loop();
    
}


//comando de edição, abre a caixa do input e adiciona o valor no localStorage 



function editar () {
    
    refreshArray();

    for (let i = 0; i < edit.length; i++) {
        
        edit[i].addEventListener('click', (e) => {

            let event = e;
   
            console.log(event);
            let caminho = event.path[3];
            mention = event.path[5].id;
            console.log(i);
            editArray = i;
            caminho.innerHTML = `
    
            <form class="sendBox--form" onsubmit="return false">
                <img class="user--avatar" src="" alt="user avatar">
                <label for="coment" class="box--comment">
                    <input type="text" name="coment" id="coment" class="box--comment--input" placeholder="Add a comment...">
                </label>
                <button class="send content" onclick="update()" type="submit">UPDATE</button>
            </form>
            `;
        
            let valueInput = document.getElementById("coment");
            valueInput.value = localStorage.getItem(mention);
            loop();


        });
        
    }
}    

function update () {
    let updateButton = document.querySelectorAll(".content");
    for (let i = 0; i < updateButton.length; i++) {
        updateButton[i].addEventListener('click', (e) => {

            
            let event = e;
            console.log(event);
            let caminho = event.path[3];
            let valueInput = document.getElementById("coment").value;
            localStorage.setItem(mention, valueInput);
        
            if (valueInput == "") {
                alert("Insert a message")
            } else {
                 text(caminho, i);
                 setUserName();
                 refreshArray();
              }


        })

    
    }



}



function del ( ) {
    let element = document.querySelectorAll(".reply");
    let deleteButton = document.querySelectorAll(".delete")
    for (let i = 0; i < deleteButton.length; i++) {
        let deleteButton = document.querySelectorAll(".delete");
        console.log(i);
        deleteButton[i].addEventListener('click', () => {
        console.log(deleteButton[i]);
        element[i].remove();

        })
        
    }
    
};
