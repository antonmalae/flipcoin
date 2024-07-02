function flipCoin() {
    const orInput = document.getElementById('or');
    const reInput = document.getElementById('re');
    const errorMessage = document.getElementById('error-message');
    const coin = document.getElementById('coin');
    const heads = document.getElementById('heads');
    const tails = document.getElementById('tails');

    // Очистка предыдущих сообщений об ошибке
    errorMessage.innerText = '';

    // Проверка на пустые значения
    const orValue = orInput.value.trim() || 'Орел';
    const reValue = reInput.value.trim() || 'Решка';

    // Проверка и вывод ошибки
    if (!orInput.value.trim() || !reInput.value.trim()) {
        errorMessage.innerText = 'Оба поля должны быть заполнены. Используются значения по умолчанию.';
    }

    // Установка значений монеты
    heads.innerText = orValue;
    tails.innerText = reValue;

    // Анимация
    coin.classList.add('flip');

    setTimeout(() => {
        const randomValue = Math.random() < 0.5 ? orValue : reValue;
        document.getElementById('result').innerText = `Результат: ${randomValue}`;
        coin.classList.remove('flip');
    }, 2000); // Продолжительность анимации
}