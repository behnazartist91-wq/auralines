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

function renderGallery() {
    galleryGrid.innerHTML = galleryData.map(item => `
        <div class="nft-card">
            <img src="${item.image}" alt="${item.title}" class="nft-image" loading="lazy">
            <div class="nft-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank" class="nft-link">View NFT →</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderGallery);
