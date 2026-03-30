'use strict';

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations (example using Intersection Observer)
const sections = document.querySelectorAll('.scroll-animation');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// GitHub API integration
async function fetchGitHubRepos() {
    const response = await fetch('https://api.github.com/users/koustubhdeshpa/repos');
    const repos = await response.json();
    const repoList = document.getElementById('repo-list');

    repos.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href='${repo.html_url}'>${repo.name}</a>`;
        repoList.appendChild(listItem);
    });
}
fetchGitHubRepos();

// Dynamic footer
const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Koustubh Deshpande`;
