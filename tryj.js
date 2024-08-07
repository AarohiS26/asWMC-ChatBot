$(document).ready(function() {
    $('#chatForm').on('submit', async function(event) {
        event.preventDefault();

        const prompt = $('#promptInput').val();
        const personality = 'franklin'; // Example personality; adjust as needed

        try {
            const response = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt, personality })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const reply = data.text;

            // Append the user's message and the response to the chat list
            $('#chatList').append(`
                <div class="msgsent">
                    <div class="msgcontent">
                        <img src="C:/Users/achal.shah/Desktop/WMC/user.PNG" alt="user image" class="avatar">
                        <p class="msg">${prompt}</p>
                    </div>
                </div>
                <div class="msgreceived">
                    <div class="msgcontent">
                        <img src="C:/Users/achal.shah/Desktop/WMC/trevor.PNG" alt="chatbot image" class="avatar">
                        <p class="msg">${reply}</p>
                    </div>
                </div>
            `);

            // Clear the input field
            $('#promptInput').val('');
        } catch (error) {
            console.error('Error:', error);
            $('#chatList').append(`
                <div class="msgreceived">
                    <div class="msgcontent">
                        <p class="msg">Oops! Something went wrong.</p>
                    </div>
                </div>
            `);
        }
    });
});
