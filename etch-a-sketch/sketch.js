const container = document.querySelector('.grid-container');
const gridBtn = document.querySelector('#newGrid');
const reset = document.querySelector('#reset');

gridBtn.addEventListener('click', () => {
  let newGridSize = prompt('Enter a number of squares per side (max: 100):');

  newGridSize = parseInt(newGridSize);

  if (newGridSize > 0 && newGridSize <= 100) {
    container.innerHTML = '';

    const newSquare = 640 / newGridSize;

    for (let i = 0; i < newGridSize * newGridSize; i++) {
      const square = document.createElement('div');

      square.classList.add('square');
      square.style.width = `${newSquare}px`;
      square.style.height = `${newSquare}px`;

      square.addEventListener('mouseenter', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        let currentOpacity = parseFloat(square.dataset.opacity) || 0;

        if (currentOpacity < 1) {
          currentOpacity += 0.1;
          square.dataset.opacity = currentOpacity;
        }

        square.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${currentOpacity})`;
      });
    
      container.appendChild(square);
    }
  } else {
    alert('Plase enter a valid number between 1 to 100.');
  }
});

reset.addEventListener('click', () => {
  const resetBtn = confirm('Are you sure to delete this grid?');

  if (resetBtn) {
    container.innerHTML = '';
  }
})