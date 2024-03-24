const button = document.getElementById('button');

button.onclick = function() {
    let search = document.getElementById('search').value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then(response => response.json())
        .then(data => {
            // Clear previous meanings
            document.getElementById('meaning').innerHTML = "";

            // Loop through each element in the data array
            for (let element of data) {
                // Display word
                document.getElementById('meaning').innerHTML += `<h2>Word - ${element.word}</h2>`;
                
                // Loop through meanings
                for (let meaning of element.meanings) {
                    // Display part of speech
                    document.getElementById('meaning').innerHTML += `<p><strong>- ${meaning.partOfSpeech}</strong></p>`;
                    
                    // Loop through definitions
                    for (let definition of meaning.definitions) {
                        // Display definition
                        document.getElementById('meaning').innerHTML += `<p>${definition.definition}</p>`;
                    }
                }
            }
        })
        .catch(error => console.error('Error:', error));
}
