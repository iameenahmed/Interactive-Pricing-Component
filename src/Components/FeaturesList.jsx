import checkIcon from "../assets/icon-check.svg";

const FeaturesList = () => {
  return (
    <div className="mt-6 flex flex-col items-center text-[13px] md:flex-row md:justify-between md:px-12">
      <ul className="mb-8 flex flex-col items-center space-y-2 md:mb-0 md:items-start">
        <li className="flex items-center gap-4">
          <img src={checkIcon} alt="check icon" />
          <span>Unlimited websites</span>
        </li>
        <li className="flex items-center gap-4">
          <img src={checkIcon} alt="check icon" />
          <span>100% data ownership</span>
        </li>
        <li className="flex items-center gap-4">
          <img src={checkIcon} alt="check icon" />
          <span>Email reports</span>
        </li>
      </ul>
      <button className="cursor-pointer rounded-full bg-DarkDesaturatedBlue px-10 py-2.5 font-semibold text-PaleBlue transition-colors duration-300 hover:opacity-70 focus:opacity-70">
        Start my trial
      </button>
    </div>
  );
};

export default FeaturesList;
