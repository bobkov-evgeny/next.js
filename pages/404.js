import Heading from "../components/Heading";
import {useEffect} from "react";
import {useRouter} from "next/router";
import styles from "../styles/404.module.scss";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])
    return (
        <div className={styles.wrapper}>
            <Heading text="Error 404"/>
            <Heading text="Something went wrong :("/>
        </div>
    )
};

export default Error