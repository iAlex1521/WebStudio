// // const filterBox = document.querySelectorAll('.box');

// document.querySelector('.filters').addEventListener('click', event => {
//     if (event.target.tagName !== 'LI') return false;

//     let filterClass = event.target.dataset['f'];
//     console.log(filterClass);
// });

// const list = document.querySelector('.filters'),
//     items = document.querySelectorAll('.box');

// function filter() {
//     list.addEventListener('click', event => {
//         let targetId = event.target.dataset['id'];
//         console.log(targetId);
//     });

// }
// filter();

function app() {
    const buttons = document.querySelectorAll('.filters-button')

    buttons.forEach((elem) => {
        elem.addEventListener('click', () => {
            console.log(elem.parentElement.dataset.f)
        })
    })
}

app()