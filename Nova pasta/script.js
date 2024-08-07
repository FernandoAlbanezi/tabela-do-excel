 const table = document.querySelector('table');
 let selectedCell = null;

table.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD') {
     if (selectedCell) {
       selectedCell.classList.remove('cell-selected');
    }
        selectedCell = event.target;
        selectedCell.classList.add('cell-selected');
      }
    });
