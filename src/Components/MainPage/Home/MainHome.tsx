import Styles from './MainHome.module.css';


const Home = ()=>{
    return(
        <>
        <section>
            <h1 className={Styles.header}>MindMentor</h1>
            <div className={Styles.home__mainContainer}></div>
        </section>
        </>
    )
}
export default Home;