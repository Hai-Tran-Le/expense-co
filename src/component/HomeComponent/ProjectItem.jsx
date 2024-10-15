export default function ProjectItem({project, index, onClick}) {
    const getProjectLeader = (members) => {
        const leader = members.filter(member => member.isLeader);
        return leader[0].fullName;
    }

    const getDivColor = (index) => {
        let divClassName = 'w-full h-1 mb-1 '
        if (index % 3 === 0) {
            divClassName += 'bg-green-500'
        } else if (index % 3 === 1) {
            divClassName += 'bg-orange-500'
        } else {
            divClassName += 'bg-violet-700'
        }
        return divClassName;
    }

    const handleClickOnProject = () => {
        onClick(project.projectId);
    }
    return (
        <li className='bg-gray-100 p-4 rounded-lg cursor-pointer' onClick={handleClickOnProject}>
            <p className='font-bold text-xl mb-1'>{project.projectTitle}</p>
            <p className='font-semibold text-sm mb-1'>{project.createdDate}</p>
            <p className='text-sm mb-1'>{project.projectDes}</p>
            <div className={getDivColor(index)}></div>
            <div className='flex justify-between w-full text-sm'>
                <div className='flex gap-1'>
                    <span className='font-semibold'>Leader:</span>
                    <p>{getProjectLeader(project.projectMember)}</p>
                </div>
                <div className='flex gap-1'>
                    <span className='font-semibold'>Total members:</span>
                    <p>{project.projectMember.length}</p>
                </div>
            </div>
        </li>
    );
}