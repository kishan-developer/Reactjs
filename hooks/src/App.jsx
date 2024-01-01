import { useState } from "react";



// example 1   Count App -------------------------------------------------

// export default function Counter(){
//   const [count, setCount] = useState(0);

//   // create a function
//   function handleClick(){
//     setCount(count+1);
//   }

//   return (
//       <>
//          <button onClick={handleClick}>You Pressed me {count} timesincrement button </button> 
//       </>
//   );
// }




// example 2  Text Field  -------------------------------------------------

// export default function Myinput(){
//   const [text , setText] = useState('j');

//   // create a function 
//   function handleClick(e){
//     setText(e.target.value);
//   }

//   return (
//     <>
//       {/* yoy need to add a text input field */}
//       <input value={text} onChange={handleClick} />
//       <p>You typed : {text}</p>
//       <button onClick ={()=> setText('')}>Reset</button>
//     </>
//   )

// }



// example 3  Checkbox (boolean)  -------------------------------------------------


export default function MycheckBox(){
  const [liked, setliked] = useState(true);

  function handleChange(e){
    setliked(e.target.checked);
  }

  return(
    <>
      <label>
        {/* checkbox is checked means liked button is true */}
        <input type="checkbox" checked={liked} onChange={handleChange} />
        I Liked this
      </label>
      <p>you {liked ? 'likedLorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus minima, suscipit obcaecati aliquam veritatis fugiat, numquam quisquam culpa ut doloremque nesciunt velit quos aperiam eius, sapiente aspernatur laboriosam. Perspiciatis quas, omnis adipisci eaque sit, cumque est fuga eum voluptatem vitae officiis debitis exercitationem ex dignissimos inventore alias voluptate a molestiae minima saepe neque recusandae ducimus facilis! Repudiandae dicta facere molestiae incidunt? Cumque dignissimos ratione alias enim expedita odio explicabo modi voluptatibus earum beatae cupiditate, vero eos eum, corporis ipsum, tempore saepe dolorem! Maiores error dolorem expedita ducimus repudiandae laborum laboriosam rerum libero earum eum alias deleniti pariatur dignissimos, eos omnis!': 'did not checked buttons'} this.</p>
    </>
  );
}
