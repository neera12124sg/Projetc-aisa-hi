function postQuestion() {
    let questionText = document.getElementById('questionInput').value.trim();
    if (questionText === '') return;
    
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<p><strong>Q:</strong> ${questionText}</p>
        <textarea placeholder='Write your answer...'></textarea>
        <button onclick='postAnswer(this)'>Submit Answer</button>
        <div class='answers'></div>`;
    
    document.getElementById('questionsContainer').prepend(questionDiv);
    document.getElementById('questionInput').value = '';
}

function postAnswer(button) {
    let answerText = button.previousElementSibling.value.trim();
    if (answerText === '') return;
    
    let answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    answerDiv.innerHTML = `<p>${answerText}</p>
        <button onclick='upvote(this)'>👍 0</button> 
        <button onclick='downvote(this)'>👎 0</button> 
        <button onclick='verifyAnswer(this)'>✔ Verify</button>`;
    
    button.nextElementSibling.appendChild(answerDiv);
    button.previousElementSibling.value = '';
}

function upvote(button) {
    let count = parseInt(button.innerText.split(' ')[1]);
    button.innerText = `👍 ${count + 1}`;
}

function downvote(button) {
    let count = parseInt(button.innerText.split(' ')[1]);
    button.innerText = `👎 ${count + 1}`;
}

function verifyAnswer(button) {
    button.parentElement.classList.add('verified');
    button.parentElement.innerHTML += " <strong>(Verified)</strong>";
    button.remove();
}
