// Função para obter o valor de um parâmetro da Query String
function obterParametroQueryString(nome) {
  nome = nome.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + nome + "(=([^&#]*)|&|#|$)"),
    resultados = regex.exec(window.location.href);
  if (!resultados) return null;
  if (!resultados[2]) return "";
  return decodeURIComponent(resultados[2].replace(/\+/g, " "));
}

// Obter o token da Query String
var token = obterParametroQueryString("token");

// Verificar se o token foi encontrado
if (token) {
  console.log("Token encontrado:", token);
  // Agora você pode usar o token como precisar na sua aplicação
} else {
  console.log("Token não encontrado na Query String");
}
