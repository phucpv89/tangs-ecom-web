import ReactGA from "react-ga";

class GATrackingManager {
  constructor() {
    this.TRACKING_ID_ZPI = "UA-79910400-9";
    this.isInitialized = false;
  }
  init() {
    if (process.env.REACT_APP_ENV === "production") {
      ReactGA.initialize(this.TRACKING_ID_ZPI);
      this.isInitialized = true;
      window.console.error = (msg) => {
        this.sendExceptionMessage(msg);
      };
    }
  }
  sendPageView(page) {
    if (!this.isInitialized) {
      console.log("sendPageView", page);
      return;
    }
    ReactGA.ga("send", "pageview", page);
  }
  sendExceptionMessage(description = "An error ocurred", fatal = false) {
    if (!this.isInitialized) {
      console.log("An error ocurred", description);
      return;
    }
    const errorMessage = `${description}, pagePath=${window.location}`;
    ReactGA.exception({
      description: errorMessage,
      fatal,
    });
  }
  sendException(error, errorInfo, fatal = false) {
    if (error) {
      this.sendExceptionMessage(String(error), fatal);
    } else if (errorInfo && errorInfo.componentStack) {
      this.sendExceptionMessage(String(errorInfo.componentStack), fatal);
    }
  }
}

export default new GATrackingManager();
