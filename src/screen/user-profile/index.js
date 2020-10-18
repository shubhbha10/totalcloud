import React, { Component } from "react";
import ProfileDetail from "../../profile-detail/index";
import ProfileImg from "../../profile-img/index";
import Loader from "react-loader-spinner";


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      userData: [],
    };
  }

  componentDidMount() {
    fetch(`https://reqres.in/api/users/${this.props.match.params.id}?delay=3`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: false,
            userData: result.data,
          });
          console.log("result from api", this.state.userData);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    console.log("hello....", "this.props..", this.props);
    const {
      match: { params },
    } = this.props;
    console.log("prps...", this.props);
    return (
      <>
        {!this.state.isLoaded ? (
          <div className="container text-center">
            <h1 className="header text-center">Profile</h1>
            <ProfileImg imgUrl={this.state.userData?.avatar} imageStyle={{
              width: "300px"
              }}/>
            <ProfileDetail data={this.state.userData} />
            <div className="mt-3">
              <button className="btn btn-sm btn-primary" type="button" onClick={() => {this.props.history.goBack()}}>Back</button>
            </div>
          </div>
        ) : (
          <div className="loader">
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        )}
      </>
    );
  }
}
