import SquareDotsSvg from "@/assets/Background filler/SquareDotsSvg";
import TickIcon from "@/assets/icons/TickIcon";
import DevicesSvg from "@/assets/illustration/DevicesSvg";

import styles from "./page.module.css";

import { CallCalling, Category2 } from "iconsax-react";

import ButtonGradientComponent from "@/utils/gradient button/ButtonGradientComponent";

import ServicesSvg from "@/assets/illustration/ServicesSvg";
import UnderlineIcon from "@/assets/icons/UnderlineIcon";

import LottieIcon from "@/assets/icons/lotties/LottieIcon";
import mobile from '@/assets/icons/lotties/mobile.json';
import web from '@/assets/icons/lotties/web.json';
import rocket from '@/assets/icons/lotties/rocket.json';
import sms from '@/assets/icons/lotties/sms.json';

export default function Home() {
  return (
    <div>
      {/* Home Section and landing */}
      <div className={styles.home}>
        <div className={styles.content}>
          <div className={styles.title_desc}>
            <h1 className={styles.title}>توربوجت:</h1>
            <p>
              طراحی سایت و فروشگاه اینترنتی خود را با ما شروع کنید!
            </p>
            <p>
              تمامی نیازمندی های کسب و کار خود را با توربوجت در سریع ترین و با کیفیت ترین حالت بدست آورید
            </p>
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
            <ButtonGradientComponent className="bg-gradient-to-l from-primary to-orange-300" color="black" colors={["from-primary", "to-orange-300"]} icon={<Category2 size="32" />} text="نمونه کارها" />
          </div>
        </div>
        <div>
          <DevicesSvg className={styles.image_devices} />
        </div>
        <div aria-hidden className={styles.gradient_circle_animate + " animate-transformY md:animate-transformYX"}></div>
        <div className={styles.dots_pattern}>
          <SquareDotsSvg />
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.services}>
        <div>
          <ServicesSvg />
        </div>
        <div className={styles.content}>
          <div className={styles.content_text}>
            <span className={styles.title}>خدمات ویژه ما</span>
            <p>شما در حال مشاهده خدمات محبوب <b>توربوجت</b> هستید. از شروع کسب و کار تا آخرش در کنار شما هستیم.</p>
          </div>

          <div className={styles.content_box}>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                طراحی سایت
              </span>
              {/* <LottieIcon color="var(--secondary-light-color)" size={150} icon={web} loopPlay={true} /> */}
              <p>طراحی خاص و اختصاصی سایت شما با دیزاین مطابق سلیقه شما </p>
              <ButtonGradientComponent className="!w-full" color="secondary_light" colors={["from-secondary_deep", "to-blue-400"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                طراحی اپلیکیشن
              </span>
              {/* <LottieIcon color="var(--primary-color)" size={150} icon={mobile} loopPlay={true} /> */}
              <p>طراحی و ساخت اپلیکیشن های PWA برای تمامی موبایل ها (IOS , Android)</p>
              <ButtonGradientComponent className="!w-full" color="secondary_light" colors={["from-primary", "to-orange-300"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                افزایش سرعت سایت
              </span>
              {/* <LottieIcon size={150} icon={rocket} color="var(--secondary-light-color)" loopPlay={true} /> */}
              <p>افزایش سرعت تضمینی وب سایت وردپرسی شما با کمترین زمان</p>
              <ButtonGradientComponent className="!w-full" color="secondary_light" colors={["from-secondary_deep", "to-blue-400"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
            <div className={styles.box}>
              <span className={styles.title_box}>
                <UnderlineIcon color="var(--foreground)" />
                پنل پیامکی
              </span>
              {/* <LottieIcon color="var(--primary-color)" size={150} icon={sms} loopPlay={true} /> */}
              <p>تبلیغات گسترده و جذب مشتری را با پنل پیامکی حرفه ای ما تجربه کنید</p>
              <ButtonGradientComponent className="!w-full" color="secondary_light" colors={["from-primary", "to-orange-300"]} icon={<CallCalling size="32" />} text="مشاوره" />
            </div>
          </div>
        </div>
        <div aria-hidden className={styles.gradient_circle_animate + " animate-transformY md:animate-transformYX"}></div>
      </div>
    </div>
  );
}
