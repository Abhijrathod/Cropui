import React from "react";
import PropTypes from "prop-types";

const PreventionInfo = ({ prevention }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-100">
      <h2 className="text-lg font-semibold mb-2">Prevention</h2>
      <p>{prevention || "Loading prevention methods..."}</p>
    </div>
  );
};
PreventionInfo.propTypes = {
  prevention: PropTypes.string,
};

export default PreventionInfo;
