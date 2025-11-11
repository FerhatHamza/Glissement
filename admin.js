document.getElementById("save").onclick = async () => {
  let data = {
    groupe: Number(document.getElementById("g").value),
    echelon: Number(document.getElementById("e").value),
    indice: Number(document.getElementById("i").value)
  };

  let res = await fetch("/api/update", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  document.getElementById("msg").innerText = "✅ تم الحفظ بنجاح";
};
