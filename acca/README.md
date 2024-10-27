## Структура проекта

```bash
src/
├── assets/
│   ├── images/            # Изображения
│   ├── icons/             # Иконки
├── components/            # Папка с React компонентами
│   ├── Header/            # Компонент Header (шапка сайта)
│   │   ├── Header.js
│   │   └── Header.module.scss
│   ├── Banner/            # Компонент Banner (баннер)
│   │   ├── Banner.js
│   │   └── Banner.module.scss
│   ├── Features/          # Компонент Features (особенности)
│   │   ├── Features.js
│   │   └── Features.module.scss
│   ├── Benefits/          # Компонент Benefits (преимущества)
│   │   ├── Benefits.js
│   │   └── Benefits.module.scss
│   ├── Program/           # Компонент Program (программа)
│   │   ├── Program.js
│   │   └── Program.module.scss
│   ├── Footer/            # Компонент Footer (футер)
│   │   ├── Footer.js
│   │   └── Footer.module.scss
├── App.js                 # Основной компонент приложения
├── index.js               # Входная точка приложения
├── App.module.scss        # Общие стили приложения
```

## Описание компонентов
Header: Компонент шапки сайта с навигацией и логотипом.  
Banner: Отображает баннер на главной странице.  
Features: Блок с основными особенностями продукта.   
Benefits: Перечисление преимуществ продукта.  
Program: Описание программы и её деталей.  
Footer: Футер с контактной информацией и дополнительной навигацией.  

## Используемые технологии
React: Основная библиотека для создания интерфейсов.  
SCSS-модули: Для модульной и изолированной стилизации компонентов.  
Vite: Инструмент для быстрой сборки и разработки.  
