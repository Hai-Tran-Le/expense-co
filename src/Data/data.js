import {CalendarDaysIcon, ChatBubbleLeftRightIcon, HomeIcon, UserGroupIcon} from "@heroicons/react/24/outline/index.js";

const navItems = [
    {
        Icon: HomeIcon,
        navTitle: 'Dashboard',
        isSelected: true,
    },
    {
        Icon: ChatBubbleLeftRightIcon,
        navTitle: 'Messages',
        badge: '+4',
    },
    {
        Icon: UserGroupIcon,
        navTitle: 'Friends',
    },
    {
        Icon: CalendarDaysIcon,
        navTitle: 'Calendar',
    },
];

const projects = [
    {
        projectId: 1,
        projectTitle: 'Phòng trọ P205',
        projectDes: 'Phòng trọ P205',
        createdDate: '17-7-2024',
        projectMember: [
            {
                fullName: 'Trần Lê Hà Linh',
                phoneNumber: '0828021105',
                isLeader: true,
                isPaid: false,
            },
            {
                fullName: 'Nguyễn Ngọc Bảo Hân',
                phoneNumber: '0901234567',
                isLeader: false,
                isPaid: false
            },
            {
                fullName: 'Đinh Thị Thanh Mai',
                phoneNumber: '0934567890',
                isLeader: false,
                isPaid: true,
            },
            {
                fullName: 'Nguyễn Diệu Hương',
                phoneNumber: '0912345678',
                isLeader: false,
                isPaid: false
            },
            {
                fullName: 'Hoàng Hà Anh Thư',
                phoneNumber: '0956789012',
                isLeader: false,
                isPaid: false
            },
        ]
    },
    {
        projectId: 2,
        projectTitle: 'Kỳ nghỉ Tràng An t12/2024',
        projectDes: 'Kỳ nghỉ Tràng An t12/2024',
        createdDate: '17-7-2024',
        projectMember: [
            {
                fullName: 'Ngô Minh Ngọc',
                isLeader: true,
            },
            {
                fullName: 'Nguyễn Thanh Huyền',
                isLeader: false,
            },
            {
                fullName: 'Trần Lê Hà Linh',
                isLeader: false,
            },

        ]
    },
    {
        projectId: 3,
        projectTitle: 'Hội chị em ',
        projectDes: 'Hội chị em',
        createdDate: '17-7-2024',
        projectMember: [
            {
                fullName: 'Trần Lê Hà Linh',
                isLeader: false,
            },
            {
                fullName: 'Nguyễn Thị Ngân Hà',
                isLeader: true,
            },
        ]
    },
    {
        projectId: 4,
        projectTitle: 'End of party 2024',
        projectDes: 'End of party 2024',
        createdDate: '17-7-2024',
        projectMember: [
            {
                fullName: 'Ngô Trần Khánh Ly',
                isLeader: false,
            },
            {
                fullName: 'Hà Khánh Linh',
                isLeader: false,
            },
            {
                fullName: 'Vũ Hồng Anh',
                isLeader: false,
            },
            {
                fullName: 'Ngô Đình Chiểu',
                isLeader: false,
            },
            {
                fullName: 'Trần Lê Hà Linh',
                isLeader: false,
            },
            {
                fullName: 'Nguyễn Ngọc Anh',
                isLeader: true,
            },
        ]
    }
]

const deadlines = [
    {
        deadlineTitle: 'Phòng trọ P205',
        deadlineDes: 'Everyone please remember to pay the full rent for October so that we can maintain stability and avoid any issues in managing our living expenses.',
        deadlineDate: '16:00 - 20/10/2024',
        urgency: 'High'
    },
    {
        deadlineTitle: 'End of party 2024',
        deadlineDes: 'First, everyone should go ahead and pay for the meals and the room rental, while the entrance fee for the tour will be collected later.',
        deadlineDate: '20:00 - 25/10/2024',
        urgency: 'Medium'
    },
    {
        deadlineTitle: 'Camping công viên Yên Sở',
        deadlineDes: 'First and foremost, I would like everyone to go ahead and settle the payments for meals and room rentals, while the fees for the tour will be collected at a later time, ensuring that we can keep everything organized and running smoothly',
        deadlineDate: '08:00 02/11/2024',
        urgency: 'Low'
    },
]

const paymentHistory = [
    {
        personName: 'Trần Lê Hà Linh',
        value: '3000000',
        date: '16-10-2024'
    },
    {
        personName: 'Nguyễn Ngọc Bảo Hân',
        value: '2500000',
        date: '20-9-2024'
    },
    {
        personName: 'Đinh Thị Thanh Mai',
        value: '3000000',
        date: '11-10-2024'
    },
    {
        personName: 'Nguyễn Diệu Hương',
        value: '2500000',
        date: '21-9-2024'
    },
    {
        personName: 'Hoàng Hà Anh Thư',
        value: '2500000',
        date: '18-9-2024'
    },
]

export {
    navItems,
    projects,
    deadlines,
    paymentHistory
}