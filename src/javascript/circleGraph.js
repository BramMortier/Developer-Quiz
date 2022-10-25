// Circle graph logic
const graphProgress = document.getElementById("graph-progress");
const progressValue = document.getElementById("progress-value");

const getScoreGrade = (progress) => {
    if (progress == 100) return "S";
    if (progress >= 90) return "A";
    if (progress >= 75) return "B";
    if (progress >= 60) return "C";
    if (progress >= 50) return "D";
    return "F";
};

const initCircleGraph = (score) => {
    let currentProgress = -1;
    let progressEndValue = score;
    let speed = 20;

    let progressInterval = setInterval(() => {
        currentProgress++;
        progressValue.innerText = getScoreGrade(currentProgress);
        graphProgress.style.background = `
            conic-gradient(
                var(--accent) ${currentProgress * 3.6}deg,
                var(--primary) ${currentProgress * 3.6}deg     
            )
        `;
        if (currentProgress == progressEndValue) clearInterval(progressInterval);
    }, speed);
};

export { initCircleGraph };
