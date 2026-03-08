export default function ProfileSidebar() {
  return (
    <div className="w-64 shrink-0 h-screen sticky top-0 bg-[#ffdd00] border-r-2 border-black flex flex-col items-center gap-6 p-8 overflow-y-auto">
      <img
        src="/hero-pic.png"
        alt="Profile"
        className="w-36 h-36 object-cover rounded-full border-2 border-black"
      />
      <h1 className="font-bold text-xl text-center">John Angelo Soriano</h1>
      <p>Graduating CS Student</p>
      <div className="flex flex-col gap-3 w-full">
        <a
          href="https://github.com/josorz/"
          className="w-full text-center text-sm border border-black rounded-full text-[#fff1e8] shadow-[0.3rem_0.4rem_0_0.1rem_#000] py-2 bg-[#101411] no-underline"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/john-angelo-soriano-699048260/"
          className="w-full text-center text-sm border border-black rounded-full text-[#fff1e8] shadow-[0.3rem_0.4rem_0_0.1rem_#000] py-2 bg-[#0077b5] no-underline"
        >
          LinkedIn
        </a>
        <a
          href="/assets/soriano-resume.pdf"
          className="w-full text-center text-sm border border-black rounded-full text-[#fff1e8] shadow-[0.3rem_0.4rem_0_0.1rem_#000] py-2 bg-[#21262d] no-underline"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
