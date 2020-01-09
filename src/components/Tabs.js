import React from 'react'

/*
    TabBordered Classes
*/
const defaultClass = "f6 link dim bl bt bb ph3 pv2 mb2 dib black b--black-05 uppercase"
const firstTabStyle = (index)       => index===0?' br2 br--left':''
const lastTabStyle  = (index, tabs) => index===tabs.length-1?' br br2 br--right':''
const activeTabStyle = (active, index) => active===index?' red ':' light-silver'

const TabBordered = function({tabs, active, onTabClick, extraClass}) {
    console.log(extraClass)
    return (
        <div className={"br2 text-center pa3 bg-white " + extraClass}>
            {tabs.map((title, index) =>(
                <a 
                    onClick={() => onTabClick(index)} 
                    className={defaultClass + lastTabStyle(index, tabs) + firstTabStyle(index) + activeTabStyle(active, index)} 
                    key={index} 
                    href="#">
                        {title}
                </a>
            ))}
        </div>
    )
}

/*
Tab Classes
*/
const defaultClass2 = "f6 link dim ph4 pv2 dib black b--black-05 bw1"
const activeTabStyle2 = (active, index) => active===index?' bb red bc-red ':' light-silver'

const Tabs = function({tabs, active, onTabClick, extraClass}) {
    return (
        <div className={"br2 pt3 justify-center flex bg-white mb0 mb2-ns "+ extraClass}>
            {tabs.map((title, index) => (
                <a 
                    onClick={()=> onTabClick(index)} 
                    className={defaultClass2 + activeTabStyle2(active, index)} 
                    key={index} 
                    href="#">
                        {title}
                </a>
            ))}
        </div>
    )
}

export {TabBordered, Tabs}