import React, { useContext } from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Application'
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import ManageJobs from './pages/ManageJobs';
import ViewApplication from './pages/ViewApplication';
import 'quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App = () => {
  const {showRecruiterLogin, companyToken} = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Applications/>}/>
        <Route path ='/dashboard' element={<Dashboard/>}>
        
        {companyToken ? <>
          <Route path ='add-job' element={<AddJob/>} />
          <Route path ='manage-jobs' element={<ManageJobs/>} />
          <Route path ='view-application' element={<ViewApplication/>} />
        </> :null
        } 
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
