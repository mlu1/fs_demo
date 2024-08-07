import Tabs from "./tabs";
import './tabs.css'

function RandomComponent(){
    return (<h1 style={{color:'red'}}>Content from Tab 3</h1>)
}

export default function TabsTest(){
    const tabs = [
        {
            label:'Tab 1',
            content:<span>This is content for Tab 1</span>
        },{
            label:'Tab 2',
            content:<div>This is content for Tab 2</div>
        },{
            label:'Tab 3',
            content:<RandomComponent/>
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }
    return (<Tabs tabsContent={tabs} onChange={handleChange}/>)
}