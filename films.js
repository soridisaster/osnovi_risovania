addMoviesOnPage('generalCollection');

function addMoviesOnPage(collection){
    
    document.querySelectorAll(".card").forEach(e => e.remove());

    
    let allMoviesInLS =  JSON.parse(localStorage.getItem(collection));
    
    
    if(allMoviesInLS!=null){
        for(let i=0; i<allMoviesInLS.length; i++) addMovieOnPage(allMoviesInLS[i]);
    }
}

function addMovieOnPage(movie){

    
    let {id, titleMovie, country,    photo} = movie;
    
    let containerMain = document.getElementById("main");

    let cardMovie = document.createElement('div');
    cardMovie.setAttribute("class", "card");
    cardMovie.id = "card";

    let movieTitle = document.createElement('p');
    movieTitle.setAttribute("class", "movieTitle");
    movieTitle.textContent = titleMovie;

    let cardMovieRow = document.createElement('div');
    cardMovieRow.setAttribute("class", "card_row");

    let movieInform = document.createElement('div');
    movieInform.setAttribute("class", "inform");


 
    
    let movieImg = document.createElement('div');
    movieImg.setAttribute("class", "movieImg");

    let img = document.createElement('img');
    img.setAttribute("class", "img");
    img.src = photo;

    movieImg.appendChild(img);

    


    let movieInformRowTitle = document.createElement('div');
    movieInformRowTitle.setAttribute("class", "inform_row");

    let movieParamTitle = document.createElement('pre');
    movieParamTitle.setAttribute("class", "param");
    movieParamTitle.textContent = "Имя: ";

    let movieDescriptionTitle = document.createElement('p');
    movieDescriptionTitle.setAttribute("class", "desc");
    movieDescriptionTitle.textContent = titleMovie;

    movieInformRowTitle.appendChild(movieParamTitle);
    movieInformRowTitle.appendChild(movieDescriptionTitle); 

   
    


    let movieInformRowCountry = document.createElement('div');
    movieInformRowCountry.setAttribute("class", "inform_row");

    let movieParamCountry = document.createElement('pre');
    movieParamCountry.setAttribute("class", "param");
    movieParamCountry.textContent = "Урок: ";

    let movieDescriptionCountry = document.createElement('p');
    movieDescriptionCountry.setAttribute("class", "desc");
    movieDescriptionCountry.textContent = country;

    movieInformRowCountry.appendChild(movieParamCountry);
    movieInformRowCountry.appendChild(movieDescriptionCountry); 

 





    movieInform.appendChild(movieInformRowTitle);
    movieInform.appendChild(movieInformRowCountry);


    cardMovieRow.appendChild(movieInform);
    cardMovieRow.appendChild(movieImg);


    cardMovie.appendChild(movieTitle);
    cardMovie.appendChild(cardMovieRow);

    containerMain.appendChild(cardMovie);
}
//Ф-я восстанавливает скроллинг экран
function enableScrolling(){
    window.onscroll=function(){};
}
  
  //Ф-я останавливает скроллинг экрана
function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){
      window.scrollTo(x, y);
    };
}







