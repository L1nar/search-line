let search = document.querySelector('#searchInput');
let items = document.querySelectorAll('.item');

// строка.indexOf(подстрока);
// Метод indexOf осуществляет поиск элемента в массиве.
// Метод возвращает номер первого найденного элемента, либо -1, если такого элемента нет.

search.addEventListener('keyup', ()=> {

    // Получить данные из поля ввода и привести к нижнемы регистру
    let chunk = search.value.toLowerCase();
    
    for (let item of items) {

        // Получить текстовое содержимое списка и привести к нижнему регистру
        let str = item.textContent.toLowerCase();

        // Если в списке найдены символы введенные с клавиатуры - вывести элемент списка на экран, иначе спрятать элемент списка
        if (str.indexOf(chunk) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
})

ы