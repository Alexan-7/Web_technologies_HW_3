Формат сдачи ДЗ - один архив, со всеми файлами и скриншотами, либо pull request на github.

1. Необходимо создать html-страницу с названием 1.html, в которой подключить файл 1.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:
Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Примечания: Пользователь всегда вводит корректное число.
Советую округлить значение после расчетов, так как в некоторых случаях может получиться "длинная дробь".

2. Необходимо создать html-страницу с названием 2.html, в которой подключить файл 2.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:
Cоздать функцию greeting, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.
Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.

Замечания преподавателя:

1 - Используйте Number.parseFloat вместо обычного parseFloat, в 15 году в объект Number добавили некоторые функции, желательно пользоваться ими, а не глобальными функциями, хотя в данном случае, разницы никакой.
Можно еще к названию функции придраться, оно не особо говорит о том, что делает функция, стоит назвать более полно translateCelsiusToFahrenheit.
Отлично сделали.
2 - return не нужен, функция сама завершится.
