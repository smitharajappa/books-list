import {ReactComponent as ContentManagementIcon} from '../../assets/content-management-icon.svg'
import {ReactComponent as CoursesIcon} from '../../assets/courses-icon.svg'

const env = process.env.PUBLIC_URL + '/'

export const navData = [
    {
        id: 0,
        icon: <ContentManagementIcon/>,
        text: "CONTENT MANAGEMENT",
        link: {env}
    },
    {
        id: 1,
        icon: <CoursesIcon/>,
        text: "COURSES",
        link: {env}
    },
    
]