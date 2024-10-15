import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react";
import {pieChartData} from "../../Data/chartData.js";
import PieChart from "../Chart/PieChart.jsx";
import {useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import {ExclamationCircleIcon} from "@heroicons/react/24/outline/index.js";


export default function ExpenseComponent({onChangeTotal}) {
    const [chartData, setChartData] = useState({
        labels: pieChartData.map((data) => data.title),
        datasets: [
            {
                label: "Total Expense",
                data: pieChartData.map((data) => data.value),
                backgroundColor: [
                    "#aae3e2",
                    "#d9acf5",
                    "#ffcefe",
                    "#fdebed",
                    "#7ed957"
                ],
                borderColor: "white",
                borderWidth: 1
            }
        ]
    })

    const [displayData, setDisplayData] = useState({
        rent: '',
        foodCost: '',
        waterBill: '',
        electricityBill: '',
        roomFund: '',
        total: '0',
    });

    const format = (value) => 'đ' + value.toLocaleString();
    const parse = (value) => value.replace(/^\đ/, '');
    const setExpenseValue = (type, index, value) => {
        value = Number(value);
        setDisplayData(prevState => ({
                ...prevState,
                [type]: value,
            })
        )

        debounceSetChartData(index, value);
    };

    useEffect(() => {
        const total =
            displayData.rent +
            displayData.foodCost +
            displayData.waterBill +
            displayData.electricityBill +
            displayData.roomFund;
        setDisplayData(prevState => ({
            ...prevState,
            total
        }));
        onChangeTotal(total);
    }, [displayData.electricityBill, displayData.foodCost, displayData.rent, displayData.roomFund, displayData.total, displayData.waterBill, onChangeTotal]);

    const debounceSetChartData = useCallback(
        debounce((index, value) => {
            const updatedData = [...chartData.datasets[0].data];
            updatedData[index] = value;
            setChartData(prevState => ({
                ...prevState,
                datasets: [
                    {
                        ...prevState.datasets[0],
                        data: updatedData,
                    }
                ]
            }))
        }, 500),
        [chartData]
    )

    return (
        <div className='grid grid-cols-5 gap-6'>
            <div className='col-span-2 flex flex-col gap-2 bg-white px-6 py-3 rounded-[20px]'>
                <p className='text-2xl font-bold'>Expenses</p>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Rent: </label>
                    <NumberInput
                        value={format(displayData.rent)}
                        onChange={(value) => setExpenseValue('rent', 0, parse(value))}
                        min={1}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Food Cost: </label>
                    <NumberInput
                        value={format(displayData.foodCost)}
                        onChange={(value) => setExpenseValue('foodCost', 1, parse(value))}
                        min={1}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Water Bill: </label>
                    <NumberInput
                        value={format(displayData.waterBill)}
                        onChange={(value) => setExpenseValue('waterBill', 2, parse(value))}
                        min={1}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Electricity Bill: </label>
                    <NumberInput
                        value={format(displayData.electricityBill)}
                        onChange={(value) => setExpenseValue('electricityBill', 3, parse(value))}
                        min={1}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Room Fund: </label>
                    <NumberInput
                        value={format(displayData.roomFund)}
                        onChange={(value) => setExpenseValue('roomFund', 4, parse(value))}
                        min={1}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <div className='flex justify-end gap-4 mt-2'>
                    <label className='text-xl font-semibold'>Total expense:</label>
                    <p className='text-xl font-semibold'>{displayData.total}đ</p>
                </div>
            </div>
            <div className='col-span-3 flex justify-center bg-white px-6 py-3 rounded-[20px]'>
                {displayData.total !== '0' ? (
                    <PieChart
                        chartData={chartData}
                        width={400}
                        height={400}
                    ></PieChart>
                ) : (
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <ExclamationCircleIcon className='size-8 text-red-500'></ExclamationCircleIcon>
                        <p className='text-2xl font-bold'>Please start input data!</p>
                    </div>
                )}
            </div>
        </div>
    );
}