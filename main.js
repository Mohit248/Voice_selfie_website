var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("texbox").value;
    var utter_This = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_This);
    Webcam.attach(camera);

}

camera = document.getElementById("camera").value;
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});