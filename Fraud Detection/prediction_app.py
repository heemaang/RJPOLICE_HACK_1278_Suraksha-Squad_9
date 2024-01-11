from flask import Flask, request, render_template
import joblib

app = Flask(__name__)

# Load the Phishing model
phish_model = joblib.load('phishing.pkl')

# ML Aspect
@app.route('/predict', methods=['GET'])
def predict():
    url = request.args.get('url')

    result = None
    if url:
        X_predict = [url]
        y_Predict = phish_model.predict(X_predict)

        if y_Predict[0] == 'bad':
            result = "This is a Phishing Site"
        else:
            result = "This is not a Phishing Site"

    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8000, debug=True)
