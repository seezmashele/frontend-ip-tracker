import "leaflet/dist/leaflet.css"
import rightArrow from "/icon-arrow.svg"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function App() {
  const position = [51.505, -0.09]

  return (
    <>
      <div className="header_bg bg-neutral-200 z-0 w-full h-[17.5rem] flex flex-col px-8 rubik_font">
        <h3 className="text-white text-3xl pt-7 font-semiboldf font-[500] text-center">
          IP Address Tracker
        </h3>
        <div className="flex w-full max-w-lg mx-auto mt-7 rounded-2xl shadow-lg">
          <div className="w-full bg-white h-14f rounded-l-2xl overflow-hidden">
            <input
              type="text"
              className="p-4 rounded-l-2xl w-full whitespace-nowrap text-[18px]"
              placeholder="Search for any IP address or domain"
            />
          </div>
          <div className="bg-black w-16 h-full cursor-pointer hover:bg-neutral-700 rounded-r-2xl flex items-center justify-center">
            <img
              src={rightArrow}
              alt=""
              className="w-3.5 h-3.5 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full rubik_font z-40 relative h-0 px-8">
        <div className="w-full p-8 bg-white shadow-2xl rounded-2xl h-40f -mt-[5rem] mx-auto max-w-5xl flex-col flex md:flex-row">
          <div className="w-full md:w-1/4 md:pr-5 overflow-hidden whitespace-normal text-ellipsis responsive_text_center">
            <h4 className="dark_gray uppercase overflow-hidden tracking-widest font-bold text-[12px] ">
              Ip address
            </h4>
            <p className="font-[500] text-2xl mt-2 overflow-hidden text-ellipsis very_dark_gray clap_lines">
              192.120.473.542
            </p>
          </div>
          <div className="w-full mt-7 md:mt-0 md:w-1/4 md:border-l md:pl-8 md:pr-5 responsive_text_center">
            <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
              Location
            </h4>
            <p className="font-[500] text-2xl mt-2 very_dark_gray overflow-hidden text-ellipsis clap_lines">
              Brooklyn, NY, 10001
            </p>
          </div>
          <div className="w-full md:w-1/4 mt-7 md:mt-0 md:border-l md:pl-8 md:pr-5 responsive_text_center">
            <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
              Timezone
            </h4>
            <p className="font-[500] text-2xl mt-2 very_dark_gray overflow-hidden text-ellipsis clap_lines">
              UTC - 5:00
            </p>
          </div>
          <div className="w-full md:w-1/4 mt-7 md:mt-0 md:border-l md:pl-8 responsive_text_center">
            <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
              Isp
            </h4>
            <p className="font-[500] text-2xl mt-2 very_dark_gray overflow-hidden text-ellipsis clap_lines">
              SpaceX
              <br />
              Starlink
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] -mt-[5rem]f relative z-10 mt-[5rem]">
        <MapContainer
          className="w-full h-full"
          center={[51.505, -0.09]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default App
