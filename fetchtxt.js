function loadContent(fileName, targetId) {
    // Path to the directory containing the .txt files
    const baseDir = 'prompts/';

    // Construct the full URL to the .txt file
    const filePath = baseDir + fileName;

    // Fetch and display the content
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).textContent = data;
        })
        .catch(error => console.error('Error loading content:', error));
}
