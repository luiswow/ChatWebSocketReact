const d = new Date();

   export const createChatUserComponent = (user,message)=>{

   let divElement = document.createElement('div');
   divElement.setAttribute('class','direct-chat-msg');
   divElement.innerHTML = `
  
   <div class="direct-chat-info clearfix">
     <span class="direct-chat-name pull-left"> ${user} </span>
     <span class="direct-chat-timestamp pull-right">${d.getHours()} hours with ${ d.getMinutes()} minutes</span>
    </div>
    <img class="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image" />
    <div class="direct-chat-text">
     ${message}
     </div>
  
   `;

   return divElement;
      }

      export const createChatGuestComponent= ({message,user})=>{

        let divElement = document.createElement('div');
        divElement.setAttribute('class','message');
        divElement.innerHTML = `
        <div class="direct-chat-msg right">
                     <div class="direct-chat-info clearfix">
                       <span class="direct-chat-name pull-right">${user}</span>
                       <span class="direct-chat-timestamp pull-left">${d.getHours()} hours with ${ d.getMinutes()} minutes</span>
                     </div>
                     <img class="direct-chat-img" src="https://img.icons8.com/office/36/000000/person-female.png" alt="message user image" />
                     <div class="direct-chat-text">
                       ${message}
                     </div>
                   </div>`;

        return divElement;
      
      }