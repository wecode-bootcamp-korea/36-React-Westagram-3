function chatting (event) {
    const input = document.querySelector(".chatInput");
    const chatList =document.querySelector('.chat');
    event.preventDefault();

    const createDiv = document.createElement("div");
    createDiv.className = "create";
    const createP = document.createElement('p');
    createP.className = "createP";
    createP.innerText = 'juno97: ' + input.value;
    const createBtn = document.createElement("button");
    createBtn.className = "createBtn"
    createBtn.innerHTML = "삭제"
    createBtn.addEventListener("click",(event)=>{
        const del = event.target.parentElement;
        del.remove()
    })

    createDiv.appendChild(createP);
    createDiv.appendChild(createBtn);
    chatList.appendChild(createDiv);
    input.value = "";
}

export default chatting;