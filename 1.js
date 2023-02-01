// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32. ОКРУГЛИТЬ

const celsium = parseFloat(prompt('Введите значение градусов Цельсия'));
alert(`${celsium.toFixed(1)}° по Цельсию - это ${translate(celsium).toFixed(1)}° по Фаренгейту`);

function translate(celsium) {
    return (9 / 5) * celsium + 32;
}