import SquareDotsSvg from "@/assets/Background-filler/SquareDotsSvg";
import TickIcon from "@/assets/icons/TickIcon";
import DevicesSvg from "@/assets/illustration/DevicesSvg";

import styles from "./page.module.css";

import { CallCalling, Category2 } from "iconsax-react";

import ButtonGradientComponent from "@/utils/gradient button/ButtonGradientComponent";

import ServicesSvg from "@/assets/illustration/ServicesSvg";
import UnderlineIcon from "@/assets/icons/UnderlineIcon";

import AboutUsSection from "./components/about-us/AboutUsSection";
import TitleBoldComponent from "@/utils/title bold/TitleBoldComponent";
import dynamic from "next/dynamic";
import HowToWorkSection from "./components/how-to-work/HowToWorkSection";
import FaqSection from "./components/faq/FaqSection";
import ContactUsSection from "./components/contact-us/ContactUsSection";

const WebLottieIcon = dynamic(() => import('@/assets/icons/lotties/WebLottieIcon'), {
  ssr: false,
});
const MobileLottieIcon = dynamic(() => import('@/assets/icons/lotties/MobileLottieIcon'), {
  ssr: false,
});
const RocketLottieIcon = dynamic(() => import('@/assets/icons/lotties/RocketLottieIcon'), {
  ssr: false,
});
const SmsLottieicon = dynamic(() => import('@/assets/icons/lotties/SmsLottieicon'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      {/* Home Section and landing */}
      <div className={styles.home} id="home">
        <div className={styles.content}>
          <div className={styles.title_desc}>
            <TitleBoldComponent title="توربوجت:" />
            <h1>
              طراحی سایت و فروشگاه اینترنتی خود را با ما شروع کنید!
            </h1>
            <h2>
              تمامی نیازمندی های کسب و کار خود را با توربوجت در سریع ترین و با کیفیت ترین حالت بدست آورید
            </h2>
          </div>
          <div className={styles.title_services}>
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
          <div className={styles.buttons}>
            <ButtonGradientComponent className="bg-gradient-to-l from-secondary_deep to-blue-400" color="secondary_light" colors={["from-secondary_deep", "to-blue-400"]} icon={<CallCalling size="32" />} text="مشاوره" />
            <ButtonGradientComponent className="bg-gradient-to-l from-primary to-red-300" color="black" colors={["from-primary", "to-orange-300"]} icon={<Category2 size="32" />} text="نمونه کارها" />
          </div>
        </div>
        <div>
          <DevicesSvg className={styles.image_devices} />
        </div>
        <div aria-hidden className={styles.gradient_circle_animate + " animate-transformY"}></div>
        <div className={styles.dots_pattern}>
          <SquareDotsSvg />
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.services} id="service">
        <div className={styles.parent_image}>
          <ServicesSvg />
        </div>
        <div className={styles.content}>
          <div className={styles.content_text}>
            <TitleBoldComponent title="خدمات ویژه ما" />
            <p>شما در حال مشاهده خدمات محبوب <b>توربوجت</b> هستید. از شروع کسب و کار تا آخرش در کنار شما هستیم.</p>
          </div>

          <div className={styles.content_box}>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                طراحی سایت
              </span>
              <WebLottieIcon />
              <p>طراحی خاص و اختصاصی سایت شما با دیزاین مطابق سلیقه شما </p>
              <ButtonGradientComponent className="!w-full" color="secondary_light" colors={["from-secondary_deep", "to-blue-400"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                طراحی اپلیکیشن
              </span>
              <MobileLottieIcon />
              <p>طراحی و ساخت اپلیکیشن های PWA برای تمامی موبایل ها (IOS , Android)</p>
              <ButtonGradientComponent className="!w-full" color="white" colors={["from-primary", "to-red-300"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                افزایش سرعت سایت
              </span>
              <RocketLottieIcon />
              <p>افزایش سرعت تضمینی وب سایت وردپرسی شما با کمترین زمان</p>
              <ButtonGradientComponent className="!w-full" color="secondary_light" colors={["from-secondary_deep", "to-blue-400"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                پنل پیامکی
              </span>
              <SmsLottieicon />
              <p>تبلیغات گسترده و جذب مشتری را با پنل پیامکی حرفه ای ما تجربه کنید</p>
              <ButtonGradientComponent className="!w-full" color="white" colors={["from-primary", "to-red-300"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
          </div>
        </div>
        <div aria-hidden className={styles.gradient_circle_animate + " animate-transformY"}></div>
        <div className={styles.grid_square}></div>
      </div>

      {/* About Us Section */}
      <AboutUsSection />

      {/* How to work Turbojet section */}
      <HowToWorkSection />

      { /* FAQ Section */ }
      <FaqSection />

      { /* Contact Us Section */ }
      <ContactUsSection />
    </div>
  );
}
