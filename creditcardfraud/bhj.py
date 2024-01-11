# Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load or generate your credit card fraud dataset (replace with your actual dataset)
# For simplicity, let's assume you have a CSV file named 'credit_card_data.csv'
data = pd.read_csv('creditcard.csv')

# Assume the 'Class' column indicates whether a transaction is fraudulent (1) or not (0)
X = data.drop('Class', axis=1)
y = data['Class']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest Classifier (replace with your preferred algorithm)
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model's accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f'Model Accuracy: {accuracy}')

# Save the trained model to a file
joblib.dump(model, 'fraud_detection_model.pkl')
