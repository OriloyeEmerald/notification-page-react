import oval1 from './assets/images/Oval (1).svg'
import oval2 from './assets/images/Oval (2).svg'
import oval3 from './assets/images/Oval (3).svg'
import oval4 from './assets/images/Oval (4).svg'
import oval5 from './assets/images/Oval (5).svg'
import oval6 from './assets/images/Oval (6).svg'
import oval7 from './assets/images/Oval (7).svg'
import rectangle1 from './assets/images/Rectangle.png'


const emoji = String.fromCodePoint(0x1F60A);

const emoji1 = String.fromCodePoint(0x1F60D);



const Notifications = [
    {
       id: 1,
       img: oval1,
       message: `Mark Webber reacted ${emoji1} to your recent post My first tournament today!`,
       time: '1m ago',
       boldText: 'My first tournament today!',
       boldText1: 'Mark Webber',
       reactionMed: emoji1,
       unreadState: true
    },

    {
       id: 2,
       img: oval6,
       message: 'Angela Gray followed you',
       time: '5m ago',
       boldText1: 'Angela Gray',
       unreadState: true
    },

    {
       id: 3,
       img: oval5,
       message: 'Jacob Thompson has joined your group Chess Club',
       time: '1 day ago',
       boldText: 'Chess Club',
       boldText1: 'Jacob Thompson',
       unreadState: true
    },

    {
       id: 4,
       img: oval3,
       message: 'Rizky Hasanuddin sent you a private message ',
       time: '5 days ago',
       readMessage: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
       boldText1: 'Rizky Hasanuddin',
       unreadState: true
    },

    {
       id: 5,
       img: oval4,
       message: 'Kimberly Smith commented on your picture ',
       time: '1 week ago',
       img2: rectangle1,
       reactionMes: `Go girl! You are so beautiful "\u2764\uFE0F"`,
       boldText1: 'Kimberly Smith',
       unreadState: true
    },

    {
       id: 6,
       img: oval2,
       message: `Nathan Peterson reacted ${emoji} to your recent post 5 end-game strategies to increase your win rate`,
       time: '2 weeks ago',
       boldText: '5 end-game strategies to increase your win rate',
       reactionMed: emoji,
       boldText1: 'Nathan Peterson',
       unreadState: true
    },

    {
       id: 7,
       img: oval7,
       message: 'Anna Kim left the group Chess Club',
       time: '2 weeks ago',
       boldText: 'Chess Club',
       boldText1: 'Anna Kim',
       unreadState: true
    },
]

export default Notifications;