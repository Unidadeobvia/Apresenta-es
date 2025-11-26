function detectar(valor) {
  const tipo = typeof valor;

  let extra = "";

  if (Array.isArray(valor)) {
    extra = "→ Isso é um array (tipo 'object')";
  } else if (valor === null) {
    extra = "→ Isso é null (bug histórico: typeof null = 'object')";
  }

  document.getElementById("output").textContent =
    `Valor: ${JSON.stringify(valor)}
Tipo: ${tipo}
${extra}`;
}
