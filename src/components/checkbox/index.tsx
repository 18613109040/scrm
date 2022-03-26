import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/lib/checkbox";
import React from "react";

type CheckboxProps = {
  label: string;
  value?: boolean;
  onChange?: (value: string | boolean | number) => void;
};
const CheckBox = (props: CheckboxProps) => {
  const { label, value, onChange } = props;
  const handleValueChange = (e: CheckboxChangeEvent) => {
    onChange!(e?.target?.checked);
  };
  return (
    <Checkbox checked={value} onChange={handleValueChange}>
      {label}
    </Checkbox>
  );
};
export default React.memo(CheckBox);
