import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss"

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {contacts: data}
    }
};

const Home = ({contacts}) => {
    return (
        <div className={styles.wrapper}>

            <Heading text="Hello world!"/>
            <ul>
                {contacts && contacts.map(({id, name, email}) => (
                    <li key={id}>
                        <strong>{name}</strong>{email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;