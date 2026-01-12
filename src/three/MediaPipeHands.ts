import { Hands, Results } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

export class MediaPipeHands {
  private hands: Hands;
  private camera: Camera;

  constructor(
    video: HTMLVideoElement,
    onResults: (results: Results) => void
  ) {
    this.hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    this.hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    this.hands.onResults(onResults);

    this.camera = new Camera(video, {
      onFrame: async () => {
        await this.hands.send({ image: video });
      },
      width: 1280,
      height: 720,
    });
  }

  start() {
    this.camera.start();
  }
}
