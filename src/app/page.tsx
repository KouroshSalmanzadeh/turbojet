import TickIcon from "@/assets/icons/TickIcon";
import DevicesSvg from "@/assets/illustration/DevicesSvg";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-between container">
      <div className="grow h-full flex-center flex-col gap-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-6xl font-MorabbaBold text-primary text-center">توربوجت:</h1>
          <p className="text-xl">
            طراحی سایت و فروشگاه اینترنتی خود را با ما شروع کنید!
          </p>
          <p className="justify-center text-center">
            تمامی نیازمندی های کسب و کار خود را با توربوجت در سریع ترین و با کیفیت ترین حالت بدست آورید
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 child:flex child:items-center child:gap-4 child:text-2xl child:text-secondary_deep">
          <span>
            <TickIcon />
            طراحی وبسایت و اپلیکیشن
          </span>
          <span>
            <TickIcon />
            افزایش سرعت وبسایت
          </span>
          <span>
            <TickIcon />
            بهینه سازی سئو
          </span>
          <span>
            <TickIcon />
            افزایش ترافیک
          </span>
        </div>
      </div>
      <DevicesSvg />
      <div className="absolute -left-[300px] top-96 -z-40 h-[400px] w-[1000px] -rotate-[22deg] opacity-70 blur-[100px] animate-transformY" style={{background:"radial-gradient(50% 50% at 50% 50%, #FF731D 0%, rgba(127, 47, 207, 0) 100%)",transform:"translate3d(0, 0, 0)"}}></div>
    </div>
  );
}
