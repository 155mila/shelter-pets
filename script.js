var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');

toggleButton.addEventListener('click', function () {
  console.log('aaa');
  navBar.classList.toggle('toggle');

  toggleButton.classList.contains('rotate')
    ? toggleButton.classList.remove('rotate')
    : toggleButton.classList.add('rotate');
});
