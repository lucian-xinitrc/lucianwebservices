'use server'
import { NextResponse } from 'next/server';
import { encrypt } from './crypto.js';
import { Pool } from 'pg';

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
});

export async function POST(req) {
	try {
		const {reference, passcode} = await req.json();

		const result = await pool.query(
			"SELECT * FROM public.orders WHERE id=$1 AND passcode=$2",
			[
				parseInt(reference),
				passcode
			]
		);
		if (result.rowCount > 0) {
		  	const resrows = result.rows.map(row => ({
		  		title: row.Title,
		  		idescription: row.issueDescription,
		  		sdescription: row.solvingDescription,
		  		status: row.status,
		  		solvedate: row.solvedDate,
		  		startdate: row.startDate
		  	}));
		  	return NextResponse.json(resrows);
		} else {
		  console.error("Creds error", err);
			return NextResponse.json({ status: 401 });;
		}
	}  catch (err) {
		console.error("API Error", err);
		return NextResponse.json({ status: 401 });
	}
}
