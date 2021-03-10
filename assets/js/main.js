
const carouselList = document.getElementById('carousel-list');
const carouselImages = document.getElementById('carousel-images');
const cards = document.getElementById('cards')
const col9 = document.getElementById('col9')

let url = 'http://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2021-03-10&' +
  'sortBy=popularity&' +
  `apiKey=${config.SECRET_API_KEY}`;

let req = new Request(url);

fetch(req)
  .then(response => response.json())
  .then(news => {
    // console.log(news);
    // console.log(news.articles[0].urlToImage);
    for (let i = 0; i < 10; i++) {
      carouselList.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active"></li>`
      carouselImages.innerHTML += `<div class="carousel-item ${i === 0 ? 'active' : ""}">
      <a href="${news.articles[i].url}" target="_blank"><img class="d-block img-fluid" src="${news.articles[i].urlToImage === null ? 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' : news.articles[i].urlToImage}"
          alt="slide${i}"></a>
    </div>`
    }
    for (let i = 10; i < 20; i++) {
      cards.innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="${news.articles[i].url}" target="_blank"><img class="card-img-top" src="${news.articles[i].urlToImage === null ? 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' : news.articles[i].urlToImage}" alt=""></a>
        <div class="card-body">
          <h5 class="card-title text-success">
            By ${news.articles[i].author === null ? 'anonym' : news.articles[i].author}
          </h5>
          <h6>${news.articles[i].publishedAt.slice(0, 10)}</h6>
          <p class="card-text">${news.articles[i].description}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
      </div>
    </div>`
    }
  })




document.getElementById('de').addEventListener('click', (e) => {
  console.log(e.target.id);
  let url1 = 'https://newsapi.org/v2/top-headlines?' +
    `country=${e.target.id}&` +
    `apiKey=${config.SECRET_API_KEY}`;
  let req1 = new Request(url1);
  fetch(req1)
    .then(response => response.json())
    .then(news => {
      console.log(news);
    })
})
