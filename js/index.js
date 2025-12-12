const headMoviesData=[
        './images/推荐/捕风捉影.jpg',
        './images/推荐/疯狂动物城.jpg', 
        './images/推荐/集结号.jpg',
        './images/推荐/浪浪山小妖怪.jpg',
        './images/推荐/有病才会喜欢你.jpg'
    ]
let index=0
let n=setInterval(function(){
      const img=document.querySelector('.header .wrapper img')
      img.src=headMoviesData[index]
      index++
      if(index==headMoviesData.length){
        index=0
      }
},1000)
function uploadMoviesList(category, selector) {
    const movies = CONFIG.MOVIE_LIST[category]; 
    const container = document.querySelector(selector); 
    container.innerHTML = '';
    for (let movie of movies) {
        const movieData = CONFIG.MOVIES_DATA[movie];
        if (!movieData) {
            console.warn(`未找到电影数据: ${movie}`);
            continue;
        }
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${movieData.poster}" alt="${movie}" onerror="this.src='./images/default-poster.jpg'">
            <h3>${movie}</h3>
            <div class="cover"><a href="#">learn more</a></div>
            <div class="movie-meta"><span class="rating">${movieData.score}</span></div>
        `;
        if(category === 'hot' ) {
            const p=document.createElement('p');
            p.textContent=movieData.comment;
            li.appendChild(p);
        }
        container.appendChild(li);
    }
}
uploadMoviesList('hot', '.hot .moviesList');
uploadMoviesList('upcoming', '.upcoming .moviesList');
uploadMoviesList('more', '.more .moviesList');

const cover =document.querySelector('.more .moviesList li:nth-child(5) .cover');
cover.innerHTML='';

const a=document.createElement('a');
a.href='./detail.html';
a.textContent='learn more';
cover.appendChild(a);



