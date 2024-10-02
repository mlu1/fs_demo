import { useState,useEffect } from 'react'
import './device.css'
import { trpc } from '../../utils/trpc';
import { TestResults } from '../../../../common/testHandler';
import { TestDevice } from '../../../../common/testDevice';
import { DeviceDefinition } from '../../../../common/types/deviceDefinition';
import { ResultJSON } from '../../../../common/types/resultJSON';
import errorMap from 'zod/locales/en.js';
import { main } from 'ts-node/dist/bin';
import { int16_t } from 'node-mavlink';
import { resolve } from 'path';
import { rejects } from 'assert';
import { error } from 'console';
import { State } from '../../../../common/types/state';
import { constrainedMemory, listenerCount } from 'process';
import {CubeDevice} from './components/CubeDeviceNode/CubeDevice'
import { EmptyCubeDeviceNode } from './components/CubeDeviceNode/EmptyCubeDeviceNode';


export default function Device(){
  const [positions,setPositions] = useState<string[]>()
  const [count,setCount] = useState(0)
  const [isData,setData] =useState(false)
  
  const { data: initialDeviceBarcodes } = trpc.getDeviceBarcodes.useQuery();

  //When a new test is started populate the device list with the devices
  const testStarted = trpc.testStarted.useSubscription(undefined, {
    //@ts-ignore
    onData(data: { startDate: Date, devices: Record<string, TestDevice<DeviceDefinition>> }) {
      console.log(`Test started at ${data.startDate}`);
      var jsonstr = JSON.stringify(data)
      
      console.log(jsonstr)

      const deviceInfo = []
      let counter = 0
        for (var barcode in data.devices){
          console.log(barcode)  
          deviceInfo.push(barcode)
          counter =counter+1;
        }
        setPositions(deviceInfo)
        setCount(counter)
        setData(true)
        console.log(positions)
      }
    });


   const testFinished = trpc.testFinished.useSubscription(undefined, {
      onData(data: {
        startDate: Date;
        endDate: Date;
        timeTakenSec: number;
        failedDevices: string[];
        passedDevices: string[];
        numDevices: number;
        maxDevices: number;
        overallResult: State;
        devices: Record<string, ResultJSON[]>;
      }) {
        console.log(`Test finished at ${data.endDate}. Took ${data.timeTakenSec} seconds`);
        console.log(data)
      }
    });

  if (initialDeviceBarcodes && !positions) {
    let someCodes:string[] =[] 
    for (let barcode in initialDeviceBarcodes) {
        someCodes.push(barcode)
    }
    setPositions(someCodes);
  }  

let newVariable:string[] = []
async function waitForVariable():Promise<void>{
  while (!positions){
      await new Promise(resolve=>setTimeout(resolve,100));
  }
  newVariable = positions;
}
  
waitForVariable()

  function fakeData(){ 
    let listOfCubes = ["HF31A00P0",
      "HF31A00P0",
      "HF31A00P0",
      "HF31A00P0"]
    return listOfCubes   
  }

  const barcodeData = [{
        "devices":{
                'HF31A00P0':{
                        '0':{
                          'barcode':'HF31A00P0',
                          'position':{
                                'box':'1',
                                'layer':'1',
                                'index':'1',
                          }
                        }
                },
                'HF31A00P1':{
                  '0':{
                      'barcode':'HF31A00P0',
                          'position':{
                                'box':'1',
                                'layer':'2',
                                'index':'2',
                        }
                  }
                }

              },
        }
  ]



	return(
	        <div className = "nodes-container">
            {
              newVariable.map((item,index) =><CubeDevice singleProductItem = {item} key={index} />
            )
            }	  
		      </div>
	      )
  }

