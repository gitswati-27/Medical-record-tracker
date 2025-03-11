function setAppointment() {
    let appointmentTime = document.getElementById("appointmentTime").value;
    let appointmentDate = new Date(appointmentTime);
    let currentTime = new Date();
    let timeDifference = appointmentDate - currentTime;

    if (timeDifference > 0) {
        setTimeout(() => {
            document.getElementById("notification").style.display = "block";
        }, timeDifference);
        alert("Appointment Reminder Set!");
    } else {
        alert("Please select a future date and time!");
    }
}

function closeNotification() {
    document.getElementById("notification").style.display = "none";
}