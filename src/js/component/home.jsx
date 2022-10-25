import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
	const Home = () =>{
		const [total, setTotal]= useState(0);
		const incrementar=()=>{
			setTotal(total+1)
		};
			return(
		
			<div className="text-center  bg-dark">
				<h1 className="text-white">{total}</h1>
				<button onClick={incrementar}>INCREMENTAR</button>
			</div>
	
		);
	
	};
		
	
	
	export default Home;
	
