import Styles from './HowWorks.module.css';
import next from '../../../../Images/Next.png';
const HowWorks = () => {
    return(
        <>
        <section className={Styles.howWorks__container_section}>
            <div className={Styles.howWorks__container}>
                <div className={Styles.howWorks__paddings}>
                    <div className={Styles.howWorks__header_container}>
                        <p>How it works</p>
                    </div>

                    <div className={Styles.howWorks__discription}>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className={Styles.nextButton__container}>
                <button>
                    <img alt='' src={next} className={Styles.howWorks__next_image}/>
                </button>
            </div>
        </section>
            
        </>
    )
}
export default HowWorks