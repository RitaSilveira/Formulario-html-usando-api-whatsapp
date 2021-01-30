    
    
        var telefone = "5581999999999, ";
        var pedido = "";
        var ped = ""
    
            function evento (){
             var op1 = document.getElementById("item1");
             var op2 = document.getElementById("item2");
             var sel1 = document.getElementById("select1");
             var sel2 = document.getElementById("select2");
                  
         
             pedido = " o cliente: "+ telefone + "solicitou "+ op1.value + " qt: " + sel1.value + " e " + op2.value + " qt: " + sel2.value;
             document.getElementById("script").innerHTML = pedido;
            }

            function enviar () {

              ped.innerHTML = pedido;
              location.href=
              "https://api.whatsapp.com//send?phone=8187649599 " + pedido;
            }
           
           $('form').each (function(){
           this.reset();
           }
           ); 
    
