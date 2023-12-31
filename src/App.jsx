import "leaflet/dist/leaflet.css"
import rightArrow from "/icon-arrow.svg"
import customMarker from "/icon-location.svg"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useEffect, useState } from "react"
import L from "leaflet"

function App() {
  const [isp, setIsp] = useState("")
  const [responseIp, setResponseIp] = useState("")
  const [areaInfo, setAreaInfo] = useState("")
  const [timezone, setTimezone] = useState("")
  const [searchText, setSearchText] = useState("")
  const [mapPosition, setMapPosition] = useState(null)
  const myApiKey = "at_QizXblfiByoPnOJtM7rCP1W0FYqoH"

  let myMarker = L.icon({
    iconUrl: customMarker,
    iconRetinaUrl: customMarker,
    iconAnchor: [22, 55],
    popupAnchor: [0, -55],
    iconSize: [44, 55]
  })

  const updateAllDetails = data => {
    if (data && data.location) {
      const loc = data.location

      setIsp(data.isp)
      setResponseIp(data.ip)
      setTimezone(loc.timezone)
      setMapPosition([loc.lat, loc.lng])
      setAreaInfo(
        `${loc.city}, ${loc.country}${loc.postalCode && ", " + loc.postalCode}`
      )
    }
  }

  useEffect(() => {
    const getInitialData = address => {
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}&ipAddress=${address}`
      )
        .then(response => response.json())
        .then(data => updateAllDetails(data))
        .catch(err => {
          console.log(err)
        })
    }

    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        getInitialData(data.ip)
      })
  }, [])

  const checkValidIp = str => {
    const regExp =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi

    return regExp.test(str)
  }

  const handleAddressSearch = () => {
    if (searchText) {
      const requestString = checkValidIp(searchText)
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}&ipAddress=${searchText}`
        : `https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}&domain=${searchText}`

      fetch(requestString)
        .then(response => response.json())
        .then(data => updateAllDetails(data))
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <div className="header_bg z-0 w-full h-[24.5rem] md:h-[17.5rem] flex flex-col px-8 rubik_font">
        <h3 className="text-white text-3xl pt-7 font-semiboldf font-[500] text-center">
          IP Address Tracker
        </h3>
        <div className="flex w-full max-w-lg mx-auto mt-7 rounded-2xl shadow-lg">
          <div className="w-full bg-white h-14f rounded-l-2xl overflow-hidden">
            <form
              onSubmit={e => {
                e.preventDefault()
                handleAddressSearch()
              }}
              action=""
              className="w-full"
            >
              <input
                type="text"
                value={searchText}
                onChange={e => {
                  setSearchText(e.target.value)
                }}
                className="p-4 rounded-l-2xl w-full whitespace-nowrap text-[18px] overflow-hidden text-ellipsis"
                placeholder="Search for any IP address or domain"
              />
            </form>
          </div>
          <button
            type="button"
            onClick={handleAddressSearch}
            className="bg-black w-16 h-full cursor-pointer hover:bg-neutral-700 rounded-r-2xl flex items-center justify-center"
          >
            <img
              src={rightArrow}
              alt=""
              className="w-3.5 h-3.5 object-contain"
            />
          </button>
        </div>

        <div className="w-full rubik_font z-40 relative h-0 mt-12">
          <div className="w-full p-8 bg-white shadow-2xl rounded-2xl mx-auto max-w-5xl flex-col flex md:flex-row">
            <div className="w-full md:w-1/4 md:pr-5 overflow-hidden whitespace-normal text-ellipsis responsive_text_center">
              <h4 className="dark_gray uppercase overflow-hidden tracking-widest font-bold text-[12px] ">
                Ip address
              </h4>
              <p className="font-[500] text-2xl mt-2 overflow-hidden text-ellipsis very_dark_gray clamp_lines">
                {responseIp}
              </p>
            </div>
            <div className="w-full mt-6 md:mt-0 md:w-1/4 md:border-l md:pl-8 md:pr-5 responsive_text_center">
              <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
                Location
              </h4>
              <p className="font-[500] text-2xl mt-2 very_dark_gray overflow-hidden text-ellipsis clamp_lines">
                {areaInfo}
              </p>
            </div>
            <div className="w-full md:w-1/4 mt-6 md:mt-0 md:border-l md:pl-8 md:pr-5 responsive_text_center">
              <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
                Timezone
              </h4>
              <p className="font-[500] text-2xl mt-2 very_dark_gray overflow-hidden text-ellipsis clamp_lines">
                {timezone && "UTC " + timezone}
              </p>
            </div>
            <div className="w-full md:w-1/4 mt-6 md:mt-0 md:border-l md:pl-8 responsive_text_center">
              <h4 className="dark_gray uppercase tracking-widest font-bold text-[12px]">
                Isp
              </h4>
              <p className="font-[500] text-2xl mt-2 very_dark_gray overflow-hidden text-ellipsis clamp_lines">
                {isp}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] relative z-10">
        {mapPosition && (
          <MapContainer
            key={"mapkey" + responseIp}
            className="w-full h-full"
            center={mapPosition}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition} icon={myMarker}>
              <Popup>Hello World 😃</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </>
  )
}

export default App
