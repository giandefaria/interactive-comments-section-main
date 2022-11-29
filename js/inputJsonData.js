const comentText = document.querySelectorAll(".text");
const replyText = document.querySelectorAll(".reply--text");
const avatarImgComment = document.querySelectorAll(".avatar--comment");
const avatarImgReply = document.querySelectorAll(".avatar--reply");
const idNameComment = document.querySelectorAll(".id--comment");
const idNameReply = document.querySelectorAll(".id--reply");


//let src = obj.comments[0].user.image.webp;

for (let i = 0; i < comentText.length; i++) {
    comentText[i].innerHTML = obj.comments[i].content;
    avatarImgComment[i].src = obj.comments[i].user.image.webp;
    idNameComment[i].innerHTML = obj.comments[i].user.username;
    
    
}

for (let i = 0; i < replyText.length; i++) {
    replyText[i].innerHTML = obj.comments[1].replies[i].content;
    avatarImgReply[i].src = obj.comments[1].replies[i].user.image.webp;
    idNameReply[i].innerHTML = obj.comments[1].replies[i].user.username;
    
}

function loop () {

    const userAvatar = document.querySelectorAll(".user--avatar");
    const userId = document.querySelectorAll(".user--id")
    for (let i = 0; i < userAvatar.length; i++) {
        
        userAvatar[i].src = obj.currentUser.image.webp;
        userId[i].innerHTML = obj.currentUser.username;
        console.log(i);
        
    }
}

loop();
