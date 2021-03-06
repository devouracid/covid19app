let box = document.getElementById("box")
let display_news = document.getElementById("display_news")
let search_news = document.getElementById("search_news")
let search_news_button = document.getElementById("search_news_button")


fetch("https://covid19api.io/api/v1/TestsInUS")
    .then(response => response.json())
    .then(datat =>{
//API from : https://covid19-docs.chrismichael.now.sh/
      const labels = datat.tests.table.map((value)=> value.DateCollected)
      const lab = datat.tests.table.map((value)=> parseInt(value.USPublicHealthLabs) );

// the graphic library : 
//https://jsbin.com/?html,console,output

  function displayLineChart() {
    var data = {
        labels ,
        datasets: [
            {
                label: "CUSPublicHealthLabs",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: lab
            }
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = { };
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
  });
  }

 displayLineChart()
  })



search_news_button.addEventListener("click",function(){

    let inputValue = search_news.value
    let api_key =  "1db62fd2b8a1487698c4b04553cd2743"

    fetch(`http://newsapi.org/v2/top-headlines?country=${inputValue}&apiKey=${api_key}`)
    .then(response => response.json())
    .then(datas =>{

    const news = datas.articles.map((entry)=> { 
    
        let newsItems = `<li>   <p>${entry.title}</p>
                                <p>${entry.description} </p>
                                <p>${entry.publishedAt} </p>
                                <p>${entry.content} </p>
                                <a href=${entry.url}> 
                                <img class="news_images"  src=${entry.urlToImage} >
                                <p>${entry.url}</p>
                                </a>
        
                        </li>                   
                       `
      return  newsItems
    })
    
    display_news.innerHTML= news.join(" ")
    })
})
