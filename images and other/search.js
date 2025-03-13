const games = [
    { title: "Tom Clancy's Splinter Cell", link: "https://fitgirl-repacks.site/tom-clancys-splinter-cell-blacklist-digital-deluxe-edition-v1-03-2-dlcs/" },
    { title: "Grand Theft Auto V,gtav", link: "https://fitgirl-repacks.site/grand-theft-auto-v/" },
    { title: "Watch Dogs", link: "https://fitgirl-repacks.site/watch-dogs-v1-06-329-all-dlcs/" },
    {title: "wwe 2k16", link: "https://fitgirl-repacks.site/wwe-2k16-all-dlcs/" },
    {title: "dragon ball z kakarot" , link: "https://fitgirl-repacks.site/dragon-ball-z-kakarot/" },
    { title: "dragon ball sparkling zero" , link: "https://fitgirl-repacks.site/dragon-ball-sparking-zero/" },
    // Add more games here as needed
];

function searchGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';  // Clear previous results

    if (query.length > 0) {
        const filteredGames = games.filter(game => game.title.toLowerCase().includes(query));

        // Display results with highlighting
        filteredGames.forEach(game => {
            const listItem = document.createElement('li');
            const title = game.title;
            const highlightedTitle = title.replace(new RegExp(query, 'gi'), '<span class="highlight">$&</span>');
            listItem.innerHTML = highlightedTitle;
            listItem.onclick = () => window.location.href = game.link;
            resultsList.appendChild(listItem);
        });

        resultsList.style.display = 'block';
    } else {
        resultsList.style.display = 'none';
    }
}