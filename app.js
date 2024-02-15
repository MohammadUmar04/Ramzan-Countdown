document.addEventListener('DOMContentLoaded', function () {
    // Set the date of the end of Ramadan
    const ramadanEndDate = new Date('2024-04-09T23:59:59');
    // Function to update the countdown
    function updateCountdown() {
        const now = new Date();
        const timeDifference = ramadanEndDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById('countdown').innerHTML = 'Ramadan has ended!';
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial call to set the countdown
    updateCountdown();
});
