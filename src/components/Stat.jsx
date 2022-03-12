function Stat({ header, data, classes, children, ...props }) {
  return (
    <div className={`bg-gray-700 p-2 shadow-md ${classes}`} {...props}>
      <p className="text-gray-500 text-sm">{header}</p>
      <div className="flex justify-between">
        <p className="text-white font-bold text-lg">{data}</p>
        {children}
      </div>
    </div>
  );
}

export default Stat;
