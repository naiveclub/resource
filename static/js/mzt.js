const ap = new APlayer({
    container: document.getElementById('aplayer'),   //播放器容器元素
    //listFolded: false,                              //列表默认折叠
    //listMaxHeight: 90,                              //列表最大高度
    lrcType: 3,                                     //此为歌词格式，没有歌词可以直接删掉这一行
	//mini: false,                                     //迷你模式
    //autoplay: true,                                 //自动播放
    //theme: '#FADFA3',                               //主题色
	loop: 'one',                                    //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    //order: 'list',                                 //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto',                               //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7,                                   //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: false,                                    //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
	audio: [                                        //音频信息
        {
            name: '(ザード) - 運命のルーレット廻して (转动命运之轮)',                           //音频名称
            artist: 'ZARD',                       //音频艺术家
            url: 'https://cdn.jsdelivr.net/gh/naiveclub/WordPress@main/static/music/ZARD%20(%E3%82%B6%E3%83%BC%E3%83%89)%20-%20%E9%81%8B%E5%91%BD%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88%E5%BB%BB%E3%81%97%E3%81%A6%20(%E8%BD%AC%E5%8A%A8%E5%91%BD%E8%BF%90%E4%B9%8B%E8%BD%AE).ogg',                         //音频链接
            cover: 'https://cdn.jsdelivr.net/gh/naiveclub/WordPress@main/static/music/mzt.jpg',                     //音频封面
            lrc: 'https://cdn.jsdelivr.net/gh/naiveclub/WordPress@main/static/music/ZARD%20(%E3%82%B6%E3%83%BC%E3%83%89)%20-%20%E9%81%8B%E5%91%BD%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88%E5%BB%BB%E3%81%97%E3%81%A6%20(%E8%BD%AC%E5%8A%A8%E5%91%BD%E8%BF%90%E4%B9%8B%E8%BD%AE).lrc',                         //歌词
            //theme: '#ebd0c2'                         //切换到此音频时的主题色，比上面的 theme 优先级高
        }
    ]
});