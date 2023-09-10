var ctx =  document.getElementById('myLine')
var lineChart =new Chart(ctx,{
   type:'bar',
   data:{
       labels:["week1","week2","week3" ],
       datasets:[{
           label:"user",
           fill:false,
          
           backgroundColor:"green",
           borderColor:"blue",
           data:[54,7,76]
       },
       {
           label:"gest",
           fill:false,
          
           backgroundColor:"red",
           borderColor:"blue",
           data:[34,56,23]
       }]

   }
});

var ctx =  document.getElementById('myLines')
var lineChart =new Chart(ctx,{
   type:'doughnut',
   data:{
       labels:[ "basic tees","custum short pants","supper Hoodies"],
       datasets:[{
           label:"monthly sales 2023",
           fill:false,
           lineTension:0.5,
           backgroundColor: [
            'green',
            'red',
            'yellow'
          ],
           data:[12,34,45]
       }]

   }
});