import rightArrow from "/icon-arrow.svg"

function App() {
  return (
    <>
      <div className="header_bg bg-neutral-200 z-0 w-full h-[17.5rem] flex flex-col rubik_font">
        <h3 className="text-white text-3xl pt-7 font-semiboldf font-[500] text-center">
          IP Address Tracker
        </h3>
        <div className="flex w-full max-w-lg mx-auto mt-7 rounded-2xl shadow-lg">
          <div className="w-full bg-white h-14 rounded-l-2xl overflow-hidden">
            <input
              type="text"
              className="p-4 rounded-l-2xl w-full whitespace-nowrap"
              placeholder="Search for any IP address or domain"
            />
          </div>
          <div className="bg-black w-16 h-14 rounded-r-2xl flex items-center justify-center">
            <img
              src={rightArrow}
              alt=""
              className="w-3.5 h-3.5 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-neutral-50f rubik_font  z-40 relative">
        <div className="w-full p-8 bg-white shadow-2xl rounded-2xl h-40 -mt-[5rem] mx-auto max-w-5xl flex">
          <div className="w-1/4">
            <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
              Ip address
            </h4>
            <p className="font-[500] text-2xl mt-2 very_dark_gray">
              192.120.473.542
            </p>
          </div>
          <div className="w-1/4 border-l-2 pl-8">
            <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
              Location
            </h4>
            <p className="font-[500] text-2xl mt-2 very_dark_gray">
              Brooklyn, NY, 10001
            </p>
          </div>
          <div className="w-1/4 border-l-2 pl-8">
            <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
              Timezone
            </h4>
            <p className="font-[500] text-2xl mt-2 very_dark_gray">
              UTC - 5:00
            </p>
          </div>
          <div className="w-1/4 border-l-2 pl-8">
            <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
              Isp
            </h4>
            <p className="font-[500] text-2xl mt-2 very_dark_gray">
              SpaceX
              <br />
              Starlink
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-violet-300 -z-40 -mt-[5rem]"></div>
    </>
  )
}

export default App
