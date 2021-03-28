import React, { useState, useEffect } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";
import { ReactComponent as IconSLL } 
  from "./assets/icon_systems_other_sll_tls.svg";
import { ReactComponent as IconPCI } 
  from "./assets/icon_systems_other_pci_dss.svg";

function CertificateBlock({ className }) {
  return (
    <div className={classnames(styles.certificate, className)}>
      <IconPCI />
      <IconSLL />
    </div>
  );
}

export default CertificateBlock;
