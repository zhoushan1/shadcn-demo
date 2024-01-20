import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      {children}
    </div>
  )
}

export default Container
