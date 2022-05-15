import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";

const Error = () => {
    return (
        <div className={styles.wrapper}>
            <Heading text="Error 404"/>
            <Heading text="Something went wrong :("/>
        </div>
    )
};

export default Error