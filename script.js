document.querySelectorAll('section').forEach(section => {
    const image = section.querySelector("img");

    section.addEventListener('mouseover', () => {
        const color = section.getAttribute('data-color');
        
        image.style.boxShadow = `0px 0px 60px 0px ${color}`;
    });

    section.addEventListener('mouseout', () => {
        document.body.style.boxShadow = "none";
        image.style.boxShadow = "none";
    });
});

document.querySelectorAll('[data-link-name]').forEach((section) => {
    const linkName = section.getAttribute('data-link-name');
    const link = links[linkName];

    if (link) {
        section.addEventListener('click', () => {
            window.open(link, "_blank");
        });
    }
});