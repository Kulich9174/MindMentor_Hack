import Home from "../../Components/MainPage/Home/MainHome";
import ListHome from "../../Components/MainPage/List/ListHome";
import Styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <>  
            <div className={Styles.mainPage__container}>
                <Home/>
                <ListHome/>
            </div>
        </>
    )
}
export {MainPage};