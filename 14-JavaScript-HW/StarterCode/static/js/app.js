// from data.js
var tableData = data;

// hook into the button
d3.selectAll("#filter-btn").on("click", handleClick);

// create the function to build the table
function buildTable(somedata) {
  let tbody = d3.select("tbody");
  tbody.html("");

  somedata.forEach(row => {
    // console.log(row);
    let tr = tbody.append("tr");

    Object.values(row).forEach(cell => {
      let c = tr.append("td");
      c.text(cell);
    })
  });
}

// add function to handle click
function handleClick() {
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter( element => element.datetime === date);
  }
  if (city) {
    filteredData = filteredData.filter( element => element.city === city);
  }
  if (state) {
    filteredData = filteredData.filter( element => element.state === state);
  }
  if (country) {
    filteredData = filteredData.filter( element => element.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter( element => element.shape === shape);
  }

    buildTable(filteredData);
}


// call the build table funciton with the non-filtered data
buildTable(data);