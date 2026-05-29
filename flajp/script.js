document.addEventListener("DOMContentLoaded", () => {
    let progressValue = 0;
    const progressText = document.getElementById("progress");
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Symulacja ładowania
    const interval = setInterval(() => {
        // Losowy skok procentowy dla lepszego efektu
        progressValue += Math.floor(Math.random() * 15) + 5; 
        
        if (progressValue >= 100) {
            progressValue = 100;
            clearInterval(interval);
            
            progressText.innerText = progressValue + "%";
            
            // Faza przejścia
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none";
                    mainContent.classList.remove("hidden");
                }, 800); // Czas trwania animacji znikania (CSS)
            }, 500); // Krótkie opóźnienie po wbiciu 100%
        } else {
            progressText.innerText = progressValue + "%";
        }
    }, 150); // Szybkość "klikania" procentów
});
