Учебный проект Яндекс.Практикум: приложение веб-приложения «Чат»

## Demo

[Сайт чата на Netlify](https://vigorous-goldstine-9096e5.netlify.app/)



## Установка

Версия [node.js](https://nodejs.org/) >12.

Запустите `npm i` в корне проекта. Доступные команды: 
- `npm run start` — запускает express-сервер для раздачи статического контента,
- `npm run build` — сборка для production,
- `npm run dev` — запускает сборку в режиме разработки,


## Tools

Сборка:
- [Parcel](https://parceljs.org/)

Типизация:
- [TypeScript](https://www.typescriptlang.org/)

Процессинг CSS:
- [PostCSS](https://github.com/postcss/postcss)

Линтинг и форматрирование: 
- [ESLint](https://eslint.org/) ([eslint:recommended](https://eslint.org/docs/rules/)), 
- [stylelint](https://stylelint.io/) ([stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)), 
- [Prettier](https://prettier.io/), 
- [EditorConfig](https://editorconfig.org/)

Тесты: 
- jest

## Реализованный функционал
* добавление чатов
* создание/редактирование пользователей
* изменение аватара пользователя
* добавление/удаление пользователей из чата
* обмен сообщениями в чате

- `npm run dev` — старт проекта в режиме разработки,
- `npm run build` — сборка для production,
- `npm run eslint` — запуск eslint
- `npm run lint:css` — запуск stylelint
- `npm run test` — запуск тестов

## Прекоммит
Прекоммит husky (npm run all lint:css eslint)

## Автодеплой
Проект выложен на Heroku
[Сайт чата на Heroku](https://limitless-cove-91662.herokuapp.com/)

- [Ссылка на PR Sprint 1](https://github.com/lukyanov-anton/middle.messenger.praktikum.yandex/pull/3)
- [Ссылка на PR Sprint 2](https://github.com/lukyanov-anton/middle.messenger.praktikum.yandex/pull/4)
- [Ссылка на PR Sprint 3](https://github.com/lukyanov-anton/middle.messenger.praktikum.yandex/pull/5)
- [Ссылка на PR Sprint 4](https://github.com/lukyanov-anton/middle.messenger.praktikum.yandex/pull/11)
