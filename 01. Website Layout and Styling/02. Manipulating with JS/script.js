function first(col) {
  var el = document.querySelector('#title');
  el.style.color = col;
}

function second(type) {
  var el = document.querySelector('.second .the-title');
  if (type == 'button') {
    el.innerHTML = '<button class="the-title">Button</button>';
  } else if (type == 'h2') {
    el.innerHTML = '<h2 class="the-title">H2<h2>';
  } else {
    alert('failed');
  }
}