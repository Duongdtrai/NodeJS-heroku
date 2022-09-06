// test middleware: deu chung 1 path la localhost:3000/
app.get('/',
    (req, res, next) => {
        console.log('md1');
        next()
        // res.json('home')
    },
    (req, res, next) => {
        console.log('md2');
        next()
    },
    (req, res, next) => {
        // res.json('middleware')
        console.log('md3');
        next()
    }
)
app.use((req, res, next) => { // không có path thì mặc định là get(localhoast:3000/), bên trong luôn có handeler hoặc có cả hàm check
    console.log('md4');
})

// test middleware: deu chung 1 path la localhost:3000/ voi dieu kien dang nhap (cach 1)
app.get('/',
    (req, res, next) => {
        if (dangnhap){
            next();
        }else{
            res.json('Ban chua dang nhap')
        }
    },
    (req, res, next) => {
        res.json('du lieu')
    },
)
// test middleware: deu chung 1 path la localhost:3000/ voi dieu kien dang nhap (cach 2)
const checkDangnhap = (req, res, next) => {
    if (dangnhap) {
        next();
    } else {
        res.json('Ban chua dang nhap')
    }
}
const checkAdmin = (req, res, next) => {
    if (dangnhap) {
        user.role = 'admin'
        next();
    } else {
        res.json('Ban chua dang nhap')
    }
}

app.get('/', checkDangnhap,
    (req, res, next) => {
        res.json('Dang nhap thanh cong')
    },
)
app.use('/admin/api',checkAdmin, router)
