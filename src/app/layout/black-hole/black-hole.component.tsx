import styles from "./black-hole.module.css";
import Footer from "../footer/footer";
interface MainProps {
  children: React.ReactNode;
}
const BlackHole: React.FC<MainProps> = ({ children }) => {
  return (
    <div className={styles.blackHole}>
      {" "}
      <div className={styles.bodyAbsorb}>
        <div>
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BlackHole;
