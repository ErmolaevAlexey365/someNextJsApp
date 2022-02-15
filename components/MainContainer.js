import styles from "../styles/MainContainer.module.css";
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={`Alexey Ermolaev learn project ` + keywords}/>
                <title>Main Page</title>
            </Head>
            <div className={styles.navbar}>
                <A href={'/'} text={"Home page"}/>
                <A href={'/users'} text={"Users"}/>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;