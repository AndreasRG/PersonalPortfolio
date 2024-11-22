// Selects HTML elements:
const inputBox = document.querySelector('input[name="query"]');
const enterButton = document.querySelector('.enterButton');
const ageBox = document.querySelector('input[name="age"]');
const resetAPIKEYButton = document.querySelector('.apiKeyResetButton');
let resultOfAi = '';

// Amount to generate:
let amountValue = 1;

function getSelectedValue() {
    const amountSelector = document.querySelector('input[name="amount"]:checked');
    if (amountSelector) {
        amountValue = amountSelector.value;
        console.log(`Selected amount value: ${amountValue}`);
    } else {
        console.log('No option selected');
    }
}

document.querySelectorAll('input[name="amount"]').forEach((radio) => {
    radio.addEventListener('change', getSelectedValue);
});

getSelectedValue();

// Language to generate in:
let languageValue = 'English';

function getSelectedLanguageValue() {
    const languageSelector = document.querySelector('input[name="language"]:checked');
    if (languageSelector) {
        languageValue = languageSelector.value;
        console.log(`Selected language value: ${languageValue}`);
    } else {
        console.log('No option selected');
    }
}

// Add event listeners to radio buttons
document.querySelectorAll('input[name="language"]').forEach((radio) => {
    radio.addEventListener('change', getSelectedLanguageValue);
});

getSelectedLanguageValue();

// The API_KEY prompt:
function getApiKey() {
    let apiKey = localStorage.getItem('API_KEY');
    if (!apiKey) {
        apiKey = prompt('Please enter your API key:');
        localStorage.setItem('API_KEY', apiKey);
    }
    return apiKey;
}

// Function to reset the API key
function resetApiKey() {
    localStorage.removeItem('API_KEY');
    location.reload();
}
resetAPIKEYButton.addEventListener('click', resetApiKey);

// Receives API key:
const API_KEY = getApiKey();

// The AI:
function logSuggestion() {
    getSelectedLanguageValue(); // Ensure the latest language value is fetched before making the API call
    fetch('https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'meta-llama/Llama-3.1-8B-Instruct',
            messages: [
                {
                    role: 'user',
                    content: `Make ${amountValue} different titles for an age group of ${ageBox.value} in ${languageValue} for YouTube that must ONLY be about ${inputBox.value}. Please number each title, starting from 1 and including a dot (e.g., "1. Title One", "2. Title Two", and so on). Ensure the format "number dot" (e.g., 1., 2., ...10.). No repeating answers.`,
                },
            ],
            max_tokens: 500,
            stream: false,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                console.log(111);
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then((suggestionData) => {
            console.log(suggestionData);
            resultOfAi = suggestionData.choices[0].message.content;
            console.log(resultOfAi);

            // Clear previous results
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';

            // Split and create new paragraphs for each suggestion
            const parts = resultOfAi.split(/(?=\d+\.\s)/);
            parts.forEach((part) => {
                const newParagraph = document.createElement('p');
                newParagraph.innerHTML = part.trim();
                contentDiv.appendChild(newParagraph);
            });
        })
        .catch((error) => console.error(error));
}

// Activation of the AI:
enterButton.addEventListener('click', logSuggestion);

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        logSuggestion();
    }
}

inputBox.addEventListener('keydown', handleEnterKey);
