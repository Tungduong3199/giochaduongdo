import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import anh1 from '../../../Images/gio-lua.png'
import ProductDetails from "./ProductDetails";
import IntroduceProduct from "./IntroduceProduct";
import {firestore} from '../../../firebaseConfig'
import ListProductDetails from "./ListProductDetails";

const useStyles = makeStyles({
    container: {
        marginTop: 20,
        marginLeft: -15,
        marginRight: 5,
    }
})

function ListProduct(props) {
    const classes = useStyles();
    const [data, setData] = useState({})

    const getData = async () => {
        try {
            const result = await firestore.collection('products')
                .get()
            if (result.size > 0) {
                const _data = {}
                result.forEach(doc => {
                    const d = doc.data()
                    const cate = d.cate
                    if (_data[cate]) {
                        _data[cate].push(d)
                    } else {
                        _data[cate] = [d]
                    }
                })
                setData(_data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={classes.container}>
            {Object.keys(data).map(key => {
                return (
                   <ListProductDetails cate={key} data={data[key]}/>
                )
            })}
        </div>
    );
}

export default ListProduct;