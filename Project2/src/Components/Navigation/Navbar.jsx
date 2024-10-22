import styles from"./Navigation.module.css";

const Navbar = () => {
    return (
      <nav className={`${styles.navigation} container`}>
        <div className={styles.logo}>
          <img src="/images/Logo (2).png" alt="Company logo" />
        </div>

        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  