import Image from 'next/image'
import logo from '../../assets/logo.svg'
import InviteLinkInput from './invite-link-input'
import Ranking from './ranking'
import Stats from './stats'

export default function InvitePage() {
  const inviteLink = 'https://www.localhost.com/3000/invite/291873928716382'

  return (
    <div className="min-h-dvh flex items-center justify-center gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-xl">
        <Image src={logo} alt="dev-code" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-2xl md:text-5xl font-heading font-semibold leading-none">
            Inscrição Confirmada
          </h1>
          <p>Para entrar no evento, acesse o link enviado para seu e-mail.</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className=" text-gray-200 font-heading font-semibold text-xl">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </div>

      <Ranking />
    </div>
  )
}
