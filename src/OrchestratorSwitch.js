import React, { useEffect, useState } from "react";
import { Switch, useLocation } from "react-router-dom";
import { PageEnum } from "./constants";
import initialization from "./utils/initialization";
import FallbackLoading from "src/components/FallbackLoading";

function OrchestratorSwitch({ children }) {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function asyncInitialization() {
      await initialization();
      setLoaded(true);
    }
    asyncInitialization();
    if (location.pathname.includes(PageEnum.BUFFER)) {
      return;
    }
  }, [location]);
  if (!loaded) {
    return <FallbackLoading />;
  }
  return <Switch>{children}</Switch>;
}

export default OrchestratorSwitch;
