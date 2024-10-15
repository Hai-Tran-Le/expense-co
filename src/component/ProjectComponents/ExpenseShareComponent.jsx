import {Avatar} from "@chakra-ui/react";

export default function ExpenseShareComponent({totalExpense, projectMembers}) {
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
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className='col-span-2 grid grid-cols-5 border-2 rounded-lg text-xl'>
                            <div className='col-span-4 px-4 py-1'>
                                {personalExpense}
                            </div>
                            <div className='flex justify-center items-center bg-green-500 rounded-r-[6px] '>
                                <p className='font-semibold text-white '>Paid!</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}