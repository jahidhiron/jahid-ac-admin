import React from "react";
import Breadcrumb from "../../../Common/Breadcumb";
import LevelSlider from "../../../Common/LevelSlider";
import CreateTwo from "../../../Courses/CreateTwo";

const Create2 = () => {
  return (
    <div>
      <Breadcrumb pageName={"Add Course"} />
      <LevelSlider level={50} />
<CreateTwo />
    </div>
  );
};

export default Create2;
