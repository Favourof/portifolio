export type ChatPrompt = {
  message: string
}

export function buildChatPrompt({ message }: ChatPrompt) {
  return `Answer this portfolio question clearly and briefly: ${message}`
}
