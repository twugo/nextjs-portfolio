import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Avatar, Grid, Stack, Typography } from '@mui/material'
import { Card, CardMedia } from '@mui/material'
import { Link as MuiLink } from '@mui/material'

const Top: NextPage = () => {
  const theme = createTheme({
    // referred: https://github.com/vercel/next-learn/blob/master/basics/basics-final/styles/utils.module.css
    typography: {
      fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      h1: {
        fontSize: "3rem",
        lineHeight: "1.3",
        fontWeight: "800",
        letterSpacing: "-0.05rem",
        margin: "1rem 0"
      },
      h2: {
        fontSize: "2rem",
        lineHeight: "1.6",
        fontWeight: "bold",
        margin: "2rem 0",
      },
      h3: {
        fontSize: "1.8rem",
        lineHeight: "1.6",
        margin: "2rem 0",
      },
      body1: {
        fontSize: "1.3rem",
        lineHeight: "1.5"
      },
      body2: {
        fontSize: "1rem",
        lineHeight: "1.3"
      }
    }
  });
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Stack alignItems="center">
          <Avatar sx={{ mt: 6, width: 144, height: 144 }} >
            <Image
              priority
              src="/twugo.png"
              alt="icon"
              width={144}
              height={144}
            />
          </Avatar>
        </Stack>

        <Typography
          variant="h1"
          align="center"
        >
          Togo Takuya
        </Typography>
        <Typography variant="body1">
          Hello! I'm a master's student majoring in Computer Science and Information Engineering.
          You can contact me on <MuiLink href="https://twitter.com/twu_go">Twitter</MuiLink>.
        </Typography>


        <Typography variant="h2" mt={8}>Works</Typography>
        <Typography variant="h3">Unity</Typography>
        {/* <Card>
          <CardContent>
            <Typography variant="h2" margin="0">UOCON</Typography>
          </CardContent>
          <CardMedia>
            <Image src="/images/uocon.jpg" alt="uocon" width="256" height="144" />
          </CardMedia>
        </Card> */}
        <hr />

        <Grid container spacing={2} my={1}>
          <Grid item md={6}>
            <Image src="/images/uocon.jpg" alt="uocon" width="640" height="400" />
          </Grid>
          <Grid item>
            <Typography variant='h4' my={2}>
              UOCON
            </Typography>
            <Typography variant="body1">
              Fish battle game
            </Typography>
            <br />
            <Typography variant="subtitle1">
              In charge of main logic, battle scene
            </Typography>
            <MuiLink href="https://www.miyazaki-u.ac.jp/crcweb/news/26900">
              Description and Download(External)
            </MuiLink>
            <br />
            <br />
            <MuiLink href="https://youtu.be/J3AoDBDHAHc">Video(YouTube)</MuiLink>
          </Grid>
        </Grid>
        <hr />

        <Grid container spacing={2} mt={1}>
          <Grid item md={6}>
            <Image src="/images/mentos-cola.png" alt="mentos cola" width="640" height="360" />
          </Grid>
          <Grid item>
            <Typography variant='h4' my={2}>
              Gaming Mentos Cola
            </Typography>
            <Typography variant="body1">
              Hyper-casual game
            </Typography>
            <br />
            <Typography variant="subtitle1">
              In charge of main logic
            </Typography>
            <MuiLink href="https://unityroom.com/games/gaming_mentos_cola">
              Play(External)
            </MuiLink>
            <br />
            <br />
            <MuiLink href="https://github.com/Ketchup-Party/MentosCola">
              Source Code(GitHub)
            </MuiLink>
          </Grid>
        </Grid>
        <hr />

        <Typography variant="h3">Next.js</Typography>
        <hr />

        <Grid container spacing={2} my={1}>
          <Grid item md={6}>
            <Card>
              <CardMedia>
                <Image src="/images/blog.png" alt="blog" width="640" height="360" />
              </CardMedia>
            </Card>
          </Grid>
          <Grid item>
            <Typography variant='h4' my={2}>
              Blog
            </Typography>
            <Typography variant="body1">
              Markdown Blog
            </Typography>
            Link: <MuiLink href="https://nextjs-blog-twugo.vercel.app">https://nextjs-blog-twugo.vercel.app</MuiLink>
            <br />
            <br />
            <MuiLink href="https://github.com/twugo/nextjs-blog">
              Source Code(GitHub)
            </MuiLink>
          </Grid>
        </Grid>
        <hr />

        <Grid container spacing={2} my={1}>
          <Grid item md={6}>
            <Image src="/images/todo-akane.png" alt="blog" width="1881" height="950" />
          </Grid>
          <Grid item>
            <Typography variant='h4' my={2}>
              (Under Construction)<br />
              Todo Akane chan
            </Typography>
            <Typography variant="body1">
              The Cutest Todo App
            </Typography>
            Link: <MuiLink href="https://todo-akane-twugo.vercel.app/todo">https://todo-akane-twugo.vercel.app/todo</MuiLink>
            <br />
            <br />
            <MuiLink href="https://github.com/twugo/todo-akane">
              Source Code(GitHub)
            </MuiLink>
          </Grid>
        </Grid>
        <hr />

        <Typography variant="h2" mt={12}>資格(Certification)</Typography>
        <Typography variant='body2' my={2}>
          基本情報（2018/04）
        </Typography>
        <Typography variant='body2' my={2}>
          応用情報（2019/04）
        </Typography>
        <Typography variant='body2' my={2}>
          TOEIC L&R 705（2021/09）
        </Typography>

        <Typography variant="h2" mt={8}>Links</Typography>
        <Typography variant='body2' my={2.5}>
          Twitter: <MuiLink href="https://twitter.com/twu_go">https://twitter.com/twu_go</MuiLink>
        </Typography>
        <Typography variant='body2' my={2.5}>
          Blog: <MuiLink href="https://nextjs-blog-twugo.vercel.app">https://nextjs-blog-twugo.vercel.app</MuiLink>
        </Typography>
        <Typography variant='body2' my={2.5}>
          GitHub: <MuiLink href="https://github.com/twugo">https://github.com/twugo</MuiLink>
        </Typography>
        <Typography variant='body2' my={2.5}>
          Qiita: <MuiLink href="https://qiita.com/twu_go">https://qiita.com/twu_go</MuiLink>
        </Typography>
      </ThemeProvider >
    </Layout >
  )
}

export default Top
