const slider = document.querySelector('.blog-slider');

function activate(e) {
  const items = document.querySelectorAll('.blog-item');
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', activate, false);