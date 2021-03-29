import Tracking from "src/utils/tracking";

function initEruda() {
  return new Promise((reslove) => {
    const script = document.createElement("script");
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function () {
      window.eruda.init();
      reslove();
    };
    script.onerror = function () {
      reslove();
    };
  });
}

function showInformation() {
  const {
    REACT_APP_PROJECT_NAME: name,
    REACT_APP_PROJECT_VERSION: version,
  } = process.env;
  console.log(`${name}:${version}`);
}

async function asyncInitialization() {
  Tracking.init();
  if (/dev=true/.test(window.location)) {
    await initEruda();
  }
  showInformation();
}

window.console.error = (msg) => {
  console.log("onError", msg);
  Tracking.sendExceptionMessage(msg);
};

export default asyncInitialization;
