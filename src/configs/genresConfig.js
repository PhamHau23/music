const img1 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1730119364/webMusic/9ec2745a-9353-4c57-b7dd-898bcfb0bfbc_lboca7.jpg'
const img2 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729317972/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_xlevmc.jpg'
const img3 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1730119366/webMusic/Robin_doyyba.jpg'
const img4 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729841628/webMusic/yerurei_on_twi_j3b4du.jpg'

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729928981/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_2_mauvvs.jpg'

const arr1 = [
    {
        img,
        songName: 'name',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        fileMp3: 'abc.mp3',
        songTopNum: 1
    },
    {
        img,
        songName: 'name 2',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 2
    },
    {
        img,
        songName: 'name 3',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 3
    },
    {
        img,
        songName: 'name 4',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 4
    },
    {
        img,
        songName: 'name 5',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 5
    },
    {
        img,
        songName: 'name 6',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 6
    },
    {
        img,
        songName: 'name 7',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 7
    }
]

const arr2 = [
    {
        img: img1,
        songName: 'name',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        fileMp3: 'abc.mp3',
        songTopNum: 1
    },
    {
        img: img1,
        songName: 'name 2',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 2
    },
    {
        img: img1,
        songName: 'name 3',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 3
    },
    {
        img: img1,
        songName: 'name 4',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 4
    },
    {
        img: img1,
        songName: 'name 5',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 5
    },
    {
        img: img1,
        songName: 'name 6',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 6
    },
    {
        img: img1,
        songName: 'name 7',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 7
    }
]

const arr3 = [
    {
        img: img2,
        songName: 'name',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        fileMp3: 'abc.mp3',
        songTopNum: 1
    },
    {
        img: img2,
        songName: 'name 2',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 2
    },
    {
        img: img2,
        songName: 'name 3',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 3
    },
    {
        img: img2,
        songName: 'name 4',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 4
    },
    {
        img: img2,
        songName: 'name 5',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 5
    },
    {
        img: img2,
        songName: 'name 6',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 6
    },
    {
        img: img2,
        songName: 'name 7',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 7
    }
]

export const genresConfig = [
    {
        nationId: 'vn',
        nationName: 'Việt Nam',
        genres: [
            { genreName: 'V-POP', genreId: 'vnvpop' ,img: img1, data: arr1 },
            { genreName: 'Rap', genreId: 'vnrap' ,img: img1, data: arr2 },
            { genreName: 'Bolero', genreId: 'vnbolero' ,img: img3, data: arr3 },
            { genreName: 'Nhạc Cách Mạng', genreId: 'vnnhaccachmang' ,img: img3, data: arr1 },
            { genreName: 'Nhạc Thiếu Nhi', genreId: 'vnnhacthieunhi' ,img: img3, data: arr1 }
        ]
    },

    {
        nationId: 'cn',
        nationName: 'Trung Quốc',
        genres: [
            { genreName: 'C-POP', genreId: 'cnpop' ,img: img2, data: arr1 },
            { genreName: 'Nhạc Phim', genreId: 'cnphim' , img: img2, data: arr2 },
            { genreName: 'Nhạc Cổ Phong', genreId: 'cncophong' ,img: img4, data: arr3 },
            { genreName: 'Nhạc Kịch', genreId: 'cnkich' ,img: img4, data: arr1 },
            { genreName: 'Nhạc Game', genreId: 'cngame' ,img: img4, data: arr1 },
            { genreName: 'Nhạc Game', genreId: 'cngame2' ,img: img4, data: arr1 }
        ]
    }
]