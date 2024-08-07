
const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
let userMessage = null;
// const API_KEY = "AIzaSyATOGIi4qj7M-z9N3QSa7o04g18Y-17z5Q";
// const API_url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const createMessageElement = (content, className) =>{
  const div = document.createElement("div")
  div.classList.add("msg", className);
  div.innerHTML = content;
  return div;
}


// const generateAPIResponse = async() => {
//   try{
//     const response = await fetch(API_url,{
//       method:"POST",
//       headers: {"Content-Type": " application/json"},
//       body:JSON.stringify({
//         contents:[{
//           role:"user",
//           parts: [{ msg : userMessage}]

//         }]
//       })
//     });
//     const data= await response.json();
//     const apiResponse = data?.candidates[0].content[0].parts[0].msg;
//     console.log(apiResponse)
//   }
///   catch(error){console.log(error);}
// }
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





