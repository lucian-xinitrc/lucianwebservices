'use client'
import Image from "next/image";
import { useState } from "react";
import '../app/globals.css';

const Header = () => {
	return (
		<>
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen">
	            <div className="mr-auto place-self-center lg:col-span-7 ">
	                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl sm:text-8xl dark:text-white">Lucian Web Services</h1>
	                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Lets design the web together</p>
	                
	            </div>
	            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
	                
	            </div>                
        	</div>
		</>
	)
}

const Services = () => {
	return (
		<>
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:h-screen sm:h-auto">
		      <div className="max-w-screen-md mb-8 lg:mb-16">
		          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for powerful startups</h2>
		          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Quality is the first planned</p>
		      </div>
		      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
		          <div>
		              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
		                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
		              </div>
		              <h3 className="mb-2 text-xl font-bold dark:text-white">High Quality Design</h3>
		              <p className="text-gray-500 dark:text-gray-400">Clean, Responsive and easy to use design to impress your clients.</p>
		          </div>
		          <div>
		              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
		                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
		              </div>
		              <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
		              <p className="text-gray-500 dark:text-gray-400">Legal coding techniques in accordance with GDPR</p>
		          </div>
		          <div>
		              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
		                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
		              </div>
		              <h3 className="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
		              <p className="text-gray-500 dark:text-gray-400">Automated platforms to receive your appointments a notification away.</p>
		          </div>
		          <div>
		              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
		                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
		              </div>
		              <h3 className="mb-2 text-xl font-bold dark:text-white">Secured Hosting</h3>
		              <p className="text-gray-500 dark:text-gray-400">Advanced, high speed hosting with cutting edge security.</p>
		          </div>
		          <div>
		              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
		                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
		              </div>
		              <h3 className="mb-2 text-xl font-bold dark:text-white">SEO Engineering</h3>
		              <p className="text-gray-500 dark:text-gray-400">Advanced SEO Engineering for your website to be saw on search engines.</p>
		          </div>
		          <div>
		              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
		                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
		              </div>
		              <h3 className="mb-2 text-xl font-bold dark:text-white">LLMs Visuable</h3>
		              <p className="text-gray-500 dark:text-gray-400">Image your website appears when someone asks any AI about your service</p>
		          </div>
		      </div>
		  </div>
		</>
	)
}

const Contact = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
	  e.preventDefault();

	  const now = new Date().toISOString();

	  const res = await fetch("/api/submit", {
	    method: "POST",
	    headers: { "Content-Type": "application/json" },
	    body: JSON.stringify({ 
	      email, 
	      subject, 
	      message,
	      created_at: now,
	    }),
	  });

	  const data = await res.json();
	  alert(data.message);
	};
	return (
		<section id="contact" class="px-5 py-20 sm:p-20">
		  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white">
		      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact Us</h2>
		      <form onSubmit={handleSubmit} class="space-y-8" >
		          <div>
		              <input 
		              	type="email" 
		              	id="email"
		              	name="email"
		              	value={email}
		              	onChange={(e) => setEmail(e.target.value)}
		              	class="bg-transparent filled:bg-transparent text-white placeholder-text-white sm:text-white md:mx-5 sm:mx-3 rounded-full shadow-xl/30 focus:outline-none  transition-colors flex items-center justify-center hover:bg-[#070F2B] dark:hover:bg-[#070F2B] hover:text-white hover:border-transparent focus:outline-none font-medium text-sm sm:text-base hover:placeholder:text-gray-400 h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-full md:w-full focus:outline-none border border-solid border-black/[.08] dark:border-white/[.145]" placeholder="name@email.com" required />
		          </div>
		          <div>
		              <input 
		              	type="text" 
		              	id="subject"
		              	name="subject"
		              	value={subject}
		              	onChange={(e) => setSubject(e.target.value)}
		              	class="bg-transparent text-white sm:text-white md:mx-5 sm:mx-3 rounded-full shadow-xl/30 focus:outline-none  transition-colors flex items-center justify-center hover:bg-[#070F2B] dark:hover:bg-[#070F2B] hover:text-white hover:border-transparent focus:outline-none font-medium text-sm sm:text-base hover:placeholder:text-gray-400 h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-full md:w-full border border-solid border-black/[.08] dark:border-white/[.145]" placeholder="Let us know how we can help you" requiredv />
		          </div>
		          <div class="sm:col-span-2">
		              <textarea 
		              	id="message" 
		              	rows="6"
		              	name="message"
		              	value={message}
		              	onChange={(e) => setMessage(e.target.value)}
		              	class="bg-transparent text-white sm:text-white md:mx-5 sm:mx-3 rounded-lg shadow-xl/30 focus:outline-none  transition-colors flex items-center justify-center hover:bg-[#070F2B] dark:hover:bg-[#070F2B] hover:text-white hover:border-transparent focus:outline-none font-medium text-sm sm:text-base hover:placeholder:text-gray-400 h-20 sm:h-20 sm:h-12 px-4 sm:px-5 w-full sm:w-full md:w-full p-5 no-scrollbar border border-solid border-black/[.08] dark:border-white/[.145]" placeholder="Leave a comment..."></textarea>
		          </div>
		          <div className="flex justify-center w-full">
					<button 
                    type="submit"
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:bg-white hover:text-black hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-auto sm:w-2xl md:w-[158px]">Send</button>		      
                  </div>
                    </form>
                  
		  </div>
		</section>
	);
}

