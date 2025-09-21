

const chatButton = document.getElementById('chatButton');
const chatbox = document.getElementById('chatbox');
const messageinput = document.getElementById('messageinput');



chatButton.onclick = function(){
    chatbox.style.display='block';
    messageinput.style.display='block'
    chatButton.style.display='none'

    setTimeout(() =>{
        addMessage('مرحبا كيف يمكنني مساعدتك؟','botMessage');
    },500);
}

function addMessage(message,sender){
    const newMessage = document.createElement('div');

    newMessage.classList.add('message',sender);
    newMessage.textContent = message;
    chatbox.appendChild(newMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
}
messageinput.addEventListener('keypress',function(e){
    if(e.key === 'Enter' && messageinput.Value !==''){
        const userMessage = messageinput.Value;
        addMessage(userMessage,'userMessage');
        messageinput.Value="";
        
        setTimeout(() =>{
            addMessage('انا هنا للمساعده!! كيف يمكنني مساعدتك؟','botMessage');
            
        },1000
        )

    }
})

let phone = document.getElementById('phone');
let github = document.getElementById('github');
let email = document.getElementById('email');
let linkedin = document.getElementById('linkedin');
let whatsapp = document.getElementById('whatsapp');



github.addEventListener('click', function(){
    window.open('https://github.com/Bavly-Nabil')
})

email.addEventListener('click', function(){
    window.open('https://bavlynabil422@gmail.com')

})

linkedin.addEventListener('click',function(){
    window.open('https://www.linkedin.com/in/bavly-nabil-431782351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')


})
whatsapp.addEventListener('click', function(){
    window.open('https://wa.me/01273187857?text')
})
