const galleryData = [
    {
        title: "Cosmic Eye",
        image: "assets/images/eye3.png",
        description: "A digital exploration of vision and perception.",
        link: "https://xrp.cafe/user/rDpZ5EpcZBTcjbJW3YVxySsHu9XcQFGHyE"
    },
    {
        title: "Geometric Harmony",
        image: "assets/images/axis.png",
        description: "Sacred geometry meeting modern abstraction.",
        link: "https://xrp.cafe/user/rDpZ5EpcZBTcjbJW3YVxySsHu9XcQFGHyE"
    },
    {
        title: "Ethereal Portrait",
        image: "assets/images/IMG_20251116_183433.jpg",
        description: "Hand-drawn portrait with digital enhancements.",
        link: "https://xrp.cafe/user/rDpZ5EpcZBTcjbJW3YVxySsHu9XcQFGHyE"
    },
    {
        title: "Mandala Sketch",
        image: "assets/images/IMG_20251107_111601.jpg",
        description: "Intricate mandala patterns.",
        link: "https://xrp.cafe/user/rDpZ5EpcZBTcjbJW3YVxySsHu9XcQFGHyE"
    }
];

const galleryGrid = document.getElementById('gallery-grid');
const detailContainer = document.getElementById('nft-detail-container');

function renderGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryData.map((item, index) => `
        <div class="nft-card">
            <img src="${item.image}" alt="${item.title}" class="nft-image" loading="lazy">
            <div class="nft-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="nft-detail.html?id=${index}" class="nft-link">View Details →</a>
            </div>
        </div>
    `).join('');
}

function renderDetail() {
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id !== null && galleryData[id]) {
        const item = galleryData[id];
        detailContainer.innerHTML = `
            <div class="detail-image-container">
                <img src="${item.image}" alt="${item.title}" class="detail-image">
            </div>
            <div class="detail-info">
                <h1>${item.title}</h1>
                <p class="detail-description">${item.description}</p>
                
                <div class="detail-meta">
                    <p>Artist: <span>Behnaz</span></p>
                    <p>Collection: <span>AuraLines</span></p>
                </div>

                <a href="${item.link}" target="_blank" class="btn">Buy on xrp.cafe</a>
                <br><br>
                <a href="index.html" class="nft-link">← Back to Gallery</a>
            </div>
        `;
    } else {
        detailContainer.innerHTML = '<p>NFT not found.</p><a href="index.html" class="btn">Back to Home</a>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    renderDetail();
});
