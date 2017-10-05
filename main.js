$('#submitForm').on('click', function(e){
  e.preventDefault();
  var email = $('#inputEmail').val();
  alert("Welcome ," + email);

});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['15-49', '50-59', '60-69', '70-79', '80-99'],
    datasets: [{
      label: 'Men',
      data: [17.2, 9.3, 5.9, 4.0, 2.1],
      backgroundColor: "rgba(75,75,192,0.4)"
    }, {
      label: 'Women',
      data: [26.3, 9.8, 6.0, 4.1, 1.9],
      backgroundColor: "rgba(75,72,192,1)"
    }]
  }
});
