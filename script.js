const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // código para ouvir click no botão e adicionar um novo dia
form.addEventListener("change", save) // código para salvar as alterações do dia e não perde-las ao atualizar a página.

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ⛔")
    return
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) // converte os dados de objeto para String para salvar no LocalStorage
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // Converte a String convertida acima para objeto novamente para poder renderizar
nlwSetup.setData(data) // função da biblioteca
nlwSetup.load() // função de renderizar da biblioca

/*const data = {
  run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
  takePills: ["01-03"],
  journal: ["01-02"],
}

nlwSetup.setData(data)
nlwSetup.load()
*/
