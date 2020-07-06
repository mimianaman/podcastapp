import React from "react";
import photo from "../assets/images/green.png";
import photo1 from "../assets/images/profile1.png";
import photo2 from "../assets/images/photo2.png";
import { mdiPlayCircle } from "@mdi/js";
import Icon from "@mdi/react";

/**
 * @author
 * @function Photos
 **/

const Photos = (props) => {
  return (
    <>
      <div className="imagecontainer"></div>
      <div className="photo1Container"></div>
      <div>
        <img src={photo} alt="website photo" />
      </div>
      <div>
        <img src={photo1} alt="" className="photo1" />
      </div>
      <div>
        <img src={photo2} alt="" className="photo2" />
      </div>
      <Icon
        path={mdiPlayCircle}
        title="User Profile"
        size={2}
        horizontal
        color=" yellow"
        className="playimageicon"
      />
    </>
  );
};

export default Photos;
