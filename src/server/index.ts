import { TBodyPage } from "../typeComponent";
import imageHero from '../images/image-hero-desktop.png'
import clientAudiophile from '../images/clientAudiophile.svg'
import clientData from '../images/clientData.svg'
import clientMaker from '../images/clientMaker.svg'
import clientMeet from '../images/clientMeet.svg'

export async  function getBodyPageBy(): Promise<TBodyPage> {
    return {
        title: 'Make remote work',
        text: ' Get your team in sync, no matter your location. Streamline processes,  create team rituals, and watch productivity soar.',
        button: 'Learn more',
        logo: [clientData, clientAudiophile,  clientMeet,  clientMaker],
        image: imageHero,
       
    }
 } 
