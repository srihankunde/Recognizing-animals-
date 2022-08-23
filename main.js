 function startClassification(){
     navigator.mediaDevices.getUserMedia({audio:true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json' , modelReady );

 }

 function modelReady(){
     classifier.classify(gotResults);
}
var dog=0;
var cat=0

function  gotResults(error,results){
     
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Detect voice is of "+results[0].label;
        document.getElementById("result_count").innerHTML="Detected dog :"+dog+"detected cat :"+cat;
        document.getElementById("result_count").style.color="rgb("+r+","+g+", "+b+")";
        document.getElementById("result_label").style.color="rgb("+r+","+g+", "+b+")";
        

        img1 = document.getElementById("animal");
        

        if(results[0].label == "Barking"){

            img1.src="bark.gif";
            dog=dog+1
            
        }

       else if(results[0].label == "Meowing"){

            img1.src="meow.gif";
            cat=cat+1
            
        }

        else{

            img1.src="listen.gif";

        }
        

        }

    }

       