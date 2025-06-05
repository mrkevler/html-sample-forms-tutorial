# HTML Sample Forms Tutorial by mrKevler 💫

**Repository:** [github.com/mrkevler/html-sample-forms-tutorial](https://github.com/mrkevler/html-sample-forms-tutorial)

**Demo** 🌐 [mrkevler.github.io/html-sample-forms-tutorial](https://mrkevler.github.io/html-sample-forms-tutorial/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)  
![GitHub](https://img.shields.io/badge/GitHub-mrkevler-green) ![License](https://img.shields.io/badge/License-CC%20BY--NC-blue) ![Follow](https://img.shields.io/github/followers/mrkevler?style=social)  
![Repo Size](https://img.shields.io/github/repo-size/mrkevler/html-sample-forms-tutorial) ![Last Commit](https://img.shields.io/github/last-commit/mrkevler/html-sample-forms-tutorial)  
[![Buy Me a Coffee](https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-yellow)](https://buymeacoffee.com/mrkevler)


## 🔍 Table of Contents

- [HTML Sample Forms Tutorial by mrKevler 💫](#html-sample-forms-tutorial-by-mrkevler-)
  - [🔍 Table of Contents](#-table-of-contents)
  - [🚀 Project Overview](#-project-overview)
  - [✨ Concept](#-concept)
  - [📋 Forms Collection](#-forms-collection)
    - [Form 1: Login Form](#form-1-login-form)
    - [Form 2: Feedback Form](#form-2-feedback-form)
    - [Form 3: Company Form](#form-3-company-form)
    - [Form 4: Academy Form](#form-4-academy-form)
  - [🌟 Key Features](#-key-features)
  - [💫 Interactive Elements](#-interactive-elements)
    - [Form Controls](#form-controls)
    - [Validation Features](#validation-features)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [💻 Code Showcase](#-code-showcase)
    - [Core Form Patterns and Why They're Used](#core-form-patterns-and-why-theyre-used)
    - [Advanced CSS Form Styling](#advanced-css-form-styling)
  - [🏗️ Project Structure](#️-project-structure)
  - [🚀 How To Use](#-how-to-use)
    - [Form Validation Examples](#form-validation-examples)
    - [Accessibility Features](#accessibility-features)

---

## 🚀 Project Overview

This is an interactive forms collection showcasing modern form design patterns built with HTML5, CSS3 and JavaScript 💫  
Built with semantic HTML5, accessible design principles and comprehensive validation to demonstrate professional form development 🎨

This tutorial is perfect for learning form design, validation techniques and user experience patterns 🎓

Enjoy coding! ✌️  
[mrKevler](https://github.com/mrkevler)

---

## ✨ Concept

This project demonstrates four core form development skills:

1. **Semantic HTML5** forms with proper accessibility features
2. **Advanced CSS3** styling with focus states and transitions
3. **JavaScript validation** with real-time feedback
4. **Modern UX patterns** with progressive disclosure and error handling

Key learning objectives:

- HTML5 form validation with custom messages
- CSS focus states and interactive elements
- JavaScript form handling and validation
- Responsive form layouts for all devices
- Accessibility best practices (WCAG compliant)

---

## 📋 Forms Collection

### Form 1: Login Form

**File:** `login_form.html`  
**Features:**

- Email and password validation
- Password visibility toggle
- Remember me functionality
- HTML5 validation patterns
- Responsive design

### Form 2: Feedback Form

**File:** `feedback_form.html`  
**Features:**

- Emotion checkboxes:Angry, Sad, Happy, Ambivalent
- Satisfaction radio buttons
- File upload for bio photo
- Location dropdown selection
- Textarea for comments

### Form 3: Company Form

**File:** `company_form.html`  
**Features:**

- Employee details collection
- Gender selection (Male/Female)
- Employee ID and designation
- Phone number validation
- Personal information fields

### Form 4: Academy Form

**File:** `academy_form.html`  
**Features:**

- Code Labs Academy feedback
- Session date and subject selection
- Rating scales (1-5)
- Topic questions textarea
- Study habits checkboxes
- Recommendation likelihood

---

## 🌟 Key Features

Interactive HTML5 forms with comprehensive validation  
4 different form types showcasing various input patterns  
Custom CSS styling with focus states and transitions  
JavaScript validation with real-time error feedback  
Responsive design optimized for all screen sizes  
Accessibility features following WCAG guidelines

---

## 💫 Interactive Elements

### Form Controls

| Control Type        | Implementation                        |
| ------------------- | ------------------------------------- |
| **Text Inputs**     | Email, password, text with validation |
| **Radio Buttons**   | Gender selection, satisfaction rating |
| **Checkboxes**      | Multiple selections, emotions, skills |
| **Select Dropdown** | Location, subject, department options |
| **Textarea**        | Comments, feedback, additional info   |
| **File Upload**     | Bio photo, document uploads           |
| **Range Sliders**   | Rating scales with real-time values   |

### Validation Features

- HTML5 built-in validation with custom messages
- Real-time validation feedback
- Focus and blur event handling
- Error state styling with smooth transitions
- Success state indicators
- Comprehensive form reset functionality

---

## 🛠️ Technologies Used

| Technology            | Implementation                          |
| --------------------- | --------------------------------------- |
| **HTML5**             | Semantic forms, validation attributes   |
| **CSS3**              | Custom properties, transitions, grid    |
| **JavaScript**        | Form validation, event handling         |
| **Responsive Design** | Mobile-first approach, flexible layouts |

---

## 💻 Code Showcase

### Core Form Patterns and Why They're Used

```javascript
// 1. Password visibility toggle
const passwordToggle = document.getElementById("passwordToggle");
passwordToggle.addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

// 2. Real-time form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// 3. Range slider value display
const experienceSlider = document.getElementById("experience");
experienceSlider.addEventListener("input", function () {
  document.getElementById("experienceValue").textContent =
    this.value + " years";
});

// 4. File upload handling
const fileInput = document.getElementById("bioPhoto");
fileInput.addEventListener("change", function () {
  const fileName = this.files[0] ? this.files[0].name : "No file chosen";
  document.getElementById("bioPhotoName").textContent = fileName;
});
```

### Advanced CSS Form Styling

```css
/* 1. CSS custom properties for consistent theming */
:root {
  --primary-blue: #1e88e5;
  --turquoise: #4dd0e1;
  --mint: #b2dfdb;
  --border-color: #e0e0e0;
}

/* 2. Focus states with smooth transitions */
.form-group input:focus {
  outline: none;
  border-color: var(--turquoise);
  box-shadow: 0 0 0 3px rgba(77, 208, 225, 0.1);
  transform: translateY(-2px);
}

/* 3. Custom checkbox styling */
.checkbox-label input:checked ~ .checkmark {
  background-color: var(--turquoise);
  border-color: var(--turquoise);
}

/* 4. Responsive form layouts */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
```

---

## 🏗️ Project Structure

```
html-sample-forms-tutorial/
├── index.html
├── login_form.html
├── feedback_form.html
├── company_form.html
├── academy_form.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── script/
    │   ├── script.js
    └── image/
        ├── bartosz_sergot_mrkevler_logo.webp
        └── favicon_bartosz_sergot_mrkevler.png
```

---

## 🚀 How To Use

1. Clone the repo:

```bash
git clone https://github.com/mrkevler/html-sample-forms-tutorial.git
```

2. Open index.html in any browser

3. Explore each form:

   - **Login Form**: Test email/password validation
   - **Feedback Form**: Try emotion checkboxes and file upload
   - **Company Form**: Fill employee details with gender selection
   - **Academy Form**: Experience Code Labs feedback with rating scales

4. Test responsive design on different screen sizes

5. Customize forms for your projects:
   - Modify validation rules
   - Update styling variables
   - Add new form fields
   - Integrate with backend APIs

**4 complete form templates with validation** 📋  
**Responsive design with mobile optimization** 📱  
**Clone, customize, and implement in minutes!** 🚀

---

### Form Validation Examples

```javascript
// Email validation with custom message
function validateEmailField(emailInput) {
  if (!emailInput.value) {
    showError(emailInput, "Email is required");
    return false;
  }
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email address");
    return false;
  }
  showSuccess(emailInput);
  return true;
}

// Phone number validation
function validatePhone(phoneInput) {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  if (!phoneRegex.test(phoneInput.value)) {
    showError(phoneInput, "Please enter a valid phone number");
    return false;
  }
  return true;
}
```

### Accessibility Features

- Semantic HTML5 form structure
- Proper label associations
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management and visual indicators
- Error messages linked to form fields

---

[![Follow me on GitHub](https://img.shields.io/github/followers/mrkevler?label=Follow&style=social)](https://github.com/mrkevler)  
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FF8000?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://www.buymeacoffee.com/mrkevler)

Crafted with ♥ by [mrKevler](https://github.com/mrkevler)
