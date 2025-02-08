import React from "react";
import PropTypes from "prop-types";

const PlantInfo = ({ plantName, diseaseName }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-100">
      <h2 className="text-lg font-semibold mb-2">Plant Information</h2>
      <p><strong>Plant:</strong> {plantName || "Loading..."}</p>
      <p><strong>Disease:</strong> {diseaseName || "Loading..."}</p>
    </div>
  );
};
PlantInfo.propTypes = {
  plantName: PropTypes.string,
  diseaseName: PropTypes.string,
};

export default PlantInfo;
