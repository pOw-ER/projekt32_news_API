//6f017c0147694a708712773955bc6368 api key
let url = 'http://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2021-03-10&' +
  'sortBy=popularity&' +
  'apiKey=6f017c0147694a708712773955bc6368';

let req = new Request(url);

fetch(req)
  .then(response => response.json())
  .then(x => console.log(x))


