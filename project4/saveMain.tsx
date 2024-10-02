import { trpc } from '../../utils/trpc';
import { JSONPosition, Position, PositionStatic } from '../../../../common/position';
import { useEffect, useState } from 'react';
import { XYZJSONPosition } from '../../../../common/xyzPosition';
import { StackJSONPosition } from '../../../../common/stackPosition';
import './maincontainer.css'
import Device from '../Device/Device'
import { ResultJSON } from '../../../../common/types/resultJSON';
import { State } from '../../../../common/types/state';
import { unknown } from 'zod';
import { LogType } from '../../../../common/types/logType';


export default function Main() {
  const [state, setState] = useState<State>();
  const [test,setTestState] =useState(false);


  const { data: initalState } = trpc.getTestState.useQuery();
  
  
  const [jigInformation, setJigInformation] = useState<{
    name: string;
    positionType: PositionStatic;
    jigId: number;
    ignoredPositions: XYZJSONPosition[] | StackJSONPosition[] | JSONPosition[];
    handlerInformation: any
  }>();

  
   //When the a device update event fires
   const deviceUpdate = trpc.testStateChanged.useSubscription(undefined, {
    onData(data: State) {
      console.log(data)
      setState(data);
    }
  });


  if (initalState && !state) {
    setState(initalState || State.UNKNOWN);
    setTestState(true)
  }
  
  useEffect(()=>{
    if (test){
        setTestState(true);
    }   
  },[])


	return( 
        <div className="parent">
          <div className="child">{test?"TEST STARTED":"TEST NOT STARTED"}</div>
        <div className="main">
          <div className ="child content">
            <div className ="box_header">Box 1</div>
            <div className="main_box">
              <Device/>
            </div>
          </div>  
        </div>
        </div>
        )
    }

