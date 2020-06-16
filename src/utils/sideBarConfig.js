const sideBars = [
    {
        path: '/app/dash-bord',
        name: '首页',
        roles: ['admin', 'user']
    },
    {
        path: '/',
        name: '小程序',
        roles: ['admin'],
        children: [
            {path: '/app/detail', name: '基本信息',roles:['admin']},
            {path: '/app/detail', name: '功能设置',roles:['admin']},
            {path: '/app/detail', name: '广告列表',roles:['admin']},
            {path: '/app/detail', name: '活动设置',roles:['admin']},
        ]
    },
    {
        path: '/',
        name: '订单',
        roles: ['admin'],
        children: [
            {path: '/app/detail', name: '订单列表',roles:['admin']},
            {path: '/app/detail', name: '订单报表',roles:['admin']},
        ]
    },
    {
        path: '/',
        name: '酒店',
        roles: ['admin'],
        children: [
            {path: '/app/detail', name: '酒店列表',roles:['admin']},
            {path: '/app/detail', name: '分类列表',roles:['admin']},
            {path: '/app/detail', name: '价格设置',roles:['admin']},
        ]
    },
    {
        path: '/app/detail',
        name: '用户管理',
        roles: ['admin']
    },
    {
        path: '/app/detail',
        name: '帮助',
        roles: ['admin', 'user']
    }
];

export default sideBars