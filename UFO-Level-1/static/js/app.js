var tableData = data;
// YOUR CODE HERE!

let tbody = d3.select('tbody');

function selectedData(dataset){
    tbody.html('');
    dataset.forEach((dr) => {
        let newRow=tbody.append('tr');
        Object.values(dr).forEach((value) =>{
            let newCell = newRow.append('td');
            newCell.text(value);
        });
    })
}
selectedData(tableData)

function filterClick(){
    let newDate = d3.select('#datetime').property('value');
    let newFilter = tableData
    if(newDate){
        newFilter = newFilter.filter((row) => row.datetime === newDate)
    }
    selectedData(newFilter)
}

d3.selectAll('#filter-btn').on('click', filterClick);