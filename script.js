let repoRequest = new XMLHttpRequest();

repoRequest.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
       let repoObject = JSON.parse(this.responseText);
       for (var i = 0; i < repoObject.length; i++){
        var obj = repoObject[i];
        var a = document.createElement('A');
        a.innerHTML = obj.name;
        a.title = "my title text";
        a.href = obj.html_url;
        document.getElementById("repo").appendChild(a);
        
       }
    }
};

repoRequest.open("GET", "https://api.github.com/users/mgzs2013/repos", true);
repoRequest.send();

$(function (){
    $(".flink").hover(function (){
        $(this).css("font-size", 25);
        $(this).css("background", "#3B5998");
        $(this).css("color", "white");
        $(this).css("padding", "12px");
        $(this).css("width", "45px");
        $(this).css("height", "45px");
    }, function (){
        $(this).css("font-size", 15);
        $(this).css("background", "#3B5998");
        $(this).css("padding", "6px");
        $(this).css("width", "25px");
        $(this).css("height", "25px");
      
    });
});

$(function (){
    $(".llink").hover(function (){
        $(this).css("font-size", 25);
        $(this).css("background", "#007bb5");
        $(this).css("color", "white");
        $(this).css("padding", "12px");
        $(this).css("width", "45px");
        $(this).css("height", "45px");
    }, function (){
        $(this).css("font-size", 15);
        $(this).css("background", "#007bb5");
        $(this).css("padding", "6px");
        $(this).css("width", "25px");
        $(this).css("height", "25px");
      
    });
});

$(function (){
    $("#githubIcon").hover(function (){
        $(this).css("width", 35);
           }, function (){
        $(this).css("width", 25);
       
     
    });
});

$(function (){
    $("#githubIcon2").hover(function (){
        $(this).css("height", 35);
           }, function (){
        $(this).css("height", 25);
       
      
    });
});