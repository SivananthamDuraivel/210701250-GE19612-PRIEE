import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './DietPlanUpdater.css';

const DietPlanUpdater = ({prop}) => {


    const id=prop._id;
    const[cancel,setCancel]=useState(false);

    const [mbreakfast, setMbreakfast] = useState(prop.mbreakfast);
    const [mlunch, setMlunch] = useState(prop.mlunch);
    const [mdinner, setMdinner] = useState(prop.mdinner);
    const [msnacks, setMsnacks] = useState(prop.msnacks);
    const [tbreakfast, setTbreakfast] = useState(prop.tbreakfast);
    const [tlunch, setTlunch] = useState(prop.tlunch);
    const [tdinner, setTdinner] = useState(prop.tdinner);
    const [tsnacks, setTsnacks] = useState(prop.tsnacks);
    const [wbreakfast, setWbreakfast] = useState(prop.wbreakfast);
    const [wlunch, setWlunch] = useState(prop.wlunch);
    const [wdinner, setWdinner] = useState(prop.wdinner);
    const [wsnacks, setWsnacks] = useState(prop.wsnacks);
    const [thbreakfast, setThbreakfast] = useState(prop.thbreakfast);
    const [thlunch, setThlunch] = useState(prop.thlunch);
    const [thdinner, setThdinner] = useState(prop.thdinner);
    const [thsnacks, setThsnacks] = useState(prop.thsnacks);
    const [fbreakfast, setFbreakfast] = useState(prop.fbreakfast);
    const [flunch, setFlunch] = useState(prop.flunch);
    const [fdinner, setFdinner] = useState(prop.fdinner);
    const [fsnacks, setFsnacks] = useState(prop.fsnacks);
    const [sbreakfast, setSbreakfast] = useState(prop.sbreakfast);
    const [slunch, setSlunch] = useState(prop.slunch);
    const [sdinner, setSdinner] = useState(prop.sdinner);
    const [ssnacks, setSsnacks] = useState(prop.ssnacks);
    const [subreakfast, setSubreakfast] = useState(prop.subreakfast);
    const [sulunch, setSulunch] = useState(prop.sulunch);
    const [sudinner, setSudinner] = useState(prop.sudinner);
    const [susnacks, setSusnacks] = useState(prop.susnacks);

    const handleReload=()=>{
      window.location.reload()
    }

    const handleUpdate = (e) => {

        e.preventDefault();
        
        if (!mbreakfast || !mlunch || !mdinner || !msnacks || !tbreakfast || !tlunch || !tdinner || !tsnacks ||
            !wbreakfast || !wlunch || !wdinner || !wsnacks || !thbreakfast || !thlunch || !thdinner || !thsnacks ||
            !fbreakfast || !flunch || !fdinner || !fsnacks || !sbreakfast || !slunch || !sdinner || !ssnacks ||
            !subreakfast || !sulunch || !sudinner || !susnacks) {
            alert("All fields must be filled out.");
            return;
        }
    
        axios.put(`http://localhost:4000/api/dietplan/${id}`, {
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
    <div className='background'>
      {(!cancel)?<form onSubmit={handleUpdate}  >
      <br /><hr /><br />
      <div className="form-container">
      <div className='meal-column'>

      <h3 className='meal-time'>Breakfast</h3>
      
      <label>Monday :</label>
      <input type="text" value={mbreakfast} onChange={(e) => setMbreakfast(e.target.value)} className='in'/>

      <label>Tuesday :</label>
      <input type="text" value={tbreakfast} onChange={(e) => setTbreakfast(e.target.value)} className='in' />

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
      <h3 className='meal-time'>Lunch</h3>
      
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
      <h3 className='meal-time'>Dinner</h3>
      
      <div id='inner'>
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

        <label>Sunday Break:</label>
        <input type="text" value={sudinner} onChange={(e) => setSudinner(e.target.value)} className='in'/>
      </div>

    </div>
    <div className='meal-column'>
      <h3 className='meal-time'>Snacks</h3>
      
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

      <label>Sunday Break:</label>
      <input type="text" value={susnacks} onChange={(e) => setSusnacks(e.target.value)} className='in'/>

    </div>
    </div>
    <br />
    <div className='save_and_cancel'>
      <button className='save-update' type='submit' >Save Updates</button>
      <button className='cancel' onClick={()=>{setCancel(!cancel),handleReload()} } type='button' >Cancel</button>
    </div><br /><br /><br /><br />
    </form>:
    null
  }
  </div>

  )
}

export default DietPlanUpdater
