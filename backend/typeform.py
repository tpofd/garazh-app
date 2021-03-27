from typeform import Typeform
import json
import pandas as pd

# обрабатываем ответы
responses = Typeform('FfLZwidfYeoAbHjamv3QCUpDimgA9oXFg6KUWhBS6yyz').responses
result: dict = responses.list('or3ePC3s')

result = str(result).replace("'", '"')

json_object = json.dumps(result)

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

# обрабатываем вопросы

forms = Typeform('FfLZwidfYeoAbHjamv3QCUpDimgA9oXFg6KUWhBS6yyz').forms
result: dict = forms.get('or3ePC3s')

result = str(result).replace("'", '"')
result = str(result).replace('True', '"True"')
result = str(result).replace('False', '"False"')

json_object = json.dumps(result)

f = open("main.json", "w")
f.write(result)
f.close()

f = open('main.json')
data = json.load(f)

id = []
title = []
for i in range(len(data['fields'])):
  id.append(data['fields'][i]['id'])
  title.append(data['fields'][i]['title'])

question_titles = dict(zip(id, title))
print(question_titles)

a = pd.DataFrame.from_dict(new_dict, orient='index')
b = pd.DataFrame.from_dict(question_titles, orient='index')

final_table = a.merge(b, left_index=True, right_index=True)