import InsertText from "../../Components/TextArea/InsertText";
import Styles from './InserTextPage.module.css';
const InsertTextPage = () =>{
    return(
        <>
            <div className={Styles.container}>
                <InsertText/>
            </div>
        </>
    )
}
export {InsertTextPage}