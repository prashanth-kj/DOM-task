
let containerDiv = document.createElement('div');
    containerDiv.style.backgroundColor='steelblue';
    containerDiv.style.height='450px';
    containerDiv.style.width='370px';
    let rowDiv1=document.createElement('div');
    rowDiv1.setAttribute('class','row');
    let colDiv = document.createElement('div');
    colDiv.setAttribute('class','col');
    let input =document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id','result');
    input.classList.add( 'form-control','mt-4')
    colDiv.appendChild(input)
    rowDiv1.appendChild(colDiv)
    containerDiv.appendChild(rowDiv1);




   let row2=document.createElement('div');
      
                let  row2col1 = document.createElement('div');
                    row2col1.setAttribute('class','col');
                let button1 = document.createElement('button');
                    button1.textContent='C';
                    button1.setAttribute('onclick',"Clear()");
                    button1.setAttribute('id','clear');
                    button1.style.width='60px';
                    button1.style.height='50px';
                    button1.style.color='red';
                    row2col1.appendChild(button1);
                let row2col2 = document.createElement('div');
                    row2col2.setAttribute('class','col');
                let button2 = document.createElement('button');
                    button2.setAttribute('class',"bi bi-arrow-left-short");
                    button2.setAttribute('onclick',"del()");
                    button2.style.width='60px';
                    button2.style.height='50px';
                    row2col2.appendChild(button2);

                let row2col3 = document.createElement('div');
                     row2col3.setAttribute('class','col');
                let button3 = document.createElement('button');
                    button3.setAttribute('class',"bi bi-dot");
                    button3.setAttribute('onclick',"append('.')")
                    button3.style.width='60px';
                    button3.style.height='50px';
                    row2col3.appendChild(button3);

                let row2col4 = document.createElement('div');
                    row2col4.setAttribute('class','col');
                let button4 = document.createElement('button');
                    button4.setAttribute('class',"bi bi-x");
                    button4.setAttribute('onclick',"append('*')");
                    button4.style.width='60px';
                    button4.style.height='50px';
                    button4.style.color='blue';
                    row2col4.appendChild(button4);
      row2.append(row2col1,row2col2,row2col3,row2col4);
   row2.classList.add("row" ,'form-check','mt-4','d-flex')
   containerDiv.append(row2);

   let row3=document.createElement('div');
   //    rowDiv2.setAttribute('class','row');
                   let  row3col1 = document.createElement('div');
                       row3col1.setAttribute('class','col');
                   let button5 = document.createElement('button');
                       button5.textContent='7';
                       button5.setAttribute('onclick',"append(7)")
                       button5.style.width='60px';
                       button5.style.height='50px';
                       row3col1.appendChild(button5);
                   let row3col2 = document.createElement('div');
                       row3col2.setAttribute('class','col');
                   let button6 = document.createElement('button');
                       button6.textContent='8';
                       button6.setAttribute('onclick',"append(8)")
                       button6.style.width='60px';
                       button6.style.height='50px';
                       row3col2.appendChild(button6);
   
                   let row3col3 = document.createElement('div');
                        row3col3.setAttribute('class','col');
                   let button7 = document.createElement('button');
                       button7.textContent='9';
                       button7.setAttribute('onclick',"append(9)")
                       button7.style.width='60px';
                       button7.style.height='50px';
                       row3col3.appendChild(button7);
   
                   let row3col4 = document.createElement('div');
                       row3col4.setAttribute('class','col');
                   let button8 = document.createElement('button');
                       button8.textContent='/';
                       button8.setAttribute('onclick',"append('/')")
                       button8.style.width='60px';
                       button8.style.height='50px';
                       button8.style.color='blue';
                       row3col4.appendChild(button8);
         row3.append(row3col1,row3col2,row3col3,row3col4);
      row3.classList.add("row" ,'form-check','mt-4','d-flex')
      containerDiv.append(row3);


      let row4=document.createElement('div');
   //    rowDiv2.setAttribute('class','row');
                   let  row4col1 = document.createElement('div');
                       row4col1.setAttribute('class','col');
                   let button9 = document.createElement('button');
                       button9.textContent='4';
                       button9.setAttribute('onclick',"append(4)")
                       button9.style.width='60px';
                       button9.style.height='50px';
                       row4col1.appendChild(button9);
                   let row4col2 = document.createElement('div');
                       row4col2.setAttribute('class','col');
                   let button10 = document.createElement('button');
                       button10.textContent='5';
                       button10.setAttribute('onclick',"append(5)")
                       button10.style.width='60px';
                       button10.style.height='50px';
                       row4col2.appendChild(button10);
   
                   let row4col3 = document.createElement('div');
                        row4col3.setAttribute('class','col');
                   let button11 = document.createElement('button');
                       button11.textContent='6';
                       button11.setAttribute('onclick',"append(6)")
                       button11.style.width='60px';
                       button11.style.height='50px';
                       row4col3.appendChild(button11);
   
                   let row4col4 = document.createElement('div');
                       row4col4.setAttribute('class','col');
                   let button12 = document.createElement('button');
                       button12.textContent='-';
                       button12.setAttribute('onclick',"append('-')")
                       button12.setAttribute('id','subtract');
                       button12.style.width='60px';
                       button12.style.height='50px';
                       button12.style.color='blue';
                       row4col4.appendChild(button12);
         row4.append(row4col1,row4col2,row4col3,row4col4);
      row4.classList.add("row" ,'form-check','mt-4','d-flex')
      containerDiv.append(row4);

      let row5=document.createElement('div');
   //    rowDiv2.setAttribute('class','row');
                   let  row5col1 = document.createElement('div');
                       row5col1.setAttribute('class','col');
                   let button13 = document.createElement('button');
                       button13.textContent='1';
                       button13.setAttribute('onclick',"append(1)")
                       button13.style.width='60px';
                       button13.style.height='50px';
                       row5col1.appendChild(button13);
                   let row5col2 = document.createElement('div');
                       row5col2.setAttribute('class','col');
                   let button14 = document.createElement('button');
                       button14.textContent='2';
                       button14.setAttribute('onclick',"append(2)")
                       button14.style.width='60px';
                       button14.style.height='50px';
                       row5col2.appendChild(button14);
   
                   let row5col3 = document.createElement('div');
                        row5col3.setAttribute('class','col');
                   let button15 = document.createElement('button');
                       button15.textContent='3';
                       button15.setAttribute('onclick',"append(3)")
                       button15.style.width='60px';
                       button15.style.height='50px';
                       row5col3.appendChild(button15);
   
                   let row5col4 = document.createElement('div');
                       row5col4.setAttribute('class','col');
                   let button16 = document.createElement('button');
                       button16.textContent='+';
                       button16.setAttribute('onclick',"append('+')")
                       button16.setAttribute('id',"add");
                       button16.style.width='60px';
                       button16.style.height='50px';
                       button16.style.color='blue';
                       row5col4.appendChild(button16);
         row5.append(row5col1,row5col2,row5col3,row5col4);
      row5.classList.add("row" ,'form-check','mt-4','d-flex')
      containerDiv.append(row5);


      let row6=document.createElement('div');
      //    rowDiv2.setAttribute('class','row');
                      let  row6col1 = document.createElement('div');
                          row6col1.setAttribute('class','col');
                      let button17 = document.createElement('button');
                          button17.textContent='0';
                          button17.setAttribute('onclick',"append(0)")
                          button17.style.width='60px';
                          button17.style.height='50px';

                          row6col1.appendChild(button17);
                      let row6col2 = document.createElement('div');
                          row6col2.setAttribute('class','col');
                      let button18 = document.createElement('button');
                          button18.textContent='00';
                          button18.setAttribute('onclick',"append('00')")
                          button18.style.width='60px';
                          button18.style.height='50px';

                          row6col2.appendChild(button18);
      
                      let row6col3 = document.createElement('div');
                           row6col3.setAttribute('class','col');
                    
                      let button19 = document.createElement('button');
                          button19.textContent='=';
                          button19.setAttribute('onclick',"evaluateExp()")
                          button19.setAttribute('id',"equal");
                          button19.style.width='60px';
                          button19.style.height='50px';
                          button19.style.color='blue';
                          
                          row6col3.appendChild(button19);
      
                    
         row6.append(row6col1,row6col2,row6col3);
         row6.classList.add("row" ,'form-check','mt-4','d-flex')
         containerDiv.append(row6);

         containerDiv.setAttribute('class','container');
         
         document.body.appendChild(containerDiv);       

          
   
             function append(value){
                let result = document.getElementById('result');
                  result.value = result.value+value;
             }

              function evaluateExp(){
                let result = document.getElementById('result');
                  result.value = eval(result.value)
              }
              function Clear(){
                let result = document.getElementById('result');
                  result.value='';
              }
              function del(){
                let result=document.getElementById('result');
                result.value=String(result.value).slice(0,-1);
               
            }
   
      let display = document.querySelector('input');
         display.addEventListener("keyup",(event)=>{
            let arr =['1','2','3','4','5','6','7','8','9','0','+','-','*','/','Enter','backspace'];

            if(!arr.includes(event.key))
            {
                alert("Press Number only");
                del();
               
            }
            if(event.key==="Enter"){
                  evaluateExp();
            }
        
         });

       
    