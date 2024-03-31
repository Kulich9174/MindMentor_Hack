import Styles from './Question.module.css';

const Question = () =>{
    type TQuestion = {
        header:string,
        textQuestion1 : string,
        textQuestion2 : string,
        textQuestion3 : string,
        textQuestion4 : string,
    }
    type Questions = TQuestion[]
    const questions : Questions = [
        {
            header:'Fkj',
            textQuestion1 : 'dsa',
            textQuestion2 : 'aw',
            textQuestion3 : 'erq',
            textQuestion4 : 'qere',
        },
        {
            header:'kpok',
            textQuestion1 : 'lk',
            textQuestion2 : 'oijj',
            textQuestion3 : 'joij',
            textQuestion4 : 'joiy',
        },
        {
            header:'kml',
            textQuestion1 : 'kknoh',
            textQuestion2 : 'mkjnj',
            textQuestion3 : 'mklj',
            textQuestion4 : 'mlkn',
        },
        {
            header:'kml',
            textQuestion1 : 'kknoh',
            textQuestion2 : 'mkjnj',
            textQuestion3 : 'mklj',
            textQuestion4 : 'mlkn',
        },

    ]
        
    return(
        <>
            {questions.map((question, index) => (
        <div key={index}>
            <div className={Styles.header_container}>
                <p>{index + 1}.</p>
                <h3>{question.header}</h3>
            </div>

            <form className={Styles.container}>
                <label>
                    <input type="radio" name={`question${index}`} value={question.textQuestion1} className={Styles.inputQuestion} />
                    <span className={Styles.radioInfo}>{question.textQuestion1}</span>
                </label>
                <label>
                    <input type="radio" name={`question${index}`} value={question.textQuestion2} className={Styles.inputQuestion} />
                    <span className={Styles.radioInfo}>{question.textQuestion2}</span>
                </label>
                <label>
                    <input type="radio" name={`question${index}`} value={question.textQuestion3} className={Styles.inputQuestion} />
                    <span className={Styles.radioInfo}>{question.textQuestion3}</span>
                </label>
                <label>
                    <input type="radio" name={`question${index}`} value={question.textQuestion4} className={Styles.inputQuestion} />
                    <span className={Styles.radioInfo}>{question.textQuestion4}</span>
                </label>
            </form>
        </div>
    ))}
        </>
    )
}
export default Question