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
          
          if( document.getElementById("select1").value=='Bitcoin' && document.getElementById("select2").value=='Usd'){
            bitcoin=bitcoin* document.getElementById("input1").value
            document.getElementById("input2").value=bitcoin
            console.log(bitcoin)
        }
          else if(document.getElementById("select1").value=='Ethereum' && document.getElementById("select2").value=='Usd'){
            ethereum=ethereum* document.getElementById("input1").value
            document.getElementById("input2").value=ethereum
          }
          else if(document.getElementById("select1").value=='DogeCoin' && document.getElementById("select2").value=='Usd'){
            dogecoin=dogecoin* document.getElementById("input1").value
            document.getElementById("input2").value=dogecoin
            console.log(dogecoin)
          }
          
        })
        .catch((error) => {
          console.log('Something went wrong: ' + error);
        })
      }
      

