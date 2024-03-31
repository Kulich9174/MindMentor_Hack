import Styles from './TestSection.module.css';
import { useNavigate } from 'react-router-dom';
const TestSection = () =>{
    const navigate = useNavigate();

  // Функция для обработки клика
  const handleClick = () => {
    navigate('/insert-text');
  };
  const onUploadFilePage = () => {
    navigate('/upolad-file');
  }
    return(
        <>
            <section className={Styles.container_section}>
                <div className={Styles.testSection__container}>
                    <div className={Styles.testSection__buttons_container}>
                        <button className={Styles.testSection__button_container}>generate test</button>
                        <div className={Styles.textSection__second_layer}>
                            <button className={Styles.testSection__button_container_small} onClick={onUploadFilePage}>upload file</button>
                            <button className={Styles.testSection__button_container_small} onClick={handleClick}>load text</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TestSection;