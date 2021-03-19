     function check(){
         
         var name=document.getElementById("navn").value;
         var telefon=document.getElementById("telefon").value;
         submitOK="true";

         if(name.length>10){
             alert("The name should be equal or less than 10");
             submitOK="false";
         }
         
         if(telefon.length!=8){
            alert("The telefon nummer skal indholde 8 cifret");
            submitOK="false";
        }

         if(submitOK == "false"){
             return false;      
         }
     }
