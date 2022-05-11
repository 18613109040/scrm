import React, { useEffect, useState } from "react";
import type { ColorResult } from "react-color";
import { SketchPicker } from "react-color";
import { Popover, Button, Input } from "antd";
import styles from "./index.less";

type ColorPickerProps = {
  value?: string;
  className?: string;
  onChange?: (color: string) => void;
};
const ColorPicker = (props: ColorPickerProps) => {
  const { onChange, className } = props;
  const [color, setColor] = useState<string>();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setColor(props.value);
  }, [props.value]);
  const handleChange = (v: ColorResult) => {
    setColor(v.hex);
    setVisible(false);
    onChange && onChange(v.hex);
  };
  const prefix = (
    <Popover
      content={<SketchPicker color={color} onChangeComplete={handleChange} />}
      visible={visible}
    >
      <div
        style={{ backgroundColor: color }}
        onClick={() => setVisible(true)}
        className={styles["color-picker-box"]}
      />
    </Popover>
  );
  return <Input prefix={prefix} className={className} value={color} />;
};
export default ColorPicker;
