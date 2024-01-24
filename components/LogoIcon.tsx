import React from "react";

interface Props {
  className?: string;
}

const Star: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      width="24.75"
      height="25.65"
      viewBox="0 0 55 57"
      fill="#F8F7F7"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        fill="#F8F7F7"
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
	10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      />
    </svg>
  );
};

export default Star;
