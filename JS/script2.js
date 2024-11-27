function countdown(element, start, end) {
    let current = start;
    const interval = setInterval(() => {
        element.textContent = current;
        if (current === end) {
            clearInterval(interval);
        } else {
            current++;
        }
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    
    // المتغير الأول يبدأ من 0 وينتهي عند 128
    countdown(numbers[0], 0, 128);
    
    // المتغير الثاني يبدأ من 0 وينتهي عند 1
    countdown(numbers[1], 0, 1);
    
    // المتغير الثالث يبدأ من 0 وينتهي عند 25
    countdown(numbers[2], 0, 31);
});
