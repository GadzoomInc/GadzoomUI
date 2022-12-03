document.getElementById('search').addEventListener('click', async function() {
  // get values of chemical and manufacturer fields
  const chemicalName = document.getElementById('chemical').value
  let nameStr = ''
  if (chemicalName !== "") {
    nameStr = `name=${chemicalName}&`
  }
  const manufacturer = document.getElementById('manufacturer').value
  let manufacturerStr = ''
  if (manufacturer !== "") {
    manufacturerStr = `manufacturer=${manufacturer}`
  }
  
  // send GET request to server: localhost:5000/api/sds
  const {data} = await axios.get(`http://localhost:5000/api/sds?${nameStr}${manufacturerStr}`)
  console.log(data)

  // load results into table -- for now we just do name, manufacturer, and url
  const table = document.getElementById('resultsTable')
  let resultsStr = '<tr><th>Chemical</th><th>Manufacturer</th><th>SDS Link</th></tr>'
  data.forEach(element => {
    resultsStr += `<tr><td>${element.name}</td><td>${element.manufacturer}</td><td>${element.url}</td></tr>`
  });
  table.innerHTML = resultsStr

  // unhide results section
  document.getElementById('resultsSection').className = ""
})

// hide results
document.getElementById('clear').addEventListener('click', function() {
  document.getElementById('resultsSection').className = "hidden"
})