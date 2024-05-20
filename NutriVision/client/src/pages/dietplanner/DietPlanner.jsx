import React, { useEffect, useState } from 'react';
import '../dietplanner/DietPlanner.css';
import axios from 'axios';
import { RiCalendarScheduleLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';



import DietPlanAdder from './DietPlanAdder';
import DietPlanUpdater from './DietPlanUpdater';

const DietPlanner = () => {
  
  const navigate = useNavigate()
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.post("http://localhost:4000/auth/verify")
    .then(res=>{
      if(!(res.data==="verified"))
        navigate('/signin')
    })
  },[navigate])

  const [dietPlan, setDietPlan] = useState([]);
  const [showForm,setShowForm]=useState(false);
  const [showEdit,setShowEdit]=useState(false);
  const [update_items,setUpdate_items]=useState({});

  useEffect(() => {
    const getPlans = async () => {
      try {
        axios.defaults.withCredentials=true;
        const response = await axios.get("http://localhost:4000/api/dietPlan");
        if(response)  setDietPlan(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPlans();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/dietPlan/${id}`);
      console.log("Successfully deleted");
      window.location.reload();
    } catch (error) {
      console.log("Error deleting:", error);
    }
  }

  const handleEdit = async (item)=>{
    setUpdate_items(item);
    // console.log(update_items);
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    return date.toLocaleDateString("en-US", options);
  };
    

  return (
    
    <div className='background'>
      <div className='dp'>
      
      
      <div className='add-plan'>
        <h2>Add new Diet-Plan : </h2>
        <button onClick={()=>{setShowForm(!showForm);setShowEdit(false)}} >Add new</button>
      </div>
      <br /><br />

      {(showForm===true)?(<DietPlanAdder/>):null}
      {(showEdit===true)?<DietPlanUpdater prop={update_items}/>:null}

      
      {(dietPlan !== null && dietPlan.length > 0) ? (
        dietPlan.map((item, index) => (
          <div key={index} className="table-container">
          <div className='create-delete'>
            <h3 className='left'>Last update at : {formatDate(item.updatedAt)}</h3>
            <div className='right'>
              <span ><button onClick={()=>{handleEdit(item);setShowEdit(!showEdit);setShowForm(false)}} className='right1' >Edit</button></span>
              <span ><button onClick={()=>handleDelete(item._id)} className='right2'>Delete</button></span>
            </div>
          </div>
            <table>
              <thead>
                <tr>
                  <th>Meal</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>BREAKFAST</b></td>
                  <td>{item.mbreakfast}</td>
                  <td>{item.tbreakfast}</td>
                  <td>{item.wbreakfast}</td>
                  <td>{item.thbreakfast}</td>
                  <td>{item.fbreakfast}</td>
                  <td>{item.sbreakfast}</td>
                  <td>{item.subreakfast}</td>
                </tr>
                <tr>
                  <td><b>LUNCH</b></td>
                  <td>{item.mlunch}</td>
                  <td>{item.tlunch}</td>
                  <td>{item.wlunch}</td>
                  <td>{item.thlunch}</td>
                  <td>{item.flunch}</td>
                  <td>{item.slunch}</td>
                  <td>{item.sulunch}</td>
                </tr>
                <tr>
                  <td><b>DINNER</b></td>
                  <td>{item.mdinner}</td>
                  <td>{item.tdinner}</td>
                  <td>{item.wdinner}</td>
                  <td>{item.thdinner}</td>
                  <td>{item.fdinner}</td>
                  <td>{item.sdinner}</td>
                  <td>{item.sudinner}</td>
                </tr>
                <tr>
                  <td><b>SNACKS</b></td>
                  <td>{item.msnacks}</td>
                  <td>{item.tsnacks}</td>
                  <td>{item.wsnacks}</td>
                  <td>{item.thsnacks}</td>
                  <td>{item.fsnacks}</td>
                  <td>{item.ssnacks}</td>
                  <td>{item.susnacks}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      ):<h2 className='command'><RiCalendarScheduleLine /> No diet plans have been created</h2>}
      </div>
    </div>
  );
};

export default DietPlanner;
