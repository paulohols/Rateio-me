// script.js
document.getElementById('rateioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventCost = parseFloat(document.getElementById('eventCost').value);
    const serviceChargePercent = parseFloat(document.getElementById('serviceChargePercent').value);
    const groupSize = parseInt(document.getElementById('groupSize').value);

    if (isNaN(eventCost) || isNaN(serviceChargePercent) || isNaN(groupSize)) {
        alert("Please enter valid numbers.");
        return;
    }

    const serviceChargeTotal = (serviceChargePercent / 100) * eventCost;
    const grandTotal = serviceChargeTotal + eventCost;
    const split = grandTotal / groupSize;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Resumo do ${eventName}:</h2>
        <p><strong>Valor:</strong> $${eventCost.toFixed(2)}</p>
        <p><strong>Taxas:</strong> ${serviceChargePercent}%</p>
        <p><strong>Quantidade de pessoas:</strong> ${groupSize}</p>
        <p><strong>Valor total:</strong> $${grandTotal.toFixed(2)}</p>
        <p><strong>Cada pessoa deverá pagar:</strong> $${split.toFixed(2)}</p>
    `;
});
