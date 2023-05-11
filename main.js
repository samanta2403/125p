difference=0;
right_WristX=0;
left_WristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50)

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet=ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}

function modelDone(){
    console.log('PoseNet Is Initialized And Loaded');
}

function draw(){

    background('#5196e3');
    document.getElementById("font_side").innerHTML = " Font size of the text will be = "+difference+"px";
    fill('00ff0a');
    textSize(difference);
    text('samanta',50,400)
}

function gotPoses(results,error){
    if(results.length > 0)
    {
        console.log(results)

        right_Wrist_x = results[0].pose.rightWrist.x;
        left_Wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_Wrist_x - right_Wrist_x);
        
        console.log("rightwrist_x ="+results[0].pose.rightWrist.x+" rightwrist_y ="+results[0].pose.rightWrist.y)
        console.log("lefttwrist_x ="+results[0].pose.leftWrist.x+" leftwrist_y ="+results[0].pose.leftWrist.y)


    }

    if (error) {
        console.log(error);
    }
}