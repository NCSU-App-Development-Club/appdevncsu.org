import linkedinLogo from '../../assets/images/linkedin.svg'
import instagramLogo from '../../assets/images/instagram.svg'
import discordLogo from '../../assets/images/discord.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-[#222] min-h-24 text-center flex flex-col items-center justify-center z-40 relative gap-2">
      © 2026 NC State App Development Club
      <div className="flex gap-1 items-center">
        <a
          href="https://www.linkedin.com/company/ncsu-app-development-club"
          target="_blank"
        >
          <img src={linkedinLogo} className="w-8" />
        </a>
        <a href="https://www.instagram.com/appdevncsu/" target="_blank">
          <img src={instagramLogo} className="w-8" />
        </a>
        <a href="https://discord.gg/2XVpkUgSfG" target="_blank">
          <img src={discordLogo} className="w-8" />
        </a>
      </div>
    </footer>
  )
}
