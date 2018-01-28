const url = 'https://cors-anywhere.herokuapp.com/https://www.lipsum.com/feed/json?amount=5&what=paras&start=yes';

fetch(url, {
  method: 'GET',
  headers: new Headers({
    'X-Requested-With': 'Javascript'
  }),
}).then((response) => {
  return response.json();
}).then((d) => {
  console.log(d);
  const el = document.querySelector('.app');
  const lipsum = d.feed.lipsum.split('\n');

  for (let i = 0; i < lipsum.length; i++) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(lipsum[i]));
    el.appendChild(p);
  }
}).catch((err) => {
  console.error(err);
})