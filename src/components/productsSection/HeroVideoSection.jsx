import productbgVideo from '../../assets/videos/DBFProduct.webm'
import pbg from '../../assets/videos/DBFHero.webm'
export default function HeroVideoSection() {
  return (
    <div className="w-full max-h[500px] mx-auto ">
      <div className=" relative rounded-lg overflow-hidden  ">
        <video
          className="relative z-12 w-full h-[400px] min-[500px]:h-[500px] sm:h-[400px] object-cover sm:object-contain"
          // controls
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={productbgVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block absolute top-0 z-10 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src={productbgVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
