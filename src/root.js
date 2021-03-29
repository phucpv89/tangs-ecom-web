import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "./store";
import { HelmetProvider } from "react-helmet-async";
import FallbackLoading from "src/components/FallbackLoading";
import ErrorBoundaryPage from "src/components/ErrorBoundary";
import OrchestratorSwitch from "./OrchestratorSwitch";
import { PageEnum } from "./constants";

const BrandComponent = lazy(() => import("./pages/Brand"));
const UserGuide = lazy(() => import("./pages/GuidePageContainer"));

function Brand() {
  return (
    <div>
      <h1>Brand</h1>
    </div>
  );
}

function Root() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ErrorBoundaryPage>
          <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
            <Suspense fallback={<FallbackLoading />}>
              <OrchestratorSwitch>
                <Route path={PageEnum.USER_GUIDE} component={UserGuide} />
                <Route path={"/brand"} component={Brand} />
                <Route
                  exact
                  path={PageEnum.LANDING_PAGE}
                  component={BrandComponent}
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
