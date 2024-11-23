import { Link } from "./Interface";

export const Links: Link[] = [
    {
        label: "Home",
        link: '/',
        isSublinkns: false
    },
    {
        label: "About us",
        link: '/About-Us',
        isSublinkns: false
       
    },
    {
        label: "INFRASTRUCTURE",
        link: '/Infrastructure',
        isSublinkns: false
     
    },
    {
        label: "ADMISSION",
        isSublinkns: true,
        sublinks: [
            { label: "Procedure", link: '/admission-procedure', isSublinkns: false },
            { label: "Registration Form", link: '/registration-form', isSublinkns: false },
            { label: "Admission/Withdrawal rules", link: '/admission-withdrawal', isSublinkns: false },
            { label: "Guiding Students to Pursue", link: '/guiding-students', isSublinkns: false },
            { label: "Diligence and Respect", link: '/diligence-respect', isSublinkns: false }
        ]
    },
    {
        label: "ACADEMICS",
        isSublinkns: true,
        sublinks: [
            { label: "Rules & Regulations", link: '/Rules_&_Regulation', isSublinkns: false },
            { label: "Assessments", link: '/assessments', isSublinkns: false },
            { label: "Counselling", link: '/counselling', isSublinkns: false }
        ]
    },
    {
        label: "ACTIVITIES",
        isSublinkns: true,
        sublinks: [
            { label: "Glimpse of Activities", link: '/GlimpseOfActivities', isSublinkns: false },
            { label: "Planner", link: '/planner', isSublinkns: false }
        ]
    },
    {
        label: "Contact Us",
        link: '/contact-us',
        isSublinkns: false
    }
];
