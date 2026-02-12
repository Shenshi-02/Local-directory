# Adamson University Directory - Web Version

A modern, responsive web application for searching the Adamson University local directory. This web version replaces the Windows desktop application and can be hosted online for easy access from any device.

## Features

✨ **Real-time Search** - Instantly search across all directory entries as you type
🔍 **Smart Filtering** - Filter by category (Academic, Administration, Security, etc.)
📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
🎨 **Modern UI** - Beautiful gradient design with smooth animations
⚡ **Fast Performance** - Client-side search with no database required
🏢 **Complete Directory** - All 200+ entries from the original database

## Files Included

- `index.html` - Main HTML file
- `styles.css` - Styling and responsive design
- `script.js` - Search and filter functionality
- `data.js` - Complete directory database (200+ entries)
- `README.md` - This file

## How to Use Locally

1. Download all files to a folder
2. Open `index.html` in any modern web browser
3. Start searching! No installation required.

## Hosting Online

You can host this website for free using several platforms:

### Option 1: GitHub Pages (Recommended - Free)

1. Create a GitHub account at https://github.com
2. Create a new repository (e.g., "adamson-directory")
3. Upload all files (index.html, styles.css, script.js, data.js)
4. Go to Settings → Pages
5. Select "main" branch and "/" (root)
6. Click Save
7. Your site will be live at: `https://yourusername.github.io/adamson-directory`

### Option 2: Netlify (Free)

1. Go to https://www.netlify.com
2. Sign up for free account
3. Drag and drop all files into Netlify
4. Your site will be live instantly with a free URL
5. Optional: Connect a custom domain

### Option 3: Vercel (Free)

1. Go to https://vercel.com
2. Sign up for free account
3. Click "New Project"
4. Upload all files
5. Deploy - your site will be live in seconds

### Option 4: Cloudflare Pages (Free)

1. Go to https://pages.cloudflare.com
2. Sign up for free account
3. Create a new project
4. Upload all files
5. Your site will be deployed with global CDN

### Option 5: Traditional Web Hosting

Upload all files to any web hosting service:
- Hostinger
- Bluehost
- SiteGround
- Or your university's web server

## Updating the Directory

To add, edit, or remove entries:

1. Open `data.js` in a text editor
2. Find the `directoryData` array
3. Add/edit entries following this format:

```javascript
{
    officeName: "OFFICE NAME",
    localNumber: "123",
    phoneNumber: "8524-XXXX",
    building: "BUILDING NAME",
    category: "Category",
    keywords: "searchable keywords"
}
```

4. Save the file
5. Re-upload to your hosting platform

## Categories Available

- Academic
- Administration
- Security
- Health
- Guidance
- Finance
- Maintenance
- Faculty
- Registrar
- Library
- Student Affairs
- HR
- And more...

## Browser Support

Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Search Tips

- Search by office name: "registrar"
- Search by local number: "101"
- Search by building: "CS Building"
- Search by department: "engineering"
- Search by category: "security"
- Use filters to narrow results by category

## Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **Client-side only** - No server or database needed
- **Lightweight** - Fast loading and performance
- **SEO-friendly** - Can be indexed by search engines
- **Offline capable** - Can work offline after first load

## Customization

### Change Colors

Edit `styles.css` and modify the gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Header

Edit the header section in `index.html`:
```html
<h1>🏛️ Adamson University</h1>
<h2>Local Directory</h2>
```

### Add More Filters

Add filter buttons in `index.html` and update the filter logic in `script.js`.

## Security Notes

- This is a public directory (no sensitive data)
- All data is client-side (visible in browser)
- No user authentication required
- Suitable for internal university use

## Support

For questions or updates, contact the IT department or the person who provided you with these files.

## Version

Version 1.0 - Web Edition (2025)
- Converted from Windows Forms application
- Responsive design for all devices
- Modern UI with search and filters

---

**Adamson University**
800 San Marcelino St., Ermita 1000, Manila
Main Line: 8524-2011
