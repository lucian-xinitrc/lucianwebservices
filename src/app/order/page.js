'use client'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUtensils, faDumbbell, faRefresh, faArrowLeft, faUserCircle, faPaperPlane, faHourglassHalf, faCheck} from '@fortawesome/free-solid-svg-icons'

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
		<section className="bg-slate-950 w-auto h-screen content-center no-scrollbar">
			<div className="flex justify-center no-scrollbar">
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

						<div className="w-full p-5 content-center sm:p-10 md:h-auto">
							<div className="bg-slate-950 p-5 sm:p-20 h-auto shadow-xl/10 rounded-lg">
								
									{data.map((item, index) => (
										<div>
								        <div className=":grid sm:grid-cols-3 sm:flex justify-center gap 10" key={index}>
								        <div className="block p-10">
								          <h1 className="font-bold text-center text-4xl ">{item.title}</h1>
								          	<div className="flex justify-center">
								          		<span class="bg-blue-100 text-blue-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{new Date(item.startdate).toISOString().split('T')[0]}</span>
								          		<span class="bg-yellow-100 text-yellow-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">{item.solvedate != null ? (new Date(item.solvedate).toISOString().split('T')[0]) : ("")}</span>
								        	</div>

								        </div>

								        <div className="block p-10">

								          {item.status !== "Finished" ? (<h1 className="font-bold text-center mt-5"> <FontAwesomeIcon icon={faHourglassHalf} className="text-4xl text-gold-900" />{item.status}</h1>) : (<h1 className="font-bold text-center mt-5"> <FontAwesomeIcon icon={faCheck} className="text-4xl text-green-400" />{item.status}</h1>)}
								          
								          </div>
								        </div>
								        <div className="md:flex md:justify-center">
								        <div className="w-full flex justify-center py-5">
									        <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 w-auto">
										        {item.listdetails.map((i, key) => (
										        		<li key={key} class="flex items-center space-x-3 rtl:space-x-reverse">
												         
												        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{i}</span>
												        </li>
										        	))}
												</ul>
											</div>
									        <div className="mt-5 sm:mt-0 w-full flex justify-center" key={index}>
									          <textarea className="h-auto w-full dark:bg-gray-900 mt-0 p-5 rounded-lg shadow-xl/10 dark:shadow-xl/10 font-normal text-gray-700 dark:text-gray-400 w-full sm:no-scrollbar focus:outline-none no-scrollbar" disabled>{item.idescription}</textarea>
									        </div>


									        
										</div>
										<div className="mt-5 sm:mt-5 w-full flex justify-center" key={index}>
									          <textarea className="h-auto w-full dark:bg-gray-900 mt-0 p-5 rounded-lg shadow-xl/10 dark:shadow-xl/10 font-normal text-gray-700 dark:text-gray-400 w-full sm:no-scrollbar focus:outline-none no-scrollbar" disabled>{item.sdescription}</textarea>
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