import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

  const { isLogin } = useSelector((state) => state.Auth)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};


export default PublicRoute;
