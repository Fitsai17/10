document.addEventListener('DOMContentLoaded', () => {
    // URL API для стилів і елементів
    const apiBaseUrl = 'http://localhost:3006';

    // Функція для отримання стилів
    async function getStyles() {
        try {
            const response = await fetch(`${apiBaseUrl}/api/styles`);
            const styles = await response.json();
            const stylesList = document.getElementById('styles-list');

            stylesList.innerHTML = '';
            styles.forEach(style => {
                const li = document.createElement('li');
                li.textContent = `Name: ${style.name}, Description: ${style.description}`;
                stylesList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching styles:', error);
        }
    }

    // Функція для отримання елементів
    async function getItems() {
        try {
            const response = await fetch(`${apiBaseUrl}/api/items`);
            const items = await response.json();
            const itemsList = document.getElementById('items-list');

            itemsList.innerHTML = '';
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `Name: ${item.name}, Price: $${item.price}, Style ID: ${item.styleId}`;
                itemsList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    }

    // Завантаження даних при завантаженні сторінки
    getStyles();
    getItems();
});
