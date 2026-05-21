import { Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-[15px] font-extrabold text-ink-high">
            Assured Quality<span className="text-accent"></span>
          </p>
          <p className="mt-1 text-[12.5px] text-ink-muted">
            © {new Date().getFullYear()} Akash Simon · Built with precision, deployed with confidence.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/akash-simon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-muted transition-all hover:border-accent/30 hover:bg-accent/[0.08] hover:text-accent"
          >
            <Linkedin size={16} strokeWidth={2} />
          </a>
          <a
            href="mailto:akash.simon@outlook.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-muted transition-all hover:border-accent/30 hover:bg-accent/[0.08] hover:text-accent"
          >
            <Mail size={16} strokeWidth={2} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-muted transition-all hover:border-accent/30 hover:bg-accent/[0.08] hover:text-accent"
          >
            <ArrowUp size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  )
}
