// script.js

// Form validation function
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('appointment-date').value;

    // Simple validation
    if (!name || !email || !date) {
        alert('Please fill in all fields!');
        return false;
    }
    return true;
}

// Date handling function
function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

// Function to check doctor availability
function checkDoctorAvailability(date, doctorId) {
    // Placeholder for doctor availability check logic
    // In a real application, this would likely involve an API call
    const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00'];
    return availableTimes.includes(date);
}

// Interactive feature example
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        const date = document.getElementById('appointment-date').value;
        const doctorId = document.getElementById('doctor-id').value;

        if (checkDoctorAvailability(date, doctorId)) {
            alert('Appointment successfully booked!');
        } else {
            alert('The selected doctor is not available at this time.');
        }
    }
});