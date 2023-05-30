   
        function submitForm(){

          
        let firstname = document.getElementById('first-name').value;
        let lastname= document.getElementById('last-name').value;
        let Address= document.getElementById('address').value;
        let pincode =document.getElementById('pincode').value;
        let gender =document.querySelector("input[name='gender']:checked").value;
        let foodItem=document.getElementsByName('food');
            let selectFoods=[];

            for(let i=0; i<foodItem.length;i++){
                if(foodItem[i].checked)
                {
                    selectFoods.push(foodItem[i].value)
                }
  
            }
            if(selectFoods.length<2){
                alert("Aleast min 2 food select");
                document.getElementsByName('food').reset();
            } 
              

           let state =document.getElementById('state').value;
           let country= document.getElementById('country').value;

              
            let myTable=document.getElementById('myTable');
            let  trow = myTable.insertRow();
            let cell1 = trow.insertCell();
            cell1.innerHTML=firstname;
            let cell2 = trow.insertCell();
            cell2.innerHTML=lastname;
            let cell3 = trow.insertCell();
            cell3.innerHTML=Address;
            let cell4 = trow.insertCell();
            cell4.innerHTML=pincode;
            let cell5 = trow.insertCell();
            cell5.innerHTML=gender;
            let cell6 = trow.insertCell();
            cell6.innerHTML=selectFoods.join(",");
            let cell7 = trow.insertCell();
            cell7.innerHTML=state;
            let cell8 = trow.insertCell();
            cell8.innerHTML=country;

            document.getElementById("form").reset();

            };
   
      
      
           
            
        

     