import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/Favour_Omotosho_Ezekiel.pdf", request.url)
  )
}
