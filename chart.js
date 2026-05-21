const ctx =
document.getElementById('threatChart');

new Chart(ctx, {

    type: 'pie',

    data: {

        labels: [
            'Critical Threats',
            'Medium Threats',
            'Safe Requests'
        ],

        datasets: [{

            data: [55, 30, 15],

            borderWidth: 1
        }]
    },

    options: {

        responsive: true
    }
});