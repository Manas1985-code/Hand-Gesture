prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'jpeg',
    jpeg_quality : 90
});

camera = document.getElementById('camera');

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log('ml5 version : ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vxl69k7iE/model.json', modelLaoded);

function modelLaoded()
{
    console.log('Model Loaded!!!!!');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = 'Your first hand gesture is ' + prediction_1;
    speak_data_2 = 'And the second gesture is ' + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);

    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById('gestureresutlt_1').innerHTML = results[0].label;
        document.getElementById('gestureresutlt_2').innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
    }
    if(results[0].label == '1')
    {
        document.getElementById('update_gesture_1').innerHTML = "&#9757;";
    }

    if(results[0].label == 'fist')
    {
        document.getElementById('update_gesture_1').innerHTML = "&#9994;";
    }
        
    if(results[0].label == '5')
    {
        document.getElementById('update_gesture_1').innerHTML = "&#9995;";
    }
    
    if(results[0].label == 'punch')
    {
        document.getElementById('update_gesture_1').innerHTML = "&#9996;";
    }
    
    if(results[0].label == '2')
    {
        document.getElementById('update_gesture_1').innerHTML = "&#128074;";
    }
    
    if(results[0].label == 'thumb')
    {
        document.getElementById('update_gesture_1').innerHTML = "&#128077;";
    }





    if(results[1].label == '1')
    {
        document.getElementById('update_gesture_2').innerHTML = "&#9757;";
    }

    if(results[1].label == 'fist')
    {
        document.getElementById('update_gesture_2').innerHTML = "&#9994;";
    }
        
    if(results[1].label == '5')
    {
        document.getElementById('update_gesture_2').innerHTML = "&#9995;";
    }
    
    if(results[1].label == 'punch')
    {
        document.getElementById('update_gesture_2').innerHTML = "&#9996;";
    }
    
    if(results[1].label == '2')
    {
        document.getElementById('update_gesture_2').innerHTML = "&#128074;";
    }
    
    if(results[1].label == 'thumb')
    {
        document.getElementById('update_gesture_2').innerHTML = "&#128077;";
    }
}