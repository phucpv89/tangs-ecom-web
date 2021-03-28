import React, { useEffect } from "react";
import { isBrowser } from "react-device-detect";
import QRCode from "qrcode.react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import UrlUtils from "src/utils/url";
import CertificateComponent from "src/components/CertificateComponent";

const ZALO_DEEP_LINK =
  process.env.REACT_APP_HOME_URL || "https://zalopay.com.vn/";

export default function BufferPage() {
  const location = useLocation();
  useEffect(() => {
    // Tracking screen
  }, []);

  function handleNavToApp() {
    // const deepLink = UrlUtils.buildCampaignDeepLinkFromLocation(location);
    // window.location.href = deepLink;
    window.location.href = ZALO_DEEP_LINK;
  }

  function renderQRCode() {
    return (
      <div className={styles.bufferDesktopQR}>
        <QRCode
          includeMargin
          size={200}
          renderAs={"svg"}
          value={ZALO_DEEP_LINK}
          imageSettings={{
            src: `${process.env.PUBLIC_URL}/zalopay.svg`,
            height: 16,
            width: 16,
            excavate: true,
          }}
        />
      </div>
    );
  }

  if (isBrowser) {
    return (
      <div class={styles.bufferDesktopContainer}>
        <div className={styles.bufferDesktopNote}>
          <p>Mở Zalo, quét mã QR để tham gia ngay!</p>
          <small>
            Chương trình chỉ hỗ trợ khi tham gia trên điện thoại di động.
          </small>
          {renderQRCode()}
          <CertificateComponent className={styles.bufferDesktopBottom} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <button className={styles.bufferBtn} onClick={handleNavToApp}>
          <span>THAM GIA NGAY!</span>
        </button>
      </div>
    </div>
  );
}
