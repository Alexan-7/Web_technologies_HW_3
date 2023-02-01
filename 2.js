// Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, 
// передав туда данное значение.

const helloName = prompt('откройте консоль и введите своё имя:');
consoleGreeting(helloName);

function consoleGreeting(helloName) {
    console.log(`Приветствуем Вас, ${helloName}!`);
    return;
}