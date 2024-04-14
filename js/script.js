function calculateAndDisplayValues() {
    const ticketValues = [4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 80, 100, 120, 200, 400];
    const checkboxes = document.querySelectorAll('#ticketForm input[type="checkbox"]:not(:checked)');
    let remainingValues = [];

    checkboxes.forEach(function(checkbox) {
        remainingValues.push(Number(checkbox.value));
    });

    if (remainingValues.length === 0) {
        document.getElementById('expectedValue').textContent = 0;
        document.getElementById('minDeal').textContent = 0;
        return;
    }

    const expectedValue = calculateExpectedValue(remainingValues);
    const standardDeviation = calculateStandardDeviation(remainingValues, expectedValue);
    const riskAversionCoefficient = 0.5;
    const fairDeal = expectedValue - (riskAversionCoefficient * standardDeviation);

    document.getElementById('expectedValue').textContent = expectedValue.toFixed(2);
    document.getElementById('minDeal').textContent = fairDeal.toFixed(2);
}

document.getElementById('ticketForm').addEventListener('change', calculateAndDisplayValues);

document.querySelectorAll('.ticket-values input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', function() {
        if(this.checked) {
            this.parentElement.style.backgroundColor = "#c8a913";
            this.parentElement.style.color = "#fff";
        } else {
            this.parentElement.style.backgroundColor = "#fff";
            this.parentElement.style.color = "#000";
        }
    });
});

function calculateExpectedValue(values) {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
}

function calculateStandardDeviation(values, mean) {
    const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
    return Math.sqrt(variance);
}

calculateAndDisplayValues();
