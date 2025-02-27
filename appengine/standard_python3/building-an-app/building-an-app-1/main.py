# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START gae_python38_render_template]
# [START gae_python3_render_template]
import datetime

from flask import Flask, render_template, request

app = Flask(__name__)
database_scores = [2660, 1230, 810, 533, 422, 420]

@app.route('/')
def root():
    # For the sake of example, use static information to inflate the template.
    # This will be replaced with real information in later steps.
    dummy_times = [datetime.datetime(2018, 1, 1, 10, 0, 0),
                   datetime.datetime(2018, 1, 2, 10, 30, 0),
                   datetime.datetime(2018, 1, 3, 11, 0, 0),
                   ]

    return render_template('index.html', times=dummy_times)

@app.route('/instruction') 
def getInstruction():
    instruction_text = "Goal: eat a lot of apples!\nYou get longer when you eat apples."
    return render_template('instruction.html', instruction=instruction_text)
if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
    

@app.route('/rank')
def getRank():
    score = int(requests.args.get('score'))
    found = False
    for i, num in enumerate(database_scores):
        if score <= num:
            continue 
        found = True
        rank = i + 1
        database_scores.insert(i, score) 
        break 
            
    if not found:
        database_scores.append(score)
        rank = len(database_scores)
    return render_template('rank.html', user_rank=rank, all_scores = database_scores)
        
        
# [END gae_python3_render_template]
# [END gae_python38_render_template]
