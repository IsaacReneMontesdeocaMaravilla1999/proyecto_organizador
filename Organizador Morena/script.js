let miCanvas=document.getElementById("miGrafica").getContext("2d");

var chart = new Chart(miCanvas,{
    type: "bar",
    data:{
        labels:["ISAAC", "VIVI", "SARAHI", "EMMANUEL", "JUAN"],
        datasets:[
            {
                label: "Ranking de convencidos",
                backgroundColor: "rgb(0,0,0)",
                borderColor:"691108",
                data: [12,39,55,30,44]
            }  
        ]
    }
})