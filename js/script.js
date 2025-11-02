let Q = confirm(" هل تريد حساب درجات؟  ");

if (Q == true) {
  let degree = +prompt("ادخل درجتك يا نجم:");

  let result;
  switch (true) {
    case degree < 0 || degree > 100:
      console.log(" Enter Tha true number");
      break;

    case degree < 50:
      console.log("FFF");
      break;
    case degree >= 50 && degree < 60:
      console.log("F");
      break;

    case degree >= 60 && degree < 70:
      console.log("E");
      break;

    case degree >= 70 && degree < 80:
      console.log("C");
      break;

    case degree >= 80 && degree < 90:
      console.log("A");
      break;

    case degree >= 90 && degree < 99:
      console.log("A+");
      break;
    case degree == 100:
      console.log("Xlans");
      break;

    default:
      console.log("Enter a Number");

      break;
  }
} else if (Q == false) {
  let city = prompt(" من اين انت ");

  let desqutn = "10%";

  switch (city) {
    case "cairo":
      desqutn = " 20%";
      console.log(desqutn);

      break;
    case "Fayom":
    case "bane syef":
      desqutn = " 40%";
      console.log(desqutn);

      break;

    default:
      console.log(desqutn);

      break;
  }
}
