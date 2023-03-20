var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var Textbox=document.getElementById("textbox");

function start(){
    Textbox.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    var Content=event.result[0][0].transcript;
    Textbox.innerHTML=Content;
    console.log(content)
    if(Content=="selfie"){
        speak();
    }

}
function speak(){
    var sintences=window.speechSynthesis;
    speak_data="tomando tu selfie en 5 segundos" ;
    var traducion=new SpeechSynthesisUtterance(speak_data);
    sintences.speak(traducion);
    Webcam.attach(camera);
    setTimeout(function(){
    take_photo();
save(); 
    },5000);
    
}
camera=document.getElementById("camera");
Webcam.set({width:360,
    height:250,
    image_format:'png',
    png_quality:90});
function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_photo"src="'+data_uri+'"/>';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_photo").src;
link.href=image;
link.click();
}