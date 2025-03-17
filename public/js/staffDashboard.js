document.addEventListener("DOMContentLoaded", function () {
    const ordersChartData = {
        labels: ["Sandwich", "biryani", "pizza"],
        values: [10, 20, 30]
    };

    const inventoryChartData = {
        labels: ["tomato", "olives", "cucumber"],
        values: [50, 40, 30]
    };

    new Chart(document.getElementById('ordersChart'), {
        type: 'doughnut',
        data: {
            labels: ordersChartData.labels,
            datasets: [{
                data: ordersChartData.values,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Orders Processed'
                }
            }
        }
    });

    new Chart(document.getElementById('inventoryChart'), {
        type: 'doughnut',
        data: {
            labels: inventoryChartData.labels,
            datasets: [{
                data: inventoryChartData.values,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Inventory Levels'
                }
            }
        }
    });
});