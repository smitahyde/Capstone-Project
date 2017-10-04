$('#submitForm').on('click', function(e){
  e.preventDefault();
  var email = $('#inputEmail').val();
  alert("Welcome ," + email);

});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['<20', '20-34', '34-44', '45-54', '55-64', '65-74', '75-84','>84'],
    datasets: [{
      label: 'Men',
      data: [0, 5, 10, 15, 20, 25, 30,35,40],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'Women',
      data: [0, 5, 10, 15, 20, 25, 30,35,40],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});
