import { useState, useEffect } from "react";

const ratio = Math.round(window.devicePixelRatio);
function loadImage(src, onload, onerror) {
  console.log("loadImage: ", src);
  const image = new Image();
  image.src = src;
  image.onload = onload;
  image.onerror = onerror;
}

const useProgressiveImg = (low, medium, high) => {
  const [currentSrc, setCurrentSrc] = useState(null);
  let currentIndex = 3;
  function loadImages() {
    let arr;
    if (ratio >= 3) {
      arr = [high, medium, low];
    } else {
      arr = [medium, low];
    }

    arr
      .filter((src) => !!src)
      .forEach((src, index) => {
        loadImage(src, () => {
          if (index < currentIndex) {
            currentIndex = index;
            console.log("loadedImage: ", src);
            setCurrentSrc(src);
          }
        });
      });
  }
  useEffect(loadImages, [low, medium, high]);
  return [currentSrc, { blur: currentSrc === low }];
};

export default useProgressiveImg;
