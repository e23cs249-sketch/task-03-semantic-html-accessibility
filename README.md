# Task 03 – Semantic HTML5 & Accessible Component Architecture

## Project Overview

This project implements the structural foundation of an enterprise dashboard using semantic HTML5 and accessible web development practices.

The project focuses on:

- Semantic HTML5 structure
- WCAG-oriented accessibility practices
- Accessible forms and controls
- Accessible data tables
- Native HTML dialog/modal
- Keyboard-friendly navigation
- Responsive layout
- Valid HTML5 markup

## Pages

### Dashboard
`index.html`

Contains:

- Semantic header and navigation
- Sidebar navigation
- Dashboard overview cards
- Recent activity table
- Accessible user form
- Confirmation dialog/modal
- Footer

### Users
`users.html`

Contains:

- User search form
- Accessible form controls
- User data table
- Semantic page structure

### Reports
`reports.html`

Contains:

- Report summary cards
- Reports data table
- Accessible report generation form
- Semantic page structure

## Semantic HTML5 Elements

The project uses:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<form>`
- `<fieldset>`
- `<legend>`
- `<table>`
- `<caption>`
- `<thead>`
- `<tbody>`
- `<dialog>`

These elements provide meaningful structure and improve accessibility and maintainability.

## Accessibility Features

The project includes:

- Skip link for keyboard users
- Proper heading hierarchy
- Descriptive navigation labels
- `<label>` elements associated with form controls
- Required form fields
- Appropriate input types
- `minlength` and `maxlength` validation
- `autocomplete` attributes
- `aria-label`
- `aria-labelledby`
- `aria-describedby`
- Table captions
- Table column scopes using `scope="col"`
- Visible keyboard focus states
- Native HTML `<dialog>`
- Responsive layout for different screen sizes

## Form Validation

Forms use native HTML validation features including:

- `required`
- `type="email"`
- `minlength`
- `maxlength`
- Appropriate input and select controls

## Modal Dialog

The dashboard includes a native HTML `<dialog>` element.

JavaScript is used to open the dialog with:

```javascript
modal.showModal();
```

The dialog can be closed using its native:
<form method="dialog">

## Responsive Design

The dashboard uses CSS Grid and media queries to adapt the layout for:

- Desktop screens
- Tablet screens
- Mobile screens
- Validation

All HTML pages were checked using the W3C Nu HTML Checker.

Validated files:

- index.html
- users.html
- reports.html

Validation result: 0 errors.

## Project Structure
```
task-03-semantic-html-accessibility/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── users.html
├── reports.html
└── README.md
```

## Technologies Used
- HTML5
- CSS3
- JavaScript
- W3C HTML Validator
- Task Status

## Completed:

- Semantic HTML5 structure
- Accessible navigation
- Sidebar layout
- Accessible forms
- Data tables
- Native modal dialog
- Responsive CSS
- JavaScript interaction
- W3C HTML validation