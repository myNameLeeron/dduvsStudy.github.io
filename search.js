document.getElementById('search').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const videos = document.getElementById('videos').getElementsByTagName('video');
    for (const video of videos) {
        const src = video.src.toLowerCase();
        video.style.display = src.includes(query) ? 'block' : 'none';
    }
});
