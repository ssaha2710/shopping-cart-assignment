import React , { useEffect , useState , useRef} from "react";
import axios from "axios";
import "./Carousel.css";

const Carousel = () =>{
    const [ banners ,setBanners ] = useState([]);
    const carousel = useRef();

    useEffect(()=>{
        axios.get("http://localhost:3000/banners")
        .then(res =>setBanners(res.data))
    },[])

    const incrementCarousel = delta =>{
        if(carousel.current){
            const width = carousel.current.offsetWidth;
            carousel.current.scrollTo(
                carousel.current.scrollLeft + width * delta,
                0
            )
        }
    }


    return (<div className="carousel-container"> 
       <div className="carousel-btn left-btn" onClick={()=> incrementCarousel(-1)}/>
       <div className="carousel-btn right-btn" onClick={()=> incrementCarousel(1)}/>
       <div className="carousel" ref={carousel}>
        {banners && banners.map( el =>{
            return (<div className="carousel-item">
                    <img src={el.bannerImageUrl} alt ={el.bannerImageAlt}/>
                </div>)
        })}
       </div>
    </div>)
}

export default Carousel;