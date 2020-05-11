import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ListProductDetails from "./ListProductDetails";
import {Query} from "../../../Utils/Query";
import gio0 from '../../../Images/Gio/unnamed.jpg'
import gio1 from '../../../Images/Gio/cccc.jpg'
import gio2 from '../../../Images/Gio/gio_bo.jpg'
import cha0 from '../../../Images/Cha/recipe41560-cook-step3-636759745418208412.jpg'
import cha1
    from '../../../Images/Cha/cach-lam-cha-com-ngon-don-gian-tai-nha-chuan-vi-cha-com-4-1560410334-298-width600height401.jpg'
import cha2 from '../../../Images/Cha/unnamed.png'
import banhChung0 from '../../../Images/Banh Chung/banh-chung-la-mon-an-truyen-thong-cua-Tet-Viet.jpg'
import banhChung1 from '../../../Images/Banh Chung/190556-cach-lam-banh-chung.jpg'
import banhChung2
    from '../../../Images/Banh Chung/banh-chung-la-banh-gi-va-tai-sao-banh-chung-khong-the-thieu-trong-ngay-tet-co-truyen-viet-nam-bb-baaadFNljt.jpg'
import dokho0 from '../../../Images/Do Kho/kho-ga-ngon-44-600x600.jpg'
import doKho1 from '../../../Images/Do Kho/kho-heo-chay-tỏi-recipe-main-photo.jpg'
import doKho2 from '../../../Images/Do Kho/recipe2572-636186951370167384.jpg'
import dongLanh0 from '../../../Images/Do Dong Lanh/nemchuaran_master.jpg'
import dongLanh1 from '../../../Images/Do Dong Lanh/sdfhgjkhmgnf.jpg'
import dongLanh2 from '../../../Images/Do Dong Lanh/upload_a2b7c3b4d45246ccb730aa17b0656aa9_master.jpg'

const useStyles = makeStyles({
    container: {
        marginTop: 20,
        marginLeft: -15,
        marginRight: 5,
    }
})

function ListProduct(props) {
    const classes = useStyles();
    const [gio, setGio] = useState([])
    const [cha, setCha] = useState([])
    const [banhChung, setBanhChung] = useState([])
    const [doKho, setDoKho] = useState([])
    const [dongLanh, setDongLanh] = useState([])

    const getGio = () => {
        return Query({
            cate: 'Giò',
            onNext(snap) {
                const data = []
                snap.forEach(d => {
                    data.push(d.data())
                })
                setGio(data)
            }
        })
    }

    const getCha = () => {
        return Query({
            cate: 'Chả',
            onNext(snap) {
                const data = []
                snap.forEach(d => {
                    data.push(d.data())
                })
                setCha(data)
            }
        })
    }

    const getBanhChung = () => {
        return Query({
            cate: 'Bánh Chưng',
            onNext(snap) {
                const data = []
                snap.forEach(d => {
                    data.push(d.data())
                })
                setBanhChung(data)
            }
        })
    }

    const getDoKho = () => {
        return Query({
            cate: 'Đồ Khô',
            onNext(snap) {
                const data = []
                snap.forEach(d => {
                    data.push(d.data())
                })
                setDoKho(data)
            }
        })
    }

    const getDongLanh = () => {
        return Query({
            cate: 'Đồ Đông Lạnh',
            onNext(snap) {
                const data = []
                snap.forEach(d => {
                    data.push(d.data())
                })
                setDongLanh(data)
            }
        })
    }

    useEffect(() => {
        getGio()
        getCha()
        getBanhChung()
        getDoKho()
        getDongLanh()
    }, [])

    return (
        <div className={classes.container}>
            <ListProductDetails data={gio} cate={'Giò'} img={gio0} img1={gio1} img2={gio2}/>
            <ListProductDetails data={cha} cate={'Chả'} img={cha0} img1={cha1} img2={cha2}/>
            <ListProductDetails data={banhChung} cate={'Bánh Chưng'} img={banhChung0} img1={banhChung1}
                                img2={banhChung2}/>
            <ListProductDetails data={doKho} cate={'Đồ Khô'} img={dokho0} img1={doKho1} img2={doKho2}/>
            <ListProductDetails data={dongLanh} cate={'Đồ Đông Lạnh'} img={dongLanh0} img1={dongLanh1}
                                img2={dongLanh2}/>
        </div>
    );
}

export default ListProduct;