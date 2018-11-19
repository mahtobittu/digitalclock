var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var zone = document.getElementById('zone');


setInterval(function megan(){
     
    var t = new Date();
    var z = vok();
    hours.innerText = vok();
    minutes.innerText = t.getMinutes();
    seconds.innerText = t.getSeconds();
    console.log(z);
    
    if(t.getHours()>12){
      zone.innerText = 'pm';   
    }else{
      zone.innerText = 'am';
    }

    function vok(){            
      x = t.getHours();
   
      if(x>12){
        x = x-12;      
      }  

      return x;
    }

},1000);

