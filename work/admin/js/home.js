

Chart.defaults.font.family = "Helvetica,'FontAwesome'";
Chart.defaults.font.size = 16;

// 加總
const revenuetotal ={
    data: [7500,	5650,	5424, 6040, 7500, 7111, 6666, 5760, 5555, 7811]
            
};
const costtotal ={
    data: [588, 2800, 1245, 2588, 99, 242, 1417, 3000,	75, 457]
            
};
const incometotal ={
    data:  [6200,	1900, 4454, 800,599,	1242, 1817, 5504, 475, 5457]
            
};
       
let revenuesum = 0;
for (let i = 0; i < revenuetotal.data.length; i++) {
    revenuesum += revenuetotal.data[i];
    document.getElementById('revenueamount').textContent = revenuesum;
}
let costsum = 0;
for (let i = 0; i < costtotal.data.length; i++) {
    costsum += costtotal.data[i];
    document.getElementById('costamount').textContent = costsum;
}
let incomesum = 0;
for (let i = 0; i < incometotal.data.length; i++) {
    incomesum += incometotal.data[i];
    
    document.getElementById('incomeamount').textContent = incomesum;
}



// 圖表
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN' ,'11 JUN' ,'12 JUN','13 JUN'],
        datasets: [{
            
            data: revenuetotal.data,
            fill: false,
            borderColor: '#7ED321',
            backgroundColor: '#FFFFFF', 
            borderWidth: 3
        },
                  {
            
            data: costtotal.data, 
            fill: false,
            borderColor: '#D0021B', 
            backgroundColor: '#FFFFFF', 
            borderWidth: 3
        },
                  {
            
            data: incometotal.data, 
            fill: false,
            borderColor: '#4A90E2', 
            backgroundColor: '#FFFFFF', 
            borderWidth: 3
        }]
    },
    options: {
    //   responsive: true, // Instruct chart js to respond nicely.
      
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      plugins: {
        legend: {
            display: false   //標題不顯示
        },
        
        tooltip:{
            // backgroundColor: "green",
            xAlign:"center",
            yAlign:"bottom",
            titleAlign:"center",
            caretPadding: 10,
            displayColors: false,
            callbacks:{
                
                title: function(context) {
                    console.log(context[0].labels);
                    
                    return "";
                },
                // label:((tooltipItem,data) => {
                //     console.log(tooltipItem.datasetIndex)
                //     if (tooltipItem.datasetIndex === 0) {
                //         return "\uf4c0";
                        
                //     }
                //     if (tooltipItem.datasetIndex === 1) {
                //         return "\uf468";
                //     }
                //     if (tooltipItem.datasetIndex === 2) {
                //         return "\uf0d6";
                //     }
                // }
                // ),
                
                
                

            }
        }
      },
      scales: {
        y: {
            grid:{
                drawBorder: false,//隱藏y軸(但還有x=0的網格)
            }
        },
        x:{
            
            grid:{
                color: (ctx) => (ctx.tick.value === 0 ? 'rgba(0, 0, 0, 0.1)' : 'transparent'),
                
            },
        }
    },
    



    }





});








