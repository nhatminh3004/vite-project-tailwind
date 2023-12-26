const Job = ({ title, icon, bgClass }) => {
  return (
    <div
      className={`${bgClass} flex aspect-square flex-col items-center justify-center rounded-lg p-4`}
    >
      {icon}
      <p className="pt-2 font-poppins">{title}</p>
    </div>
  );
};

export default Job;
