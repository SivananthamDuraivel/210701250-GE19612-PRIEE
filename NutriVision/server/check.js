// const request = require('request');
// var query = '3lb carrots and a chicken sandwich';
// request.get({
//   url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
//   headers: {
//     'X-Api-Key': 'IwwH7j8QS/+bvNh16YoFWA==4XNW8rLSKmNlTTyK'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });
const axios = require('axios');
const fun= async ()=>{
    
const options = {
    method: 'GET',
    url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
    params: {query: 'eggs'},
    headers: {
      'X-RapidAPI-Key': '7c1d611794msh9a6520998aace5ap1a7d50jsn8fd146d12df4',
      'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  try {
      const response =await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}
fun()