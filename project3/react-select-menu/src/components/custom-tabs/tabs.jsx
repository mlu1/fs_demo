import { useState } from "react";
import PropTypes from 'prop-types'

Tabs.propTypes = {
    tabsContent:PropTypes.object.isRequired,
    onChange:PropTypes.func
}

export default function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex,setCurrentTabIndex] = useState(0);
    
    function handleOnClick (getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }
    return (
        <div className="wrapper">
            <div className="heading">
                {   
                    /* 
                        The content is held in an object
                        Then onclick we just get the id clicked and then the 
                    */
                    tabsContent.map((tabItem,index) => (
                        <div className={`tab-item ${currentTabIndex == index ? "active" :""}` }
                            onClick={()=>handleOnClick(index)} 
                            onKeyDown={handleClick(index)}
                            key={tabItem.label}>
                            <span className="label">{tabItem.label}</span>
                    </div>
                    ))}
            </div>
            <div className="content" style={{color:'red'}}>
                    {
                        tabsContent[currentTabIndex].content
                    }
            </div>
        </div>
    );
}