//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

const inputBox = document.querySelector("input");
const enterButton = document.querySelector(".enterButton")
let resultOfAi = "";

const API_KEY = "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"; // Replace with your actual API key

function logSuggestion() {
    fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                {
                    role: "user",
                    content: `${inputBox.value}`//"How do I add a new element to a JavaScript array?"
                }
            ],
            max_tokens: 500,
            stream: false
        })
    })
        .then(response => {
            if (!response.ok) {
                console.log(111);
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(suggestionData => {
            console.log(suggestionData); //suggestionData.choices.0.message.content
            resultOfAi = suggestionData.choices[0].message.content;
            console.log(resultOfAi);
            const newParagraph = document.createElement('p');
            newParagraph.textContent = `${resultOfAi}`;
            newParagraph.classList.add('response');
            inputBox.insertAdjacentElement('beforebegin', newParagraph);
        })
        .catch(error => console.error(error));
}

enterButton.addEventListener("click", logSuggestion);
