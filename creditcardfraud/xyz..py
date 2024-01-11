from faker import Faker
import pandas as pd
import random

fake = Faker()

# Generate a sample dataset with fake credit card transactions
def generate_credit_card_data(num_records=100):
    data = []
    for _ in range(num_records):
        transaction = {
            #'Name': fake.name(),
            'CreditCardNumber': fake.credit_card_number(card_type='mastercard'),
            'Amount': round(random.uniform(1, 1000), 2),
            #'Date': fake.date_this_decade(),
            'Class': random.choice([0, 1])  # 0 for fake, 1 for real
        }
        data.append(transaction)
    return data

# Create a DataFrame and save it to a CSV file
dataset = pd.DataFrame(generate_credit_card_data())
dataset.to_csv('creditcard.csv', index=False)
