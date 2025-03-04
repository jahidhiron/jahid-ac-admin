import React from "react";
import AxiosInstance from "../../../utilities/axios.instance";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ar: { nativeName: "عربي" },
};

function LangSwitcherFunctionality() {
  const { i18n } = useTranslation();

  const handleLanguageSwitch = (lng) => {
    AxiosInstance.defaults.headers["x-accept-language"] = lng;
    i18n.changeLanguage(lng);
  };

  return (
    <li>
      <a  style={{color : "white"}}>{i18n.language.toUpperCase()}</a>
      <ul>
        {Object.keys(lngs).map((lng, i) => (
          <li   key={lng}>
            <span  className="text-black text-sm p-3" onClick={() => handleLanguageSwitch(lng)}>
              {lngs[lng].nativeName}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default LangSwitcherFunctionality;
