from flask import Flask, render_template, request
import pandas as pd
import joblib

app = Flask(__name__)

# Load the trained machine learning model
model = joblib.load('fraud_detection_model.pkl')

# Load your dataset
# Replace 'your_dataset.csv' with the actual path to your dataset
dataset = pd.read_csv('fake_credit_card_transactions.csv')

# Get the column name containing credit card numbers
# Replace 'CreditCardNumber' with the actual column name in your dataset
credit_card_column = 'CreditCardNumber'

# Convert the dataset credit card numbers to strings and remove leading/trailing spaces
dataset[credit_card_column] = dataset[credit_card_column].astype(str).str.strip()

# Define a route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Define a route for fraud detection
@app.route('/detect_fraud', methods=['POST'])
def detect_fraud():
    try:
        # Get credit card number from the form
        credit_card_number = request.form.get('credit_card_number')

        # if not credit_card_number:
        #     return render_template('result.html', prediction='Fake (No Credit Card Number Provided)')

        # Clean the entered credit card number
        cleaned_credit_card_number = credit_card_number.strip()

        # Check if the cleaned credit card number is in the dataset
        if cleaned_credit_card_number not in dataset[credit_card_column].values:
            return render_template('result.html', prediction='Fake (Credit Card Number Not Found in Dataset)')

        # For simplicity, let's assume the model function is 'predict_fraud'
        prediction = predict_fraud(cleaned_credit_card_number)

        return render_template('result.html', prediction=prediction)

    except Exception as e:
        return render_template('result.html', prediction=f'Error: {str(e)}')

# Mock function for fraud prediction
def predict_fraud(credit_card_number):
    # Replace this with actual fraud detection logic
    # For simplicity, assume that any credit card number starting with '5' is fraud
    return 'Fraud' if credit_card_number.startswith('5') else 'Legitimate'

if __name__ == '__main__':
    app.run(debug=True)
