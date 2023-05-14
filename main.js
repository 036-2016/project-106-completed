function startClasification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/J1XXeUc2J/model.json", modelLoaded);
}

function modelLoaded()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }

   else
   {
    console.log(results);
    ranodom_num_r=Math.floor(Math.random()*255)+1;
    ranodom_num_g=Math.floor(Math.random()*255)+1;
    ranodom_num_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML= "I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML= "Accuracy - " + (results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color="rgb("+ranodom_num_r+","+ranodom_num_g+","+ranodom_num_b+")";
document.getElementById("result_confidence").style.color="rgb("+ranodom_num_r+","+ranodom_num_g+","+ranodom_num_b+")";

img1 = document.getElementById("animal1");
img2 = document.getElementById("animal2");
img3 = document.getElementById("animal3");
img4 = document.getElementById("animal4");

if (results[0].label=="Cat")
{
img1.src = "cat.gif";
img2.src = "Dog.jpg";
img3.src = "lion.jpg";
img4.src = "crowed.jpg";
}

else if (results[0].label=="Dog")
{
img1.src = "cat.jpg";
img2.src = "dog.gif";
img3.src = "lion.jpg";
img4.src = "crowed.jpg";
}

else if (results[0].label=="Lion")
{
img1.src = "cat.jpg";
img2.src = "Dog.jpg";
img3.src = "lion-roar.gif";
img4.src = "crowed.jpg";
}

else
{
img1.src = "cat.gif";
img2.src = "Dog.jpg";
img3.src = "lion.jpg";
img4.src = "crowd.gif";
}

}
}