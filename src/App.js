import React from "react";
import "./style.css";
import fetchIntercept from "fetch-intercept";

fetchIntercept.register({
  request: function(url, config) {
    // Modify the url or config here
    config.headers.name="Aravindh"
    console.log(config);
    return [url, config];
  },

  requestError: function(error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function(response) {
    // Modify the reponse object
    return response;
  },

  responseError: function(error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});
export default class App extends React.Component {

  componentDidMount(){
  fetch("http://google.com",{
    headers:{
      "Content-type":"application/json"
    }
  });
}
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
