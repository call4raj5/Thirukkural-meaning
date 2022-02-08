function show() {
  var number = document.getElementById("thirukkuralNumber").value;
  console.log(number);


  var kuralURl = "https://api-thirukkural.vercel.app/api?num=" + number;
  fetch(kuralURl)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result);
      display(result,number);
    })
    .catch((error) => {
      if(num<=0 || num>1330)
      {
        document.getElementById("head1").innerHTML = "1 முதல் 1300 வரையிலான எண்ணை வழங்கவும்";
      }
    });
}

function display(data,number) {

  document.getElementById("chapter").innerHTML = data.chap_tam;
  document.getElementById("head1").innerHTML = "திருக்குறள் எண் : " + number ;
  document.getElementById("result").innerHTML = data.line1;
  document.getElementById("result1").innerHTML = data.line2;
  document.getElementById("head2").innerHTML = "குறள் விளக்கம்";
  document.querySelector(".explain").innerHTML = data.tam_exp;
  document.getElementById("enghead").innerHTML = "English Version";
  document.querySelector(".enghead1").innerHTML = data.eng;
  document.getElementById("engexpheading").innerHTML = "Meaning";
  document.querySelector(".engexplain").innerHTML = data.eng_exp;
}
