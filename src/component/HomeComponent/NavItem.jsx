export default function NavItem({Icon, navTitle, isSelected = false, badge = ''}) {
    let iconClassName = 'size-5 ';
    let navClassName = 'flex gap-2 py-2 ps-3 rounded-full cursor-pointer ';
    let titleClassName = 'text-sm ';
    if (isSelected) {
        iconClassName += 'text-white'
        navClassName += 'bg-black'
        titleClassName += 'text-white'
    } else {
        iconClassName += 'text-zinc-600'
        navClassName += 'bg-white'
        titleClassName += 'text-zinc-600'
    }
    return (
        <li className={navClassName}>
            <Icon className={iconClassName} />
            <div className='flex w-full justify-between pe-3'>
                <p className={titleClassName}>{navTitle}</p>
                {badge && <span className='bg-amber-500 text-sm text-white px-2 rounded-full'>{badge}</span>}
            </div>
        </li>
    );
}