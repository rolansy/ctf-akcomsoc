document.getElementById('center-image').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'metacommunicationskillsbutsayyestoall.png';
    link.download = 'metacommunicationskillsbutsayyestoall.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('next-button').addEventListener('click', function() {
    const clueInput = document.getElementById('clue-input').value;
    const correctClue = 'notjimcarrey'; // Replace with the actual correct clue

    if (clueInput === correctClue) {
        window.location.href = 'https://tinyurl.com/ethumood'; // Replace with the actual next page URL
    } else {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
    }
});