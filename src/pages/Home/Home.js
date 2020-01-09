import React, { useState } from 'react'
import {TabBordered, Tabs} from './../../components/Tabs'
import SeriesList from './SeriesList'

const status = ['upcoming', 'running', 'completed']
const types =  ['All', 'Domestic', 'International']

function Home(){
    const [activeStatus, setActiveStatus] = useState(0)
    const [activeType, setActiveType] = useState(0)
    
    return (
        <div >
            <h2 className="ma2 f3 lh-copy gray">Schedule</h2>
            <div className="br2">
                <div className="pa2 pb0 br2">
                    <TabBordered tabs={status} active={activeStatus} onTabClick={setActiveStatus} extraClass="br--top"/>
                    <Tabs tabs={types} active={activeType} onTabClick={setActiveType} extraClass="br--bottom"/>
                </div>
                <SeriesList type={types[activeType]} status={status[activeStatus]}/>
            </div>
        </div>
    )
}

export default Home