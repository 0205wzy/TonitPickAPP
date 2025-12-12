function uploadMineList(category, selector) {
    const movies = CONFIG.MINE_LIST[category];  
    const container = document.querySelector(selector); 
    container.innerHTML = '';
    for (let movie of movies) {
        const movieData = CONFIG.MOVIES_DATA[movie];
        if (!movieData) {
            console.warn(`未找到电影数据: ${movie}`);
            continue;
        }
        const li = document.createElement('li');
        li.classList.add('movie-card');
        li.innerHTML = `
           <img src="${movieData.poster}" alt="${movie}" onerror="this.src='./images/default-poster.jpg'">
            <div class="movie-meta">
                    <h3>${movie} <span class="original-title">(${movieData.original_title})</span></h3>
                    <span class="score">${movieData.score}</span>
                    <br>
                    <span class="year">${movieData.year+" be on"}</span>
                    <p class="intro">${movieData.overview.substring(0, 50)}${movieData.overview.length > 50 ? '...' : ''}</p>
                </div>
        `;
        container.appendChild(li);
    }
}
uploadMineList('want', '.want .moviesList');
uploadMineList('read', '.read .moviesList');
uploadMineList('like', '.like .moviesList');

    const buttons = document.querySelectorAll('.choice button');
    const movieCategories = document.querySelectorAll('.moviesCategory > li');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {

            buttons.forEach(btn => btn.classList.remove('active'));
            
        
            movieCategories.forEach(category => category.classList.remove('active'));
            
           
            this.classList.add('active');
            
          
            movieCategories[index].classList.add('active');
        });
    });