$('#submitForm').on('click', function(e){
  e.preventDefault();
  var email = $('#inputEmail').val();
  alert("Welcome ," + email);

});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'Men',
      data: [5, 10, 3, 7, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'Women',
      data: [2, 7, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});
