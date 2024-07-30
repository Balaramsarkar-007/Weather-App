import confguration from '../conf.js';
import WeatherApp from './WeatherApp'
import SuprSendInbox from "@suprsend/react-inbox";
import suprsend from "@suprsend/web-sdk";
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {

  suprsend.init(confguration.SuprsendWorkspaceKey, confguration.suprsendWorkspaceSecert);

  
  suprsend.track("WEATHER_ALERT", {
    city: "Mumbai",
    temperature: "32°C",
    weather: "Sunny"
  });

 
  return (
    <>
    <div className='navbar'>
    <SuprSendInbox 
    theme={{Badge : {backgroundColor: 'red', color: 'white'}}}
    themeType="light"
    workspaceKey={confguration.SuprsendWorkspaceKey}
    subscriberId="KoSNOpeCLZyLSmiwQUM2Ld5p6srYNhvApfxiQKYyov8"
    distinctId="br1"
    ></SuprSendInbox>
    
    </div>
    <WeatherApp />
    </>
  )
}

export default App
