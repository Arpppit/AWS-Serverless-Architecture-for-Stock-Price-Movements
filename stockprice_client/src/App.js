import {useState,useEffect} from 'react'
import './App.css';
import {BsFillCaretDownFill} from 'react-icons/bs'
import {VscTriangleUp} from 'react-icons/vsc'

function App() {


  const [name, setname] = useState('') 
  const [email, setemail] = useState('')
  const [duration, setduration] = useState(1)
  const [threshold, setthreshold] = useState(5)
  const [options, setOptions] = useState(["Microsoft -MSFT", "Google -GOOG", "Yahoo -YHOO","Uber -UBER","Tesla -TSLA","Apple -AAPL"])
  const [opts,setopts] = useState('')
  const [goog,setGoog]=useState([100,true,5.5])
  const [uber,setUber]=useState(['1234.1',true,5.5])
  const [aapl,setAapl]=useState(['1234.1',true,5.5])
  const [lnkd,setLnkd]=useState(['1234.1',true,5.5])
  const [yhoo,setYhoo]=useState(['1234.1',true,5.5])
  const  [msft,setMsft]=useState(['1234.1',true,5.5])

  useEffect(() => {
    const socket = new WebSocket('ws://stocks.mnet.website/');
    socket.onmessage = (e) => {
      saveNewStocks(e)
    };
    }
, [])

   


  function roundToTwo(num) {    
    return +(Math.round(num + "e+3")  + "e-3");
    }
    function saveNewStocks(e){
      let result = JSON.parse(e.data)
      var prev =0
      let ch = false
      let perc = 0
      let current = 0
      for(let i =0; i<result.length;i++){
        switch(result[i][0]){
          case 'goog':
            prev = goog[0]
            current =roundToTwo(result[i][1])
            ch = roundToTwo(prev - current)
            perc = ((current - prev)/prev) *100
            setGoog([current,ch,roundToTwo(perc)])
            break
          case 'lnkd':
             prev = lnkd[0]
             current =roundToTwo(result[i][1])
             ch = roundToTwo(prev - current)
             perc = ((current - prev)/prev) *100
            setLnkd([current,ch,roundToTwo(perc)])
            break
          case 'yhoo':
             prev = yhoo[0]
             current =roundToTwo(result[i][1])
            ch = roundToTwo(prev - current)
            perc = ((current - prev)/prev) *100
            setYhoo([current,ch,roundToTwo(perc)])
            break
          case 'msft':
            prev = msft[0]
            current =roundToTwo(result[i][1])
            ch = roundToTwo(prev - current)
            perc = ((current - prev)/prev) *100
            setMsft([current,ch,roundToTwo(perc)])
            break
          case 'aapl':
            prev = aapl[0]
            current =roundToTwo(result[i][1])
            ch = roundToTwo(current-prev)
            perc = ((current - prev)/prev) *100
            setAapl([current,ch,roundToTwo(perc)])
            break
          case 'tck':
            current =roundToTwo(result[i][1])
            ch = roundToTwo(prev - current)
            perc = ((current - prev)/prev) *100
            setUber([current,ch,roundToTwo(perc)])
            break
          default:
            console.log('Not changed')
        }
        //console.log(result[i][0])
      }
    }

 
 
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
  
    // axios
    //   .post('https://finnhub.io/api/v1/webhook/add?token=c57p00iad3idnp0qrsqg', {
    //     event: "earnings",
    //     symbol: "AAPL"
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
  
  return (
    <div className="App">
      <nav >
        <div className= 'nav-item'  >
          <div >
          <span >GOOG</span>
          <span className='nav-item-price'> {goog[0]}</span>
          <div className='form-row'>
            {goog[1]>0?<span className= 'text-success'> <VscTriangleUp/>{goog[2]}%({goog[1]})</span>:<span className= 'text-danger'><BsFillCaretDownFill/> {goog[2]}%({goog[1]})</span>}
            
          </div>
          </div>
        </div>
        <div className= 'nav-item'  >
          <div >
          <span >MSFT</span>
          <span className='nav-item-price'> {msft[0]}</span>
          <div className='form-row'>
          {msft[1]>0?<span className= 'text-success'><VscTriangleUp/> {msft[2]}%({msft[1]})</span>:<span className= 'text-danger'><BsFillCaretDownFill/> {msft[2]}%({msft[1]})</span>}
          </div>
          </div>
        </div>
        <div className= 'nav-item'  >
          <div >
          <span >AAPL</span>
          <span className='nav-item-price'> {aapl[0]}</span>
          <div className='form-row'>
          {aapl[1]>0?<span className= 'text-success'><VscTriangleUp/> {aapl[2]}%({aapl[1]})</span>:<span className= 'text-danger'><BsFillCaretDownFill/> {aapl[2]}%({aapl[1]})</span>}
          </div>
          </div>
        </div>
        <div className= 'nav-item'  >
          <div >
          <span >YHOO</span>
          <span className='nav-item-price'> {yhoo[0]}</span>
          <div className='form-row'>
          {yhoo[1]>0?<span className= 'text-success'><VscTriangleUp/> {yhoo[2]}%({yhoo[1]})</span>:<span className= 'text-danger'><BsFillCaretDownFill/> {yhoo[2]}%({yhoo[1]})</span>}
          </div>
          </div>
        </div>
        <div className= 'nav-item'  >
          <div >
          <span >UBER</span>
          <span className='nav-item-price'> {uber[0]}</span>
          <div className='form-row'>
          {uber[1]>0?<span className= 'text-success'> <VscTriangleUp/> {uber[2]}%({uber[1]})</span>:<span className= 'text-danger'> <BsFillCaretDownFill/>{uber[2]}%({uber[1]})</span>}
          </div>
          </div>
        </div>
        <div className= 'nav-item'  >
          <div >
          <span >TSLA</span>
          <span className='nav-item-price'> {lnkd[0]}</span>
          <div className='form-row'>
          {lnkd[1]>0?<span className= 'text-success'><VscTriangleUp/> {lnkd[2]}%({lnkd[1]})</span>:<span className= 'text-danger'><BsFillCaretDownFill/> {lnkd[2]}%({lnkd[1]})</span>}
          </div>
          </div>
        </div>
      </nav>
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
