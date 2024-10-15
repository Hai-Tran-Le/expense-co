import {ClockIcon} from "@heroicons/react/24/outline/index.js";

export default function DeadlineItem({deadline}) {
    let badgeClassName = 'text-white px-2 rounded-l-full '
    if (deadline.urgency === 'High') {
        badgeClassName += 'bg-red-600';
    } else if (deadline.urgency === 'Medium') {
        badgeClassName += 'bg-yellow-400';
    } else {
        badgeClassName += 'bg-green-500';
    }
    return (
        <li className='bg-gray-100 py-4 ps-4 rounded-lg cursor-pointer flex flex-col gap-2'>
            <div className='flex w-full justify-between'>
                <p className='text-xl font-bold'>{deadline.deadlineTitle}</p>
                <div className={badgeClassName}>{deadline.urgency}</div>
            </div>
            <div className='pe-4 flex flex-col gap-1'>
                <p className='text-xs'>{deadline.deadlineDes}</p>
                <div className='w-full h-0.5 bg-gray-400 my-1'></div>
                <div className='flex items-center gap-1'>
                    <ClockIcon className='size-5'></ClockIcon>
                    <p className='font-semibold'>{deadline.deadlineDate}</p>
                </div>
            </div>
        </li>
    )
}