import React from "react";
import PropTypes from "prop-types";



export default function ProfileDetail (props) {
    const {data} = props;
      return (
          <div>
            <div><b>First Name:</b> {data?.first_name}</div>
            <div><b>Last Name:</b> {data?.last_name}</div>
            <div><b>Email:</b> {data?.email}</div>
          </div>
      
      );
}


ProfileDetail.propTypes = {
    color:PropTypes.any
};