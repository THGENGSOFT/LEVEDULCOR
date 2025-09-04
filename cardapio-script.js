document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // remove active de todos
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            const items = document.querySelectorAll('.item');

            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category').includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // esconde títulos vazios
            const categoryTitles = document.querySelectorAll('.category-title');
            categoryTitles.forEach(title => {
                const categoryGrid = title.nextElementSibling;
                const visibleItems = categoryGrid.querySelectorAll('.item[style="display: block"]');

                if (visibleItems.length === 0 && category !== 'all') {
                    title.style.display = 'none';
                } else {
                    title.style.display = 'block';
                }
            });
        });
    });
});
