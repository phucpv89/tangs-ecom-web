import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "./store";
import { HelmetProvider } from "react-helmet-async";
import FallbackLoading from "src/components/FallbackLoading";
import ErrorBoundaryPage from "src/components/ErrorBoundary";
import OrchestratorSwitch from "./OrchestratorSwitch";
import { PageEnum } from "./constants";
import "./themes/index.scss";

const LandingPage = lazy(() => import("./pages/LandingPageContainer"));
const UserGuide = lazy(() => import("./pages/GuidePageContainer"));
const BufferPage = lazy(() => import("./pages/BufferPageContainer"));
function Root() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ErrorBoundaryPage>
          <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
            <Suspense fallback={<FallbackLoading />}>
              <OrchestratorSwitch>
                <Route exact path={PageEnum.USER_GUIDE} component={UserGuide} />
                <Route
                  exact
                  path={PageEnum.LANDING_PAGE}
                  component={LandingPage}
                />
                <Route
                  exact
                  path={PageEnum.BUFFER_PAGE}
                  component={BufferPage}
                />
              </OrchestratorSwitch>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundaryPage>
      </HelmetProvider>
    </Provider>
  );
}

export default Root;
