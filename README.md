# Jose Rizal University - Validation System

A static HTML website for student registration and validation at Jose Rizal University.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Follow these steps to set it up:

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `jru-validation-system` or similar
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (since we already have one)

### 2. Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit: JRU Validation System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"

The site will be automatically deployed when you push changes to the main branch.

### 4. Access Your Site

Once deployed, your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

## Project Structure

```
/Users/gdullas/Desktop/Projects/ISO-Frontend/
├── index.html              # Main landing page
├── Login.html             # Student registration form
├── functions.css          # Styles for login page
├── Socmedlinks.js         # Social media links functionality
├── JoseRizalUniversityy.jpg # Background image
├── .nojekyll             # GitHub Pages configuration
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment workflow
└── README.md             # This file
```

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with animations
- **Student Registration**: Form for Grade 11 and 12 students
- **Social Media Integration**: Links to university social media accounts
- **Smooth Transitions**: Page transition animations for better UX

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Montserrat & Poppins)

## Development

To run locally, simply open `index.html` in a web browser. No build process required as this is a static site.

## Support

For questions or issues, please contact the development team or create an issue in the GitHub repository.