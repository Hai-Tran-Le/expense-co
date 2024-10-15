import {projects, deadlines} from "../../Data/data.js";
import ProjectItem from "./ProjectItem.jsx";
import {PlusIcon} from "@heroicons/react/24/outline/index.js";
import DeadlineItem from "./DeadlineItem.jsx";
import {useNavigate} from "react-router-dom";

export default function HomeContent() {
    const navigate = useNavigate();
    const handleSelectProject = (projectId) => {
        navigate(`project/${projectId}`);
    }
    return (
        <div className='grid grid-cols-5 gap-6 px-6 py-8'>
            <div className='col-span-3 bg-white rounded-[20px] p-4'>
                <div className='flex w-full mb-6 justify-between ps-2'>
                    <p className='font-bold text-2xl'>Projects</p>
                    <button type={"button"} className='border-2 border-blue-600 w-8 h-8 rounded-full flex justify-center items-center'>
                        <PlusIcon className='size-5 text-blue-600'></PlusIcon>
                    </button>
                </div>
                <ul className='overflow-y-auto px-4 max-h-[calc(100vh-240px)] flex flex-col gap-4'>
                    {projects.map((project, index) =>
                        <ProjectItem
                        key={project.projectTitle}
                        project={project}
                        index={index}
                        onClick={handleSelectProject}
                        ></ProjectItem>
                    )}
                </ul>
            </div>
            <div className='col-span-2 bg-white rounded-[20px] p-4'>
                <p className='font-bold text-2xl mb-6'>Deadlines</p>
                <ul className='overflow-y-auto px-4 max-h-[calc(100vh-250px)] flex flex-col gap-4'>
                    {deadlines.map(deadline =>
                        <DeadlineItem
                            key={deadline.deadlineTitle}
                            deadline={deadline}
                        ></DeadlineItem>
                    )}
                </ul>
            </div>
        </div>
    );
}