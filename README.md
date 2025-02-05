

# Brain Games

Набор из пяти консольных игр, которые помогут вам развить логическое мышление и математические навыки. Каждая игра предлагает уникальные задачи, которые нужно решить за ограниченное количество попыток.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/farmilag/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/farmilag/frontend-project-44/actions)

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
```
Welcome to the Brain Games!
May I have your name? John
Hello, John!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
```

---

### 2. **Brain Calc**
Решите математическое выражение. Вам нужно будет сложить, вычесть или умножить два числа.

**Пример:**
```
Welcome to the Brain Games!
May I have your name? John
Hello, John!
What is the result of the expression?
Question: 5 + 3
Your answer: 8
Correct!
```

---

### 3. **Brain GCD**
Найдите наибольший общий делитель (НОД) двух чисел.

**Пример:**
```
Welcome to the Brain Games!
May I have your name? John
Hello, John!
Find the greatest common divisor of given numbers.
Question: 12 18
Your answer: 6
Correct!
```

---

### 4. **Brain Progression**
Определите пропущенное число в арифметической прогрессии.

**Пример:**
```
Welcome to the Brain Games!
May I have your name? John
Hello, John!
What number is missing in the progression?
Question: 5, 7, 9, .., 13
Your answer: 11
Correct!
```

---

### 5. **Brain Prime**
Определите, является ли число простым. Если число простое, ответьте `yes`, если нет — `no`.

**Пример:**
```
Welcome to the Brain Games!
May I have your name? John
Hello, John!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```

---

## Зависимости

- [readline-sync](https://www.npmjs.com/package/readline-sync) — для взаимодействия с пользователем через консоль.
- [eslint](https://eslint.org/) — для проверки качества кода.
- [jest](https://jestjs.io/) — для тестирования.

---

## Автор

Этот проект был разработан в рамках обучения на платформе [Hexlet](https://hexlet.io/).

---

Не забудьте заменить ссылки и имена на актуальные, если это необходимо. Удачи с вашим проектом! 😊