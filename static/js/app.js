// Assign the data from `data.js` to a descriptive variable
var tableData = data;

function dataTable(Data){
    // remove table row for filtered table
    d3.selectAll("tbody tr").remove();
    // Get a reference to the table body
    var tbody = d3.select("tbody");
    // Use d3 to update each cell's text with
    // report values (date,city,state,country,shape,duration,comments)
    Data.forEach(function(UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function([key, value]) {
        // Append a cell to the row for each value in the report object
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
// Initialize table.
dataTable(tableData);

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Get the filtered data
  var filteredData = tableData.filter(time => time.datetime === inputValue);
  console.log(filteredData);

  dataTable(filteredData);
});



