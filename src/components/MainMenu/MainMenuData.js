import {Actions} from "react-native-router-flux";

export default MainMenuData = [
    [{
        title: '主页',
        icon: 'home',
        action: () => Actions.home()
    }, {
        title: '缺料信息',
        icon: 'filter',
        action: () => Actions.home()
    }, {
        title: '项目进度',
        icon: 'clock-o',
        action: () => Actions.home()
    }, {
        title: '报表分析',
        icon: 'bar-chart',
        action: () => Actions.home()
    }], 
    [{
        title: '其他功能',
        icon: 'wrench',
        action: () => Actions.home()
    }],
    [{
        title: '个人账户',
        icon: 'user-circle-o',
        action: () => Actions.home()
    }, {
        title: '系统设置',
        icon: 'gear',
        action: () => Actions.home()
    }, {
        title: '系统帮助',
        icon: 'question-circle',
        action: () => Actions.home()
    }]
];