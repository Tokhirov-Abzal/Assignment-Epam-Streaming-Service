const Alert = ({ message }) => {
  return (
    <div className={`alert alert`}>
      <i className="fas fa-exclamation-triangle"></i> {message}
    </div>
  );
};

export default Alert;
