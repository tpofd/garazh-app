from typeform import Typeform
import json

typeform = Typeform('FfLZwidfYeoAbHjamv3QCUpDimgA9oXFg6KUWhBS6yyz')
responses = Typeform('FfLZwidfYeoAbHjamv3QCUpDimgA9oXFg6KUWhBS6yyz').responses
result: dict = responses.list('or3ePC3s')

result = str(result).replace("'", '"')

json_object = json.dumps(result)

with open('data.txt', 'w') as outfile:
    json.dump(result, outfile)

f = open("main.json", "w")
f.write(result)
f.close()

f = open('main.json')
data = json.load(f)

for j in range(len(data['items'])):
  answers = []
  questions_id = []
  for i in range(len(data['items'][j])):
    questions_id.append(data['items'][j]['answers'][i]['field']['id'])
    if data['items'][j]['answers'][i]['type'] == 'choice':
      answers.append(data['items'][j]['answers'][i]['choice']['label'])
    if data['items'][j]['answers'][i]['type'] == 'text' or data['items'][0]['answers'][i]['type'] == 'long_text':
      answers.append(data['items'][j]['answers'][i]['text'])
  new_dict = dict(zip(questions_id, answers))
  print(new_dict)