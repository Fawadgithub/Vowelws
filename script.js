let sentence = prompt("Please enter a sentence:");

// Convert the sentence to lowercase
sentence = sentence.toLowerCase();

// Initialize a vowel count
let vowelCount = 0;

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    
    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
    }
}

// Display the total number of vowels
alert("Total number of vowels: " + vowelCount);
