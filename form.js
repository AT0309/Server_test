var prefecture=document.getElementById("prefecture");

console.log("search");
$.ajax({
  url: "https://opendata.resas-portal.go.jp/api/v1/prefectures/",
  type: "GET",
  headers: {
      'X-API-KEY':"WP4ecYE1jXwTwoaSk0OnZxzXa6YzDZohjQNWNA9G"
  },
  async: "false",
  success: function(result_data) {
      for(let i=0; i<result_data.result.length; i++){
        var a=document.createElement("option");
        a.innerText=result_data.result[i].prefName;
        a.value=i+1;
        prefecture.appendChild(a);
      }
  }
});
console.log("API");