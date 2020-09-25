function calcy()
{
    var  wd = document.getElementById('wd').value;
    var  java = document.getElementById('java').value;
    var c = document.getElementById('c').value;
    var os = document.getElementById('os').value;
    var grades = "";

    var totalGrades = parseFloat(wd) + parseFloat(java) + parseFloat(c) + parseFloat(os);
    var perc = (totalGrades/400) * 100;

    if(perc <= 100  && perc >= 80){
        grades = 'A';
      }else if(perc <= 79  && perc >= 60){
         grades = 'B';
      }else if(perc <= 59  && perc >= 40){
         grades = 'C';
      }else{
         grades = 'F';
      }
    
      if(perc >= 39.5){
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
      }
      else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
      }
    
}
