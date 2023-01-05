addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.close').forEach(close => {
    close.addEventListener('click', event => {
      event.target.closest('.box').style.display = 'none';
    })
  })
});
