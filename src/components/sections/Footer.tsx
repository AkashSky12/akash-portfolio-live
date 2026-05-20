export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8 px-6 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-syne font-extrabold text-white text-[15px]">
            Akash<span className="text-[#00d4aa]">.</span>
          </p>
          <p className="text-[12px] text-[#8892a4] mt-0.5">
            © {new Date().getFullYear()} Akash Simon · Built with precision, deployed with confidence
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/akash-simon/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#8892a4] hover:text-[#00d4aa] hover:border-[#00d4aa]/30 hover:bg-[#00d4aa]/06 transition-all text-[12px] font-bold"
          >
            in
          </a>
          <a
            href="mailto:akash.simon@outlook.com"
            className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#8892a4] hover:text-[#00d4aa] hover:border-[#00d4aa]/30 hover:bg-[#00d4aa]/06 transition-all text-[13px]"
          >
            @
          </a>
        </div>
      </div>
    </footer>
  )
}
