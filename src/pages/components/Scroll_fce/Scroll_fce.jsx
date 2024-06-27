export const Scroll_fce = () => { 
    const rolloutNav = document.querySelector('.rollout-nav');
    const navBtn = document.querySelector('.nav-btn');

    navBtn.addEventListener('click', () => {
        rolloutNav.classList.toggle('nav-closed');
    });

    rolloutNav.addEventListener('click', (event) => {
        const odkaz = event.target.closest('a');
        if (odkaz) {
            const href = link.getAttribute('href').split('#')[1];
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView();
                rolloutNav.classList.add('nav-closed');
            }
        }
    })
}