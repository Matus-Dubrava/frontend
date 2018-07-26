import '../css/styles.css';
import '../../views/index.html';

const btn = document.getElementById('fetch-api');
btn.addEventListener('click', (event) => {
  fetch('/api/users')
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err);
  });
});
