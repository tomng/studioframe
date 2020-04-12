import React from "react";
import config from "../auth_config.json";

export const adobeAuthEndpoint = "https://ims-na1.adobelogin.com/ims/authorize";
export const adobeTokenEndpoint = "https://ims-na1.adobelogin.com/ims/token/";

function getUrlParam(param) {
  // const queryString = window.location.href;
  // console.log(queryString);
  const url = new URL(window.location);
  const urlParams = url.searchParams;
  const parameterValue = urlParams.get(param);
  console.log(parameterValue);
  return parameterValue;
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

    if (_authCode !== undefined) {
      fetch("");
    }
  }

  render() {
    return (
      <div className="signIn">
        {!this.state.token && (
          <a
            href={`${adobeAuthEndpoint}?client_id=${
              config.adobeClientId
            }&redirect_uri=${config.redirectUri}&scope=${
              config.adobeScope
            }&response_type=code`}
          >
            Login to Lightroom
          </a>
        )}
        {this.state.token && <p>hi there</p>}
      </div>
    );
  }
}

export default SignIn;
