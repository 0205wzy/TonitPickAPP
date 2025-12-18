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

const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const container = document.querySelector('.search-results');
const resultsDiv = document.getElementById('results');

form.onsubmit = function(e) {
    e.preventDefault(); 
    container.classList.add('active');
    const keyword = input.value;    
    resultsDiv.innerHTML = '';
    if (!keyword) return;
    
     // 显示搜索结果区域
    // 找匹配的电影
    const foundMovies = [];
    // CONFIG.MOVIES_DATA 是一个对象，需要遍历它的值
    const moviesData = CONFIG.MOVIES_DATA;
    
    // 遍历对象的所有值（每个值是一部电影的对象）
    for (const movieName in moviesData) {
        const movie = moviesData[movieName];
        
        // 检查电影标题是否包含关键词
        if ((movie.title &&  movie.title.includes(keyword)) || (movie.original_title && movie.original_title.includes(keyword))) {
            foundMovies.push(movie);
        }
    }
    
    // 显示结果
    if (foundMovies.length === 0) {
        resultsDiv.innerHTML = '<p>NOT FOUND</p>';
    } else {
        for(let i=0;i<foundMovies.length;i++){
            const li = document.createElement('li');
        li.innerHTML = `
            <img src="${foundMovies[i].poster}" alt="${foundMovies[i].title}" onerror="this.src='./images/default-poster.jpg'">
            <h3>${foundMovies[i].title}</h3>
            <div class="cover"><a href="#">learn more</a></div>
            <div class="movie-meta"><span class="rating">${foundMovies[i].score}</span></div>
        `;
        resultsDiv.appendChild(li);
    }
    }
};