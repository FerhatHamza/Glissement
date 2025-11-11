document.getElementById("getIndice").onclick = async () => {
  let g = document.getElementById("groupe_old").value;
  let e = document.getElementById("echelon_old").value;

  let r = await fetch(`/api/indice?groupe=${g}&echelon=${e}`);
  let data = await r.json();

  if (data.indice == null) {
    document.getElementById("result").innerText = "⚠️ لا يوجد رقم استدلالي مطابق في الشبكة.";
  } else {
    document.getElementById("result").innerText = `الرقم الاستدلالي المقابل هو: ${data.indice}`;
  }
};
