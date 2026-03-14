document.addEventListener('DOMContentLoaded', () => {
    const factBtn = document.getElementById('fact-btn');
    const insightText = document.querySelector('.insight-text');

    const insights = [
        "I believe learning should be both challenging and enjoyable.",
        "I'm known for being cheerful and approachable in the classroom.",
        "I use humor and creativity to make technical ICT lessons memorable.",
        "I value resilience and often share that I’m still learning too!"
    ];

    let count = 1;

    factBtn.addEventListener('click', () => {
        insightText.textContent = insights[count];
        count = (count + 1) % insights.length;
    });
});