import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Nutrition.css';
import { useNavigate } from 'react-router-dom';

const Nutrition = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.post("http://localhost:4000/auth/verify")
      .then(res => {
        if (!(res.data === "verified"))
          navigate('/signin')
      })
  }, [navigate]);

  const [food, setFood] = useState('');
  const [nutritionData, setNutritionData] = useState([]);

  const handleFood = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:4000/api/nutrition', {
        params: { food }
      });
      setNutritionData(response.data);
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
    }
  };

  return (
    <div>
      <div className='nutrition_analysis'>
      <br /><br />
        <h1 >Nutrition Analysis</h1>
        <br /><br /><br />
        <form onSubmit={handleFood}>
          <input type="text" value={food} onChange={(e) => setFood(e.target.value)} className='food-input' placeholder="Enter the Food :" />
          <button type="submit" className='get-nutrition'>Get Nutrition</button>
        </form>
        {nutritionData.length > 0 && (
          <div className="nutrition-info">
            {nutritionData.map((item, index) => (
              <div key={index} className="nutrition-item">
              <br /><br />
                <h2>Nutrition Information for {item.name}</h2>
                <table className='nutrition-table'>
                  <thead>
                    <tr>
                      <th>Nutrient</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Serving Size (g)</td>
                      <td>{item.serving_size_g}</td>
                    </tr>
                    <tr>
                      <td>Calories</td>
                      <td>{item.calories}</td>
                    </tr>
                    <tr>
                      <td>Carbohydrates Total (g)</td>
                      <td>{item.carbohydrates_total_g}</td>
                    </tr>
                    <tr>
                      <td>Cholesterol (mg)</td>
                      <td>{item.cholesterol_mg}</td>
                    </tr>
                    <tr>
                      <td>Fat Saturated (g)</td>
                      <td>{item.fat_saturated_g}</td>
                    </tr>
                    <tr>
                      <td>Fat Total (g)</td>
                      <td>{item.fat_total_g}</td>
                    </tr>
                    <tr>
                      <td>Fiber (g)</td>
                      <td>{item.fiber_g}</td>
                    </tr>
                    <tr>
                      <td>Potassium (mg)</td>
                      <td>{item.potassium_mg}</td>
                    </tr>
                    <tr>
                      <td>Protein (g)</td>
                      <td>{item.protein_g}</td>
                    </tr>
                    <tr>
                      <td>Sodium (mg)</td>
                      <td>{item.sodium_mg}</td>
                    </tr>
                    <tr>
                      <td>Sugar (g)</td>
                      <td>{item.sugar_g}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='image'></div>
    </div>
  );
};

export default Nutrition;
