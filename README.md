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
1. Посмотреть Frontend-решение можно здесь [по ссылке](https://garazh-app.vercel.app/)

### сборка front-end
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