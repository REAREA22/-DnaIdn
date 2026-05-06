function selectOption(el) {
  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('active'));
  el.classList.add('active');
}
