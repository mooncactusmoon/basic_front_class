$(document).ready(function () {
    const navLinkList = document.querySelectorAll('.navbar .nav-link');
    const navbar = document.getElementById('navbar')
    const scrollReport = document.getElementById('scrollReport')
    console.log(navLinkList, 'navLinkList')
    console.log(navbar, 'navbar')
    console.log(scrollReport, 'scrollReport')
    const navigationTable = {};
    navLinkList.forEach(value => {
        const sectionId = value.dataset.target;
        navigationTable[sectionId] = {
            link: value,
            section: document.getElementById(sectionId)
        }
    });
    console.log('navigationTable', navigationTable);
    window.addEventListener('scroll', function () {
        const y = Math.round(window.scrollY + navbar.offsetHeight);
        scrollReport.innerText = `目前所在的位置${y}`;
    });
});