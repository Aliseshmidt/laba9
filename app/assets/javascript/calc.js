function show_result(data){
    let result = document.getElementById("result")
    result.innerHTML = "<br>Результат:<br><br><table id='resultTable'><tr><th>№</th><th>Number</th></tr></table>"
    let table = document.querySelector("#resultTable")
    data.value.forEach(function (value, i) {
        table.innerHTML += `<tr><td>${i+1}</td><td id ='res${i+1}'>${value}</td><tr>`
    });
}
$(document).ready(function(){
    $("#calc_form").bind("ajax:success",function(xhr, data, status) {
        console.log(data)
        show_result(data)
    })
})