import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

// import font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Index(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid container component="main" spacing={1} sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item xs={12} sm={7.5} md={7}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Typography variant="h3">
                        HOUSING PLANNER
                    </Typography>
                    <Typography variant="h6" color={blue[400]}>
                        내 집을 짓기 위한 최고의 모바일 플랫폼
                    </Typography>
                    <Box
                        sx={{
                            my: 5,
                            mx: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'flex-start'
                        }}
                    >
                        <Typography variant="body1">
                            <b>하우징 플래너는</b><br/>
                            여러분들이 꿈꾸던 집을 지을 수 있게 함께하는 건축 플랫폼입니다.
                        </Typography>
                        <Typography variant="body1" sx={{my: 3}}>
                            여러분들이 짓고 싶은 집을 앱을 통해 입력하면,<br/>
                            그 집을 짓고 싶어하는 건설사들이 간단한 스케치를 가지고 입찰에 참여합니다.<br/>
                            입찰에 참여한 건설사의 리뷰나 후기를 참고해서 최종 선택을 하고, 정식 계약을 진행합니다.<br/>
                            건설사는 건축 허가부터 준공까지 책임지고 여러분들의 집을 지을 거고,<br/>
                            하우징 플래너는 그 과정을 여러분께 실시간으로 전달해 드립니다.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            my: 5,
                            mx: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-middle'
                        }}
                    >
                    </Box>
                </Box>
            </Grid>
            <Grid item
                  xs={12}
                  sm={4.5}
                  md={5}
                  >
                <Box px={2} py={3}>
                    <Container sx={{
                        height: '90vh',
                        alignItems: 'center',
                        backgroundImage: `url(/images/phone.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-middle'
                            }}
                        >
                            <IconButton color="secondary" aria-label="play movie" size="large">
                                <PlayCircleIcon size="large" />
                            </IconButton>
                            <Typography variant="h5" sx={{my: 3}}>
                                서비스 소개 영상보기
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Grid>
        </Grid>
    );
}