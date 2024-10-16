import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import {paymentHistory} from "../../Data/data.js";
import QR from'../../assets/QR_code_for_mobile_English_Wikipedia.svg.webp'
export default function PaymentHistory({projectData}) {
    return (
        <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2 bg-white px-6 py-3 rounded-[20px]'>
                <p className='text-2xl font-bold'>Payment History</p>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Payment history of project {projectData.projectTitle}</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Paid person</Th>
                                <Th>Date</Th>
                                <Th isNumeric>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {paymentHistory.map((data) => (
                                <Tr key={data.personName}>
                                    <Td>{data.personName}</Td>
                                    <Td>{data.date}</Td>
                                    <Td isNumeric>{data.value.toLocaleString()}đ</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div className='flex flex-col font-bold items-center bg-white px-6 py-3 rounded-[20px]'>
                <p className='text-2xl'>{projectData.projectTitle}</p>
                <img className='w-[370px] h-[370px]' src={QR} alt={'QR Code'} />
            </div>
        </div>
    );
}