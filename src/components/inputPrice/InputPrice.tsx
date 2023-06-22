import { FormEvent, useEffect, useRef, useState } from "react";
import { formatPrice, removeSpace } from "../../utils/helperPrice";
import style from "./InputPrice.module.css";

const InputPrice: React.FC = () => {
  const [value, setValue] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [width, setWidth] = useState(0);
  const text = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setWidth(text.current?.offsetWidth ?? 0);
  }, [value]);

  const changeHandler = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    const valueWithoutSpace = removeSpace(input.value);
    if (!input.value) {
      setValue("");
    } else if (/^[+-]?\d*$/.test(valueWithoutSpace)) {
      setValue(formatPrice(valueWithoutSpace));
    }
  };

  const blurHandler = (e: FormEvent) => {
    const digitValue = +removeSpace(value);
    if (digitValue < minPrice) {
      setValue(formatPrice(String(minPrice)));
    } else if (digitValue > maxPrice) {
      setValue(formatPrice(String(maxPrice)));
    }
  };

  return (
    <form className={style.form}>
      <div className={style.choice}>
        <label className={style.choice_block}>
          <p className={style.choice_text}>Укажите минимальную цену (установлено {formatPrice(String(minPrice))})</p>
          <input
            onChange={(e: FormEvent) => {
              const input = e.target as HTMLInputElement;
              setMinPrice(+input.value);
            }}
            type="number"
          />
        </label>
        <label className={style.choice_block}>
          <p className={style.choice_text}>Укажите максимальную цену (установлено {formatPrice(String(maxPrice))})</p>
          <input
            onChange={(e: FormEvent) => {
              const input = e.target as HTMLInputElement;
              setMaxPrice(+input.value);
            }}
            type="number"
          />
        </label>
      </div>

      <label className={style.price}>
        <span className={`${style.value} ${style.value_hidden}`} ref={text}>
          {value}
        </span>
        <input
          style={{ width: width + 20 * 2 + "px" }}
          className={`${style.price_input} ${style.value}`}
          onChange={changeHandler}
          onBlur={blurHandler}
          placeholder=" "
          value={value}
        />
        <span className={style.price_placeholder}>placeholder</span>
      </label>
    </form>
  );
};

export default InputPrice;
