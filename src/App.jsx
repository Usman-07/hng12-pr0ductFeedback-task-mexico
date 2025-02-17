import { Route, Routes } from 'react-router-dom';
import './App.css'
import {Suggestion} from './pages/Suggestion'
import { AddFeedback } from './pages/AddFeedback';
import { Roadmap } from './pages/Roadmap';
import { EditFeedback } from './pages/EditFeedback';
import { FeedbackComment } from './pages/FeedbackComment';

function App() {
;
  return (
    <>
     <div className="App bg-[#F7F8FD] jost">
      <Routes>
      <Route path="/" element={<Suggestion />} />
      <Route path="/new-feedback" element={<AddFeedback />} />
      <Route path="/feedback-roadmap" element={<Roadmap/>} />
      <Route path="/edit-feedback" element={<EditFeedback/>} />
      <Route path="/feedback/:id" element={<FeedbackComment />} />
      </Routes>
    </div>
    </>
  )
}

export default App
