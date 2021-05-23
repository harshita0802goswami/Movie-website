const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".recommended-movie-list");

arrows.forEach((arrow,i)=>{
    const itemNum = movieList[i].querySelectorAll("img").length;
    let clickCounter =0;
    arrow.addEventListener("click",()=>{
        clickCounter++;
        if(itemNum-(5+clickCounter)>=0){
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        } else{
            movieList[i].style.transform = "translateX(0)";
            clickCounter=0;

        }
    })
   
  console.log(movieList[i].querySelectorAll("img").length);
});

const ball= document.querySelector(".toggle-container");
const items = document.querySelectorAll(".toggle,.nav-container,.recommended-movie-title,.recommended-movie-container"
);
ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});