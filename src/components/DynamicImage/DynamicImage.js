import React from "react";
import useProgressiveImg from "./useProgressiveImg";

function DynamicImage(props) {
  const { lowQuality, mediumQuality, highQuality } = props;
  if (!lowQuality || !mediumQuality || !highQuality) {
    return <img {...props} alt="" />;
  }
  return <ExpensiveImage {...props} />;
}

function ExpensiveImage({
  lowQuality,
  mediumQuality,
  highQuality,
  width,
  height,
  className,
}) {
  const [currentSrc, { blur }] = useProgressiveImg(
    lowQuality,
    mediumQuality,
    highQuality,
  );

  return (
    <img
      width={width}
      height={height}
      style={{
        filter: blur ? "blur(1px)" : "none",
        transition: blur ? "none" : "filter 0.1s ease-out",
      }}
      src={currentSrc}
      alt=""
      className={className}
    />
  );
}

export default DynamicImage;
