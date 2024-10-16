import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import record from "../../images/record.svg"
import recordarm from "../../images/record-arm.svg"

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.main}>
                    <h1>404s and heartbreaks</h1>
                    <p>
                        We couldn’t find the page you were looking for. Maybe our FAQ or
                        Community can help?
                    </p>
                    <span onClick={() => navigate("/home")}>Go Back Home</span>
                </div>
            </div>
            <div className={styles.right}>
                <img src={record} alt="record" className={styles.record} />
                <img
                    src={recordarm}
                    alt="record-arm"
                    className={styles.record_arm}
                />
            </div>
        </div>
    );
};