document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');
    
    events.forEach(event => {
        event.addEventListener('click', () => {
            event.classList.toggle('highlight');
            alert(`Você clicou no evento: ${event.querySelector('h3').innerText}`);
        });
    });
});

