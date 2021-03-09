import React from 'react'
import Navs from './Navs'
import Title from './Title'

function MainPageLayout({children}) {
    return (
        <div>
            <Title title="BOX OFFICE" subtitle="Are you looking for a movie or an actor"/>
            <Navs/>
            {children}
        </div>
    )
}

export default MainPageLayout
