

# Brain Games

Набор из пяти консольных игр, которые помогут вам развить логическое мышление и математические навыки. Каждая игра предлагает уникальные задачи, которые нужно решить за ограниченное количество попыток.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/farmilag/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/farmilag/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/249e477cf10ec7a2ab05/maintainability)](https://codeclimate.com/github/farmilag/frontend-project-44/maintainability)

---

## Установка

1. Убедитесь, что у вас установлен Node.js (версия 14 или выше).
2. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/farmilag/frontend-project-44.git
   ```
3. Перейдите в директорию проекта:
   ```bash
   cd frontend-project-44
   ```
4. Установите зависимости:
   ```bash
   make install
   ```
5. Запустите игру:
   ```bash
   make <название игры>
   ```
   Например, для запуска игры "Brain Even":
   ```bash
   make brain-even
   ```

---

## Игры

### 1. **Brain Even**
Определите, является ли число четным. Если число четное, ответьте `yes`, если нечетное — `no`.

**Пример:**

![even](https://github.com/user-attachments/assets/38a9ccb7-58f1-484a-88c0-21cb71bb0511)


---

### 2. **Brain Calc**
Решите математическое выражение. Вам нужно будет сложить, вычесть или умножить два числа.

**Пример:**

![calc](https://github.com/user-attachments/assets/8da16fdc-ca55-4847-be7f-4a62cade0dfd)


---

### 3. **Brain GCD**
Найдите наибольший общий делитель (НОД) двух чисел.

**Пример:**

![gcd](https://github.com/user-attachments/assets/75bab1a0-4dc8-4669-8c9b-bf8790ebc12c)


---

### 4. **Brain Progression**
Определите пропущенное число в арифметической прогрессии.

**Пример:**

![progression](https://github.com/user-attachments/assets/4d0ce668-d26e-43f0-8b85-1778f16302ac)


---

### 5. **Brain Prime**
Определите, является ли число простым. Если число простое, ответьте `yes`, если нет — `no`.

**Пример:**

![prime](https://github.com/user-attachments/assets/1f42c498-0b23-4d87-839e-fd7c19c91d7a)


---

## Зависимости

- [readline-sync](https://www.npmjs.com/package/readline-sync) — для взаимодействия с пользователем через консоль.
- [eslint](https://eslint.org/) — для проверки качества кода.
- [jest](https://jestjs.io/) — для тестирования.

---

## Автор

Этот проект был разработан в рамках обучения на платформе [Hexlet](https://hexlet.io/).

---

