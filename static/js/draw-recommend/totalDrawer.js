const totalDrawer = {
  drawerInfo: [
    {
      path: 'url(/static/img/under-draw/u1.jpg)',
      smallPath: 'url(/static/img/under-draw/s1.jpg)',
      title: 'Flutter',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/6615586',
    },
    {
      path: 'url(/static/img/under-draw/u2.jpg)',
      smallPath: 'url(/static/img/under-draw/u2.jpg)',
      title: 'Vue',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/653047',
    },
    {
      path: 'url(/static/img/under-draw/u3.jpg)',
      smallPath: 'url(/static/img/under-draw/u3.jpg)',
      title: 'Android Studio',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/9119362',
    },
    {
      path: 'url(/static/img/under-draw/u4.jpg)',
      smallPath: 'url(/static/img/under-draw/s4.jpg)',
      title: 'Visual Studio',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/10941754',
    },
    {
      path: 'url(/static/img/under-draw/u5.jpg)',
      smallPath: 'url(/static/img/under-draw/s5.jpg)',
      title: 'SQL Databases',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/4874878',
    },
    {
      path: 'url(/static/img/under-draw/u6.jpg)',
      smallPath: 'url(/static/img/under-draw/s6.jpg)',
      title: 'Java',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/1315',
    },
    {
      path: 'url(/static/img/under-draw/u7.jpg)',
      smallPath: 'url(/static/img/under-draw/s7.jpg)',
      title: 'Python',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/623389',
    },
    {
      path: 'url(/static/img/under-draw/u8.jpg)',
      smallPath: 'url(/static/img/under-draw/s8.jpg)',
      title: 'C',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/8834273',
    },
    {
      path: 'url(/static/img/under-draw/u9.jpg)',
      smallPath: 'url(/static/img/under-draw/s9.jpg)',
      title: 'Haskell',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/941912',
    },
    {
      path: 'url(/static/img/under-draw/u10.jpg)',
      smallPath: 'url(/static/img/under-draw/s10.jpg)',
      title: 'Fortran',
      userName: '31/03/2021',
      url: 'https://live.bilibili.com/99865',
    },
  ]
}


console.log(totalDrawer.drawerInfo)
// totalDrawer.drawerInfo.map(item => {
//   let title = item.title;
//   let userName = item.userName;
//   if (title.length > 10) {
//     item.title = title.slice(0, 10) + '...';
//   }

//   if (userName.length > 5) {
//     item.userName = userName.slice(0, 4) + '...';
//   }

//   return item;
// })


export {totalDrawer}
