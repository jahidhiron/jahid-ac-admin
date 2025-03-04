import React from "react";
import Breadcrumb from "../../../Common/Breadcumb";
import LevelSlider from "../../../Common/LevelSlider";
import CreateThree from "../../../Courses/CreateThree";

const Create3 = () => {
  return (
    <div>
      <Breadcrumb pageName={"Add Course"} />
      <LevelSlider level={75} />
<CreateThree />
    </div>
  );
};

export default Create3;
