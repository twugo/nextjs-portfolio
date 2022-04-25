import Meta from "./meta"
import Footer from "./footer"
import Box from '@mui/material/Box'

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <main>
        {/* referred: https://github.com/vercel/next-learn/blob/master/basics/basics-final/components/layout.module.css */}
        <Box sx={{ maxWidth: "60rem", padding: "0 1rem", margin: "3rem auto 2rem" }}>
          {children}
        </Box>
      </main>
      <Footer />
    </>
  )
}

export default Layout
