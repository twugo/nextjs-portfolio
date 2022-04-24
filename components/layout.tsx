import Meta from "./meta"
import Header from "./header"

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
