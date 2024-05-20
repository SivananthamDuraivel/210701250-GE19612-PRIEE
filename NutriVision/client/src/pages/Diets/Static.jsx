import React from 'react';
import './Static.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Static = () => {

    const navigate= useNavigate()
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.post("http://localhost:4000/auth/verify")
    .then(res=>{
      if(!(res.data==="verified"))
        navigate('/signin')
    })
  },[navigate])

    return (
        <div className='all-diets'>
            <center><h1>Diet Plans</h1></center>
            <div className='options'>

                <div className='right-pane'>
                    <a href="#weight-loss">Weight Loss</a>
                    <a href="#weight-gain">Weight Gain</a>
                    <a href="#balanced-diet">Balanced Diet</a>
                </div>
                <div className='left-pane'>
                    <a href="#medi">Mediterranean</a>
                    <a href="#dash">Dash Diet</a>
                    <a href="#plant">Plan Diet</a>
                </div>
            </div>
            <div className='plans'>
                <div className='weight-loss' id='weight-loss'>
                    <h1>1. Weight Loss Diet</h1>
                    <p>The Weight Loss Diet is designed to help individuals achieve their weight loss goals through a balanced and controlled eating plan.</p>
                    <br />
                    <h3>How it works</h3>
                    <p>The Weight Loss Diet typically involves reducing calorie intake while ensuring that essential nutrients are still consumed. It may include:</p>
                    <br />
                    <ul className="ls">
                        <li>Portion control</li>
                        <li>Choosing nutrient-dense foods</li>
                        <li>Incorporating lean protein sources</li>
                        <li>Increasing intake of fruits and vegetables</li>
                        <li>Limiting high-calorie and processed foods</li>
                        <li>Including regular physical activity</li>
                    </ul>
                    <br />
                    <div className="health">
                        <h3>Health Benefits</h3>
                        <p>The Weight Loss Diet aims to promote gradual and sustainable weight loss, which can lead to numerous health benefits, including:</p>
                        <ul>
                            <li>Improved cardiovascular health</li>
                            <li>Reduced risk of obesity-related diseases</li>
                            <li>Enhanced overall well-being</li>
                        </ul>
                        <p>Studies have shown that gradual weight loss achieved through a balanced diet and regular exercise is more effective in maintaining long-term weight management.</p>
                    </div>
                    <br />
                    <h3>Other benefits</h3>
                    <p>In addition to weight loss, adopting a healthy eating pattern can improve energy levels, mood, and self-esteem.</p>
                    <br />
                    <h3>Considerations</h3>
                    <p>It's important to consult with a healthcare professional or registered dietitian before starting any weight loss program to ensure it meets individual needs and health goals.</p>
                    <br />
                    <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>The Weight Loss Diet focuses on creating a calorie deficit to achieve weight loss goals while prioritizing nutrient-rich foods and regular physical activity.</p>
                        <p>Combining healthy eating habits with lifestyle modifications can lead to sustainable weight loss and improved overall health.</p>
                    </div>
                    <br />
                </div>
                <div className='weight-gain' id='weight-gain'>
                    <h1>2. Weight Gain Diet</h1>
                    <p>The Weight Gain Diet is designed to help individuals increase their calorie intake and gain healthy weight through a balanced and nutrient-rich eating plan.</p>
                    <br />
                    <h3>How it works</h3>
                    <p>The Weight Gain Diet focuses on consuming calorie-dense foods and incorporating strength training exercises to promote muscle growth and overall weight gain. It may include:</p>
                    <br />
                    <ul className="ls">
                        <li>Including calorie-dense foods such as nuts, nut butter, avocados, and dried fruits</li>
                        <li>Incorporating protein-rich foods like lean meats, fish, eggs, dairy, and plant-based protein sources</li>
                        <li>Eating frequent meals and snacks throughout the day</li>
                        <li>Choosing complex carbohydrates like whole grains, potatoes, and legumes</li>
                        <li>Drinking calorie-rich beverages like smoothies, milkshakes, and fruit juices</li>
                        <li>Engaging in regular strength training exercises to build muscle mass</li>
                    </ul>
                    <br />
                    <div className="health">
                        <h3>Health Benefits</h3>
                        <p>The Weight Gain Diet aims to promote gradual and healthy weight gain, which can lead to several health benefits, including:</p>
                        <ul>
                            <li>Increased muscle mass and strength</li>
                            <li>Improved energy levels and stamina</li>
                            <li>Enhanced physical performance</li>
                            <li>Optimized nutrient absorption and overall health</li>
                        </ul>
                        <p>When combined with regular strength training exercises, a balanced weight gain diet can help individuals achieve their desired weight and body composition goals.</p>
                    </div>
                    <br />
                    <h3>Other benefits</h3>
                    <p>In addition to weight gain, adopting a nutrient-rich diet can support overall health and well-being by providing essential vitamins, minerals, and macronutrients.</p>
                    <br />
                    <h3>Considerations</h3>
                    <p>It's important to consult with a healthcare professional or registered dietitian before starting any weight gain program, especially for individuals with underlying health conditions or specific dietary needs.</p>
                    <br />
                    <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>The Weight Gain Diet focuses on increasing calorie intake and promoting muscle growth through a balanced and nutrient-rich eating plan combined with regular strength training exercises.</p>
                        <p>By incorporating calorie-dense foods and healthy lifestyle habits, individuals can achieve their weight gain goals in a sustainable and healthy manner.</p>
                    </div>
                    <br />
                </div>
                <div className='balanced-diet' id='balanced-diet'>
                    <h1>3. Balanced Diet</h1>
                    <p>The Balanced Diet focuses on consuming a variety of nutrient-rich foods in appropriate portions to meet your body's nutritional needs and maintain overall health.</p>
                    <br />
                    <h3>How it works</h3>
                    <p>The Balanced Diet emphasizes:</p>
                    <br />
                    <ul className="ls">
                        <li>Consuming a variety of fruits and vegetables to ensure a wide range of vitamins, minerals, and antioxidants</li>
                        <li>Including lean protein sources such as poultry, fish, tofu, legumes, and nuts</li>
                        <li>Incorporating whole grains like brown rice, quinoa, oats, and whole wheat bread</li>
                        <li>Choosing healthy fats from sources like avocados, olive oil, nuts, and seeds</li>
                        <li>Limiting intake of processed foods, sugary snacks, and high-fat foods</li>
                        <li>Staying hydrated by drinking plenty of water throughout the day</li>
                    </ul>
                    <br />
                    <div className="health">
                        <h3>Health Benefits</h3>
                        <p>The Balanced Diet offers numerous health benefits, including:</p>
                        <ul>
                            <li>Improved energy levels and mood</li>
                            <li>Enhanced immune function and disease resistance</li>
                            <li>Healthy weight maintenance and management</li>
                            <li>Reduced risk of chronic diseases such as heart disease, diabetes, and certain cancers</li>
                            <li>Optimized digestion and gut health</li>
                        </ul>
                        <p>By prioritizing nutrient-dense foods and maintaining a balanced eating pattern, individuals can support their overall well-being and longevity.</p>
                    </div>
                    <br />
                    <h3>Other benefits</h3>
                    <p>In addition to promoting physical health, following a Balanced Diet can also positively impact mental health and cognitive function.</p>
                    <br />
                    <h3>Considerations</h3>
                    <p>It's important to personalize your Balanced Diet based on your individual nutritional needs, preferences, and lifestyle factors. Consulting with a registered dietitian can help tailor a plan that works best for you.</p>
                    <br />
                    <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>The Balanced Diet emphasizes consuming a variety of nutrient-rich foods in appropriate portions to support overall health and well-being.</p>
                        <p>By incorporating a diverse range of foods and maintaining balance in your eating habits, you can achieve optimal nutrition and long-term health benefits.</p>
                    </div>
                    <br />
                </div>



                <div className='medi' id='medi'>
                    <h1>4. The Mediterranean diet</h1>
                    <p>The Mediterranean diet has long been considered the gold standard for nutrition, disease prevention, wellness, and longevity. This is based on its nutrition benefits and sustainability.</p>
                    <br />
                    <h3>How it works</h3>
                    <p>The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in:</p>
                    <br />
                    <ul className="ls">
                        <li>Vegetables</li>
                        <li>fruits</li>
                        <li>whole grains</li>
                        <li>fish</li>
                        <li>nuts</li>
                        <li>lentils</li>
                        <li>olive oil</li>
                    </ul>
                    <br />
                    <p>Foods such as poultry, eggs, and dairy products are to be eaten in moderation, and red meats are limited.</p>
                    <p>Additionally, the Mediterranean diet limits:</p>
                    <br />
                    <ul>
                        <li>refined grains</li>
                        <li>trans fats</li>
                        <li>processed meats</li>
                        <li>added sugar</li>
                        <li>other highly processed foods</li>
                    </ul>
                    <br />
                    <div className="health">
                        <h3>Health Benefits</h3>
                        <p>This diet’s emphasis on minimally processed foods and plants has been associated with a reduced risk of multiple chronic diseases and increased life expectancy. Studies also show that the Mediterranean diet has a preventive effect against certain cancers.</p>
                        <p>Though the diet was designed to lower heart disease risk, numerous studies indicate that its plant-based, high unsaturated fat dietary pattern can also aid in weight loss.</p>
                        <p>A systematic review analyzing five different studies found that, compared with a low fat diet, the Mediterranean diet resulted in greater weight loss after 1 year. Compared with a low carb diet, it produced similar weight loss results.</p>
                        <p>One study in more than 500 adults over 12 months found that higher adherence to a Mediterranean diet was associated with double the likelihood of weight loss maintenance.</p>
                        <p>Additionally, the Mediterranean diet encourages eating plenty of antioxidant-rich foods, which may help combat inflammation and oxidative stress by neutralizing free radicals.</p>
                    </div>
                    <br />
                    <h3>Other benefits</h3>
                    <p>Recent studies have also found that the Mediterranean diet is associated with decreased risk of mental disorders, including cognitive decline and depression.</p>
                    <p>Eating less meat is also associated with a more sustainable diet for the planet.</p>
                    <br />
                    <h3>Downsides</h3>
                    <p>Since the Mediterranean diet does not put a big emphasis on dairy products, it’s important to make sure you still get enough calcium and vitamin D in your diet.</p>
                    <br />
                    <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>The Mediterranean diet emphasizes eating plenty of fruits, vegetables, fish, and healthy oils while restricting refined and highly processed foods.</p>
                        <p>While it’s not a weight loss diet, studies show that it can promote weight loss and overall health.</p>
                    </div>
                    <br />
                </div>
                <div className='dash' id='dash'>
                    <h1>5. The DASH diet</h1>
                    <p>Dietary Approaches to Stop Hypertension, or DASH, is an eating plan designed to help treat or prevent high blood pressure, which is clinically known as hypertension.</p>
                    <p>It emphasizes eating plenty of fruits, vegetables, whole grains, and lean meats. It is low in salt, red meat, added sugars, and fat.</p>
                    <p>While the DASH diet is not a weight loss diet, many people report losing weight on it.</p>
                    <br />
                    <h3>How it works</h3>
                    <p>The DASH diet recommends specific servings of different food groups. The number of servings you are encouraged to eat depends on your daily calorie intake.</p>
                    <p>For example, each day an average person on the DASH diet would eat about:</p>
                    <br />
                    <ul className="ls">
                        <li>five servings of vegetables</li>
                        <li>five servings of fruit</li>
                        <li>whole grains</li>
                        <li>seven servings of healthy carbs like whole grains</li>
                        <li>two servings of low fat dairy products</li>
                        <li>two servings or fewer of lean meats</li>
                    </ul>
                    <p>In addition, it’s recommended to consume nuts and seeds two to three times per week.</p>
                    <br />
                    <div className="health">
                        <h3>Health Benefits</h3>
                        <p>The DASH diet has been shown to reduce blood pressure levels and several heart disease risk factors. Also, it may help lower your risk of breast and colorectal cancers.</p>
                        <p>Studies show that the DASH diet can also help you lose weight. For example, an analysis of 13 studies found that people on the DASH diet lost more weight over 8–24 weeks than people on a control diet.</p>
                        <p>Another study in adults with obesity over 12 weeks found that the DASH diet helped decrease total body weight, body fat percentage, and absolute fat mass in study participants while preserving muscle strength.</p>
                    </div>
                    <br />
                    <h3>Other benefits</h3>
                    <p>In addition to weight loss, the DASH diet may help combat depression symptoms.</p>
                    <p>A comparative study over 8 years found that even moderate adherence to the DASH diet was related to lower depression risk.</p>
                    <br />
                    <h3>Downsides</h3>
                    <p>While the DASH diet may aid with weight loss and lower blood pressure in individuals with hypertension, there is mixed evidence on salt intake and blood pressure.</p>
                    <p>Eating too little salt has been linked to increased insulin resistance, and a low sodium diet isn’t the right choice for everyone.</p>
                    <p>A low sodium diet like the DASH diet is more appropriate for individuals with hypertension or other health conditions that benefit from or require sodium restriction.</p>
                    <p>More research is needed in this area to understand how a low sodium diet can affect insulin resistance in individuals without hypertension.</p>
                    <br />
                    <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>The DASH diet is a low salt diet that has been shown to aid with weight loss.</p>
                        <p>Studies have also linked it to additional benefits for your heart and reduced risks of other chronic diseases.</p>
                    </div>
                    <div className="upward-arrow">
                <a href="#top"><FaArrowCircleUp /></a> {/* Using the arrow icon */}
            </div>
                    <br />
                </div>
                <div className='plant' id='plant'>
                    <h1>6. Plant-based and flexitarian diets</h1>
                    <p>Vegetarianism and veganism are the most popular versions of plant-based diets, which restrict animal products for health, ethical, and environmental reasons.</p>
                    <p>However, more flexible plant-based diets also exist, such as the flexitarian diet. This is a plant-based diet that allows eating animal products in moderation.</p>
                    <br />
                    <h3>How it works</h3>
                    <p>Typical vegetarian diets restrict meat of all kinds but allow dairy products. Typical vegan diets restrict all animal products, including dairy, butter, and sometimes other byproducts like honey.</p>
                    <p>The flexitarian eating plan does not have clear-cut rules or recommendations about calories and macronutrients, so it’s considered more of a lifestyle than a diet. Its principles include:</p>
                    <br />
                    <ul className="ls">
                        <li>consuming protein from plants instead of animals</li>
                        <li>eating mostly fruits, vegetables, legumes, and whole grains</li>
                        <li>eating the least processed, most natural forms of foods</li>
                        <li>limiting sugar and sweets</li>
                    </ul>
                    <p>Additionally, it allows the flexibility to consume meat and animal products from time to time.</p>
                    <br />
                    <div className="health">
                        <h3>Health benefits</h3>
                        <p>Numerous studies have shown that plant-based diets can reduce your risk of developing chronic diseases, including improved markers of metabolic health, decreased blood pressure, and reduced risk of type 2 diabetes. They can also help you lose weight.</p>
                        <p>Flexitarian diets have also been shown to reduce the risk of type 2 diabetes and improve metabolic health and blood pressure, plus may have their own weight loss benefits.</p>
                    </div>
                    <br />
                    <h3>Other Benefits</h3>
                    <p>For those who are looking to lead a sustainable lifestyle, decreasing your meat consumption can also reduce greenhouse gas emissions, deforestation, and soil degradation.</p>
                    <br />
                    <h3>Downsides</h3>
                    <p>Plant-based eating patterns like vegetarianism and veganism can sometimes be difficult to maintain and may feel restricting, especially if you’re switching from a more meat-based eating style.</p>
                    <p>And while the flexibility of the flexitarian diet makes it easy to follow, being too flexible with it may counteract its benefits.</p>
                    <br />
                    <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>Plant-based diets like veganism and vegetarianism can have real health benefits, such as a reduced risk of type 2 diabetes, high blood pressure, and high cholesterol. However, they can also feel restricting for some people.</p>
                        <p>The flexitarian diet is a less strict version of a plant-based diet that allows for minimal meat and animal product consumption.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Static;