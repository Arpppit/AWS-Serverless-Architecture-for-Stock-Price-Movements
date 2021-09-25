import {useState} from 'react'
import './App.css';

function App() {

  const [name, setname] = useState('') 
  const [email, setemail] = useState('')
  const [duration, setduration] = useState(1)
  const [threshold, setthreshold] = useState(5)
  const [options, setOptions] = useState(["option 1", "option 2", "option 3"])
  const [opts,setopts] = useState('')
  async function sendData(e){
    e.preventDefault()
      const payload = {
        name:name,
        email:email,
        duration:duration,
        threshold:threshold,
        stock:opts
      }
      console.log(JSON.stringify(payload))
  }

  return (
    <div className="App">
      <div style={{height:'20%'}}></div>
        <div className='content'>
          
         
         
        
        <h2>Personal Information</h2>
              <form id="personal-form">
                <div className="form-row">
                  <div className="form-item" >
                  <label> Your Name </label>
            
            <input type='text' value={name} onChange={(e) =>{setname(e.target.value)}} ></input>
                  </div>
                  <div className="form-item" >
                    <label> Email</label>
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) =>{setemail(e.target.value)}}
                    ></input>
                    
                  </div>
                  <div className='form-item'>
                  <label>Stock </label>
                    <select value={opts} onChange={(e) => {setopts(e.target.value)}}>
                    { options.map((element, index) => <option key={index}>{element}</option>) }
                    </select>
            
            </div>
            <div className="form-item">
                  <label> Duration </label>
            
            <input type='text' value={duration} onChange={(e) =>{setduration(e.target.value)}} ></input>
                  </div>
                  <div className="form-item" >
                  <label> Threshold </label>
            <div className='inp'>
            <input type='number' min='0' max='100' value={threshold} onChange={(e) =>{setthreshold(e.target.value)}} ></input>%</div>
                  </div>
            
                  </div>
                  <div className='form-row' style={{marginBottom:'40px', marginTop:'20px'}}>
                  <button id='next-btn' onClick={sendData} > Submit</button>
                  </div>
                  </form>
    </div>
    </div>
  );
}

export default App;
