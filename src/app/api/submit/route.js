import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // unele servere cer SSL
});

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const result = await pool.query(
      "INSERT INTO public.clients (email, subject, message) VALUES ($1, $2, $3) RETURNING *",
      [email, subject, message]
    );

    return NextResponse.json({
      message: "The message was succesfully sent!",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("API Error", err);
    return NextResponse.json(
      { message: "Error on saving" },
      { status: 500 }
    );
  }
}