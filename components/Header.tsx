// referred: https://mui.com/material-ui/react-app-bar/

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

type Page = {
  name: string,
  url: string
}
const pages: Page[] = [
  { name: 'Top', url: '/' },
  { name: 'Works', url: '/works' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' }
]

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Container maxWidth="xl">
            <Toolbar disableGutters>

              {/* レスポンシブ用ハンバーガーメニュー */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link href={page.url} passHref>
                        <Typography textAlign="center">{page.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant="h6"
                noWrap
              >
                {'Twugo\'s Homepage'}
              </Typography>

              <Avatar sx={{ ml: 2 }}>
                <Image src="/twugo.png" alt="icon" layout="fill" />
              </Avatar>

              {/* ここから右寄せにするため */}
              <Box sx={{ flexGrow: 1 }} />

              {/* リンク */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Link href={page.url} passHref key={page.name}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header
