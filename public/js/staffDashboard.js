document.addEventListener("DOMContentLoaded", function () {
    const ordersChartData = JSON.parse(document.getElementById("ordersChart").dataset.chart);
    const inventoryChartData = JSON.parse(document.getElementById("inventoryChart").dataset.chart);

    const ctx1 = document.getElementById('ordersChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ordersChartData.labels,
            datasets: [{
                label: 'Orders Processed',
                data: ordersChartData.values,
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    const ctx2 = document.getElementById('inventoryChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: inventoryChartData.labels,
            datasets: [{
                label: 'Inventory Levels',
                data: inventoryChartData.values,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
});
