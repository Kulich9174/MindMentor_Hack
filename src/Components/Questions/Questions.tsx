import Question from '../QuestionComponent/Question';
import Styles from './Questions.module.css'


const QuestionsList = () =>{
    let authClient = false;
    return(
        <>
            <section className={Styles.container_section}>
                <div className={Styles.container_questions}>
                    <div className={Styles.buttons_container}>
                        <button className={Styles.gerenerateButton}>gerenerate test</button>
                        <div className={Styles.buttons_container_top}>
                            <button className={Styles.showAnswers}>Show right answers</button>
                            <button className={authClient === false ?  Styles.hidden : Styles.shareTest}>share test</button>
                        </div>
                    </div>
                    
                    <h1>test</h1>

                    <div className={Styles.questions_section}>
                        <div className={Styles.questions}>
                            <Question/>
                        </div>
                    </div>

                        <button className={Styles.submitButton}>submit</button>
                </div>
                
            </section>
        </>
    )
}
export default QuestionsList;