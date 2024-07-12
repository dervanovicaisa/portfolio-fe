import Home from "@/app/page";
import styles from "./black-hole.module.css";

const BlackHole = () => {
  return (
    <div className={styles.blackHole}>
      <div className={styles.bodyAbsorb}>
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default BlackHole;
