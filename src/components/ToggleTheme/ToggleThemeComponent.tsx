import React from "react";
import styles from "./ToggleTheme.module.css";
import { Moon, Sun1 } from "iconsax-react";

type Props = {
  changeTheme: () => void;
};

const ToggleThemeComponent = React.forwardRef<HTMLLabelElement, Props>(
  ({ changeTheme }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={styles.input_toggle_nav}
        className={styles.toggle_theme}
      >
        <input
          type="checkbox"
          id={styles.input_toggle_nav}
          onClick={changeTheme}
        />
        <Sun1 size="32" className={styles.theme_icon_light} />
        <Moon size="32" className={styles.theme_icon_dark} />
      </label>
    );
  }
);

ToggleThemeComponent.displayName = "ToggleThemeComponent";

export default ToggleThemeComponent;