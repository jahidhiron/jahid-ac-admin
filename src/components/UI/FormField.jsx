import { useField, Field } from "formik";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DateInput } from "@mantine/dates";
import { useTranslation } from "react-i18next";
import { IoCalendarOutline } from "react-icons/io5";

const modifyClasses = (className, meta) => {
  if (meta.touched) {
    let isInvalid = meta.error;
    if (isInvalid && className && !className.includes("border-red-500"))
      className = className + " border-red-500";
    if (!isInvalid && className && !className.includes("border-green-500"))
      className = className + " border-green-500";
  }
  return className;
};

export const TextInput = ({
  label,
  labelClassname = "",
  isRequired = false,
  isCapitalize = false,
  description,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(
    props.className || "border p-2 rounded w-full",
    meta
  );

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={`block  font-medium ${labelClassname}`}
        >
          {label}
          {isRequired && <span className='text-red-500 mt-1'>*</span>}
        </label>
      )}
      {description && <small>{description}</small>}
      <Field
        {...field}
        {...props}
        className={`${props.className} focus:outline focus:outline-[1px] rounded outline-gray-500/50 focus:outline-green-500/50  focus:border focus:border-green-500/50 focus:m-[0px]`}
        placeholder={props.placeholder}
        onChange={(e) => {
          let value = e.target.value;
          if (isCapitalize) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
          }
          setValue(value);
        }}
      />
      {meta.touched && meta.error && (
        <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
      )}
    </div>
  );
};

export const SelectInput = ({
  label,
  labelClassname = "",
  options,
  isRequired = false,
  setItem = null,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(
    props.className || "border p-2 rounded w-full",
    meta
  );

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={`block font-medium ${labelClassname}`}
        >
          {label}
          {isRequired && <span className='text-red-500 mt-1'>*</span>}
        </label>
      )}
      <Field
        as='select'
        {...field}
        {...props}
        className={props.className}
        onChange={(e) => {
          const { value } = e.target;
          setValue(value);
          if (setItem) {
            setItem(value);
          }
        }}
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          ))}
      </Field>
      {meta.touched && meta.error && (
        <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
      )}
    </div>
  );
};

export const SelectCategoryInput = ({
  label,
  labelClassname = "",
  options,
  selected,
  isRequired = false,
  setItem = null,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(
    props.className || "border p-2 rounded w-full",
    meta
  );

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={`block font-medium ${labelClassname}`}
        >
          {label}
          {isRequired && <span className='text-red-500 mt-1'>*</span>}
        </label>
      )}
      <Field
        as='select'
        {...field}
        {...props}
        className={props.className}
        onChange={(e) => {
          const { value } = e.target;
          setValue(value);
          if (setItem) {
            setItem(value);
          }
        }}
      >
        {selected && (
          <option selected value={selected?._id}>
            {selected?.title}
          </option>
        )}

        {options &&
          options.map((option) => (
            <option key={option?._id} value={option?._id}>
              {option.title}
            </option>
          ))}
      </Field>
      {meta.touched && meta.error && (
        <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
      )}
    </div>
  );
};

export const PhoneInputComp = ({
  label = "Your Telephone Number",
  labelClassname = "",
  placeholder,
  onChange,
  errors,
  isRequired = false,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(
    props.className || "border p-2 rounded w-full",
    meta
  );

  return (
    <div className='mb-4'>
      <label
        htmlFor={props.id || props.name}
        className={`block ${labelClassname}`}
      >
        {label}
        {isRequired && <span className='text-red-500 mt-1'>*</span>}
      </label>
      <PhoneInput
        value={props.value}
        country={"sa"}
        inputClass={props.className}
        inputStyle={{ width: "100%", height: "48px" }}
        inputProps={{
          name: field.name,
          onBlur: field.onBlur,
        }}
        onChange={(phone) => setValue(phone)}
        onlyCountries={["sa"]}
      />
      {meta.error && meta.touched && (
        <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
      )}
    </div>
  );
};

export const PasswordInput = ({
  label,
  labelClassname = "",
  isRequired = false,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta] = useField(props);
  const [type, setType] = React.useState("password");
  props.className = modifyClasses(
    props.className || "border p-2 rounded w-full",
    meta
  );

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={`block text-gray-700 ${labelClassname}`}
        >
          {t(label)}
          {isRequired && <span className='text-red-500 mt-1'>*</span>}
        </label>
      )}
      <div className='relative'>
        <Field
          {...field}
          {...props}
          type={type}
          className={props.className}
          placeholder={t(props.placeholder)}
          autoComplete='on'
        />
        <span
          className='absolute right-3 top-3 cursor-pointer text-gray-500'
          onClick={() =>
            setType((prev) => (prev === "password" ? "text" : "password"))
          }
        >
          {type === "password" ? "👁️" : "🙈"}
        </span>
      </div>
      {meta.touched && meta.error && (
        <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
      )}
    </div>
  );
};

export const TextAreaInput = ({
  label,
  labelClassname = "",
  isRequired = false,
  isCapitalize = false,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(
    props.className || "border p-2 rounded w-full",
    meta
  );

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={`block font-medium ${labelClassname}`}
        >
          {t(label)}
          {isRequired && <span className='text-red-500 mt-1'>*</span>}
        </label>
      )}
      <textarea
        {...field}
        {...props}
        className={`${props.className} focus:outline focus:outline-[1px] rounded outline-gray-500/50 focus:outline-green-500/50  focus:border focus:border-green-500/50 focus:m-[0px]`}
        placeholder={t(props.placeholder)}
        onChange={(e) => {
          let value = e.target.value;
          if (isCapitalize) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
          }
          setValue(value);
        }}
      />
      {meta.touched && meta.error && (
        <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
      )}
    </div>
  );
};

export const DateField = ({
  label,
  labelClassname = "",
  isRequired = false,
  description,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={`block font-medium ${labelClassname}`}
        >
          {label}
          {isRequired && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      {description && <small className='block mb-1'>{description}</small>}
      <DateInput
        {...field}
        {...props}
        value={field.value || null}
        onChange={setValue}
        className='w-full py-2 '
        size='md'
        clearable
        leftSection={<IoCalendarOutline size={60} className=' mx-1' />}
        classNames={{
          input:
            "border border-green-500  outline-[1px] focus:outline-green-500/50 focus:border-green-500",
        }}
      />
      {meta.touched && meta.error && (
        <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
      )}
    </div>
  );
};
