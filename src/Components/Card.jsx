import {useState} from 'react'




function Card(props)
{

    function addText()
    {
        setFlag(!flag)
        if(flag)
        {
            setText(`${props.info.substring(0,props.info.length)}`);
            setShow("Show Less");
        }
        else
        {
            setText((`${props.info.substring(0,props.info.length-50)+"...."}`));
            setShow("Read More");
        }
    }


    const [text,setText] = useState(`${props.info.substring(0,props.info.length-50)+"...."}`);
    const [flag,setFlag] = useState(true);
    const [show,setShow] = useState("Read More");

    return(
        <div className='h-[40%] w-[20rem] border-white border-2 m-10 overflow-hidden text-white' onClick={()=>console.log(`${props.name} Card is clicked`)}>

            <img className="h-[50%] w-full" src={props.image}></img>

            <p className="text-green-500 text-xl ml-4 hover:text-2xl"> ₹ {props.price}</p>
            <h2 className="ml-4 text-2xl font-bold font-mono"> {props.name} </h2>
            <p className="ml-4 text-white text-sm"> {text} <button className='text-cyan-400 hover:underline' onClick={()=>addText()}> {show} </button>  </p>
            <div className='flex justify-center items-center'>

                <button className='m-2 mt-[5%] py-2 w-1/3 bg-red-400 rounded-xl hover:bg-red-600'  onClick={()=>props.Bookmark(props.name)}> Interested</button>

                <button className='m-2 mt-[5%] py-2 w-1/3 bg-red-400 rounded-xl hover:bg-red-600'  onClick={()=>props.removeCard(props.id)}> Not Interested</button>

            </div>
        </div>
    );
}

export default Card