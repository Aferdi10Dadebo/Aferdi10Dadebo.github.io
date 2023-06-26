var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

// Initialize Swiper
var mySwiper = new Swiper('.mySwiper', {
    // Swiper configuration options
});

// Add event listeners for keyboard arrow keys
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        // Move to the previous slide
        mySwiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
        // Move to the next slide
        mySwiper.slideNext();
    }

    // Update active pagination bullet
    var activeIndex = mySwiper.activeIndex;
    var paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
    paginationBullets.forEach(function (bullet, index) {
        if (index === activeIndex) {
            bullet.classList.add('swiper-pagination-bullet-active');
        } else {
            bullet.classList.remove('swiper-pagination-bullet-active');
        }
    });
});


var scrollText = document.querySelector('.scrollText');

scrollText.addEventListener('mouseenter', () => {
    scrollText.style.animationPlayState = 'paused';
});

scrollText.addEventListener('mouseleave', function () {
    scrollText.style.animationPlayState = 'running';
});



const getTabSwitchers = document.querySelectorAll('.tabs .tab a')

for (let i = 0; i < getTabSwitchers.length; i++) {
    const getTabSwitcher = getTabSwitchers[i];
    const getPageId = getTabSwitcher.dataset.tab;

    getTabSwitcher.addEventListener('click', () => {
        document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
        getTabSwitcher.parentNode.classList.add('is-active');

        SwitchPage(getPageId);
    });
}

function SwitchPage(getPageId) {
    const currentPage = document.querySelector('.pages .page.is-active');
    currentPage.classList.remove('is-active');

    const nextPage = document.querySelector(`.pages .page[data-page="${getPageId}"]`);
    nextPage.classList.add('is-active');
}


