import sys
import numpy as np
import xgboost as xgb


model = xgb.XGBRegressor()
model.load_model('calories_burnt_model.xgb')

gender = float(sys.argv[1])
age = float(sys.argv[2])
height = float(sys.argv[3])
weight = float(sys.argv[4])
duration_of_workout = float(sys.argv[5])
heart_rate = float(sys.argv[6])
body_temperature = float(sys.argv[7])
input_data = np.array([[gender, age, height, weight, duration_of_workout, heart_rate, body_temperature]])
predicted_calories = model.predict(input_data)[0]
print(predicted_calories)
sys.stdout.flush()