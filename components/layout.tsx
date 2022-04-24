import Meta from "./meta"
import Footer from "./footer"

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
