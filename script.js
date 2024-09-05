import { HTTP_CODES } from './data.js';

const THEME = {
    DOG: 'dogs',
    CAT: 'cats',
    GOAT: 'goats',
};

const getTheme = () => {
    const currentTheme = localStorage.getItem('http-codes-theme');

    return currentTheme ?? THEME.DOG;
}

const setTheme = (theme) => {
    localStorage.setItem('http-codes-theme', theme);
}

const getImage = (code, theme) => {
    const IMAGE_ENDPOINTS = {
        [THEME.DOG]: `https://http.dog/${code}.jpg`,
        [THEME.CAT]: `https://http.cat/${code}.jpg`,
        [THEME.GOAT]: `https://httpgoats.com/${code}.jpg`,
    };

    const imageUrl = IMAGE_ENDPOINTS[theme];

    return imageUrl;
};

const isHiddenCard = (code, theme) => {
    const HIDDEN_CARDS = {
        [THEME.DOG]: [],
        [THEME.CAT]: [405, 420, 451],
        [THEME.GOAT]: [205, 301, 410, 422, 501],
    };

    const isHidden = HIDDEN_CARDS[theme].includes(code);

    return isHidden;
}

const filterCodes = (search) => {
    if (!search)
        return HTTP_CODES;

    const filteredCodes = HTTP_CODES.filter(({ code, label, tags }) => {
        return [
            code.toString(),
            label,
            ...tags,
        ].some(value => value.includes(search));
    });

    return filteredCodes;
}

const renderCards = (codes) => {
    const currentTheme = getTheme();

    const filteredCodes = codes.filter(({ code }) => !isHiddenCard(code, currentTheme));

    const cards = filteredCodes.map(({ code, label }) => `
            <a class="card" href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/${code}" target="_blank" rel="noopener noreferrer">
                <div class="card-image" data-image=${getImage(code, currentTheme)}></div>

                <div class="card-info">
                    <strong>${code}</strong>

                    <span class="md">${label}</span>
                </div>
            </a>
        `);

    const html = cards.join('');

    document.getElementById('list').innerHTML = html;

    setCardImages();
};

const renderPageTitle = () => {
    const currentTheme = getTheme();

    const THEME_LABELS = {
        [THEME.DOG]: 'HTTP Dogs',
        [THEME.CAT]: 'HTTP Cats',
        [THEME.GOAT]: 'HTTP Goats',
    };

    document.querySelector('div.title > h1').textContent = THEME_LABELS[currentTheme];
}

const setCardImages = () => {
    document.querySelectorAll('.card-image').forEach(card => {
        const imageUrl = card.getAttribute('data-image');

        card.style.backgroundImage = `url(${imageUrl})`;
        card.style.backgroundPosition = 'center 25%';
        card.style.backgroundSize = '130% 200%';
        card.style.backgroundRepeat = 'no-repeat';
    });
};

const dialog = document.querySelector('#info-dialog');

document.getElementById('show-info').addEventListener('click', (e) => {
    dialog.showModal();
});

document.getElementById('close-dialog').addEventListener('click', (e) => {
    dialog.close();
});

document.getElementById('change-theme').addEventListener('click', () => {
    const currentTheme = getTheme();

    const themes = [THEME.DOG, THEME.CAT, THEME.GOAT];

    const currentThemeIndex = themes.findIndex(theme => theme === currentTheme);

    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;

    const nextTheme = themes[nextThemeIndex];

    setTheme(nextTheme);

    const currentSearch = document.querySelector('#search').value;

    const filteredCodes = filterCodes(currentSearch);

    renderCards(filteredCodes);
    renderPageTitle();
});

document.getElementById('search').addEventListener('keyup', (e) => {
    const filteredCodes = filterCodes(e.target.value);

    renderCards(filteredCodes);
});

renderCards(HTTP_CODES);
renderPageTitle();