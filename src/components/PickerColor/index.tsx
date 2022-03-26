/*
 * :file description: 颜色选择器
 * :name: /hotel-sass/src/components/PickerColor/index.tsx
 * :author: 胡东亮
 * :date created: 2021-09-07 10:50:04
 * :last editor: 胡东亮
 * :date last edited: 2021-09-07 16:13:12
 */
import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import type { RGBColor, ColorChangeHandler } from "react-color";
import styles from "./index.less";

export type PickerColorPrps = {
  value?: string;
  onChange?: (value: RGBColor) => void;
  disabled?: boolean;
};
const PickerColor = (props: PickerColorPrps) => {
  const { onChange, disabled = false } = props;
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState<string>("#ddd");
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };
  const handleClose = () => {
    setDisplayColorPicker(false);
  };
  const handleChange = (val: any) => {
    onChange && onChange(val.hex);
  };
  useEffect(() => {
    if (props?.value) setColor(props?.value);
  }, [props?.value]);
  return (
    <div className={styles["picker-color"]}>
      <div className={styles.swatch} onClick={handleClick}>
        <div
          className={styles.color}
          style={{
            background: color
          }}
        ></div>
      </div>
      {!disabled && displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};
export default PickerColor;
