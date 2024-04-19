import { useState } from "react";
import ToggleButton from "./ToggleButton";
import InputSlider from "./InputSlider";

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(2);

  const monthlyPrices = [8, 12, 16, 24, 36];
  const yearlyPrices = monthlyPrices.map((price) => price * 12 * 0.75); // 25% discount for yearly billing

  const monthlyPageViews = [10, 50, 100, 500, 1000];
  const yearlyPageViews = monthlyPageViews.map((pageview) => pageview * 12);

  const views = isChecked
    ? yearlyPageViews[sliderValue]
    : monthlyPageViews[sliderValue];

  const price = isChecked
    ? yearlyPrices[sliderValue]
    : monthlyPrices[sliderValue];

  return (
    <div className="grid gap-y-8 p-4 md:grid-cols-2 md:grid-rows-3 md:px-10">
      <h2 className="place-content-center text-center font-bold uppercase tracking-widest md:text-start">
        {views}k pageviews
      </h2>

      <InputSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />

      <p className="inline-flex items-center justify-center gap-2 text-GrayishBlue md:col-start-2 md:row-start-1 md:justify-end">
        <span className="text-3xl font-extrabold text-DarkDesaturatedBlue md:text-[2.5rem]">
          ${price}.00
        </span>
        / month
      </p>

      <div className="flex items-center justify-end md:col-span-full">
        <ToggleButton isChecked={isChecked} setIsChecked={setIsChecked} />
        <p className="ms-4 rounded-full bg-LightGrayishRed px-[0.65em] text-LightRed ">
          <span className="hidden min-[440px]:inline-block">25% discount</span>
          <span className="text-xs min-[440px]:hidden" aria-hidden="true">
            -25%
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
