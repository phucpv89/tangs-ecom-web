import React, { Component } from "react";

import Tracking from "src/utils/tracking";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error);
    console.log(errorInfo);
    Tracking.sendException(error, errorInfo, true);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <span>Hệ thống đang có lỗi, vui lòng thử lại sau.</span>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
