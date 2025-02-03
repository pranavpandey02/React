import Button from "./componets/button";
import style from "./App.module.css";
import Display from "./componets/display";

function App() {
  return (
    <center>
    <div className={style.calculator}>
      <Display></Display>
      <Button></Button>
    </div>
    </center>
  );
}
export default App;
