import React from 'react'
import './BodyPage.css'
import { TBodyPage } from '../typeComponent'

interface Props {
    mainBloc: TBodyPage;
}
export const BodyPage: React.FC<Props> = ({mainBloc }) => {
    

    return (
        <section className='mainBloc'>
            <div className='bloc1-page'>
                    <h1>{mainBloc?.title}</h1>
                    <p>{mainBloc?.text}</p>
                    <button className='btn-page'><a href="/"><strong>{mainBloc?.button}</strong></a></button>
                    <ul className='logo-page'>
                        {mainBloc?.logo.map((logo, index) =>(
                            <li key={index}><img src={logo} alt="" /></li>
                        ))}
                    </ul>
            </div>
             <div>
                <img className='img-page' src={mainBloc?.image} alt="" />
             </div>
        </section>
    )
}