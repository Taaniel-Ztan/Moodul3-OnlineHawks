document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselItems = document.querySelector('.carousel-items');
    const items = Array.from(document.querySelectorAll('.carousel-item'));

    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => { 
            item.classList.remove('center');
        });

        const totalItems = items.length;
        const nextIndex = (currentIndex + 1) % totalItems;
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;

        items[currentIndex].classList.add('active', 'center');
        items[nextIndex].classList.add('active');
        items[prevIndex].classList.add('active');

        const offset = -(currentIndex * (items[0].offsetWidth + 30));
        carouselItems.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel();
});

// After receiving the token from the login response
localStorage.setItem('token', token);

// Include the token in headers of subsequent requests
const token = localStorage.getItem('token');
const headers = { Authorization: `Bearer ${token}` };

fetch('http://your-api-endpoint.com/some-route', { headers })
    .then(response => response.json())
    .then(data => {
        // Handle response data
    })
    .catch(error => {
        // Handle errors
    });
