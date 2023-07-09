function multiplication() {
  let num = document.getElementById("txtn").value;
  let tab = document.getElementById("seltab");

  if (num.length == 0) {
    alert("Please, type a number!");
  } else {
    let n = Number(num);
    tab.innerHTML = "";

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
    }
  }
}
