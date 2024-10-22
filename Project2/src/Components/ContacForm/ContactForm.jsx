import Button from "../Button/button";
import styles from "./Contact.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { BsDisplay } from "react-icons/bs";

const ContactForm = () => {
  return(
  <section className={styles.container}>
    <div className={styles.contact_form}> 
        <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CALL" icon={<MdOutlineMessage fontSize="24px" />} />
            <Button text="VIA CALL" icon={<IoCall />} />
            </div>
        
        <Button
        isOutLine={true}
        text="VIA EMAIL FORM " 
        icon={<IoIosMail fontsize="24px" />} />
        <form>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" rows="20" />
            </div >

            <div style={{
                display:"flex",
                justifycontent:"end",
            }}>
            <Button text="SUBMIT BUTTON" />
            </div>
        </form>
        </div>
    <div className={styles.contactImage}>
        <img src="/images/ab.svg" alt="24x7 image" />
    </div>
    
 
</section>
);
};
  

export default ContactForm;