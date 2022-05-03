import type { InputProps } from "./Input";
import InternalInput from "./Input";
import Setting from "./Setting";
interface CompoundedComponent
  extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> {
  Setting: typeof Setting;
}
const Input = InternalInput as CompoundedComponent;
Input.Setting = Setting;
export default Input;
