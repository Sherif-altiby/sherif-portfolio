import img from "../../assets/images/download (1).png";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className=" h-[150px] sm:h-[300px] relative">
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(21, 20, 24)"
            fill-opacity="1"
            d="M0,64L30,58.7C60,53,120,43,180,58.7C240,75,300,117,360,117.3C420,117,480,75,540,96C600,117,660,203,720,245.3C780,288,840,288,900,245.3C960,203,1020,117,1080,74.7C1140,32,1200,32,1260,64C1320,96,1380,160,1410,192L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
