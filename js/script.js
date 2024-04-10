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

    const expectedValue = remainingValues.reduce((acc, val) => acc + val, 0) / remainingValues.length;
    const minDeal = expectedValue * 0.75;

    document.getElementById('expectedValue').textContent = expectedValue.toFixed(2);
    document.getElementById('minDeal').textContent = minDeal.toFixed(2);
}

document.getElementById('ticketForm').addEventListener('change', calculateAndDisplayValues);

document.querySelectorAll('.ticket-values input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', function() {
        if(this.checked) {
            this.parentElement.style.backgroundColor = "#c8a913";
            this.parentElement.style.color = "#fff";
        } else {
            this.parentElement.style.backgroundColor = "#fff";
            this.parentElement.style.color = "#000"; // Or whatever your default label text color is
        }
    });
});

calculateAndDisplayValues();
