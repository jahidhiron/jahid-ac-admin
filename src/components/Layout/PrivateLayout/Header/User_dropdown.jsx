import { useState } from "react";
import { Link } from "react-router-dom";
import ClickOutside from "../../../../lib/ClickOutSide";
import { FaRegUser } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { HiMiniLanguage } from "react-icons/hi2";

import { IoIosArrowDown } from "react-icons/io";
import AxiosInstance from "../../../../utilities/axios.instance";
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next";

const DropdownUser = () => {
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageSwitch = (lng) => {
    AxiosInstance.defaults.headers["x-accept-language"] = lng;
    i18n.changeLanguage(lng);
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className='relative'>
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='flex items-center gap-4'
        to='#'
      >
        <span className='hidden text-right lg:block'>
          <span className='block text-sm font-medium text-black dark:text-white'>
            John Doe
          </span>
          <span className='block text-xs font-bold'>Web Developer</span>
        </span>

        <span className='h-10 w-10 rounded-full'>
          <img src={"/user.png"} alt='User' />
        </span>

        <IoIosArrowDown />
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className='flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark'>
            <li>
              <Link
                to='/profile/basic-informations'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <FaRegUser className='text-xl' />

                {t("my-profile")}
              </Link>
            </li>
            <li>
              <Link
                to='/profile/avatar'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <RiContactsBookLine className='text-xl' />

                {t("profile-picture")}
              </Link>
            </li>
            {/* <li>
              <Link
                to='/settings'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <IoSettingsOutline className='text-xl' />

                {t("account-settings")}
              </Link>
            </li>
            <li>
              <Link
                to='/settings'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <IoSettingsOutline className='text-xl' />

                {t("public-profile")}
              </Link>
            </li> */}

            <li>
              <Link
                to='/help-and-support'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <IoSettingsOutline className='text-xl' />

                {t("help-and-support")}
              </Link>
            </li>

            <li className='flex items-center gap-3.5'>
              <HiMiniLanguage className='text-xl' />
              <div className='flex justify-between gap-6'>
                <button onClick={() => handleLanguageSwitch("English")}>
                  <span className='fi fi-us mr-1'></span>EN
                </button>
                <button onClick={() => handleLanguageSwitch("bn")}>
                  <span className='fi fi-bd mr-1'></span>BN
                </button>
              </div>
            </li>
          </ul>
          <button className='flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'>
            <LuLogOut className='text-xl' />
            {t("logout")}
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
