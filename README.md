# Автоматизация системы аналитики и сбора данных музея Гараж

## Описание проекта
GARAGECAT - комплексное решение, для мониторинга посетителей с генерацией аналитического отчёта. Реализован в виде веб-сервиса, который включает в себя тепловую карту, анкетирование и генерацию pptx отчётов.

## Структура проекта
* [Frontend-решение](https://github.com/tpofd/garazh-app/tree/main/frontend)
* [Концепт дизайна в Figma](https://www.figma.com/file/17PcD01TieyyW4vYFUocSn/Untitled?node-id=0%3A1)
* [Backend-решение](https://github.com/tpofd/garazh-app/tree/main/backend)
* [Решение по интеграции Typeform и real-time генерации отчета в pptx](https://github.com/tpofd/garazh-app/blob/main/backend/typeform.py)

## Используемые технологии 
* Microsoft Azure
* Python / Flask
* React
* MySQL

## Get started
### Сборка Frontend
Итоговую сборку можно посмотреть [здесь](https://garazh-app.vercel.app/)

Сборка продакшн версии

```shell
cd ./frontend
npm install
npm run build
```

Для разработки

```shell
cd ./frontend
npm run dev
```

### Сборка Backend
Итоговую сборку можно посмотреть [здесь](http://40.117.124.200:5000)

1. Склонируем репозиторий
```
$ git clone https://github.com/tpofd/garazh-app.git
$ cd backend
```
2. Инициализируем virtualenv
```
$ virtualenv --no-site-packages env
$ source env/bin/activate
```
3. Настроим зависимости
```
$ pip install -r requirements.txt
```

### Источники
* [Библиотека для генерации pptx файлов](https://gist.github.com/Eserthesay/bc5155484b7cd696a53ccd4f13e0c5f9)
* [Шаблон Figma для создания дизайна графиков](https://dribbble.com/shots/11278911-Freebie-Dashboard-design-VK-statistics)
