import { NextResponse } from "next/server";
import { encrypt } from "./crypto.js";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // unele servere cer SSL
});

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const encEmail = encrypt(email);
    const encSubject = encrypt(subject);
    const encMessage = encrypt(message);

    const result = await pool.query(
      "INSERT INTO public.clients (email, subject, message, iv_email, iv_subject, iv_message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [ 
        encEmail.encryptedData,
        encSubject.encryptedData,
        encMessage.encryptedData,
        encEmail.iv,
        encSubject.iv,
        encMessage.iv,
      ]
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