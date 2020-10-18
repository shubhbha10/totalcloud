import React, { Component } from "react";
import "../style.scss";
import ProfileDetail from "../../profile-detail/index";
import ProfileImg from "../../profile-img/index";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      userList: [],
      previousData: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData(){
    fetch("https://reqres.in/api/users?delay=3")
    .then((res) => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: false,
          userList: result.data,
          previousData: result.data
        });
        console.log("result from api", result);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  handleChange(e) {
    let sortBy = e.target.value;
    console.log(sortBy);
    if (sortBy === "firstname") {
      this.setState({
        userList: this.state.userList.sort((a, b) =>
          a.first_name.localeCompare(b.first_name)
        ),
      });
    } else if (sortBy === "lastname") {
      this.setState({
        userList: this.state.userList.sort((a, b) =>
          a.last_name.localeCompare(b.last_name)
        ),
      });
    } else {
      this.setState({userList: this.state.previousData})
    }
  }

  render() {
    return (
      <>
        {this.state.isLoaded ? (
          <div className="loader">
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
            <div className="container">
              <h1 className="header">Users-List</h1>
              <div className="dropdown form-group">
                <select className="form-control" onChange={this.handleChange}>
                  <option value="none" defaultValue>
                    None
                </option>
                  <option value="firstname">First Name</option>
                  <option value="lastname">Last Name</option>
                </select>
              </div>
              <div className="row">
                {this.state.userList.map((obj, index) => (
                  <div
                    className="card"
                    onClick={() =>
                      this.props.history.push(`/user-profile/${obj.id}`)
                    }
                  >
                    <div>
                      <ProfileImg imgUrl={obj.avatar} imageStyle={{
                        width: "100%"
                      }} />
                    </div>
                    <div>
                      <ProfileDetail data={obj} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
      </>
    );
  }
}

export default withRouter(UserList);
