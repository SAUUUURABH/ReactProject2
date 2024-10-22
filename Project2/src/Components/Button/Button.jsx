
import styles from "./Button.module.css";

const button = ({isOutLine,text, icon}) => {
   
  return (
   <button className= { isOutLine ? styles.outline_btn : styles.Primary_btn}>
{icon}

{text}


    </button>
  );
};
export default button;