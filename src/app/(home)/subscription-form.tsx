'use client'

import Button from '@/components/Button'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionFormSchema = z.object({
  name: z.string().min(3, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type subscriptionFormSchema = z.infer<typeof subscriptionFormSchema>

export default function SubscriptionForm() {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subscriptionFormSchema),
  })

  async function onSubscribe({ name, email }: subscriptionFormSchema) {
    const referrer = searchParams.get('referrer')
    const { subscriberId } = await subscribeToEvent({ name, email, referrer })

    push(`/invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 borrder border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-md"
    >
      <h2 className="text-xl font-heading font-semibold text-gray-200">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome Completo"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && (
            <p className="text-danger text-xs font-medium">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-danger text-xs font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
