import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './DietPlanAdder.css'



const DietPlanAdder = () => {


    const[cancel,setCancel]=useState(false);

    const [mbreakfast, setMbreakfast] = useState('');
    const [mlunch, setMlunch] = useState('');
    const [mdinner, setMdinner] = useState('');
    const [msnacks, setMsnacks] = useState('');
    const [tbreakfast, setTbreakfast] = useState('');
    const [tlunch, setTlunch] = useState('');
    const [tdinner, setTdinner] = useState('');
    const [tsnacks, setTsnacks] = useState('');
    const [wbreakfast, setWbreakfast] = useState('');
    const [wlunch, setWlunch] = useState('');
    const [wdinner, setWdinner] = useState('');
    const [wsnacks, setWsnacks] = useState('');
    const [thbreakfast, setThbreakfast] = useState('');
    const [thlunch, setThlunch] = useState('');
    const [thdinner, setThdinner] = useState('');
    const [thsnacks, setThsnacks] = useState('');
    const [fbreakfast, setFbreakfast] = useState('');
    const [flunch, setFlunch] = useState('');
    const [fdinner, setFdinner] = useState('');
    const [fsnacks, setFsnacks] = useState('');
    const [sbreakfast, setSbreakfast] = useState('');
    const [slunch, setSlunch] = useState('');
    const [sdinner, setSdinner] = useState('');
    const [ssnacks, setSsnacks] = useState('');
    const [subreakfast, setSubreakfast] = useState('');
    const [sulunch, setSulunch] = useState('');
    const [sudinner, setSudinner] = useState('');
    const [susnacks, setSusnacks] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!mbreakfast || !mlunch || !mdinner || !msnacks || !tbreakfast || !tlunch || !tdinner || !tsnacks ||
            !wbreakfast || !wlunch || !wdinner || !wsnacks || !thbreakfast || !thlunch || !thdinner || !thsnacks ||
            !fbreakfast || !flunch || !fdinner || !fsnacks || !sbreakfast || !slunch || !sdinner || !ssnacks ||
            !subreakfast || !sulunch || !sudinner || !susnacks) {
            alert("All fields must be filled out.");
            return;
        }
        axios.defaults.withCredentials=true;
        axios.post('http://localhost:4000/api/dietPlan', {
            mbreakfast, mlunch, mdinner, msnacks,
            tbreakfast, tlunch, tdinner, tsnacks,
            wbreakfast, wlunch, wdinner, wsnacks,
            thbreakfast, thlunch, thdinner, thsnacks,
            fbreakfast, flunch, fdinner, fsnacks,
            sbreakfast, slunch, sdinner, ssnacks,
            subreakfast, sulunch, sudinner, susnacks
        })
        .then(res => {
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
    

  return (
    <div >
      {(!cancel)?<form onSubmit={handleSubmit}  >
      <br /><hr /><br />
      <div className="form-container">
      <div className='meal-column'>
      <h3>Breakfast</h3>
      
      <label>Monday :</label>
      <input type="text" value={mbreakfast} onChange={(e) => setMbreakfast(e.target.value)} className='in'/>

      <label>Tuesday :</label>
      <input type="text" value={tbreakfast} onChange={(e) => setTbreakfast(e.target.value)} className='in'/>

      <label>Wednesday :</label>
      <input type="text" value={wbreakfast} onChange={(e) => setWbreakfast(e.target.value)} className='in'/>

      <label>Thursday : </label>
      <input type="text" value={thbreakfast} onChange={(e) => setThbreakfast(e.target.value)} className='in'/>

      <label>Friday :</label>
      <input type="text" value={fbreakfast} onChange={(e) => setFbreakfast(e.target.value)} className='in'/>

      <label>Saturday :</label>
      <input type="text" value={sbreakfast} onChange={(e) => setSbreakfast(e.target.value)} className='in'/>

      <label>Sunday :</label>
      <input type="text" value={subreakfast} onChange={(e) => setSubreakfast(e.target.value)} className='in'/>

    </div>

    <div className='meal-column'>
      <h3>Lunch</h3>
      
      <label>Monday :</label>
      <input type="text" value={mlunch} onChange={(e) => setMlunch(e.target.value)} className='in'/>

      <label>Tuesday :</label>
      <input type="text" value={tlunch} onChange={(e) => setTlunch(e.target.value)} className='in'/>

      <label>Wednesday :</label>
      <input type="text" value={wlunch} onChange={(e) => setWlunch(e.target.value)} className='in'/>

      <label>Thursday : </label>
      <input type="text" value={thlunch} onChange={(e) => setThlunch(e.target.value)} className='in'/>

      <label>Friday :</label>
      <input type="text" value={flunch} onChange={(e) => setFlunch(e.target.value)} className='in'/>

      <label>Saturday :</label>
      <input type="text" value={slunch} onChange={(e) => setSlunch(e.target.value)} className='in'/>

      <label>Sunday :</label>
      <input type="text" value={sulunch} onChange={(e) => setSulunch(e.target.value)} className='in'/>

    </div>
  
    <div className='meal-column'>
      <h3>Dinner</h3>
      
      <label>Monday :</label>
      <input type="text" value={mdinner} onChange={(e) => setMdinner(e.target.value)} className='in'/>

      <label>Tuesday :</label>
      <input type="text" value={tdinner} onChange={(e) => setTdinner(e.target.value)} className='in'/>

      <label>Wednesday :</label>
      <input type="text" value={wdinner} onChange={(e) => setWdinner(e.target.value)} className='in'/>

      <label>Thursday : </label>
      <input type="text" value={thdinner} onChange={(e) => setThdinner(e.target.value)} className='in'/>

      <label>Friday :</label>
      <input type="text" value={fdinner} onChange={(e) => setFdinner(e.target.value)} className='in'/>

      <label>Saturday :</label>
      <input type="text" value={sdinner} onChange={(e) => setSdinner(e.target.value)} className='in'/>

      <label>Sunday :</label>
      <input type="text" value={sudinner} onChange={(e) => setSudinner(e.target.value)} className='in'/>

    </div>
    <div className='meal-column'>
      <h3>Snacks</h3>
      
      <label>Monday :</label>
      <input type="text" value={msnacks} onChange={(e) => setMsnacks(e.target.value)} className='in'/>

      <label>Tuesday :</label>
      <input type="text" value={tsnacks} onChange={(e) => setTsnacks(e.target.value)} className='in'/>

      <label>Wednesday :</label>
      <input type="text" value={wsnacks} onChange={(e) => setWsnacks(e.target.value)} className='in'/>

      <label>Thursday : </label>
      <input type="text" value={thsnacks} onChange={(e) => setThsnacks(e.target.value)} className='in'/>

      <label>Friday :</label>
      <input type="text" value={fsnacks} onChange={(e) => setFsnacks(e.target.value)} className='in'/>

      <label>Saturday :</label>
      <input type="text" value={ssnacks} onChange={(e) => setSsnacks(e.target.value)} className='in'/>

      <label>Sunday :</label>
      <input type="text" value={susnacks} onChange={(e) => setSusnacks(e.target.value)} className='in'/>

    </div>
    </div>
    <br />
    <div className='button-container'>
      <button >Add Plan</button>
      <button className='add-cancel' onClick={()=>setCancel(!cancel)} type='button'>Cancel</button>
    </div>
    <br /><br /><br /><br />
    </form>:null}
    </div>
  )
}

export default DietPlanAdder
