let Q = confirm(" هل تريد حساب درجات؟  ");

if (Q == true) {
  let degree = +prompt("ادخل درجتك");

  let result;
  switch (true) {
    case  degree > 100:
      console.log(" يا اسطي ما انت مش هتبقي ناصح عليا");
      document.write(" يا اسطي ما انت مش هتبقي ناصح عليا");
      break;

      case degree < 0 :
        console.log("يا اسطي ماتهزرش");
        document.write("يا اسطي ماتهزرش");
        break;

    case degree < 50:
      console.log("FFF تقديرك هو");
      document.write("FFF تقديرك هو");
      break;
    case degree >= 50 && degree < 60:
      console.log("F تقديرك هو");
      document.write("F تقديرك هو");
      break;

    case degree >= 60 && degree < 70:
      console.log("E تقديرك هو");
      document.write("E تقديرك هو");
      break;

    case degree >= 70 && degree < 80:
      console.log("C تقديرك هو");
      document.write("C تقديرك هو");
      break;

    case degree >= 80 && degree < 90:
      console.log("A تقديرك هو");
      document.write("A تقديرك هو");
      break;
    case degree >= 90 && degree < 99:
      console.log("A+ تقديرك هو");
      document.write("  A+ تقديرك هو");
      break;
    case degree == 100:
      console.log("Xlans تقديرك هو");
      document.write("Xlans تقديرك هو");
      break;

    default:
      console.log("Enter a Number");
      document.write("Enter a Number");

      break;
  }
} else if (Q == false) {
  let city = prompt("  من اين انت لحساب تخفيضاتك ");

  let desqutn = "سوف تحصل علي خصم %10";

  switch (city) {
    case "cairo":
      desqutn = "سوف تحصل علي خصم %20";
      console.log(desqutn);
      document.write(desqutn);

      break;
    case "Fayom":
    case "bane swyef":
      desqutn = "سوف تحصل علي خصم %40";
      console.log(desqutn);
      document.write(desqutn);

      break;

      case "Tanta":
        desqutn = "سوف تحصل علي خصم %60";
        console.log(desqutn);
        document.write(desqutn);
  
        break;


    default:
      console.log(desqutn);
      document.write(desqutn);

      break;
  }
}
