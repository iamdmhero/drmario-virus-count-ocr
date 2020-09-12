const videoSelectBtn = document.getElementById('video-select-btn');
videoSelectBtn.onclick = getVideoSources;
const videoElement = document.getElementsByTagName('video')[0];
// const imageCanvas = document.getElementById('imageCanvas');
// const resizedCanvas = document.getElementById('resizedCanvas');

const videoCanvas = document.getElementById('video-canvas');

// const leftCrop = document.getElementById('left-crop');
// const rightCrop = document.getElementById('right-crop');
// const topCrop = document.getElementById('top-crop');
// const bottomCrop = document.getElementById('bottom-crop');
// const threshold = document.getElementById('threshold');

const output = document.getElementById('output');

// let leftCropPx = leftCrop.valueAsNumber;
// let lastLeftCropPx = leftCropPx;
// let rightCropPx = rightCrop.valueAsNumber;
// let lastRightCropPx = rightCropPx;
// let topCropPx = topCrop.valueAsNumber;
// let lastTopCropPx = topCropPx;
// let bottomCropPx = bottomCrop.valueAsNumber;
// let lastBottomCropPx = bottomCropPx;
// 
// let lastRecognized = '00';

const sourceImages = [
  new ImageData(Uint8ClampedArray.from([255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255]), 6, 7),
  new ImageData(Uint8ClampedArray.from([255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255]), 7, 7),
  new ImageData(Uint8ClampedArray.from([255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,255,255,255,255,255,255,255,255]), 7, 7),
];

// let lastMinDiffValue = -1;

const lastRecognized = [];

const PLAYERS = [1, 2];
const DIGITS = [0, 1];

const COLORS = {
  'p1-d0': '#f00',
  'p1-d1': '#0f0',
  'p2-d0': '#00f',
  'p2-d1': '#c0c',
};

