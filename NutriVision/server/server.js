require('dotenv').config()
const express =  require('express')
const axios=require('axios')
const app = express()
const mongoose=require('mongoose')
const cors = require('cors')
const cookieParser=require('cookie-parser')

const dietroute=require("./routes/Dietplan")
const authroute=require("./routes/AuthRoute")

//------------  

const { rejects } = require('assert');
const {spawn} = require('child_process');
const { error } = require('console');
const bodyParser=require('body-parser')
const { resolve } = require('path');

app.use(bodyParser.urlencoded({extended: true}));

//------------


//middleware
app.use(cors(
    {
        origin:["http://localhost:5173",],
        credentials:true
    }
))
app.use(express.json())
app.use(cookieParser())

const executePython= async (script,args)=>{
    const arguments=args.map(arg=>arg.toString());
    const py=spawn("python",[script,...arguments]);

    const result=await new Promise((resolve,reject)=>{
        let output;
        py.stdout.on('data',(data)=>{
            output=JSON.parse(data);
        })
        py.stderr.on('data',(data)=>{
            console.error('error:',data);
            reject('error in :',script);
        })
        py.on("exit",(code)=>{
            console.log("child process exited with code: ",code);
            resolve(output);
        })
    })
    return result;
}


app.post('/model',async(req,res)=>{
    // console.log("received",req.body.data);
    const {gender,age,height,weight,duration,hrt,temp}=req.body
    console.log(req.body.gender);
    try{
        const result = await executePython("./pyfile.py",[gender,age,height,weight,duration,hrt,temp]);
        // console.log("working",result)
        res.json(result);  
    }
    catch(error){
        res.status(500).json({"error is":error})
    }
})

app.get('/api/nutrition', async (req, res) => {
    console.log("got req")
    const food = req.query.food;
  
    const options = {
      method: 'GET',
      url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
      params: { query: food },
      headers: {
        'X-RapidAPI-Key': '7c1d611794msh9a6520998aace5ap1a7d50jsn8fd146d12df4',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
    //   console.log(response)  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch nutrition data' });
    }
  });

app.use(dietroute)
app.use('/api/dietplan',dietroute);

app.use(authroute)
app.use('/auth',authroute);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("connected to db and server running at ",process.env.PORT);
        })
    })
    .catch(err => {console.log(err)})

    // const {PythonShell}=require('python-shell')
    // console.log("after")
    // let options={
    //     scriptPath:"C:/Users/sivan/OneDrive/Desktop/PRIEE/server",
    //     args:["siva"],
    // }
    // PythonShell.run("prediction.py",options,(err,res)=>{
    //     if(err) console.log(err)
    //     if(res) console.log("res",res)
    // })

