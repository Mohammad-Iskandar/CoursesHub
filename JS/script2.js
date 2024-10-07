function countdown(element, start, end) {
    let current = start;
    const interval = setInterval(() => {
        element.textContent = current;
        if (current === end) {
            clearInterval(interval);
        } else {
            current--;
        }
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        countdown(number, target, 0);
    });
});