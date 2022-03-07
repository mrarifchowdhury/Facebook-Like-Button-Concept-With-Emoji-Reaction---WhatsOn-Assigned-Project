
var reaction = 0;

function liked() {
  document.getElementById("hover_button").style.display="flex";
 
  var element = document.getElementById("like");
  
  console.log("like Button Pressed & Liked() Method Called");
  
  if(reaction == 1){
      console.log("Reaction Found");
      
      reaction=0;

      document.getElementById("like_emoji_text").innerHTML = 'Like';
      document.getElementById("like_emoji").classList = 'fa fa-thumbs-up';

      element.classList.remove("liked","loved","hahad", "sadd","liked_one");
      document.getElementById("love_num").innerHTML = 0;
      document.getElementById("like_num").innerHTML = 0;
      document.getElementById("haha_num").innerHTML = 0;
      document.getElementById("sad_num").innerHTML = 0;
  }else{
      console.log("like Class Toggled");

      reaction = 1;
      element.classList.toggle("liked");
      document.getElementById("like_num").innerHTML = 1;
      document.getElementById("love_num").innerHTML = 0;
      document.getElementById("haha_num").innerHTML = 0;
      document.getElementById("sad_num").innerHTML = 0;
      document.getElementById("hover_button").style.display="none";
  }

}

function loved() {
    reaction =1;
    
    var element = document.getElementById("like");
    console.log("loved2");
    element.classList.toggle("loved");

    var love_emoji_class_name = document.getElementById("love_emoji_text").previousElementSibling.classList; 
    var love_text = document.getElementById("love_emoji_text").innerHTML; 
    document.getElementById("like_emoji").classList = love_emoji_class_name;
    document.getElementById("like_emoji_text").innerHTML = love_text;

    document.getElementById("love_num").innerHTML = 1 - document.getElementById("love_num").innerHTML;
    document.getElementById("like_num").innerHTML = 0;
    document.getElementById("haha_num").innerHTML = 0;
    document.getElementById("sad_num").innerHTML = 0;
}

function hahad() {
    reaction =1;
    var element = document.getElementById("like");
    console.log("haha");
    element.classList.toggle("hahad");

    var haha_emoji_class_name = document.getElementById("haha_emoji_text").previousElementSibling.classList; 
    var haha_text = document.getElementById("haha_emoji_text").innerHTML; 
    document.getElementById("like_emoji").classList = haha_emoji_class_name;
    document.getElementById("like_emoji_text").innerHTML = haha_text;

    document.getElementById("haha_num").innerHTML = 1 -   document.getElementById("haha_num").innerHTML;
    document.getElementById("like_num").innerHTML = 0;
    document.getElementById("love_num").innerHTML = 0;
    document.getElementById("sad_num").innerHTML = 0;

}

function sadd() {
    reaction =1;
    var element = document.getElementById("like");
    console.log("sad");
    element.classList.toggle("sadd");

    var sad_emoji_class_name = document.getElementById("sad_emoji_text").previousElementSibling.classList; 
    var sad_text = document.getElementById("sad_emoji_text").innerHTML; 
    document.getElementById("like_emoji").classList = sad_emoji_class_name;
    document.getElementById("like_emoji_text").innerHTML = sad_text;

    document.getElementById("sad_num").innerHTML = 1 -  document.getElementById("sad_num").innerHTML;
    document.getElementById("like_num").innerHTML = 0;
    document.getElementById("love_num").innerHTML = 0;
    document.getElementById("haha_num").innerHTML = 0;

}

document.getElementById("like_one").addEventListener("click", function() {
  document.getElementById("hover_button").style.display="none";
});

document.getElementById("love").addEventListener("click", function() {
  document.getElementById("hover_button").style.display="none";
});

document.getElementById("haha").addEventListener("click", function() {
  document.getElementById("hover_button").style.display="none";
});

document.getElementById("sad").addEventListener("click", function() {
  document.getElementById("hover_button").style.display="none";
});

