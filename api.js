var Alldata= fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then(responce=>responce.json())
.then(mydata=>{

    setTimeout(function(){

        document.getElementById("spinner").className="dont-show"
        document.getElementById("header").style.display="block"
        document.getElementById("section").style.display="flex"
        document.getElementById("tc").style.display="flex"

        document.getElementById("total-cases").innerHTML = mydata.data.summary.total;
        document.getElementById("active-cases").innerHTML = mydata.data.summary.total-(mydata.data.summary.discharged + mydata.data.summary.deaths);
        document.getElementById("recovered-cases").innerHTML = mydata.data.summary.discharged;
        document.getElementById("Deaths").innerHTML = mydata.data.summary.deaths;

        var row="";
        var tabledata=document.getElementById("tbody1")
        var i =1;
        
        mydata.data.regional.forEach(element => {
            var active= element.totalConfirmed-(element.discharged+element.deaths);
            
            row += "<tr><th>" +i +"</th><td>" +element.loc +"</td><td>"+element.totalConfirmed +"</td> <td>"+active+"</td><td>" +element.discharged+"</td><td>"+element.deaths+"</td></tr>" 
            i++;
        });

        tabledata.innerHTML=row
    },1000);
      
})





























