import Styles from './ListHome.module.css';
import HowWorks from './HowWorks/HowItWorks';
import TestSection from './TestSection/TestSection';
import GenMindMap from './GenMindMap/GenMindMap';
const ListHome = () => {
    return(
        <>
            <section>
                <div className={Styles.list__container}>
                    <div className={Styles.buttonContainer}>
                        <button className={Styles.button}>Log in</button>
                        <button className={Styles.button}>Sing up</button>
                    </div>
                    <HowWorks/>
                    <TestSection/>
                    <GenMindMap/>
                    <div className={Styles.buttons_container}>
                        <button className={Styles.button_contacts}>contacts</button>
                        <button className={Styles.button_lang}>Eng</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ListHome;