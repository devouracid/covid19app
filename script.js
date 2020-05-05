let box = document.getElementById("box")
let div = document.getElementById("div")


fetch("https://covid19api.io/api/v1/TestsInUS")
    .then(response => response.json())
    .then(datat =>{
//API from : https://covid19-docs.chrismichael.now.sh/
      const labels = datat.tests.table.map((value)=> value.DateCollected)
      const lab = datat.tests.table.map((value)=> parseInt(value.USPublicHealthLabs) );

// the graphic library : 
//https://jsbin.com/?html,console,output
//https://www.chartjs.org/docs/latest/charts/line.html
//https://bl.ocks.org/tbpgr/304782f57b6f0a0fb8e7
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


  fetch('http://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=1db62fd2b8a1487698c4b04553cd2743')
  .then(response => response.json())
  .then(datas =>{
  console.log('here !',datas.articles[0].title)
  
  const news = datas.articles.map((entry)=> datas.articles[0].title)
  //console.log(news)
  div.innerHTML= news
  })
   
  