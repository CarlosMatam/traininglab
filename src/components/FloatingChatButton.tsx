import { MessageCircle } from "lucide-react"

export function FloatingChatButton() {
  return (
    <button
      className="fixed bottom-6 right-6 bg-[#40C4FF] hover:bg-[#00B0FF] text-white p-4 rounded-full shadow-lg cursor-pointer transition-colors duration-200 flex items-center justify-center"
      aria-label="Abrir chat"
    >
      <MessageCircle size={24} />
    </button>
  )
}

