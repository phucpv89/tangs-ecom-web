import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";

function GuidePage(props) {
  console.log("UserGuide", props.location.pathname);
  return (
    <div>
      <b>User Guide</b>
      <Switch>
        <Route path={"/guide/page3"} component={Page3} />
        <Route path={"/guide/"} component={Page2} />

      </Switch>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <b>Page2</b>
      <br/>
      <NavLink to={"/guide/page3"}>
        <span>PAGE3</span>
      </NavLink>
    </div>
  );
}
function Page3() {
  return (
    <div>
      <b>PAGE3</b>
    </div>
  );
}
export default GuidePage;
