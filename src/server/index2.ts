import { TNavbarItem } from "../typeComponent/index2";
import logo from '../images/logo.svg'
import iconTodo from '../images/iconTodo.svg'
import iconCalender from '../images/iconCalendar.svg'
import iconReminders from '../images/iconReminders.svg'
import iconPlanning from '../images/iconPlanning.svg'
export async function getNavBarById(): Promise<TNavbarItem> {
    return{
        icon1: logo,
        href1: "#features",
        label1: "Features",
        children1: [
            {
                icon: iconTodo,
                href1: '#features',
                label1: 'Todo List'
            },
            {
                icon: iconCalender,
                href1: '#features',
                label1: 'Calender',
            },
            {
                icon: iconReminders,
                href1: '#features',
                label1: 'Reminders',
            },
            {
                icon: iconPlanning,
                href1: '#features',
                label1: 'Planning',
            },
        ],
        href2: '#company',
        label2: 'Company',
        children2: [
            {
                href2: '#company',
                label2: 'History',
            },
            {
                href2: '#company',
                label2: 'Our Team',
            },
            {
                href2: '#company',
                label2: 'Blog',
            },
        ],
        href3: '#careers',
        label3: 'Careers',
        href4: '#about',
        label4: 'About',
        href5: '#login',
        label5: 'Login',
        href6: '#register',
        label6: 'Register', 
    }
}