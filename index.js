 document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.animated-background');
        for (let i = 0; i < 400; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.top = `${Math.random() * 100}vh`;
            dot.style.left = `${Math.random() * 100}vw`;
            container.appendChild(dot);
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Set the date we're counting down to
        const countdownDate = new Date("June 7, 2024 00:00:00").getTime();
    
        // Update the countdown every 1 second
        const interval = setInterval(function() {
    
            // Get today's date and time
            const now = new Date().getTime();
    
            // Find the distance between now and the countdown date
            const distance = countdownDate - now;
    
            // Time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Display the result in the elements with corresponding ids
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
    
            // If the countdown is finished, write some text
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerHTML = "EXPIRED";
            }
        }, 1000);
    });
    

    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');

        if (toggleButton.classList.contains('active')) {
            // Your code for the "active" state
            //background remains light themed
            document.querySelector('.inner_div').style.backgroundColor = 'black'
        } else {
            // Your code for the "inactive" state
            //background turns to dark theme
            document.querySelector('.inner_div').style.backgroundColor = 'white'
        }
    });
