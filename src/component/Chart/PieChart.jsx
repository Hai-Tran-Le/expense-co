import {Pie} from 'react-chartjs-2'
import 'chart.js/auto';

export default function PieChart({chartData, width = 300, height = 300}) {
    return (
        <div>
            <Pie
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
                }}
            />
        </div>
    );
}