let enter = document.querySelector("#enter");
let user = document.querySelector("#user");
let chatbox = document.querySelector(".chatbox");
let reloads = document.querySelector("#reloads");




reloads.addEventListener('click',()=>{
    window.location.reload()
})


enter.addEventListener("click", () => {
  user.value = user.value.toLowerCase();
  if (user.value === "") {
    alert("Please write some thing");
  } 
  else if (
    user.value.includes("hi") ||
    user.value.includes("hii") ||
    user.value.includes("hello") ||
    user.value.includes("hey")
  ) {
    chat(user.value, "Hello");
  } 
  else if (user.value.includes("date")) {
    var date = new Date();
    var current_date =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    chat(user.value, `Today date is ${current_date}`);
  } 
  else if (user.value.includes("time")) {
    let dates = new Date();
    let times =
      dates.getHours() + "-" + dates.getMinutes() + "-" + dates.getSeconds();
    chat(user.value, times);
  } 
  else if (user.value.includes("calculate")) {
    let exp = user.value.replace("calculate ", " ");
    let ans = eval(exp);
    chat(user.value, ans);
  } 
  else if (user.value.includes("google")||user.value.includes ("search")) {
    let googles = user.value.slice(7);
    let google_links = `<a class="same" href="https://www.google.com/search?q=${googles}">Click here to get your result</a>`;
    chat(user.value, google_links);
  } 
  else if (user.value.includes("youtube")) {
    let youtube = user.value.replace("on youtube", "");
    let youtube_links = `<a class="same" href="https://www.youtube.com/results?search_query=${youtube}">Click here to get your result</a>`;
    chat(user.value, youtube_links);
  }
  else if(user.value.includes('anime')){
      let anime  = user.value.replace("anime","")
      let anime_links = `<a class="same" href="https://aniwatch.to/search?keyword=${anime}">Click here to get your result</a>`
      chat(user.value,anime_links);
  }
  else if(user.value.includes('songs')){
    let songs  = user.value.replace("songs","")
    let songs_links = `<a class="same" href="https://open.spotify.com/search/${songs}">Click here to get your result</a>`
    chat(user.value,songs_links);
}
  else if(user.value.includes('order')){
  let foods  = user.value.slice(6)
  let foods_links = `<a class="same" href="https://www.swiggy.com/search?query=   ${foods}">Click here to get your result</a>`
  chat(user.value,foods_links);
}
  else if(user.value.includes("instagram")){
      let insta_links = `<a class="same" href="https://www.instagram.com/">Click here to get your result</a>`
      chat(user.value,insta_links);
    }
  else if(user.value.includes("facebook")){
      let facebook_links = `<a class="same" href="https://www.facebook.com/">Click here to get your result</a>`
      chat(user.value,facebook_links);
    }
  else if(user.value.includes("Snapchat")){
      let snapchat_links = `<a class="same" href="https://www.snapchat.com/">Click here to get your result</a>`
      chat(user.value,snapchat_links);
    }
      



  user.value=" ";
});

function chat(user, response) {
  enter.setAttribute("disabled", true);
  chatbox.innerHTML += `<p class="right_side">${user}</p>`;
  setTimeout(() => {
    chatbox.innerHTML += `<p>${response}</p>`;
    enter.removeAttribute("disabled");
  }, 1000);
}
