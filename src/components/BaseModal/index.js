/* 
Base Modal, only show/hidden modal
don't implement logic of campaign
*/

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./index.module.scss";

const ANIMATION_DURATION = 400;

let timeout;

const activeStyle = {
  display: "flex",
  pointerEvents: "auto",
};
const inactiveStyle = {
  display: "none",
  pointerEvents: "none",
};

export default function Modal(props) {
  const { isOpen, onClose, className, children } = props;
  const [style, setStyle] = useState(inactiveStyle);

  useEffect(() => {
    timeout && clearInterval(timeout);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStyle(activeStyle);
    } else {
      document.body.style.overflow = "auto";
      if (style && style.display !== "none") {
        timeout = setTimeout(() => {
          setStyle(inactiveStyle);
        }, ANIMATION_DURATION);
      }
    }
  }, [isOpen]);

  function handleClose() {
    onClose && onClose();
  }

  return (
    <div
      className={classnames(styles.modal, className)}
      onClick={handleClose}
      style={style}
      disabled={!isOpen}
    >
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
