import React from "react";
import config from "../auth_config.json";

export const adobeAuthEndpoint = "https://ims-na1.adobelogin.com/ims/authorize";
export const adobeTokenEndpoint = "https://ims-na1.adobelogin.com/ims/token";

// export const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

function getUrlParam(param) {
  const url = new URL(window.location);
  const urlParams = url.searchParams;
  const parameterValue = urlParams.get(param);
  console.log(param + ": " + parameterValue);
  return parameterValue;
}

function getToken(authCode) {
  const requestParams = {
    grant_type: "authorization_code",
    client_id: config.adobeClientId,
    client_secret: config.adobeClientSecret
  };
  const searchParams = new URLSearchParams();
  Object.keys(requestParams).forEach(param => {
    searchParams.set(param, requestParams[param]);
  });

  const requestOptions = {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: searchParams
  };

  fetch(adobeTokenEndpoint, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("something went wrong", error));
}

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null
    };
  }

  componentDidMount() {
    let _authCode = getUrlParam("code");
    this.setState({
      authCode: _authCode
    });

    let _token = getUrlParam("access_token");
    this.setState({
      token: _token
    });

    if (_authCode !== undefined) {
      getToken(_authCode);
    }
  }

  render() {
    return (
      <div className="signIn">
        {!this.state.authCode && (
          <a
            href={`${adobeAuthEndpoint}?client_id=${
              config.adobeClientId
            }&redirect_uri=${
              config.redirectUri
            }&scope=openid&response_type=code`}
          >
            1. Login to Lightroom
          </a>
        )}
        {this.state.authCode && "Hi there"}
      </div>
    );
  }
}

export default SignIn;
