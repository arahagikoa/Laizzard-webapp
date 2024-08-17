from flask import Flask, request, send_file, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
import shutil
from mails import Mail


app = Flask(__name__)
CORS(app, resources={
    r"/api/contact": {"origins": ["https://findperfectemployee.azurewebsites.net", "http://localhost:3000", "https://lizard-ai.com"]}
    }
    )


@app.route('/api/contact', methods = ['POST'])
def getForm():
    
    data = request.get_json()  

    businessEmail = data.get('businessEmail')
    firstName = data.get('firstName')
    phoneNumber = data.get('phoneNumber')
    note = data.get('note')


    em = Mail()
    em.get_data_email(businessEmail, firstName, phoneNumber, note)
    em.send_automatic_mail(businessEmail)


    return jsonify({"message": "Email sent!"}), 200




if __name__ == "__main__":
    app.run(debug=True)





