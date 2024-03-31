import Styles from './UploadText.module.css';
import arrow from '../../Images/Arrow.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UploadFile = () => {
    const navigate = useNavigate();
    const [fileName, setFileName] = useState('');
    const goBack = () => {
        navigate(-1); // Перемещает пользователя на одну страницу назад в истории браузера
    };

    async function Send() {
		const formData = new FormData();

		// Добавление файлов, которые были добавлены, в formData
		// for (const [key, file] of Object.entries($documents)) {
		// 	if (file instanceof File) {
		// 		formData.append(key, file);
		// 	} else {
		// 		formData.append(key, '');
		// 	}
		// }

		// Отправка formData на сервер
		try {
			const response = await fetch('your-server-endpoint', {
				method: 'POST',
				body: formData
			});
			const result = await response.json();
			// console.log(result);
		} catch (error) {
			console.error(error);
		}
	}
    

    // Обработчик изменения файла
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        // Обновляем состояние, установив имя выбранного файла
        setFileName(file.name);
      }
    }

    return(
        <>
            <section className={Styles.insertText__container}>
                <div className={Styles.insertText__paddings}>
                    <div className={Styles.insertText__container_smaller}>
                        <div className={Styles.insertText__body}>
                            <button onClick={goBack}>
                                <img src={arrow} className={Styles.arrowReturn} alt=''/>
                            </button>
                            <h1 className={Styles.insertText__header}>upload file</h1>
                        </div>
                        <div className={Styles.fileInput_container}>
                            {/* Используем состояние fileName для отображения имени файла */}
                            <p className={Styles.fileInput}>{fileName}</p>
                            <label className="file w-[100%]">
                                <input type="file" id="photo" className="h-[50px] block box-border" onChange={handleFileChange}/>
                                <span className={Styles.fileInputButton}>Choose file</span>
                            </label> 
                        </div>
                        
                        <button className={Styles.insertText__button}>upload</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UploadFile;