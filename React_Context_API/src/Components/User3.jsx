// import React from 'react';
// import { UserContext } from '../App';


// const User3 = () => {
//     return (
//         <div>
//             {/* usign consumer to consume the data */}
//            <UserContext.Consumer>
//                 {/* passing the function with parameter value and set the value inside the h1  */}
//                 {(value)=> <h1>{value} is inside component user 3</h1>}
//            </UserContext.Consumer>
//         </div>
//     );
// }

// export default User3;





// new way access data using useContext() hook  
import React, {useContext} from 'react';
import { UserContext } from "../App";

const User3 = () => {

    const value = useContext(UserContext)
    console.log(value)

    return (
        <div>
            <h1>{value}is inside component user 3</h1>
        </div>
    );
}

export default User3;

