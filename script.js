let currentPage = 1;

const quoteElements = [
    document.getElementById('quote1'),
    document.getElementById('quote2'),
    document.getElementById('quote3'),
    document.getElementById('quote4'),
    document.getElementById('quote5'),
];

const pageButtons = [
    document.getElementById('page1'),
    document.getElementById('page2'),
    document.getElementById('page3'),
    document.getElementById('page4'),
    document.getElementById('page5'),
];

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateContent() {
    quoteElements.forEach(quote => quote.classList.remove('active'));
    quoteElements[currentPage - 1].classList.add('active');
    pageButtons.forEach((button, index) => {
        if (index + 1 === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

pageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentPage = index + 1;
        updateContent();
    });
});

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateContent();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < 5) {
        currentPage++;
        updateContent();
    }
});

// Initialize content
updateContent();
