import React, { useState } from "react";
import Breadcrumb from "../../../Common/Breadcumb";
import CreateOne from "../../../Courses/CreateOne";
import LevelSlider from "../../../Common/LevelSlider";
import CreateTwo from "../../../Courses/CreateTwo";
import CreateThree from "../../../Courses/CreateThree";
import CreateFour from "../../../Courses/CreateFour";

const Create1 = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Breadcrumb pageName={"Add Course"} />
      {step === 1 && (
        <div>
          <LevelSlider level={25} />
          <CreateOne setStep={setStep} />
        </div>
      )}
      {step === 2 && (
        <div>
          <LevelSlider level={50} />
          <CreateTwo setStep={setStep} />
        </div>
      )}
      {step === 3 && (
        <div>
          <LevelSlider level={75} />
          <CreateThree setStep={setStep} />
        </div>
      )}
      {step === 4 && (
        <div>
          <LevelSlider level={100} />
          <CreateFour setStep={setStep} />
        </div>
      )}
    </div>
  );
};

export default Create1;
