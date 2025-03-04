import React from "react";
import Breadcrumb from "../../../Common/Breadcumb";
import LevelSlider from "../../../Common/LevelSlider";
import CreateFour from "../../../Courses/CreateFour";


const Create4 = () => {
  return (
    <div>
      <Breadcrumb pageName={"Add Course"} />
      <LevelSlider level={100} />
<CreateFour />
    </div>
  );
};

export default Create4;
