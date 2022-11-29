const comentText = document.querySelectorAll(".text");
const replyText = document.querySelectorAll(".reply--text");
const avatarImgComment = document.querySelectorAll(".avatar--comment");
const avatarImgReply = document.querySelectorAll(".avatar--reply");


//let src = obj.comments[0].user.image.webp;

for (let i = 0; i < comentText.length; i++) {
    comentText[i].innerHTML = obj.comments[i].content;
    avatarImgComment[i].src = obj.comments[i].user.image.webp;
    
    
}

for (let i = 0; i < replyText.length; i++) {
    replyText[i].innerHTML = obj.comments[1].replies[i].content;
    avatarImgReply[i].src = obj.comments[1].replies[i].user.image.webp;
    
}

function loop () {

    const userAvatar = document.querySelectorAll(".user--avatar");
    for (let i = 0; i < userAvatar.length; i++) {
        
        userAvatar[i].src = obj.currentUser.image.webp;
        console.log(i);
        
    }
}

loop();
