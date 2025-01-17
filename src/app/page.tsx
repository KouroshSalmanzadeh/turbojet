import SquareDotsSvg from "@/assets/Background filler/SquareDotsSvg";
import TickIcon from "@/assets/icons/TickIcon";
import DevicesSvg from "@/assets/illustration/DevicesSvg";

import styles from "./page.module.css";

import { CallCalling, Category2 } from "iconsax-react";

import ButtonGradientComponent from "@/utils/gradient button/ButtonGradientComponent";

export default function Home() {
  return (
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
  );
}
