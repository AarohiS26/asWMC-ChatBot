
const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
let userMessage = null;

const createMessageElement = (content, className) =>{
  const div = document.createElement("div")
  div.classList.add("msg", className);
  div.innerHTML = content;
  return div;
}
const outgoingMessage = () =>{
  userMessage = typingForm.querySelector(".input").value.trim();
  
  if(!userMessage)return;
    
  const html =`<div class="msgcontent">
        <img src="user.PNG" alt="user image" class="avatar">
        <p class="msg"> </p>
    </div>` ;
  
  const outgoingMessageDiv = createMessageElement(html, "outgoing") ;
  outgoingMessageDiv.querySelector(".msg").innerText = userMessage;
    chatList.appendChild(outgoingMessageDiv);
}

typingForm.addEventListener("submit",(e)=>{
  e.preventDefault();

   outgoingMessage();
})



