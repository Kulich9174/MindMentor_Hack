import UploadFile from "../../Components/UploadText/UploadText";
import Styles from './UploadFile.module.css';
const UploadFilePage = () =>{
    return(
        <>
            <div className={Styles.container}>
                <UploadFile/>
            </div>
        </>
    )
}
export {UploadFilePage}