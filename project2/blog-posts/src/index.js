import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile2 from './images/photo2.jpg'
import profile3 from './images/photo3.jpg'
import UserCard from './UserCard';

const App =()=>{
    return(
           <div className='ui comments'>
                <UserCard>
                        <div>Hello my name is Sarah</div>
                </UserCard>
                <UserCard>
                    <SingleComment name={'Sarah'} 
                    date={'Today at 5:00pm'}
                    text = {'Cools'}
                    picture = {profile3} />
                </UserCard>
                <UserCard>
                <SingleComment name ={'Alex'}
                    date={'Today at 7:00pm'}
                    text = {'Not Cools'}
                    picture = {profile2} />
                </UserCard>
                <UserCard>
                <SingleComment name={'David'}
                    date={'Today at 8:00pm'}
                    text = {'Thanks'}
                    picture = {profile3}
                    />   
                 </UserCard>
                         
            </div>      
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))

