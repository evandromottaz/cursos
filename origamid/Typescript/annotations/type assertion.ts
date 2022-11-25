const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player");
const video4 = document.querySelector(".player");

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume;
