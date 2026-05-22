import { NextResponse } from "next/server"
import { Resend } from "resend"

type ContactBody = {
  name?: string
  email?: string
  message?: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody
    const name = body.name?.trim()
    const email = body.email?.trim()
    const message = body.message?.trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const contactToEmail = process.env.CONTACT_TO_EMAIL

    if (!resendApiKey || !contactToEmail) {
      return NextResponse.json(
        {
          message:
            "Email configuration is missing. Set RESEND_API_KEY and CONTACT_TO_EMAIL.",
        },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />")

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: contactToEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend email error:", error)
      return NextResponse.json(
        { message: "Something went wrong while sending the message." },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "Message sent successfully." })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { message: "Something went wrong while sending the message." },
      { status: 500 }
    )
  }
}
