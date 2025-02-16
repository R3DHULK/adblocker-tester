# AD-Blocker Tester

A sleek, modern web application for testing the effectiveness of ad-blocking solutions. This tool provides real-time analysis and visualization of ad-blocking performance across multiple ad networks and tracking services.

<img src="icon.jpg" alt="AD-Blocker Tester" width="200" height="200">

## Features

- **Real-time Testing**: Tests blocking effectiveness against 27+ major ad networks and tracking services
- **Visual Score Display**: Dynamic score calculation with animated progress bar
- **Detailed Analytics**:
  - Interactive charts showing blocked vs. unblocked content
  - Historical trend analysis
  - Test comparison capabilities
- **Modern UI**:
  - Glass-morphism design
  - Dark/Light theme support
  - Responsive layout for all devices
- **Export Capabilities**:
  - PDF report generation with detailed statistics
  - CSV export for data analysis
- **Test History**:
  - Saves test results locally
  - Compare current results with previous tests
  - View performance trends over time

## Technologies Used

- HTML5/CSS3
- Vanilla JavaScript
- Chart.js for data visualization
- GSAP for animations
- jsPDF for PDF generation
- Local Storage for data persistence

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ad-blocker-tester.git
```

2. Navigate to the project directory:
```bash
cd ad-blocker-tester
```

3. Open `index.html` in your web browser or serve using a local development server.

## Usage

1. Click the "Start Test" button to begin the ad-blocker test
2. Watch as the application tests various ad networks and tracking services
3. View your final score and detailed breakdown of blocked/unblocked content
4. Export results or compare with previous tests using the history feature
5. Toggle between dark and light themes using the theme switch

## Customization

### Adding New Ad Networks

Add new ad networks to test by modifying the `adNetworks` array in `script.js`:

```javascript
const adNetworks = [
    { name: 'Network Name', url: 'network-domain.com' },
    // Add more networks here
];
```

### Modifying Test Parameters

Adjust test timing and behavior in the settings panel or by modifying the following variables:
- Test delay
- Auto-save preferences
- Score calculation weights

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Note**: Don't fork this project, instead contribute or share with friends.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Chart.js for providing the charting library
- GSAP for smooth animations
- jsPDF for PDF export functionality

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Roadmap

- [ ] Add support for custom ad network testing
- [ ] Implement cloud storage for test history
- [ ] Add detailed performance metrics and insights
- [ ] Integrate with popular ad-blocker extensions
- [ ] Add real-time collaboration features

---

**Note**: This tool is intended for educational and testing purposes only. Please use ad-blocking technology responsibly and in accordance with website terms of service.

**Thank me**: Feel free to connect at namastesumalya@gmail.com. # adblocker-tester
