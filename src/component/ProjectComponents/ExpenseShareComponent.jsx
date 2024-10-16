import {Avatar} from "@chakra-ui/react";
import {ExclamationCircleIcon} from "@heroicons/react/24/outline/index.js";

export default function ExpenseShareComponent({totalExpense, projectMembers}) {
    if (!totalExpense) {
        return (
            <div className='w-full min-h-[calc(100vh-250px)] flex flex-col justify-center items-center'>
                <ExclamationCircleIcon className='size-8 text-red-500'></ExclamationCircleIcon>
                <p className='text-2xl font-bold'>Please input expense first!</p>
            </div>
        );
    }

    const paymentStatus = (status) => {
        if (status) {
            return <div className='flex justify-center items-center bg-green-500 rounded-r-[6px] '>
                <p className='font-semibold text-white '>Paid!</p>
            </div>;
        }
        return <div className='flex justify-center items-center bg-red-400 rounded-r-[6px] '>
            <p className='font-semibold text-white '>Unpaid!</p>
        </div>
    }


    const personalExpense = (totalExpense / projectMembers.length).toLocaleString();
    return (
        <div className='px-[100px] py-6 bg-white rounded-[20px]'>
            <ul className='max-h-[calc(100vh-290px)] overflow-y-auto pe-4'>
                {projectMembers.map(member => (
                    <li key={member.fullName} className='grid grid-cols-2 border-4 rounded-lg px-4 py-6 mb-4'>
                        <div className='flex gap-2 mb-2'>
                            <Avatar
                                name={member.fullName}
                                size='md'
                            ></Avatar>
                            <div>
                                <p className='font-semibold'>{member.fullName}</p>
                                <p className='text-sm'>{member.phoneNumber}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className='col-span-2 grid grid-cols-5 border-2 rounded-lg text-xl'>
                            <div className='col-span-4 px-4 py-1'>
                                {personalExpense}
                            </div>
                            {paymentStatus(member.isPaid)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}