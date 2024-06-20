import { useRef, useState } from "react";

function App() {
  const [Weatehr, SetTehranWeather] = useState();
  const Input = useRef();

  function show() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=11c73d050525c2846ff5d8b73becd8ce&q=${Input.current.value}`
    )
      .then((res) => res.json())
      .then((OutPut) => SetTehranWeather(OutPut));
  }

  return (
    <>
      <section className="flex justify-center items-center flex-col mt-48 gap-y-12">
        <div className="flex gap-x-2 relative items-center">
          <input
            ref={Input}
            className="p-[10px] rounded-md outline-none"
            type="search"
            placeholder="City Browser"
          />
          <button onClick={show} className="w-24 p-[5px] flex absolute right-3 justify-center items-center bg-gray-500 rounded-md">show</button>
        </div>

        <section className="flex justify-center items-center flex-col gap-y-3 text-teal-400 bg-white p-12 px-28 rounded-sm w-max">
          <h1>
            <span className="text-black">temperature :</span>
            {Weatehr && Weatehr.main.temp}
          </h1>
          <h1>
            <span className="text-black">name :</span>
            {Weatehr && Weatehr.name}
          </h1>
          <h1>
            <span className="text-black">Wind spped :</span>
            {Weatehr && Weatehr.wind.speed}
          </h1>
          <h1>
            <span className="text-black">country :</span>
            {Weatehr && Weatehr.sys.country}
          </h1>
        </section>
      </section>
    </>
  );
}

export default App;
