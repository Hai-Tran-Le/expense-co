import NavItem from "./NavItem.jsx";
import {Avatar, AvatarBadge} from '@chakra-ui/react'
import {navItems} from '../../Data/data.js'
import {Outlet} from "react-router-dom";

export default function HomeComponent() {
    return (
        <div className='flex flex-col pb-4 text-zinc-600'>
            <div className='flex justify-between px-6 py-4'>
                <p className='text-3xl font-semibold'>ExpenseCo</p>
                <div className='flex gap-2'>
                    <Avatar name='Trần Lê Hà Linh' size='sm'>
                        <AvatarBadge boxSize='1.25em' bg='green.500'/>
                    </Avatar>
                    <div className='text-xs'>
                        <p className='font-semibold'>Trần Lê Hà Linh</p>
                        <p>Role: Manager</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 flex-grow pe-6">
                <div className='ps-6 pe-3'>
                    <p className='text-2xl font-semibold mb-8'>Welcome to the ExpenseCo System!</p>
                    <ul className='flex flex-col gap-4'>
                        {navItems.map(item => <NavItem
                            key={item.navTitle}
                            navTitle={item.navTitle}
                            Icon={item.Icon}
                            isSelected={item.isSelected}
                            badge={item.badge}
                        />)}
                    </ul>
                </div>
                <div className='col-span-4 bg-gray-100 rounded-[20px] flex-grow'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}