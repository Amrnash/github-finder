function Alert({ type, msg, ...props }) {
  let styles;
  if (type === "error") {
    styles = "bg-red-300 border border-red-600";
  } else if (type === "success") {
    styles = "bg-green-300 border border-green-600";
  }
  return (
    <div className={`rounded text-lg p-2 m-2 ${styles}`} {...props}>
      {msg}
    </div>
  );
}

export default Alert;
