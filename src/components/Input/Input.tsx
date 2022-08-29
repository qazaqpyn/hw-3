import { useState } from "react";
import styles from "./Input.module.scss";

/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange'
> & {
    /** Значение поля */
    value: string;
    /** Callback, вызываемый при вводе данных в поле */
    onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ onChange, value, disabled, className, ...additionProps }) => {
    const [valueInput, setValue] = useState(value);
    const handleChange = (e: any) => {
        setValue(e.target.value);
        return onChange(valueInput);
    }
    return (
        <input className={styles.input_first} type="text" value={valueInput} onChange={handleChange} disabled={disabled} {...additionProps} />
    );
};

export default Input;