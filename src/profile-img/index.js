import React from "react";
import PropTypes from "prop-types";


export default function ProfileImg (props) {
    const {imgUrl, imageStyle} = props;
      return (
          <div className="m-2 text-center">
              <img src={imgUrl} style={imageStyle} alt="avatar logo"/>
          </div>
      );
}

ProfileImg.propTypes = {
    imgUrl:PropTypes.string
};