  function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      
      function getCoinData(){
        var coinData;
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
          method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
           var ethereum=  json[1].current_price;
          //Doge data
           var dogecoin= json[2].current_price;
          if(select1=='bitcoin' && select2=='usd'){
            bitcoin=bitcoin*factorconv
            document.getElementById("input2").innerHTML=bitcoin
        }
          else if(select1=='ethereum' && select2=='usd'){
            document.getElementById("input2").innerHTML=ethereum
          }
          else if(select1=='dogecoin' && select2=='usd'){
            document.getElementById("input2").innerHTML=dogecoin
          }
          if(select1=='usd' && select2=='bitcoin'){
            dollar=document.getElementById("input1")/bitcoin
            document.getElementById("input2").innerHTML=dollar
        }
          else if(select1=='usd' && select2=='ethereum'){
            dollar=document.getElementById("input1")/ethereum
            document.getElementById("input2").innerHTML=dollar
          }
          else if(select1=='usd' && select2=='dogecoin'){
            dollar=document.getElementById("input1")/dogecoin
            document.getElementById("input2").innerHTML=dollar
          }
          
        })
        .catch((error) => {
          console.log('Something went wrong: ' + error);
        })
      }
      

      getCoinData();



switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);

