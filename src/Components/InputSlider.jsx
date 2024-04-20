// eslint-disable-next-line react/prop-types
const InputSlider = ({ sliderValue, setSliderValue }) => {
  const handleSlider = (e) => {
    const slider = e.target;
    const value = slider.value;
    const min = slider.min;
    const max = slider.max;
    const percentage = ((value - min) / (max - min)) * 100;
    slider.style.setProperty("--slider-value", percentage + "%");
    setSliderValue(value);
  };

  return (
    <div className="place-content-center md:col-span-full md:row-start-2">
      <label htmlFor="price-range-slider" className="sr-only">
        Price range slider
      </label>
      <input
        type="range"
        name="price-range-slider"
        id="price-range-slider"
        min="0"
        max="4"
        defaultValue={sliderValue}
        onChange={handleSlider}
        className="h-2 w-full cursor-pointer rounded-full bg-gray-200 outline-none"
      />
    </div>
  );
};

export default InputSlider;
