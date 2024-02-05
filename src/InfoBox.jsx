import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    
    const hot_url = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";

    const cold_url = "https://media.istockphoto.com/id/1067764520/photo/thermometer-in-the-snow.webp?b=1&s=170667a&w=0&k=20&c=vLS2YVKy59etAc4kn4wu_6rFsBdxyIhbH92R_WO4m3I=";

    const rain_url = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    return(
        <div className='infoBox'>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
                info.humidity > 80 ? rain_url : (info.temp > 15) ? hot_url : cold_url
              }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
                info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 15) ? <WbSunnyIcon/> : <AcUnitIcon/>
              }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Tempreture = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Tempreture = {info.minTemp}&deg;C</p>
          <p>max Tempreture = {info.maxTemp}&deg;C</p>
          <p>
            The weather can be described  as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}
          </p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
    )
} 