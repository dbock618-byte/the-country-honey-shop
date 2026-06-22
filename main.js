/**
 * The Country Honey Shop - Main JS
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("The Country Honey Shop - Store Loaded");

    // Common Navigation Interactivity
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        // Dropdown handled by CSS, but can add JS enhancements here
    }

    // Email Signup Simulation
    const signupForm = document.querySelector('form');
    if (signupForm && signupForm.querySelector('input[type="email"]')) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = signupForm.querySelector('input[type="email"]').value;
            alert(`Thank you for joining the Country Mama Club, ${email}! We'll be in touch soon.`);
            signupForm.reset();
        });
    }

    // Scroll to top button or other shared features could go here
});
