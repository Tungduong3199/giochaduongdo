import React from 'react';
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import DetailsIntroduce from "./DetailsIntroduce";
import gio from '../../Images/Gio/unnamed.jpg'
import cha from '../../Images/Cha/recipe41560-cook-step3-636759745418208412.jpg'
import banhChung from '../../Images/Banh Chung/banh-chung-la-mon-an-truyen-thong-cua-Tet-Viet.jpg'

const useStyles = makeStyles({
    breadcrumb: {
        width: 1170,
        margin: 'auto',
        marginTop: 20
    }
})

const text_1 = 'Thời phong kiến xa xưa, món ăn này rất cao quý, bữa cỗ có món giò chả thì coi như sang lắm.' +
    ' Đến thời bao cấp, giò chả càng trở nên xa xỉ, bị quy vào hàng cấm. Vì miếng cơm manh áo, người Hoàng Trung ' +
    'vẫn bám trụ với nghề, mỗi ngày làm trộm vài cân giò nhét vào bị, vào mẹt lên thành phố bán.'

const text_2 = 'Yếu tố làm nên thương hiệu giò chả Dương Đỗ không chỉ nằm ở sự thơm ngon, an toàn vượt trội mà còn ' +
    'từ chiều dài lịch sử hàng trăm năm không ngừng mày mò, tìm kiếm cùng với người dân làng Hoàng Trung' +
    ' để món ăn này ngày càng ngon hơn.'

const text_3 = 'Trước đây làm giò chả bằng tay, người dân làng Hoàng Trung lưu giữ những bí quyết giã thịt ' +
    'sao cho thật dẻo quánh đến mức không dính chày mới được. Đến những năm 1990, người dân chuyển sang ' +
    'làm bằng máy. Sức lao động được giải phóng, nhưng dân làng vẫn giữ truyền thống của cha ông, đó là' +
    ' gói giò nhất thiết phải bằng lá chuối tây, gói khổ to, không như cách làm giò công nghiệp bây giờ ' +
    'thường gói bằng ống nhôm.'

const text_4 = 'Để giò chả ngon bắt buộc thớ thịt phải tươi, chọn loại thịt 2 mề (nửa mỡ, nửa nạc).' +
    ' Thịt để làm giò lụa ngon nhất là thịt bắp vì vùng này lợn di chuyển nhiều, thớ thịt khó bị hỏng' +
    ' hơn so với các loại thịt khác. Trong quá trình xay, phải nhìn vào sự đổi màu của thịt để cho gia ' +
    'vị mới tạo nên miếng giò ngon mà chỉ người Hoàng Trung mới biết được.'

const text_5 = 'Đến nay thương hiệu GIÒ CHẢ DƯƠNG ĐỖ đã hoạt động được gần 30 năm, trải qua 3 đời truyền ' +
    'từ đời này qua đời kia. Sản phẩm GIÒ CHẢ DƯƠNG ĐỖ đặc biệt ở chỗ là hoàn toàn không sử dụng chất bảo quản,' +
    ' đảm bảo 100% vệ sinh an toàn thực phẩm. Chúng tôi có giấy chứng nhận tiêu chuẩn cơ sở hợp vệ sinh và ' +
    'có đầy đủ giấy phép của trung tâm kiểm nghiệm thực phẩm.'

const text_6 = 'Vì thế, GIÒ CHẢ DƯƠNG ĐỖ luôn tự tin là thương hiệu gần gũi với người tiêu dùng. Nhưng cũng có nhược điểm,' +
    ' do không có chất bảo quản nên sản phẩm của GIÒ CHẢ DƯƠNG ĐỖ chỉ sử dụng được 2-3 ngày nếu để ngăn mát tủ lạnh, ' +
    'ăn ngay trong ngày nếu để điều kiện thường.'

function Introduce(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <Header/>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
                <Link color="inherit" onClick={() => history.push('/')}>
                    Trang Chủ
                </Link>
                <Typography color="textPrimary">Giới Thiệu</Typography>
            </Breadcrumbs>
            <DetailsIntroduce text1={text_1} text2={text_2} img={gio} sort={true}/>
            <DetailsIntroduce text1={text_3} text2={text_4} img={cha} sort={false}/>
            <DetailsIntroduce text1={text_5} text2={text_6} img={banhChung} sort={true}/>
            <hr/>
            <div style={{marginTop: 60}}>
                <Footer/>
            </div>
        </div>
    );
}

export default Introduce;