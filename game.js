document.addEventListener('DOMContentLoaded', () => {
    const playersData = {
        batsmen: [
            { name: 'Player A', id: 1 },
            { name: 'Player B', id: 2 },
            { name: 'Player C', id: 3 }
        ],
        bowlers: [
            { name: 'Player D', id: 4 },
            { name: 'Player E', id: 5 },
            { name: 'Player F', id: 6 }
        ],
        allrounders: [
            { name: 'Player G', id: 7 },
            { name: 'Player H', id: 8 },
            { name: 'Player I', id: 9 }
        ]
    };

    let selectedPlayers = [];

    function renderPlayers(category) {
        const playersDiv = document.querySelector('.players');
        playersDiv.innerHTML = '';

        playersData[category].forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card');
            playerCard.textContent = player.name;
            playerCard.dataset.id = player.id;
            playerCard.addEventListener('click', () => selectPlayer(player));
            playersDiv.appendChild(playerCard);
        });
    }

    function selectPlayer(player) {
        if (!selectedPlayers.find(p => p.id === player.id)) {
            selectedPlayers.push(player);
            updateTeamList();
        }
    }

    function updateTeamList() {
        const teamList = document.getElementById('team-list');
        teamList.innerHTML = '';

        selectedPlayers.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = player.name;
            teamList.appendChild(listItem);
        });
    }

    document.querySelectorAll('.categories button').forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            renderPlayers(category);
        });
    });

    // Initialize with batsmen category
    renderPlayers('batsmen');
});
