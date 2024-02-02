let search = document.querySelector('#searchInput');
let items = document.querySelectorAll('.item');

let chunk = 'Груши';

search.addEventListener('keyup', ()=> {
    for (let item of items) {
        let str = item.textContent;
        if (str.indexOf(search.value) != -1) {
            console.log(str);
        }
    }
})