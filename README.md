# ISO Learner-Centric Quality Education Survey

A modern, responsive web application for conducting quality education surveys at Jose Rizal University's CSS (Computer System Servicing) Strand.

## 🌟 Features

- **Beautiful Landing Page** - Engaging splash screen with smooth transitions
- **Multi-step Survey Form** - Progressive survey with 8 sections covering all aspects of education quality
- **Real-time Progress Tracking** - Visual progress bar and auto-save functionality
- **Interactive Dashboard** - Comprehensive analytics with interactive charts
- **Mobile Responsive** - Fully optimized for all devices
- **Offline Capable** - Uses localStorage for data persistence

## 📁 Project Structure

```
ISO-Frontend/
├── index.html          # Splash screen (entry point)
├── home.html           # Main landing page with navigation
├── survey.html         # Multi-step survey form
├── thank-you.html      # Survey completion page
├── dashboard.html      # Analytics dashboard
├── styles.css          # Main stylesheet
├── main.js             # Common utilities and functions
├── survey.js           # Survey logic and data management
├── dashboard.js        # Dashboard charts and analytics
├── HomeBG.jpg          # Hero section background
├── SurveyBG.png        # Survey page background
├── schoolbg.jpg        # Dashboard header background
└── JoseRizalUniversityy.jpg  # Splash screen background
```

## 🚀 Deployment to GitHub Pages

### Step 1: Ensure all files are committed
```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
```

### Step 2: Push to GitHub
```bash
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under "Source", select **main** branch
5. Select **/ (root)** folder
6. Click **Save**

### Step 4: Access your site
Your site will be available at: `https://[username].github.io/[repository-name]/`

## 🎯 User Flow

```
index.html (Splash Screen)
    ↓
home.html (Main Landing)
    ↓
    ├─→ survey.html (Take Survey)
    │       ↓
    │   thank-you.html (Completion)
    │
    └─→ dashboard.html (View Analytics)
```

## 📊 Data Storage

The application uses **localStorage** for data persistence:

- **surveyProgress** - Saves user's current progress in the survey
- **surveyResponses** - Stores all completed survey submissions

### Accessing Stored Data

Open browser console and run:
```javascript
// View all survey responses
console.log(JSON.parse(localStorage.getItem('surveyResponses')))

// Clear all data
localStorage.clear()
```

## 🎨 Customization

### Colors
Main colors are defined in `styles.css`:
- Primary Purple: `#312e81`
- Secondary Blue: `#4338ca`
- Accent Gold: `#fde047`
- Success Green: `#16a34a`

### Survey Questions
Edit survey questions in `survey.js` in the `surveySections` array.

### Dashboard Charts
Modify charts in `dashboard.js` using the chart creation functions.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🔧 Local Development

1. Clone the repository
2. Open `index.html` in a browser
3. No build process required - pure HTML, CSS, and JavaScript

### Recommended: Use a local server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000
```

## 📝 Survey Sections

1. **Learner Needs & Expectations** - How well the program meets student goals
2. **Teaching & Learning Quality** - Effectiveness of teaching methods
3. **Assessments & Outcomes** - Fairness and usefulness of evaluations
4. **Support & Resources** - Availability of learning materials
5. **Environment & Inclusivity** - Classroom atmosphere and diversity
6. **Feedback & Responsiveness** - How well feedback is handled
7. **Overall Satisfaction** - General program satisfaction
8. **Demographics** - Student information and open feedback

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks, pure JS
- **SVG** - Inline icons and charts
- **LocalStorage API** - Client-side data persistence

## 📈 Dashboard Features

- **Response Trends** - Track survey completion over time
- **Subject Performance** - View scores by section
- **Grade Distribution** - Student performance breakdown
- **Satisfaction Details** - Timeline of satisfaction levels
- **Filter Options** - Filter by academic year and grade level
- **Real-time Updates** - Auto-refresh every 30 seconds

## 🔒 Privacy & Data

- All data is stored locally in the browser
- No server-side processing or external data transmission
- Users can clear their data at any time
- Survey responses are anonymous (unless demographic info is provided)

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on multiple devices
5. Submit a pull request

## 📄 License

© 2025 JRU Senior High School. All rights reserved.

## 🆘 Support

For issues or questions:
- Create an issue on GitHub
- Contact Academic Affairs at JRU

---

**Built with ❤️ for Jose Rizal University CSS Strand Students**
