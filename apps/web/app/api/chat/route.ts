import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { message: "Chat route scaffolded. Add chatbot logic here." },
    { status: 501 }
  )
}
