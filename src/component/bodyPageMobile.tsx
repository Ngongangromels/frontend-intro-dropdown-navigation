import React from 'react'
import './BodyPage.css'
import { TBodyPage } from '../typeComponent'
import imageHeroMobile from '../images/imageHeroMobile.png'
import './BodyPageMobile.css'

interface Props {
    mainBloc: TBodyPage;
}
export const BodyPageMobile: React.FC<Props> = ({mainBloc }) => {
    

    return (
        <section className='mainBloc-mobile'>
            <div className='bloc1-page-mobile'>
                    <h1 className='title-mobile'>{mainBloc?.title}</h1>
                    <p className='text-mobile'>{mainBloc?.text}</p>
                    <button className='btn-page-mobile'><a href="/"><strong>{mainBloc?.button}</strong></a></button>
                    <ul className='logo-page-mobile'>
                        {mainBloc?.logo.map((logo, index) =>(
                            <li key={index}><img className='logo-size-mobile' src={logo} alt="" /></li>
                        ))}
                    </ul>
            </div>
             <div>
                <img className='img-page-mobile' src={imageHeroMobile} alt="" />
             </div>
        </section>
    )
}

