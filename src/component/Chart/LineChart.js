import {Line} from 'react-chartjs-2'
import 'chart.js/auto';

export default function LineChart({chartData, width = 300, height = 300}) {
    return (
        <Line
            data={chartData}
            width={width}
            height={height}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Total Expense',
                    }
                },
                responsive: false,
                maintainAspectRatio: true,
            }}></Line>
    )
}