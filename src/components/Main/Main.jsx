import './Main.css';
import Slider from "react-slick";

export const Main =()=> { 
    {
        var settings ={
            dots: true,
            Infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }
    return (
        <div className='Main'>
            <h2>Добро пожаловать нв наше веб-приложение с тестами на IQ</h2>
          

          <img width={'500px'} src = 'https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg'></img>
          <img width={'500px'}src = 'https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg'></img>
          <img width={'500px'}src = 'https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg'></img>

          
          
        </div>
    );
   
}


