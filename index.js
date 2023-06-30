console.log("script working")

//initialize the news api parameterss
let source = 'bbc-news';
let apiKey = '5c0a5c217fef42c0aa9f47eafabad469'

//grab news container
let newsAccordian = document.getElementById('newsAccordian');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

 // What to do when response is ready
 xhr.onload = function () {
  if(this.status === 200){

      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      //console.log(articles);
      let newshtml = "";
      articles.forEach(function(element, index){
        
        let news = `<div class="card">
                      <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                          ${element["title"]}
                          </button>
                        </h2>
                      </div>

                          <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordian">
                          <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target ="_blank"  >Read More Here</a> </div>
                          </div>
                      </div>`
        newshtml += news;

      });
      newsAccordian.innerHTML = newshtml;

  }
  else{
      console.log("Some error occured")
  }
}

xhr.send()


