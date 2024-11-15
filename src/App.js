import { useDispatch,useSelector } from "react-redux"
import { getUser } from "./Components/Redux/Slice";
function App(){
    const dispatch= useDispatch();
    const dataState =useSelector((state)=>state)
    console.log("State",dataState);
    const handleClick=()=>{
        dispatch(getUser())
    }
    return(
        <>
         <button onClick={()=>{handleClick()}}>onClick</button>
         {
            dataState.todo.data&&
            dataState.todo.data.map((a)=>{
                return(
                    <>
                    <li>{a.name}</li>
                    </>

                )
            })
         }
        </>
    )
}
export default App;


