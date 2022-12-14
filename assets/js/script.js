const button = document.querySelectorAll(".button");
const buttonPlus = document.querySelectorAll(".plus");
const buttonMinus = document.querySelectorAll(".minus");
const ratingValue = document.querySelectorAll(".rating--value");
let edit = document.querySelectorAll(".edit");
let userEdit = document.querySelectorAll(".user--edit");
let reply = document.querySelectorAll(".reply");
let editArray = 0;

//Crio uma div de reply, dentro dessa div, adiciono um botão de reply e o formulário
let id = 1;
let mention;

for (let i = 0; i < button.length; i++) {

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
            <button class="send update insert" onclick="saveComent()" type="submit">REPLY</button>
        </form>
        `;

        //puxei os parametros informados pelo evento e com ele descobri que consigo selecionar o box em que foi apertado o botão pela função path[1]
        //adicionei o comando para adicionar a nova div após o path[1]
        let event = e;
        event.path[4].after(newDiv);
        mention = event.path[5].id;
        loop();
    });
}

let send = document.querySelectorAll(".comment--up");

//cria o box do comentário principal
for (let i = 0; i < send.length; i++) {

    send[i].addEventListener('click', (e) => {

        let newDiv = document.createElement("div");
        newDiv.className = "col-sm-12 mb-4 teste display reply";
        newDiv.id = "user--coment";
        newDiv.innerHTML = `
    
    <div class="container--coment box paddingBox">
        <div class="rating rating--desktop">
            <img class="plus" src="images/icon-plus.svg" alt="icon plus">
            <output type="number" class="rating--value" id="rating">0</output>
            <img class="minus" src="images/icon-minus.svg" alt="icon minus">
        </div>
        <div class="user--data">
            <div class="user">
                <div class="user--info">
                    <img class="user--avatar avatar-width" src="" alt="user avatar">
                    <h1 class="user--id"></h1>
                    <h2 class="time">seconds ago</h2>
                </div>
                
                <div class="icons--desktop--flex">
                    <button class="delete" onclick="del()"><img src="images/icon-delete.svg" alt="delete">Delete</button>
                    <button class="edit user--edit" onclick="editar()"><img src="images/icon-edit.svg" alt="edit"> Edit</button>
                </div>
            </div>
            
            <div class="message">
                <output id="comment-insert"></output>
            </div>
        </div> 
    </div>   
    `;
        document.querySelector("body > main > .sendBox").before(newDiv);
        let event = e;
        mention = event.path[2].id;
        loop();
        setUserName();
        //createUserComment();
    });
};

//cria o comentário do usuário principal
function createUserComment() {

    let saveButton = document.querySelectorAll(".send--juliu");
    for (let i = 0; i < saveButton.length; i++) {
        saveButton[i].addEventListener('click', (e) => {

            editArray = i;
            let event = e;
            let caminho = event.path[2];
            let valueInput = document.getElementById("user--box--comment").value;
            localStorage.setItem(mention, valueInput);
            let outputValue = document.getElementById("comment-insert");
            outputValue.innerHTML = localStorage.getItem(mention);
        })

    }
};

//após escrever o comentário na caixa, ao clicar o botão de reply, a função abaixo é executada
function saveComent() {
    let saveButton = document.querySelectorAll(".insert");
    for (let i = 0; i < saveButton.length; i++) {
        saveButton[i].addEventListener('click', (e) => {

            editArray = i;
            let event = e;
            let caminho = event.path[2];
            let valueInput = document.getElementById("coment").value;
            localStorage.setItem(mention, valueInput);

            if (valueInput == "") {
                alert("Insert a message")
            } else {
                text(caminho, i);
                setUserName();
            }
        })
    }
}

//função que pega o comentário no localstorage e adiciona na div criada, através de um output
function text(caminho, i) {

    let userReply = document.querySelectorAll(".userReply");

    userReply[editArray].innerHTML = `

    <div class="rating rating--desktop">
        <img class="plus" src="images/icon-plus.svg" alt="icon plus">
        <output type="number" class="rating--value" id="rating">0</output>
        <img class="minus" src="images/icon-minus.svg" alt="icon minus">
    </div>
    <div class="user--data">
        <div class="user">
            <div class="user--info">
                <img class="user--avatar" src="" alt="user avatar">
                <h1 class="user--id"></h1>
                <h2 class="time">seconds ago</h2>
            </div>
            
            <div class="icons--desktop--flex">
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

    outputValue[editArray].innerHTML = localStorage.getItem(mention);
    mentionValue[editArray].innerHTML = "@" + mention + " ";
    loop();

}

//comando de edição, abre a caixa do input e adiciona o valor no localStorage 
function editar() {

    for (let i = 0; i < edit.length; i++) {

        edit[i].addEventListener('click', (e) => {

            let event = e;
            let caminho = event.path[3];
            mention = event.path[5].id;
            editArray = i;
            caminho.innerHTML = `
    
            <form class="sendBox--form" onsubmit="return false">
                <img class="user--avatar" src="" alt="user avatar">
                <label for="coment" class="box--comment">
                    <input type="text" name="coment" id="coment" class="box--comment--input" placeholder="Add a comment...">
                </label>
                <button class="send update" onclick="update()" type="submit">UPDATE</button>
            </form>
            `;

            let valueInput = document.getElementById("coment");
            valueInput.value = localStorage.getItem(mention);
            loop();
        });
    }
}

//após clicar em editar e escrever o comentário editado, ao clicar em update, a função abaixo é executada
function update() {
    let updateButton = document.querySelectorAll(".update");
    for (let i = 0; i < updateButton.length; i++) {
        updateButton[i].addEventListener('click', (e) => {
            

            let event = e;
            let caminho = event.path[3];
            let valueInput = document.getElementById("coment").value;
            localStorage.setItem(mention, valueInput);

            if (valueInput == "") {
                alert("Insert a message")
            } else {
                text(caminho, i);
                setUserName();
            }
        })
    }
}

//função para deletar o comentário
function del() {
    let element = document.querySelectorAll(".reply");
    let deleteButton = document.querySelectorAll(".delete")
    for (let i = 0; i < deleteButton.length; i++) {
        let deleteButton = document.querySelectorAll(".delete");

        deleteButton[i].addEventListener('click', () => {
            element[i].remove();

        })
    }
};

//increment rating value
for (let i = 0; i < buttonPlus.length; i++) {

    buttonPlus[i].addEventListener('click', () => {

        if (ratingValue[i].inert == false) {

            let value;
            value = ratingValue[i].value;
            value++;
            ratingValue[i].innerHTML = value;
            ratingValue[i].inert = true;
        }
    })
}

//decrement rating value

for (let i = 0; i < buttonMinus.length; i++) {

    buttonMinus[i].addEventListener('click', () => {

        if (ratingValue[i].inert == false) {

            let value;
            value = ratingValue[i].value;
            value--;
            ratingValue[i].innerHTML = value;
            ratingValue[i].inert = true;
        }
    })
}