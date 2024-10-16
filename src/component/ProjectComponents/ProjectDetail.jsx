import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {projects} from "../../Data/data.js";
import {Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ExpenseComponent from "./ExpenseComponent.jsx";
import ExpenseShareComponent from "./ExpenseShareComponent.jsx";
import PaymentHistory from "./PaymentHistory.jsx";
export default function ProjectDetail() {
    const {projectId} = useParams();
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        if (projectId) {
            const project = projects.find(project => project.projectId === Number(projectId));
            if (project) {
                setProjectData(project);
            }
        }
    }, [projectId]);

    const setProjectTotalExpense = (total) => {
        setProjectData((prevValue) => ({
            ...prevValue,
            total
        }))
    }

    return (
        <div>{projectData ? (
            <div className='pt-8 px-4'>
                <p className='ms-6 font-bold text-2xl mb-4'>{projectData.projectTitle}</p>
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab _selected={{color: 'green.500', bg: 'white'}}>Expenses</Tab>
                        <Tab _selected={{color: 'orange.400', bg: 'white'}}>Expenses Share</Tab>
                        <Tab _selected={{color: 'purple.500', bg: 'white'}}>History</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ExpenseComponent
                            onChangeTotal={(total) => setProjectTotalExpense(total)}
                            >
                            </ExpenseComponent>
                        </TabPanel>
                        <TabPanel>
                            <ExpenseShareComponent
                            projectMembers={projectData.projectMember}
                            totalExpense={projectData.total}
                            ></ExpenseShareComponent>
                        </TabPanel>
                        <TabPanel>
                            <PaymentHistory
                            projectData={projectData}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        ) : (
            <div className='flex justify-center items-center'>
                <p className='font-bold text-2xl'>No project data found!</p>
            </div>
        )}</div>
    );
}