const PortfolioCard = ({title, type, photo, desc, name, loc}) => {
	return (
		<div class="space-y-4 p-10">
			<div className="justify-center content-center w-auto">
			<Image
		        src={photo}
		        alt="Preview"
		        className="rounded-lg"
		        width={700}
		        height={400}
		      />
		    </div>
			<span
	          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
	          {type}
	        </span>
		    <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
		        {title}
		    </h3>
		    <p class="text-lg font-normal h-20 text-gray-500 dark:text-gray-400">
		       {desc}
		    </p>
		    <div className="justify-center flex w-full ">
			    <a href={loc} title=""
			        class="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:bg-white hover:text-black hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-auto sm:w-2xl md:w-[158px]"
			        role="button">
			        {name}
			    </a>
			</div>
		</div>
	);
}

const Portfolio = () => {
	return (
		<>
		<section class="bg-gray-900 antialiased shadow-xl/30">
		  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
		    <div class="max-w-2xl mx-auto text-center">
		      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
		        Our work
		      </h2>
		      <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
		        Crafted with skill and care to help our clients grow their business!
		      </p>
		    </div>

		    <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
		      <PortfolioCard 
		      	title="DNCUKAccounting"
		      	type="Website" 
		      	photo="/images/dncuk.webp" 
		      	desc="Website of our Accounting Partner"
		      	name="Go to DNCUK"
		      	loc="https://dncukaccounting.org"
		      />

		      <PortfolioCard 
		      	title="LBL Creations"
		      	type="Website"
		      	photo="/images/lbl.webp" 
		      	desc="The website of our side partners on printing."
		      	name="Go to LBL"
		      	loc="https://lblcreations.vercel.app/"
		      />

		      <PortfolioCard 
		      	title="Gethonis" 
		      	type="API Service"
		      	photo="/images/gethonis.webp" 
		      	desc="Our Personal AI and multifunctional API"
		      	name="Go to Gethonis"
		      	loc="https://gethonis.com/"
		      />
		    </div>
		  </div>
		</section>
		</>
	);
}

const Cards = ({ title, paraf, price, list }) => {
	return (
		<div className="focus:outline-none border border-solid border-black/[.08] dark:border-white/[.145] flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-none border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white transition duration-700 ease-in-out hover:shadow-xl/30 hover:shadow-gray-400">
		    <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
		        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{paraf}</p>
		        <div className="flex justify-center items-baseline my-8">
		        	<span className="mr-2 text-5xl font-extrabold">{price}</span>
		        	<span className="text-gray-500 dark:text-gray-400">/month</span>
		        </div>
				<ul role="list" className="mb-8 space-y-4 text-left">
					{
						list.map(list => (
						   		<li className="flex items-center space-x-3">
					                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					                <span>{list}</span>
					            </li>
							)

						)
					}
		        </ul>
 		</div>
	)
}

const Pricing = () => {
	return (
		<>
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:h-screen sm:h-auto">
		      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
		          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Hosting Plans</h2>
		          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Empower your website's performance with our one of our accesible hosting plans.</p>
		      </div>
		      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

		          <Cards 
		          	title="Starter"
		          	paraf="Best option for personal use & for your next project."
		          	price="$10"
		          	list={[
		          		'24/7 Maintenance',
		          		'1 website',
		          		'No setup, or hidden fees',
		          		'Limited Premium support: Monday - Friday 9:00 - 17:00',
		          		'3 Free updates' 
		          	]} 
		          />
		          <Cards 
		          	title="Medium"
		          	paraf="Best option for personal use & for your next project."
		          	price="$20"
		          	list={[
		          		'24/7 Maintenance',
		          		'3 websites',
		          		'Database Management',
		          		'Schedule Limited Premium Support: Monday - Sunday 9:00 - 17:00',
		          		'5 Free updates' 
		          	]} 
		          />
		          <Cards 
		          	title="Advanced"
		          	paraf="Best option for personal use & for your next project."
		          	price="$30"
		          	list={[
		          		'24/7 Maintenance',
		          		'5 websites',
		          		'Database Management',
		          		'Unlimited Premium Support 24/7',
		          		'Unlimited Updates' 
		          	]} 
		          />
		          
		      </div>
		  </div>
		</>
	)
}

const Footer = () => {
	return (
		<>
			<footer class=" p-10 shadow-xl/20">
			    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
			        <div class="md:flex md:justify-between">
			          <div class="mb-6 md:mb-0">
			              <a href="https://flowbite.com/" class="flex items-center"> 
			                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lucian Web Services</span>
			              </a>
			          </div>
			          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			              <div>
			                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
			                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
			                      <li class="mb-4">
			                          <a href="https://www.instagram.com/lucian__.__f/" class="hover:underline ">Instagram</a>
			                      </li>
			                      <li class="mb-4">
			                          <a href="https://github.com/lucian-xinitrc" class="hover:underline ">Github</a>
			                      </li>
			                      
			                  </ul>
			              </div>
			              
			          </div>
			      </div>
			      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			      <div class="sm:flex sm:items-center sm:justify-center">
			          <span class="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">LBL Creations™</a>. All Rights Reserved.
			          </span>
			          
			      </div>
			    </div>
			</footer>
		</>
	);
}

export { Header, Pricing, Services, Contact, Portfolio, Footer };