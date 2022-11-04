const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:',categoriesEl.length);
categoriesEl.forEach(element => {
    const categoryName = element.querySelector('h2');
    console.log('Category:', categoryName.textContent);
    const categoryCountEl = element.querySelectorAll('li');
    console.log('Elements:', categoryCountEl.length);
});

