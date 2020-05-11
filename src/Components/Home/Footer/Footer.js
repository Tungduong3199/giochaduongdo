import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import anh1 from '../../../Images/logo.png'
import {
    EmailOutlined,
    Facebook,
    Instagram,
    PhoneIphoneOutlined,
    RoomOutlined,
    Twitter,
    YouTube
} from "@material-ui/icons";

const useStyles = makeStyles({
    container: {
        margin: '0 auto',
        marginTop: -40,
    },
    box: {
        textAlign: 'center',
    },
    logo: {
        textAlign: 'center',
        width: 1170,
        margin: '0 auto',
    },
    head: {
        width: '100%',
        height: 80,
        backgroundColor: '#245a46'
    },
    icon: {
        width: 50,
        height: 50,
        color: 'gray'
    },
    text: {
        color: '#7b7b7b'
    },
    a: {
        fontweight: 'bold',
        fontSize: 35,
        fontFamily: 'segoe-ui',
        marginBottom: 10,
        textAlign: 'center'
    }
})


function Footer(props) {
    const classes = useStyles();
    const lienHe = [
        {
            icon: <RoomOutlined className={classes.icon}/>,
            title: 'Địa Chỉ: ',
            content: 'Chợ Hà Đông, Đường Bà Triệu, Phường Nguyễn Trãi, Quận Hà Đông, Thành Phố Hà Nội'
        },
        {
            icon: <PhoneIphoneOutlined className={classes.icon}/>,
            title: 'Điện Thoại: ',
            content: '0397420542'
        },
        {
            icon: <EmailOutlined className={classes.icon}/>,
            title: 'Email: ',
            content: 'giochaduongdo@gmail.com'
        }
    ]
    return (
        <Grid container sm={12} className={classes.container}>
            <div className={classes.head}></div>
            <Grid item container sm={12} style={{maxWidth: 1170, margin: '0 auto', padding: '20px 0'}}>
                <Grid item sm={2} className={classes.box}>
                    <Grid item sm={12}>
                        <img width={200} height={200} src={anh1} alt={'giochaduongdo'}/>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant={'body1'} style={{fontSize: 20, fontFamily: 'segoe-ui'}} gutterBottom>
                            Follow Us:<br/>
                            <a target={'_blank'}
                               href={'https://www.facebook.com/Gi%C3%B2-Ch%E1%BA%A3-D%C6%B0%C6%A1ng-%C4%90%E1%BB%97-103531264652067/?modal=admin_todo_tour'}>
                                <Facebook style={{color: '#3c5998', width: 40, height: 40}}/>
                            </a>
                            <a target={'_blank'} href={'https://www.youtube.com/?gl=VN'}><YouTube
                                style={{color: '#db2d29', width: 40, height: 40}}/></a>
                            <a target={'_blank'} href={'https://twitter.com/explore'}>
                                <Twitter style={{color: '#29a9e0', width: 40, height: 40}}/>
                            </a>
                            <a target={'_blank'} href={'https://www.instagram.com/'}>
                                <Instagram style={{color: 'brown', width: 40, height: 40}}/>
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container sm={6} style={{padding: '0 20px'}}>
                    <Grid item sm={12}>
                        <Typography variant={'h3'} className={classes.a}>
                            Liên Hệ
                        </Typography>
                    </Grid>
                    {lienHe.map(value =>
                        <Grid item container sm={12} style={{margin: '5px 0'}}>
                            <Grid item sm={2} style={{textAlign: 'center'}}>
                                {value.icon}
                            </Grid>
                            <Grid item sm={10} className={classes.text}>
                                <Typography variant={"body1"} gutterBottom>
                                    {value.title} <br/> {value.content}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
                <Grid item sm={4} className={classes.box}>
                    <iframe
                        src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGi%25C3%25B2-" +
                        "Ch%25E1%25BA%25A3-D%25C6%25B0%25C6%25A1ng-%25C4%2590%25E1%25BB%2597-103531264652067%2F%3Fmodal%3Dadmin_" +
                        "todo_tour&tabs=timeline&width=400&height=250&small_header=false&adapt_container_width=true&hide_" +
                        "cover=false&show_facepile=true&appId=2255782128058223"}
                        width={400} height={300} style={{border: 'none', overflow: 'hidden'}} scrolling={"no"}
                        frameBorder={0}
                        allowTransparency={true} allow={'encrypted-media'}></iframe>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;