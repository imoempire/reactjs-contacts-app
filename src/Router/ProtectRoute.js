import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const Protectroute = ({ component: Component, auth, ...rest }) => {
  
    if(!auth.isLoaded) return null;
  
    // User Sign up
  if (auth.uid) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }

  // User not sign up
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Protectroute);
