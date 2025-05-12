document.addEventListener('DOMContentLoaded', () => {
    // 1. Event Handling Section
    const clickButton = document.getElementById('clickButton');
    const clickResult = document.getElementById('clickResult');
    const hoverBox = document.getElementById('hoverBox');
    const keypressInput = document.getElementById('keypressInput');
    const keypressResult = document.getElementById('keypressResult');
    const secretButton = document.getElementById('secretButton');
    const secretMessage = document.getElementById('secretMessage');

    // Click Event
    clickButton.addEventListener('click', () => {
        clickResult.textContent = 'Button was clicked! 🎉';
        clickResult.style.color = 'green';
    });

    // Hover Event
    hoverBox.addEventListener('mouseenter', () => {
        hoverBox.textContent = 'Wow, you\'re hovering!';
        hoverBox.style.backgroundColor = '#e0e0e0';
    });

    hoverBox.addEventListener('mouseleave', () => {
        hoverBox.textContent = 'Hover over me!';
        hoverBox.style.backgroundColor = '#f0f0f0';
    });

    // Keypress Detection
    keypressInput.addEventListener('keyup', (event) => {
        keypressResult.textContent = `Last key pressed: ${event.key}`;
    });

    // Double-Click Bonus
    let clickCount = 0;
    let clickTimeout;
    secretButton.addEventListener('click', () => {
        clickCount++;
        
        // Clear previous timeout
        clearTimeout(clickTimeout);
        
        // Set a timeout to reset click count
        clickTimeout = setTimeout(() => {
            clickCount = 0;
        }, 300);

        // Double-click detection
        if (clickCount === 2) {
            secretMessage.textContent = '🎊 Secret Surprise Activated! 🎊';
            secretMessage.style.color = 'purple';
            clickCount = 0;
        }
    });

    // 2. Interactive Elements Section
    const colorButton = document.getElementById('colorButton');
    const galleryImage = document.getElementById('galleryImage');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content .tab');

    // Color-Changing Button
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9d5e5', '#eeac99'];
    let colorIndex = 0;
    colorButton.addEventListener('click', () => {
        colorButton.style.backgroundColor = colors[colorIndex];
        colorButton.textContent = `Color: ${colors[colorIndex]}`;
        colorIndex = (colorIndex + 1) % colors.length;
    });

    // Image Gallery
    const images = [
        'https://placekitten.com/300/300',
        'https://placekitten.com/301/301',
        'https://placekitten.com/302/302',
        'https://placekitten.com/303/303'
    ];
    let currentImageIndex = 0;

    // Initialize first image
    galleryImage.src = images[currentImageIndex];

    // Next Image
    nextImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        galleryImage.src = images[currentImageIndex];
    });

    // Previous Image
    prevImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        galleryImage.src = images[currentImageIndex];
    });

    // Tabs Functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding tab
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // 3. Form Validation Section
    const validationForm = document.getElementById('validationForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Real-time Validation Functions
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }

    // Real-time Validation Event Listeners
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // Form Submission
    validationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        // Check if all validations pass
        if (isNameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully! 🎉');
            validationForm.reset();
        }
    });
});
