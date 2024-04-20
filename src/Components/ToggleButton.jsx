// eslint-disable-next-line react/prop-types
const ToggleButton = ({ isChecked, setIsChecked }) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="peer sr-only"
      />
      <span aria-hidden={true} className="me-3 text-sm font-medium">
        Monthly billing
      </span>
      <div className="peer relative h-5 w-11 rounded-full bg-LightestGrayishBlue after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-StrongCyan peer-checked:after:translate-x-6 peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full"></div>
      <span className="ms-3 text-sm font-medium">Yearly billing</span>
    </label>
  );
};

export default ToggleButton;
