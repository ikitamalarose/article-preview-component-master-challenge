// Variables
const btnShareShow = document.getElementById('btnShareShow');
const blueFooter = document.getElementById('blueFooter');
const footer = document.getElementById('footer');
const btnShareFooterBlue = document.getElementById('btnShareFooterBlue');

// Media Queries
const mediaQueryMin769 = window.matchMedia('(min-width: 769px)');
const mediaQueryMax768 = window.matchMedia('(max-width: 768px)');

// Function to handle footer display based on media queries
function handleFooterDisplay() {
    if (mediaQueryMin769.matches) {
        blueFooter.style.display = 'flex';
        footer.style.display = 'flex';
    } else if (mediaQueryMax768.matches) {
        blueFooter.style.display = 'none';
        footer.style.display = 'flex';
    }
}

// Function to handle click on the share button
function handleShareButtonClick() {
    if (!mediaQueryMin769.matches) {
        blueFooter.style.display = 'flex';
        footer.style.display = 'none';
    } else {
        if (blueFooter.style.display === 'flex') {
            blueFooter.style.display = 'none';
        } else {
            blueFooter.style.display = 'flex';
            footer.style.display = 'flex';
        }
    }
}

// Event handler for clicking the share button
btnShareShow.addEventListener('click', handleShareButtonClick);

// Event handler for clicking the blue share button
btnShareFooterBlue.addEventListener('click', () => {
    blueFooter.style.display = 'none';
    footer.style.display = 'flex';
});

