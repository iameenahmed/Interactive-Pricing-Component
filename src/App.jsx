import FeaturesList from "./Components/FeaturesList";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <div
      id="App"
      className="min-h-screen w-full bg-VeryPaleBlue px-4 pt-16 font-Manrope text-[0.9375rem] font-semibold text-GrayishBlue lg:pt-[6.75rem]"
    >
      <header className="mb-16 text-center lg:mb-[5.5rem]">
        <h1 className="mb-4 text-xl font-bold text-DarkDesaturatedBlue md:text-[1.75rem]">
          Simple, traffic-based pricing
        </h1>
        <p className="flex flex-col justify-center leading-6 md:flex-row">
          <span>Sign-up for our 30-day trial.</span>
          <span> No credit card required.</span>
        </p>
      </header>

      <main className="mx-auto w-full rounded-lg bg-white py-8 shadow-xl shadow-LightGrayishBlue md:w-[34rem]">
        <Pricing />
        <hr className="my-6" />
        <FeaturesList />
      </main>
    </div>
  );
};

export default App;
