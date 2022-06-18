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