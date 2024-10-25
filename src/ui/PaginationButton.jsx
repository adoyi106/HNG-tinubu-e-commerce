import PropTypes from "prop-types";
import React from "react";

function PaginationButton({ children, onClick, active, disabled }) {
  const baseClasses = `
    flex items-center justify-center gap-1
    px-4 py-2 text-sm lg:text-xl font-medium rounded
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  `;
  const activeClasses = active
    ? "bg-[#CC5500] text-white"
    : // ? "bg-blue-600 text-white"
      "bg-gray-100 text-gray-700 hover:bg-[#CC5500] hover:text-white";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const paddingClasses = React.Children.toArray(children).some(
    (child) => typeof child === "string"
  )
    ? "px-4"
    : "px-2";

  return (
    <button
      className={`${baseClasses} ${activeClasses} ${disabledClasses} ${paddingClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PaginationButton;

PaginationButton.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
