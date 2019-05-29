import Screen from "./components/Screen.js";
import Controller from "./components/Controller.js";
import WordScene from "./scenes/WordScene.js";
import ChatScene from "./scenes/ChatScene.js";
import './App.css';

class App {
  scenes = [
    new WordScene("欢迎来到比特世界"),
    new WordScene("异世界的友人，你好，我是你的向导李春，我负责接引每一位远道而来的游客，让他们尽快的适应这里的生活"),
    new WordScene("当然，也会提醒他们"),
    new WordScene("不要做坏事"),
    new ChatScene(require("./resources/sceneimg/chengqu.png"), [
      "为了让你快一点理解比特世界和你所在的世界有什么不同，我决定让时间倒流，让你体验比特世界的发展过程",
      "同时，我会在关键时刻给你一些提醒，让时间更快的流动",
      "但是，如果你更改了历史的发展进程，我会让时间倒流",
      "再次提醒你，不要做坏事"
    ], [0, 0, 0, 0], [require("./resources/personimg/lichun.png")], ["李春"]),
    new WordScene("一千年前"),
    new ChatScene(require("./resources/sceneimg/caoyuan.png"), [
      "你现在已经没有以前的记忆了",
      "你现在正处在一个以物易物的世界",
      "你只记得这个世界太大了，你在这里走啊走，最后饿晕了"
    ], [0, 0, 0], [require("./resources/personimg/lichun.png")], ["李春"]),
    new WordScene("你饿晕了"),
    new ChatScene(require("./resources/sceneimg/cunzhuang.png"), [
      "你还没有从昏迷中醒来，而此时旁边正有两个人在打量着你",
      "这里有一个新来的家伙，他的服装好奇怪",
      "可能是从其他部落过来的商人，看他这个样子应该是好久没有吃东西了，带他去首领那里吧"
    ], [0, 1, 2], [require("./resources/personimg/lichun.png"), require("./resources/personimg/cunmina.png"), require("./resources/personimg/cunminb.png")], ["李春", "村民A", "村民B"]),
    new WordScene("到了首领家"),
    new ChatScene(require("./resources/sceneimg/cunzhangjia.png"), [
      "首领，这个人是我和B巡山的时候遇见的，好像是其他部落过来做交易的",
      "哦？是吗",
      "看他身上什么都没带，不像是商人啊",
      "看他这身衣服和我们的不太一样，好像挺暖和的，摸起来又舒服",
      "还真是，说不定是其他部落来的商人，先给他准备好床铺，等他醒了再说吧",
    ], [1, 0, 0, 2, 0], [require("./resources/personimg/shouling.png"), require("./resources/personimg/cunmina.png"), require("./resources/personimg/cunminb.png")], ["首领", "村民A", "村民B"]),
    new WordScene("过了很久，你终于醒了过来"),
    new ChatScene(require("./resources/sceneimg/cunzhangjia.png"), [
      "你好，其他部落的朋友",
      "你好，不过我不是其他部落的，我是从异世界而来的",
      "异世界？",
      "是的，比特世界之外的世界",
      "我第一次听说比特世界之外还有世界，你们那里有大龙虾吗？",
      "有的，但是很贵",
      "贵？要用几只鸡换？难道还要用羊吗？",
      `问：要用几只鸡换？<p class="question" onclick="app.next();">A. 起码要半只羊！</p><p class="question" onclick="app.backSceneStart();">B. 差不多一千软妹币</p>`
    ], [0, -1, 0, -1, 0, -1, 0, 0], [require("./resources/personimg/shouling.png")], ["首领"]),
    new ChatScene(require("./resources/sceneimg/cunzhangjia.png"), [
      "那你们那里的大龙虾真是不便宜啊",
      "朋友，无论你来自哪里，我们都欢迎你，你有名字吗？",
      "我忘了哇，那个该死的李淳，哎不对，李春",
      "朋友，我看你什么都没带，你难道不是四处流浪的商人吗？",
      "不是的，我只是个孩子",
      "那你靠什么维生呢？尽管我很欢迎你，但是，我们这里可没办法供养一个闲人",
      `问：你会什么？<p class="question" onclick="app.next();">A. 会敲代码</p><p class="question" onclick="app.next();app.next();">B. 会放羊</p>`,
      "会敲代码有什么用？还不如放羊，你还是会放羊吧。",
      "既然如此，你可以去山的那边海的那边放羊"
    ], [0, 0, -1, 0, -1, 0, 0, 0, 0], [require("./resources/personimg/shouling.png")], ["首领"]),
    new WordScene("你去山的那边海的那边放羊了"),
    new ChatScene(require("./resources/sceneimg/yangqun.png"), [
      "咦，你不是那个异乡人吗？",
      "是的，我来自异世界",
      "我不懂什么异世界，更没听过什么量子力学，什么统一场论。我只会放羊，你会放羊吗？",
      "首领说我也会……",
      "好极了。这里有七只羊，你帮我放三只，一天12小时，你帮我放一个月，每次我给你一只羊作为交换，而且这段时间包吃包住",
      "好吧……",
    ], [0, -1, 0, -1, 0, -1], [require("./resources/personimg/muyangren.png")], ["牧羊人"]),
    new WordScene("你开始放羊了"),
    new WordScene("剩余：30天 11时59分"),
    new WordScene("剩余：30天 11时58分"),
    new WordScene("剩余：30天 11时57分"),
    new WordScene("剩余：30天 11时56分"),
    new WordScene("剩余：30天 11时55分"),
    new WordScene("剩余：30天 11时54分"),
    new WordScene("剩余：30天 11时53分"),
    new WordScene("剩余：30天 11时52分"),
    new WordScene("剩余：30天 11时51分"),
    new WordScene("剩余：30天 11时50分"),
    new ChatScene(require("./resources/sceneimg/yangqun.png"), [
      "李春你有没有搞错让我干这么烦的事情",
      "行行行，为了让你等待的时间不至于太长，我决定给你一个超能力，你可以快进时间",
    ], [-1, 0], [require("./resources/personimg/lichun.png")], ["李春"]),
    new WordScene("你快进了时间，一个月很快就过去了，到了最后一天"),
    new ChatScene(require("./resources/sceneimg/yangqun.png"), [
      "小伙子干得不错，这是给你的一只羊，好好养着吧。",
      "如果你乐意的话，你可以继续干下去。",
      `问：你还想干下去吗？<p class="question" onclick="alert('李春：那就再来一遍吧。');app.backPrevScene();">A. 想继续干下去</p><p class="question" onclick="app.next();app.next();">B. 不想干了</p><p class="question" onclick="app.next();">C. 不想干了，不过还想跟你讨论讨论统一场论</p>`,
      "我都说过我没听过什么统一场论了，没兴趣没兴趣",
      "既然你不干了，那你就走吧，自谋生路去吧",
    ], [0, 0, 0, 0, 0], [require("./resources/personimg/muyangren.png")], ["牧羊人"]),
    new WordScene("没有了包吃包住，你得考虑把羊换成粮食了"),
    new WordScene("你在村子里逛着，看到有种菜的，就上前去了"),
    new ChatScene(require("./resources/sceneimg/nongchang.png"), [
      "嘿你好，异世界的朋友，我从牧羊人那里听说你了，你来这儿是有什么事情吗？",
      `问：你来做什么呀？<p class="question" onclick="alert('李春：叫你别干坏事。');location.reload(true);">A. 我来推销杀虫剂</p><p class="question" onclick="app.next();">B. 我来种地</p><p class="question" onclick="app.next();app.next();">C. 我想换点粮食的</p>`,
      "我这里不缺人，想种地，找隔壁老王去。我看你是想谋生吧，那得备点粮食啊",
      "我这里有很多的粮食，你有什么能交换的东西么？",
      "我只有一只羊",
      "哦，好的。怎么个交换法呢？",
      `问：你想怎么交换？<p class="question" onclick="app.next();">A. 一头羊换一袋大米外加一袋蔬菜</p><p class="question" onclick="app.next();app.next();app.next();">B. 一只羊腿换一袋大米</p>`,
      "兄台，我看你智商似乎不太对劲啊。一头羊你就换那么点东西啊？我晕。一只羊腿换一袋大米我都觉得你被坑了。",
      "罢了罢了，我替你修改了世界进程，现在你可以用一只羊腿换一袋大米。",
      "啊？用一只羊腿换？可你那是一整只羊，我没办法宰啊。你还是先去找屠夫把羊宰了分块吧。",
    ], [0, 0, 0, 0, -1, 0, 0, 1, 1, 0], [require("./resources/personimg/nongfu.png"), require("./resources/personimg/lichun.png")], ["农夫", "李春"]),

    /*


    new ChatScene(require("./resources/sceneimg/.png"), [
      "",
    ], [0], [require("./resources/personimg/.png")], [""]),


    `问：<p class="question" onclick="">A. </p><p class="question" onclick="">B. </p>`

    */
  ];
  screen;
  controller;
  constructor(screenContainer, controllerContainer) {
    this.screen = new Screen(screenContainer, this.scenes);
    this.controller = new Controller(controllerContainer);
    window["app"] = this;
    this.screen.nextScene();
  }
  next() {
    if(this.screen.hasNextFrame()){
      this.screen.nextFrame();
    }
    else if(this.screen.hasNextScene()){
      this.screen.nextScene();
      this.screen.nextFrame();
    }
    this.render();
  }
  backSceneStart() {
    alert("时间被李春倒流");
    this.screen.backSceneStart();
    this.render();
  }
  backPrevScene() {
    this.screen.backPrevScene();
    this.render();
  }
  render() {
    this.screen.render();
    this.controller.render(this.screen.couldNext);
    return ``;
  }
}

export default App;