videoElement.addEventListener('play', () => {
  function step() {
    videoCanvas.width = videoElement.videoWidth;
    videoCanvas.height = videoElement.videoHeight;
    videoCanvas.getContext('2d').drawImage(videoElement, 0, 0, videoCanvas.width, videoCanvas.height);
    if (videoCanvas.width > 0) {
      for (const player of PLAYERS) {
        for (const digit of DIGITS) {
          const id = `p${player}-d${digit}`;
          const digitCropId = `digit-crop-${id}`;
          const leftCropPx = document.querySelector(`#${digitCropId} .left-crop`).valueAsNumber;
          const rightCropPx = document.querySelector(`#${digitCropId} .right-crop`).valueAsNumber;
          const topCropPx = document.querySelector(`#${digitCropId} .top-crop`).valueAsNumber;
          const bottomCropPx = document.querySelector(`#${digitCropId} .bottom-crop`).valueAsNumber;
          const width = videoCanvas.width - leftCropPx - rightCropPx;
          const height = videoCanvas.height - topCropPx - bottomCropPx;
          const imageData = videoCanvas.getContext('2d').getImageData(leftCropPx, topCropPx, width, height);
          const thresholdValue = threshold.valueAsNumber;
          const croppedCanvas = document.createElement('canvas');
          let tTopCrop, tBottomCrop, tLeftCrop, tRightCrop;
          tTopCrop = tBottomCrop = tLeftCrop = tRightCrop = -1;
          tLeftCrop = width;
          const transformedImageData = new ImageData(imageData.data.map((val, i) => {
            const index = i % 4;
            const x = Math.floor((i % (4 * width)) / 4);
            const y = Math.floor(i / (4 * width));
            switch (index) {
              case 0:
                const aboveThreshold = val > thresholdValue;
                if (!aboveThreshold) {
                  if (tTopCrop === -1) {
                    tTopCrop = y;
                  }
                  if (x < tLeftCrop) {
                    tLeftCrop = x;
                  }
                  if (x > tRightCrop) {
                    tRightCrop = x;
                  }
                  tBottomCrop = -1;
                } else {
                  if (tBottomCrop === -1) {
                    tBottomCrop = y;
                  }
                }
                return aboveThreshold ? 255 : 0;
              case 1:
                return imageData.data[i - 1] > thresholdValue ? 255 : 0;
              case 2:
                return imageData.data[i - 2] > thresholdValue ? 255 : 0;
              case 3:
                return 255;
            }
          }), width, height);
          croppedCanvas.width = width;
          croppedCanvas.height = height;
          croppedCanvas.getContext('2d').putImageData(transformedImageData, 0, 0);
          const newWidth = tRightCrop - tLeftCrop;
          const newHeight = tBottomCrop - tTopCrop;
          if (newWidth === 0 || newHeight === 0) {
            break;
          }
          const newImageData = croppedCanvas.getContext('2d').getImageData(tLeftCrop, tTopCrop, newWidth, newHeight);
          const previewCanvas = document.querySelector(`#${digitCropId} canvas`);
          previewCanvas.width = newWidth;
          previewCanvas.height = newHeight;
          previewCanvas.getContext('2d').putImageData(newImageData, 0, 0);
          const scale = 7 / newHeight;
          const resizedWidth = Math.round(newWidth * scale);
          const resizedHeight = 7;
          const resizedCanvas = document.createElement('canvas');
          resizedCanvas.width = resizedWidth;
          resizedCanvas.height = resizedHeight;
          resizedCanvas.getContext('2d').drawImage(previewCanvas, 0, 0, resizedWidth, resizedHeight);
          const resizedImageData = resizedCanvas.getContext('2d').getImageData(0, 0, resizedWidth, resizedHeight);
          const diffs = Array(sourceImages.length).fill(0);
          for (let i = 0; i < resizedImageData.data.length; i++) {
            const clamped = Math.round(resizedImageData.data[i] / 255) * 255;
            for (let j = 0; j < sourceImages.length; j++) {
              if (clamped != sourceImages[j].data[i]) {
                diffs[j]++;
              }
            }
          }
          let minDiff = 196;
          let minDiffValue = -1;
          for (let i = 0; i < diffs.length; i++) {
            if (diffs[i] < minDiff) {
              minDiff = diffs[i];
              minDiffValue = i;
            }
          }
          if (minDiffValue != -1 && (lastRecognized[id] != minDiffValue)) {
            document.getElementById(`output-${id}`).textContent = minDiffValue;
            lastRecognized[id] = minDiffValue;
          }
        }
      }
      // const width = videoCanvas.width - leftCropPx - rightCropPx;
      // const height = videoCanvas.height - topCropPx - bottomCropPx;
      // const imageData = videoCanvas.getContext('2d').getImageData(leftCropPx, topCropPx, width, height);
      // const thresholdValue = threshold.valueAsNumber;
      // let tTopCrop, tBottomCrop, tLeftCrop, tRightCrop;
      // tTopCrop = tBottomCrop = tLeftCrop = tRightCrop = -1;
      // tLeftCrop = width;
      // const transformedImageData = new ImageData(imageData.data.map((val, i) => {
      //   const index = i % 4;
      //   const x = Math.floor((i % (4 * width)) / 4);
      //   const y = Math.floor(i / (4 * width));
      //   switch (index) {
      //     case 0:
      //       const aboveThreshold = val > thresholdValue;
      //       if (!aboveThreshold) {
      //         if (tTopCrop === -1) {
      //           tTopCrop = y;
      //         }
      //         if (x < tLeftCrop) {
      //           tLeftCrop = x;
      //         }
      //         if (x > tRightCrop) {
      //           tRightCrop = x;
      //         }
      //         tBottomCrop = -1;
      //       } else {
      //         if (tBottomCrop === -1) {
      //           tBottomCrop = y;
      //         }
      //       }
      //       return aboveThreshold ? 255 : 0;
      //     case 1:
      //       return imageData.data[i - 1] > thresholdValue ? 255 : 0;
      //     case 2:
      //       return imageData.data[i - 2] > thresholdValue ? 255 : 0;
      //     case 3:
      //       return 255;
      //   }
      // }), width, height);
      // previewCanvas.width = width;
      // previewCanvas.height = height;
      // previewCanvas.getContext('2d').putImageData(transformedImageData, 0, 0);
      // const newWidth = tRightCrop - tLeftCrop;
      // const newHeight = tBottomCrop - tTopCrop;
      // if (newWidth === 0 || newHeight === 0) {
      //   requestAnimationFrame(step);
      //   return;
      // }
      // const newImageData = previewCanvas.getContext('2d').getImageData(tLeftCrop, tTopCrop, newWidth, newHeight);
      // imageCanvas.width = newWidth;
      // imageCanvas.height = newHeight;
      // imageCanvas.getContext('2d').putImageData(newImageData, 0, 0);
      // const scale = 7 / newHeight;
      // const resizedWidth = Math.round(newWidth * scale);
      // const resizedHeight = 7;
      // resizedCanvas.width = resizedWidth;
      // resizedCanvas.height = resizedHeight;
      // resizedCanvas.getContext('2d').drawImage(imageCanvas, 0, 0, resizedWidth, resizedHeight);
      // const resizedImageData = resizedCanvas.getContext('2d').getImageData(0, 0, resizedWidth, resizedHeight);
      // const diffs = Array(sourceImages.length).fill(0);
      // for (let i = 0; i < resizedImageData.data.length; i++) {
      //   const clamped = Math.round(resizedImageData.data[i] / 255) * 255;
      //   for (let j = 0; j < sourceImages.length; j++) {
      //     if (clamped != sourceImages[j].data[i]) {
      //       diffs[j]++;
      //     }
      //   }
      // }
      // let minDiff = 196;
      // let minDiffValue = -1;
      // for (let i = 0; i < diffs.length; i++) {
      //   if (diffs[i] < minDiff) {
      //     minDiff = diffs[i];
      //     minDiffValue = i;
      //   }
      // }
      // // console.log(minDiffValue);
      // if (minDiffValue != -1 && (lastMinDiffValue != minDiffValue)) {
      //   output.textContent = minDiffValue;
      //   lastMinDiffValue = minDiffValue;
      // }
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});

const { desktopCapturer, remote } = require('electron');
const { Menu } = remote;

async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ['window']
  });
  console.log(inputSources);

  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map(source => {
      return {
        label: source.name,
        click: () => selectSource(source)
      };
    })
  );


  videoOptionsMenu.popup();
}

