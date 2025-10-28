let patients = [];

function addPatient() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const disease = document.getElementById('disease').value;

    if(name === '' || age === '' || disease === '') {
        alert('Please fill all fields');
        return;
    }

    const patient = { name, age, disease };
    patients.push(patient);
    renderTable();
    clearForm();
}

function renderTable() {
    const tbody = document.querySelector('#patientTable tbody');
    tbody.innerHTML = '';

    patients.forEach((patient, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.disease}</td>
            <td><button class="delete" onclick="deletePatient(${index})">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}

function deletePatient(index) {
    patients.splice(index, 1);
    renderTable();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('disease').value = '';
}
