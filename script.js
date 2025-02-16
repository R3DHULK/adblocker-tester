// Initialize charts with proper data structure
let blockedChart, trendChart;

function initializeCharts() {
    const blockedCtx = document.getElementById('blockedChart').getContext('2d');
    const trendCtx = document.getElementById('trendChart').getContext('2d');

    blockedChart = new Chart(blockedCtx, {
        type: 'doughnut',
        data: {
            labels: ['Blocked', 'Not Blocked'],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#4CAF50', '#f44336']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#ffffff' : '#333333'
                    }
                },
                title: {
                    display: true,
                    text: 'Blocked vs Not Blocked Ads',
                    color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#ffffff' : '#333333'
                }
            }
        }
    });

    trendChart = new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Blocking Score Trend',
                data: [],
                borderColor: '#4CAF50',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#ffffff' : '#333333'
                    }
                },
                title: {
                    display: true,
                    text: 'Score History',
                    color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#ffffff' : '#333333'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#ffffff' : '#333333'
                    }
                },
                x: {
                    ticks: {
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#ffffff' : '#333333'
                    }
                }
            }
        }
    });
}

// Modified testAdBlocker function to update charts
function testAdBlocker() {
    let score = 0;
    let blockedCount = 0;
    let notBlockedCount = 0;
    const items = document.querySelectorAll('.ad-test-item');
    const totalItems = items.length;
    const scoreIncrement = 100 / totalItems;
    
    items.forEach((item, index) => {
        setTimeout(() => {
            // Simulate random blocking (in real implementation, you'd check if ads are actually blocked)
            const isBlocked = Math.random() > 0.3;
            
            if (isBlocked) {
                item.classList.add('blocked');
                item.querySelector('.status').textContent = 'Blocked ✅';
                score += scoreIncrement;
                blockedCount++;
            } else {
                item.classList.add('not-blocked');
                item.querySelector('.status').textContent = 'Not Blocked ❌';
                notBlockedCount++;
            }

            // Update score display with animation
            gsap.to(scoreDisplay, {
                innerHTML: Math.round(score),
                duration: 0.5,
                snap: { innerHTML: 1 }
            });

            // Update progress bar
            progressBar.style.width = `${score}%`;

            // Update charts when all items have been tested
            if (index === totalItems - 1) {
                // Update doughnut chart
                blockedChart.data.datasets[0].data = [blockedCount, notBlockedCount];
                blockedChart.update();

                // Update trend chart
                const now = new Date();
                const timeLabel = now.toLocaleTimeString();
                trendChart.data.labels.push(timeLabel);
                trendChart.data.datasets[0].data.push(Math.round(score));
                
                // Keep only last 10 entries for trend chart
                if (trendChart.data.labels.length > 10) {
                    trendChart.data.labels.shift();
                    trendChart.data.datasets[0].data.shift();
                }
                trendChart.update();

                // Save test history
                saveTestHistory(Math.round(score));
                
                // Show completion notification
                showNotification(`Test completed! Score: ${Math.round(score)}%`);
            }
        }, index * 500);
    });
}

// Function to save test history
function saveTestHistory(score) {
    const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
    history.push({
        date: new Date().toISOString(),
        score: score
    });
    localStorage.setItem('testHistory', JSON.stringify(history));
}

// Add event listener for theme changes to update chart colors
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#ffffff' : '#333333';
    
    // Update chart text colors
    [blockedChart, trendChart].forEach(chart => {
        if (chart) {
            chart.options.plugins.legend.labels.color = textColor;
            chart.options.plugins.title.color = textColor;
            if (chart.options.scales) {
                chart.options.scales.x.ticks.color = textColor;
                chart.options.scales.y.ticks.color = textColor;
            }
            chart.update();
        }
    });
});

// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
});