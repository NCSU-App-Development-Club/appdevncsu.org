import { ReactNode } from 'react'

export default function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-5xl mb-8">{children}</h2>
}
