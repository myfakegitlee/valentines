let greeting=document.getElementById("greeting-section")
let question=document.getElementById("question-section")
let paragraph=document.getElementById("paragraph-section")

let nameText = document.getElementById("name")
let nextButton = document.getElementById("next-button")
let yesButton = document.getElementById("yes")
let noButton = document.getElementById("no")
let afterno=document.getElementById("afterno")


nextButton.addEventListener("click",function(){
    greeting.style.display="none";
    question.style.display="block";
})

noButton.addEventListener("click",function(){
    afterno.style.display="block";
    setTimeout(function(){
        afterno.style.display="none";
    },1000);
})

yesButton.addEventListener("click",function(){
    paragraph.style.display="block";
    question.style.display="none";
})
