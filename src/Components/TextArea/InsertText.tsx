import Styles from './InsertText.module.css';
import arrow from '../../Images/Arrow.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { changeValue } from '../../store/InsertTextSlice';
import { useEffect } from 'react';
import { changeCounterValue } from '../../store/CountQuestions';
import { Slider } from "antd";
;

const InsertText = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); // Перемещает пользователя на одну страницу назад в истории браузера
    };

    const dispatch = useDispatch();
    const InsertTextStateValue = useSelector((state: RootState) => state.InsertTextSlice.value);
    const QuestionCount = useSelector((state:RootState)=>state.CountQuestions.value);
    const InsertTextStateChange = () => {
        dispatch(changeValue());
    };
const handleSliderChange = (value: number) => {
    dispatch(changeCounterValue(value));
};
    const handleInputNumberChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.valueAsNumber;
    if (!isNaN(value)) {
        dispatch(changeCounterValue(value));
    } else {
        console.log("Input field is cleared or contains non-numeric input");
    }
};

    useEffect(()=>{
        console.log(InsertTextStateValue, QuestionCount)
    })
    return(
        <>
            <section className={Styles.insertText__container}>
                <div className={Styles.insertText__paddings}>
                    <div className={Styles.insertText__container_smaller}>
                        <div className={InsertTextStateValue ? Styles.insertText__body : Styles.insertText__hidden }>
                            <button onClick={goBack}>
                                <img src={arrow} className={Styles.arrowReturn} alt=''/>
                            </button>
                            <h1 className={Styles.insertText__header}>Insert text</h1>
                        </div>

                        <div className={Styles.textarea_container}>
                            <textarea className={Styles.textarea} placeholder="Введите ваш текст сюда..."/>
                        </div>
                        <div className={InsertTextStateValue ? Styles.insertText__hidden : Styles.insertText__range_container }>
                            {/* <input 
                                type='range' 
                                value={QuestionCount} 
                                min={0} 
                                max={10} 
                                onChange={handleValueChange} // Присвоение обработчика
                            /> */}
                            <Slider
                            min={1}
                            max={10}
                            style={{
                                width:'240px',
                                color:'black',
                            }}
                            onChange={handleSliderChange}
                            value={typeof  QuestionCount === 'number' ?  QuestionCount : 0}
                            />
                            {/* <InputNumber
                                min={1}
                                max={20}
                                style={{
                                    
                                    backgroundColor: 'white',
                                    border: 'solid 1px black',
                                    borderRadius: '20px', 
                                    padding: '6px',
                                    width: '100px',
                                    height: '40px',
                                    textAlign: 'center',
                                    appearance: 'none',
                                    margin: '0',
                                }}
                                value={QuestionCount}
                                onChange={handleInputNumberChange}
                                /> */}
                            <input 
                                type='number' 
                                value={QuestionCount} 
                                min={0} 
                                max={10} 
                                className={Styles.inputNumbers}
                                onChange={handleInputNumberChange} // Присвоение обработчика
                            />
                        </div>
                        <button className={Styles.insertText__button} onClick={InsertTextStateChange}>
                            {
                                InsertTextStateValue ? <p>insert</p> : <p>generator</p>
                            }
                            </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default InsertText;