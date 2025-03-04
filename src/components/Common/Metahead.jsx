import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { appslice } from "../../stores/slices/app";

const MetaHead = ({ title, description, keywords }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appslice.actions.setPageTitle(title));
  }, [title]);

  return (
    <Helmet>
      <title>
        {title
          ? `${title} | Book Store
`
          : ""}
      </title>
      {description && <meta name='description' content={description} />}
      {keywords && <meta name='keywords' content={keywords} />}
    </Helmet>
  );
};

export default MetaHead;
