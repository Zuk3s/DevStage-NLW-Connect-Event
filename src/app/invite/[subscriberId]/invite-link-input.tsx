'use client'

import IconButton from '@/components/IconButton'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { Check, Copy, Link } from 'lucide-react'
import { useState } from 'react'

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [hasCopy, setHasCopy] = useState(false)

  function copyInveteClick() {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setHasCopy(true)
      setTimeout(() => setHasCopy(false), 1500)
    })
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyInveteClick}>
        {hasCopy ? <Check className="size-5" /> : <Copy className="size-5" />}
      </IconButton>
    </InputRoot>
  )
}
