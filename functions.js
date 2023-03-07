const form = document.querySelector('#myForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const vorname = document.querySelector('#vorname').value;
    const nachname = document.querySelector('#nachname').value;
    const alter = document.querySelector('#alter').value;
    const data = { vorname, nachname, alter };
    const csv = convertToCSV(data); saveToCSV(csv);
}

function convertToCSV(data) {
    const rows = [Object.keys(data), Object.values(data)];
    return rows.map(row => row.join(',')).join('\n');
}

function saveToCSV(csv) {
    const filename = 'data.csv';
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
}
