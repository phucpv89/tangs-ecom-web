import React from "react";
import styles from "./index.module.scss";

function FallbackLoading() {
  return (
    <div className={styles.fallbackContainer}>
      <span>Đang tải trang ...</span>
    </div>
  );
}

export default FallbackLoading;
