function convertCurrency(){
    let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;




    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(res => res.json())
    .then(data =>{
        let rate = data.rates[to];
        document.getElementById('result').innerText =  `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`
 })
}