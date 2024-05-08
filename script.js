const children = document.querySelectorAll('.child');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupHeading = document.getElementById('popup-heading');
    const popupDetails = document.getElementById('popup-details');

    children.forEach(child => {
        child.addEventListener('click', function() {
            const img = child.querySelector('img');
            const heading = child.querySelector('h2');
            const details = child.querySelector('p');

            popupImg.src = img.src;
            popupHeading.textContent = heading.textContent;
            popupDetails.textContent = details.textContent;

            popup.style.display = 'block';

        });
    });

    function closePopup() {
        popup.style.animation = 'fadeOut 0.3s ease';

        setTimeout(() => {
            popup.style.display = 'none';
            popup.style.animation = '';
        }, 300);
    }

