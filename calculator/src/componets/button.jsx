import style from "./display.module.css"
function Button() {
  return (
    <div className={style.btn}>
      <button className={style.btn2}>AC</button>
      <button className={style.btn2}>+</button>
      <button className={style.btn2}>-</button>
      <button className={style.btn2}>*</button>
      <button className={style.btn1}>7</button>
      <button className={style.btn1}>8</button>
      <button className={style.btn1}>9</button>
      <button className={style.btn2}>/</button>
      <button className={style.btn1}>4</button>
      <button className={style.btn1}>5</button>
      <button className={style.btn1}>6</button>
      <button className={style.btn2}>%</button>
      <button className={style.btn1}>1</button>
      <button className={style.btn1}>2</button>
      <button className={style.btn1}>3</button>
      <button className={style.btn2}>=</button>
      <button className={style.btn1}>0</button>
      <button className={style.btn1}>0</button>
      <button className={style.btn1}>0</button>
     
      <button className={style.btn2}>.</button>
      {/* <button className={style.btn1}>=</button> */}
    </div>
  );
}
export default Button;
