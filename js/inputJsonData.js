const comentText = document.querySelectorAll(".text");
const replyText = document.querySelectorAll(".reply--text");

for (let i = 0; i < comentText.length; i++) {
    comentText[i].innerHTML = obj.comments[i].content
    
}

for (let i = 0; i < replyText.length; i++) {
    replyText[i].innerHTML = obj.comments[1].replies[i].content;
    
}
