import './App.css';
import { InsertTextPage } from './pages/InsertTextPage/InsertTextPage';
import { MainPage } from './pages/MainPage/MainPage';
import { Route,Routes } from 'react-router-dom';
import { UploadFilePage } from './pages/UploadFile/UploadFilePage';
import { QuestionsPage } from './pages/Questions/QuestionPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/insert-text' element={<InsertTextPage/>}/>
        <Route path='/upolad-file' element={<UploadFilePage/>}/>
        <Route path='/questions' element={<QuestionsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
