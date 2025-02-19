import { getRanking, getSubscriberInviteClicks } from '@/http/api'
import Image from 'next/image'
import medalCooper from '../../../assets/medal-cooper.svg'
import medalGold from '../../../assets/medal-gold.svg'
import medalSilver from '../../../assets/medal-silver.svg'

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-md space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((position, index) => {
          const positionRank = index + 1
          return (
            <div
              key={position.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{positionRank}°</span> |{' '}
                {position.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {position.score}
              </span>
              {positionRank === 1 && (
                <Image
                  src={medalGold}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
              {positionRank === 2 && (
                <Image
                  src={medalSilver}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
              {positionRank === 3 && (
                <Image
                  src={medalCooper}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
