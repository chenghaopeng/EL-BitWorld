import Screen from "./components/Screen.js";
import Controller from "./components/Controller.js";
import WordScene from "./scenes/WordScene.js";
import ChatScene from "./scenes/ChatScene.js";
import './App.css';

import LICHUN from "./resources/personimg/lichun.png"
import CUNMINA from "./resources/personimg/cunmina.png"
import CUNMINB from "./resources/personimg/cunminb.png"
import SHOULING from "./resources/personimg/shouling.png"
import MUYANGREN from "./resources/personimg/muyangren.png"
import NONGFU from "./resources/personimg/nongfu.png"
import TUFU from "./resources/personimg/tufu.png"
import ZHONGBENCONG from "./resources/personimg/yindao1.png"

import CHENGQU from "./resources/sceneimg/chengqu.png";
import CAOYUAN from "./resources/sceneimg/caoyuan.png";
import CUNZHUANG from "./resources/sceneimg/cunzhuang.png";
import SHOULINGJIA from "./resources/sceneimg/shoulingjia.png";
import YANGQUN from "./resources/sceneimg/yangqun.png";
import TUZAICHANG from "./resources/sceneimg/tuzaichang.png";
import NONGCHANG from "./resources/sceneimg/nongchang.png";

class App {
  scenes = [
    new WordScene("欢迎来到比特世界"),
    new WordScene("异世界的友人，你好，我是你的向导李春，我负责接引每一位远道而来的游客，让你们尽快的适应这里的生活"),
    new WordScene("当然，也会提醒你们"),
    new WordScene("<b>不要做坏事</b>"),
    new ChatScene(CHENGQU, [
      "为了让你快一点理解比特世界和你所在的世界有什么不同，我决定让时间倒流，让你体验比特世界的发展过程。",
      "同时，我会在关键时刻给你一些提醒，让时间更快的流动。",
      "但是，如果你更改了历史的发展进程，我会让时间倒流。",
      "再次提醒你，<b>不要做坏事</b>。"
    ], [0, 0, 0, 0], [LICHUN], ["李春"]),
    new WordScene("一千年前"),
    new ChatScene(CAOYUAN, [
      "你现在已经没有以前的记忆了。",
      "你现在正处在一个以物易物的世界。",
      "你只记得这个世界太大了，你在这里走啊走，最后饿晕了。"
    ], [0, 0, 0], [LICHUN], ["李春"]),
    new WordScene("你饿晕了"),
    new ChatScene(CUNZHUANG, [
      "你还没有从昏迷中醒来，而此时旁边正有两个人在打量着你。",
      "这里有一个新来的家伙，他的服装好奇怪。",
      "可能是从其他部落过来的商人，看他这个样子应该是好久没有吃东西了，带他去首领那里吧。"
    ], [0, 1, 2], [LICHUN, CUNMINA, CUNMINB], ["李春", "村民A", "村民B"]),
    new WordScene("到了首领家"),
    new ChatScene(SHOULINGJIA, [
      "首领，这个人是我和B巡山的时候遇见的，好像是其他部落过来做交易的。",
      "哦？是吗？",
      "看他身上什么都没带，不像是商人啊。",
      "看他这身衣服和我们的不太一样，好像挺暖和的，摸起来又舒服。",
      "还真是，说不定是其他部落来的商人，先给他准备好床铺，等他醒了再说吧。",
    ], [1, 0, 0, 2, 0], [SHOULING, CUNMINA, CUNMINB], ["首领", "村民A", "村民B"]),
    new WordScene("过了很久，你终于醒了过来"),
    new ChatScene(SHOULINGJIA, [
      "你好，其他部落的朋友。",
      "你好，不过我不是其他部落的，我是从异世界而来的。",
      "异世界？",
      "是的，比特世界之外的世界。",
      "我第一次听说比特世界之外还有世界，你们那里有大龙虾吗？",
      "有的，但是很贵。",
      "贵？要用几只鸡换？难道还要用羊吗？",
      `问：要用几只鸡换？<p class="question" onclick="app.next();">A. 起码要半只羊！</p><p class="question" onclick="app.backSceneStart();">B. 差不多一千软妹币。</p>`
    ], [0, -1, 0, -1, 0, -1, 0, 0], [SHOULING], ["首领"]),
    new ChatScene(SHOULINGJIA, [
      "那你们那里的大龙虾真是不便宜啊。",
      "朋友，无论你来自哪里，我们都欢迎你，你有名字吗？",
      "我忘了哇，那个该死的李淳，哎不对，李春。",
      "朋友，我看你什么都没带，你难道不是四处流浪的商人吗？",
      "不是的，我只是个孩子。",
      "那你靠什么维生呢？尽管我很欢迎你，但是，我们这里可没办法供养一个闲人。",
      `问：你会什么？<p class="question" onclick="app.next();">A. 会敲代码。</p><p class="question" onclick="app.next();app.next();">B. 会放羊。</p>`,
      "会敲代码有什么用？还不如放羊，你还是会放羊吧。",
      "既然如此，你可以去山的那边海的那边放羊。"
    ], [0, 0, -1, 0, -1, 0, 0, 0, 0], [SHOULING], ["首领"]),
    new WordScene("你去山的那边海的那边放羊了"),
    new ChatScene(YANGQUN, [
      "咦，你不是那个异乡人吗？",
      "是的，我来自异世界。",
      "我不懂什么异世界，更没听过什么量子力学，什么统一场论。我只会放羊，你会放羊吗？",
      "首领说我也会……",
      "好极了。这里有七只羊，你帮我放三只，一天12小时，你帮我放一个月，每次我给你一只羊作为交换，而且这段时间包吃包住。",
      "好吧……",
    ], [0, -1, 0, -1, 0, -1], [MUYANGREN], ["牧羊人"]),
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
    new ChatScene(YANGQUN, [
      "李春你有没有搞错让我干这么烦的事情。",
      "行行行，为了让你等待的时间不至于太长，我决定给你一个超能力，你可以快进时间。",
    ], [-1, 0], [LICHUN], ["李春"]),
    new WordScene("你快进了时间，一个月很快就过去了，到了最后一天"),
    new ChatScene(YANGQUN, [
      "小伙子干得不错，这是给你的一只羊，好好养着吧。",
      "如果你乐意的话，你可以继续干下去。",
      `问：你还想干下去吗？<p class="question" onclick="alert('李春：那就再来一遍吧。');app.backPrevScene();">A. 想继续干下去。</p><p class="question" onclick="app.next();app.next();">B. 不想干了。</p><p class="question" onclick="app.next();">C. 不想干了，不过还想跟你讨论讨论统一场论。</p>`,
      "我都说过我没听过什么统一场论了，没兴趣没兴趣。",
      "既然你不干了，那你就走吧，自谋生路去吧。",
    ], [0, 0, 0, 0, 0], [MUYANGREN], ["牧羊人"]),
    new WordScene("没有了包吃包住，你得考虑把羊换成粮食了"),
    new WordScene("你在村子里逛着，看到有种菜的，就上前去了"),
    new ChatScene(NONGCHANG, [
      "嘿你好，异世界的朋友，我从牧羊人那里听说你了，你来这儿是有什么事情吗？",
      `问：你来做什么呀？<p class="question" onclick="alert('李春：叫你别干坏事。');location.reload(true);">A. 我来推销杀虫剂。</p><p class="question" onclick="app.next();">B. 我来种地。</p><p class="question" onclick="app.next();app.next();">C. 我想换点粮食的。</p>`,
      "我这里不缺人，想种地，找隔壁老王去。我看你是想谋生吧，那得备点粮食啊。",
      "我这里有很多的粮食，你有什么能交换的东西么？",
      "我只有一只羊。",
      "哦，好的。怎么个交换法呢？",
      `问：你想怎么交换？<p class="question" onclick="app.next();">A. 一头羊换一袋大米外加一袋蔬菜。</p><p class="question" onclick="app.next();app.next();app.next();">B. 一只羊腿换一袋大米。</p>`,
      "兄台，我看你智商似乎不太对劲啊。一头羊你就换那么点东西啊？我晕。一只羊腿换一袋大米我都觉得你被坑了。",
      "罢了罢了，我替你修改了世界进程，现在你可以用一只羊腿换一袋大米。",
      "啊？用一只羊腿换？可你那是一整只羊，我没办法宰啊。你还是先去找屠夫把羊宰了分块吧。",
    ], [0, 0, 0, 0, -1, 0, 0, 1, 1, 0], [NONGFU, LICHUN], ["农夫", "李春"]),
    new WordScene("于是你来到了屠宰场"),
    new ChatScene(TUZAICHANG, [
      "小伙子，我有刀，你有羊吗？",
      `问：你有羊吗？<p class="question" onclick="app.next();">A. 没有</p><p class="question" onclick="app.next();app.next();app.next();">B. 有一只羊</p>`,
      "你当我眼瞎吗，这么大一只羊以为我看不见啊？",
      "你看到还问！",
      "咳咳，你要把这只羊宰了吗？如果是的话，我可以把这只羊按不同部位宰开，同时我要收一只羊腿作为报酬。",
      `问：你要宰了这只羊吗？<p class="question" onclick="alert('李春：兄台你不宰羊，你吃个啥子哦？');">A. 不宰。</p><p class="question" onclick="app.next();">B. 你这也太坑了吧！</p><p class="question" onclick="app.next();app.next();app.next();">C. 宰。</p>`,
      "看到我手里的刀了吗？",
      "好好，怕了怕了，我宰....",
      "行，痛快！"
    ], [0, 0, 0, -1, 0, 0, 0, -1, 0], [TUFU], ["屠夫"]),
    new WordScene("不一会，屠夫就宰好了羊，并拿走了一只羊腿"),
    new WordScene("你用另外的羊肉，换了很多的粮食，够你吃好一阵子了"),
    new WordScene("李春：然而生活远没有那么平淡"),
    new WordScene("李春：快去首领家，似乎发生了什么大事"),
    new WordScene("李春：提示你一下，有时候，大的东西远没有小的东西有价值"),
    new ChatScene(SHOULINGJIA, [
      "异世界的朋友，你也来了。正好，我们部落要讨论一件大事，你从那个什么异世界而来，见识广，说不定能有不错的主意。",
      "好的，请问你们在讨论什么呢。",
      "牧羊人，你和他说吧。",
      "是这样的，我们发现这样用羊来换大米，用面粉换羊的方法太麻烦了。",
      "是啊是啊，这我要是想去换点大米，还必须弄一只羊。",
      "还要把羊切成块。",
      "重点是屠夫还贼坑，帮忙切一只羊，他直接拿走了一大块作为酬劳。",
      "？？？我还在这呢，当着我面损我？",
      "而且，你两只手都用来拿羊了，也没法再拿什么东西作为酬劳啊。",
      "更何况，我就是要羊肉，我就是爱吃羊，哼。",
      "而且，羊肉放时间长了也不新鲜，拿着到处跑容易腐烂。",
      "别说羊肉了，就是那青菜，折腾几次也都蔫吧了。",
      "你们说的我都懂，但是，有没有什么好的办法解决呢？",
      "异世界的朋友， 你呢？有没有什么好的建议？",
      "我想想……",
      "(注意到首领桌子上发绿光的宝石)",
      "首领，请问这是什么？",
      "哦。这是绿宝石，一种很稀缺的矿物，也没什么用，主要是绿色的比较养眼，做个头饰什么的都挺不错的。",
      "这种宝石大家每个人都有吗？",
      "也不是，这东西没有什么用，也就我这里有几块，怎么，你喜欢？",
      "不是……我不太喜欢绿色……",
      "我是说，我们能不能用绿宝石换羊肉，再用大米，蔬菜之类的还绿宝石呢？",
      "那牧羊人拿着这么多绿宝石也没什么用啊，有东西只要还是用来戴在头上……",
      "不是的，牧羊人也可以用绿宝石换大米和蔬菜。",
      "我的意思是，一切东西都可以用来换绿宝石，绿宝石也可以用来换一切东西。",
      "但是，用一只羊换一块绿宝石，再用这块绿宝石换一袋大米，这明显吃亏呀！",
      "首领，你可以把绿宝石切成小块，比如一整块绿宝石切成十小块，然后用一小块换一袋大米，用十小块换一只羊。",
      "这个主意不错！",
      "这样也不用拿着羊到处跑了，绿宝石放不坏，正好。",
      "这样以后拿半块绿宝石让屠夫切肉，反正绿宝石什么都能换，看他还敢不敢哄抬刀价了。",
      "我还在这呢……",
      "我还想到一个好主意，我们可以用秤来秤这个绿宝石，最小的单位是块，重量是块的几倍，就是几块绿宝石。",
      "首领你智商终于在线了。",
      "你说什么？",
      "我说首领您英明神武！",
    ], [0, -1, 0, 3, 1, 2, 1, 5, 5, 5, 3, 4, 0, 0, -1, -1, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, 3, 1, 5, 0, -1, 0, -1], [SHOULING, CUNMINA, CUNMINB, MUYANGREN, NONGFU, TUFU], ["首领", "村民A", "村民B", "牧羊人", "农夫", "屠夫"]),
    new WordScene("从此，比特世界进入了使用一般等价物——绿宝石的时代"),
    new WordScene("绿宝石的使用极大地方便了人们的日常生活"),
    new WordScene("然而，好景不长...."),
    new ChatScene(CUNZHUANG, [
      "我的绿宝石昨天晚上不见了一块，找了好多地方都没找到，急死我了！",
      "那你可真惨。",
      "是啊，那还是一块很大的绿宝石，至少能换好几只羊，这下好了，我半年的努力全白费了！",
      "是啊是啊，你可真惨。",
      "这绿宝石的确解决了我们不少麻烦，但是也带来了新的麻烦。比如说这绿宝石虽然结实，但终究也会磨损，到称重的时候总是要吃亏。",
      "是呀，无论是携带还是分解，绿宝石总是会碎成小块的，那些小块的绿宝石实在是不容易收集起来。",
      "异世界的朋友，首领喊你过去一趟。",
      "首领叫我？好的，这就过去。",
    ], [0, 1, 0, 1, 2, 0, 3, -1], [CUNMINA, CUNMINB, NONGFU, MUYANGREN], ["村民A", "村民B", "农夫", "牧羊人"]),
    new WordScene("你赶去了首领家里"),
    new WordScene("李春：如无必要，勿增实体"),
    new ChatScene(SHOULINGJIA, [
      "唉，朋友，你之前的想法很好，我也认可你，但是现在看来不是那么乐观啊。",
      "怎么了？",
      "你应该也听到了，最近村民们一直在议论绿宝石的事情。我们用绿宝石来交易，究竟是好还是坏啊……",
      "有没有什么既能让村民少携带东西，又能保证大家的绿宝石不会无缘无故减少的方法呢？",
      "或许我们可以干脆不用绿宝石了？",
      "你是说再换成其他物品？除了绿宝石意外还有什么更合适的吗？",
      "不是的，我是说我们干脆什么都不用了，我们把每个人有多少绿宝石记录下来，然后再也不用这些绿宝石了。",
      "接着说。",
      "我们把绿宝石的交易记录记在本子上，然后把它保管在首领您这里，如果有村民之间要交易，就让两个人一起过来，把买东西的人的绿宝石转移到卖东西的人那里。",
      "这样问题就全部解决了！",
      "但是……如果有人偷了账本呢？",
      "这确实有可能发生……如果账本被偷了，大家了信息就都不见了，这样会给部落带来巨大的损失。",
      "同时，如果您……",
      "我更改了账本？",
      "我无意冒犯您，但您下一任，或者其他的哪一届首领，确实有可能作出这样的事情。",
      "是的，我们必须防患于未然。",
      "那究竟怎么办才好呢……",
    ], [0, -1, 0, 0, -1, 0, -1, 0, -1, 0, 0, -1, -1, 0, -1, 0, -1], [SHOULING], ["首领"]),
    new WordScene("此时，突然闯进来一个黑衣人"),
    new ChatScene(SHOULINGJIA, [
      "我有好的办法！",
      "你是谁，你是怎么进来的？",
      "我叫中本聪，在这个世界，哪里有Wi-Fi，哪里就有我！",
    ], [1, 0, 1], [SHOULING, ZHONGBENCONG], ["首领", "自称中本聪的黑衣人"]),

    /*


    new ChatScene(, [
      "",
    ], [0], [], [""]),


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
  nextScene() {
    this.screen.nextScene();
    this.screen.nextFrame();
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