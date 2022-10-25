let menuIcon = document.getElementById('menu-icon')
let menuBar = document.getElementById("menu-bar")
let menuIcon2= document.getElementById("menu-icon2")
let sendBtn= document.getElementById("send-btn")
let textArea = document.getElementById("textArea")
let input= document.getElementById("input")

menuIcon.addEventListener("click", function () {
    
    menuBar.style.right = 0
    console.log("menubtn has been clicked")
})


menuIcon2.addEventListener("click", function () {
    
    menuBar.style.right = "-100%"
    console.log("menubtn2 has been clicked")
})

sendBtn.addEventListener("click",function () {
    // body
    if (input.value!=="" && textArea.value!=="") {
        alert("your message has been received and you will get a response soon")
        console.log("message sent")
    }else{
        alert ("please fill out the fields with your details")
    }
   
})