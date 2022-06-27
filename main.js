song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

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

function draw() {
    Image(video, 0, 0, 600, 500);

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    fill("#008080");
    stroke("#008080");

    if (scoreRightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);

        song2.stop();

        if (song1_status == false) {
            song1.play()
            document.getElementById("song").innerHTML = "Playing - Enemy";
        }
    }
    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);

        song1.stop();

        if (song2_status == false) {
            song1.play()
            document.getElementById("song").innerHTML = "Playing - Immortals";
        }
    }
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}