let mediaRecorder; // MediaRecorder instance to capture footage
const recordedChunks = [];

// Change the videoSource window to record
async function selectSource(source, sourceId) {

  videoSelectBtn.innerText = source ? source.name : 'Default';

  const constraints = {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: sourceId ? sourceId : source.id
      }
    }
  };

  // Create a Stream
  const stream = await navigator.mediaDevices
    .getUserMedia(constraints);

  // Preview the source in a video element
  videoElement.srcObject = stream;
  await videoElement.play();

  // Create the Media Recorder
  const options = { mimeType: 'video/webm; codecs=vp9' };
  mediaRecorder = new MediaRecorder(stream, options);

  // Register Event Handlers
  // mediaRecorder.ondataavailable = handleDataAvailable;
  // mediaRecorder.onstop = handleStop;
  for (const player of PLAYERS) {
    for (const digit of DIGITS) {
      redrawCrop(player, digit);
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  selectSource(null, 'window:263176:0');
}

function updateCrop() {
  videoElement.setAttribute('style', `clip-path: inset(${topCropPx}px ${rightCropPx}px ${bottomCropPx}px ${leftCropPx}px); margin: -${topCropPx}px -${rightCropPx}px -${bottomCropPx}px -${leftCropPx}px;`);
}
// 
// updateCrop();
// 
// leftCrop.addEventListener('input', () => {
//   leftCropPx = leftCrop.valueAsNumber;
//   updateCrop();
// });
// rightCrop.addEventListener('input', () => {
//   rightCropPx = rightCrop.valueAsNumber;
//   updateCrop();
// });
// topCrop.addEventListener('input', () => {
//   topCropPx = topCrop.valueAsNumber;
//   updateCrop();
// });
// bottomCrop.addEventListener('input', () => {
//   bottomCropPx = bottomCrop.valueAsNumber;
//   updateCrop();
// });

function redrawCrop(player, digit) {
  const id = `p${player}-d${digit}`;
  const digitCropId = `digit-crop-${id}`;
  const leftCropPx = document.querySelector(`#${digitCropId} .left-crop`).valueAsNumber;
  const rightCropPx = document.querySelector(`#${digitCropId} .right-crop`).valueAsNumber;
  const topCropPx = document.querySelector(`#${digitCropId} .top-crop`).valueAsNumber;
  const bottomCropPx = document.querySelector(`#${digitCropId} .bottom-crop`).valueAsNumber;
  const canvas = document.getElementById(`crop-canvas-${id}`);
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  canvas.getContext('2d').setLineDash([5]);
  canvas.getContext('2d').strokeStyle = COLORS[id];
  canvas.getContext('2d').strokeRect(leftCropPx, topCropPx, canvas.width - rightCropPx - leftCropPx, canvas.height - bottomCropPx - topCropPx);
}

for (const player of PLAYERS) {
  for (const digit of DIGITS) {
    const id = `p${player}-d${digit}`;
    const digitCropId = `digit-crop-${id}`;
    document.querySelectorAll(`#${digitCropId} input`).forEach((input) => {
      input.addEventListener('input', () => {
        redrawCrop(player, digit);
      });
    })
  }
}
