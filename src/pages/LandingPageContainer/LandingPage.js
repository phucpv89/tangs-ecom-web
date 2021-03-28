import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { PageEnum } from "src/constants";

import CertificateBlock from "src/components/CertificateComponent";
import BaseModal from "src/components/BaseModal";
import DynamicImage from "src/components/DynamicImage";

import {
  decrement,
  increment,
  startupAsync,
  selectCount,
} from "./counterSlice";

function LandingPage() {
  const { counter, startup } = useSelector(selectCount);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  function renderCounter() {
    return (
      <>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <button
          className={styles.button}
          aria-label="startupAsync"
          onClick={() => dispatch(startupAsync())}
        >
          {"startupAsync"}
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {"openModal"}
        </button>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>{`startup: ${startup}`}</span>
        <NavLink className={styles.link} to={PageEnum.USER_GUIDE}>
          <span>USER_GUIDE</span>
        </NavLink>
        {renderCounter()}
        <CertificateBlock />
        <DynamicImage
          width={200}
          height={100}
          // lowQuality={require("./assets/top_christmas.png")}
          // mediumQuality={require("./assets/top_christmas@2x.png")}
          // highQuality={require("./assets/top_christmas@3x.png")}
        />
      </header>
      <BaseModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div />
      </BaseModal>
    </div>
  );
}
export default LandingPage;
