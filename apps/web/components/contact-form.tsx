"use client"

import { useState, type FormEvent } from "react"

import { Button } from "@workspace/ui/components/button"

type FormState = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")
  const [feedback, setFeedback] = useState<string>("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    setFeedback("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to send message.")
      }

      setStatus("success")
      setFeedback(
        data.message ?? "Message sent successfully. I'll get back to you soon."
      )
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong."
      setStatus("error")
      setFeedback(message)
    }
  }

  const statusStyles = {
    idle: "border-border/60 bg-card/70 text-muted-foreground",
    sending: "border-sky-400/40 bg-sky-400/10 text-sky-200",
    success: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
    error: "border-red-400/40 bg-red-400/10 text-red-300",
  }[status]

  const isSending = status === "sending"
  const isSuccess = status === "success"

  return (
    <form
      onSubmit={onSubmit}
      aria-busy={isSending}
      className="mt-8 grid gap-4 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="text-muted-foreground">Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Your name"
            className="rounded-2xl border border-border/60 bg-background px-4 py-3 transition outline-none focus:border-sky-400"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="text-muted-foreground">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="you@example.com"
            className="rounded-2xl border border-border/60 bg-background px-4 py-3 transition outline-none focus:border-sky-400"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="text-muted-foreground">Message</span>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Tell me about your project or opportunity"
          className="rounded-2xl border border-border/60 bg-background px-4 py-3 transition outline-none focus:border-sky-400"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send message"}
        </Button>
        {feedback ? (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm leading-6 transition-all duration-300 ease-out ${statusStyles} ${
              isSuccess ? "translate-y-0 opacity-100 shadow-sm" : "opacity-100"
            } ${isSending ? "animate-pulse" : ""}`}
            aria-live="polite"
          >
            {feedback}
          </div>
        ) : null}
      </div>
    </form>
  )
}
