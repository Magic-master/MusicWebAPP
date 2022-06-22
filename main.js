song1 = "";
song2 = "";

song1_status = "";
song2_staus = "";

scorRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWrisY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    song1 = loadSound("Enemy.m4a");
    song2 = loadSound("Immortals.m4a");
}

function setup() {
    canvas = createCanvas(600, 500);
    canavs.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristsX = " + leftWristX + " leftWristY = " + leftWristY);
    }
}