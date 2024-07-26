import PropTypes from "prop-types";

const colors = {
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
};

export default function TemporaryMessage({ text, type }) {
  const colorClass = colors[type] || colors.info;
  return (
    <div className={`p-4 rounded-md mt-10 text-center ${colorClass}`}>
      <p>{text}</p>
    </div>
  );
}

TemporaryMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
};
