function clearSearch() {
    document.querySelector(".search-field").value = "";
}

// Função para transcrever o vídeo (exemplo)
function transcribeVideo() {
    const searchQuery = document.querySelector(".search-field").value;
    // Aqui você pode adicionar a lógica para transcrever o vídeo com a pesquisa fornecida
    // Essa é apenas uma função de exemplo
    const transcription = "Aqui vai a transcrição do vídeo..."; // Substitua por sua transcrição real

    // Exibe a transcrição no elemento "transcription"
    document.getElementById("transcription").innerHTML = transcription;
}