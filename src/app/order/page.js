'use client'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUtensils, faDumbbell, faRefresh, faArrowLeft, faUserCircle, faPaperPlane, faHourglassHalf} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
	const [reference, setReference] = useState("");
	const [passcode, setPasscode] = useState("");

	const [logged, setLogged] = useState(false);
	const [data, setData] = useState([]);
	const handleAuth = async (e) => {
		e.preventDefault();
		const res = await fetch("/api/getorder",{
			method: "POST",
			headers:{"Content-Type": "application/json"},
			body: JSON.stringify({
				reference,
				passcode
			})
		})
		const result = await res.json();
		if(result.status != 401) {
			setData(result);
			setLogged(true);
		} else {
			alert("Invalid Creds");
		}
	}
	return (
		<> 
		<section className="bg-slate-950 w-screen h-screen content-center">
			<div className="flex justify-center">
					{!logged ? (
							<div className="w-xs mx-10">

								<h1 className="text-4xl text-center font-bold my-10">Orders</h1>
								<form onSubmit={handleAuth} className="mb-5 font-bold sm:w-auto">

					            <input type="text"
					   			  value={reference}
					   			  onChange={(e) => setReference(e.target.value)}
					              aria-describedby="helper-text-explanation" className="bg-slate-900 w-full shadow-xl/10 font-bold px-5 py-2 mt-5 rounded-lg focus:outline-none transition duration-700 ease-in-out focus:text-slate-900 focus:bg-slate-300 shadow-xl/10 focus:shadow-xl/30 shadow-slate-700" placeholder="Insert order id" />
					            <input type="password"
					   			  value={passcode}
					   			  onChange={(e) => setPasscode(e.target.value)}
					              aria-describedby="helper-text-explanation" className="bg-slate-900 w-full shadow-xl/10 font-bold px-5 py-2 mt-5 rounded-lg focus:outline-none transition duration-700 ease-in-out focus:text-slate-900 focus:bg-slate-300 shadow-xl/10 focus:shadow-xl/30 shadow-slate-700" placeholder="Insert your passcode" />
					            <div className="w-full flex justify-center">
					              <button type="submit" className="bg-slate-200 w-full shadow-xl/10 font-bold px-5 py-2 mt-5 rounded-lg focus:outline-none transition duration-700 ease-in-out text-slate-900 focus:bg-slate-300 shadow-xl/10 focus:shadow-xl/20 shadow-slate-200">
					              Proceed
					            </button>
					            </div>

					          </form>
		        			</div>
					) : (

						<div className="w-full p-5 content-center sm:p-40 h-screen">
							<div className="bg-slate-950 p-5 sm:p-20 h-auto shadow-xl/10 rounded-lg">
								
									{data.map((item, index) => (
										<div>
								        <div className="sm:grid sm:grid-cols-3 sm:flex justify-center" key={index}>
								          <h1 className="font-bold text-center py-5 text-4xl">{item.title}</h1>
								          <h1 className="font-bold text-center mt-5"> <FontAwesomeIcon icon={faHourglassHalf} className="text-4xl text-green-400" />{item.status}</h1>
								          
								        </div>
								        <div className="mt-10 sm:mt-30 sm:grid sm:grid-cols-2 flex justify-center" key={index}>
								          <textarea className="h-auto dark:bg-gray-900 mt-0 mb-5 p-5 rounded-lg shadow-xl/10 dark:shadow-xl/10 font-normal text-gray-700 dark:text-gray-400 w-full sm:no-scrollbar focus:outline-none no-scrollbar" disabled>{item.idescription}</textarea>
								          <h1 className="font-bold text-center">{item.sdescription}</h1>
								        </div>
								       	</div>
							      ))}
								
							</div>	
						</div>
					)}
				
		    </div>
		</section>
		</>
	)
}