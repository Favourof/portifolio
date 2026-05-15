import { NextResponse } from "next/server"

function escapePdfText(value: string) {
  return value.replace(/[\\()]/g, "\\$&")
}

function buildSimplePdf(lines: string[]) {
  const stream = ["BT", "/F1 18 Tf", "72 760 Td"]
  lines.forEach((line, index) => {
    const safeLine = escapePdfText(line)
    if (index === 0) {
      stream.push(`(${safeLine}) Tj`)
      return
    }
    stream.push("0 -24 Td")
    stream.push(`(${safeLine}) Tj`)
  })
  stream.push("ET")
  const streamContent = stream.join("\n")

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${Buffer.byteLength(streamContent, "latin1")} >>\nstream\n${streamContent}\nendstream`,
  ]

  let pdf = "%PDF-1.4\n"
  const offsets: number[] = [0]

  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(Buffer.byteLength(pdf, "latin1"))
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`
  }

  const xrefStart = Buffer.byteLength(pdf, "latin1")
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += "0000000000 65535 f \n"

  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${offsets[i].toString().padStart(10, "0")} 00000 n \n`
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`
  pdf += `startxref\n${xrefStart}\n%%EOF`

  return Buffer.from(pdf, "latin1")
}

export async function GET() {
  const content = buildSimplePdf([
    "Favourof",
    "Backend-First Full-Stack Developer",
    "",
    "This is a temporary portfolio resume download.",
    "Replace it with your final designed CV when ready.",
  ])

  return new NextResponse(content, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Favourof-Resume.pdf"',
    },
  })
}
