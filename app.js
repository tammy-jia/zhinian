// ============ 静语库(按情绪分组)============
const QUOTES = {
  fire: [
    {
      zh: "以恨止恨,恨终不止;以爱止恨,恨乃自止。",
      en: "Hatred is never appeased by hatred. By love alone is it appeased.",
      src: "《法句经》",
      plain: "恨一个人的时候,你以为自己在反击,实际上是把那份恨留在了自己心里继续烧。对方可能早已走远,你却还在用恨惩罚自己。佛陀说的「以爱止恨」,意思更接近于——别让恨成为你心的主人。你可以选择不原谅,也可以选择不住在恨里。这两件事并不矛盾。",
      parable: "佛陀曾被一位婆罗门当面辱骂。佛陀静静听完,问他:「若你设宴款待客人,客人不动筷,这桌饭归谁?」婆罗门答:「自然归我。」佛陀说:「你今日骂我,我不接受,这些话也归你自己。」婆罗门怔在原地,转身离去。",
      parableSrc: "《杂阿含经》",
      action: "问自己一个问题:这份恨,如果继续带着走一周、一个月、一年,谁的日子会更难过?看清这一点之后,做三次深呼吸,把注意力从「他做了什么」移回到「我现在在哪里、身体什么感觉」。处理对方是一件遥远的事,回到自己是当下就能做的事。"
    },
    {
      zh: "一切有为法,如梦幻泡影,如露亦如电,应作如是观。",
      en: "All conditioned things are like dreams, illusions, bubbles, shadows.",
      src: "《金刚经》",
      plain: "让你愤怒的那件事,此刻在心里被反复放大,仿佛天塌下来。但所有的事——人际冲突、被怠慢、被误解——都在因缘里生灭流转,没有一样能停在原地不变。这不是叫你假装不在乎,而是提醒你:你正在用全部的力气,去对抗一个本来就会过去的东西。一年之后回头看,你会发现今天的事并没有当时感觉的那么重。",
      parable: "有人问赵州禅师:「世界纷扰,如何安心?」赵州说:「吃茶去。」那人不解,问的是大事,师父怎么让他喝茶?后来他才明白——茶喝完了,刚才那个紧抓不放的「大事」,也淡了一些。",
      parableSrc: "《五灯会元》",
      action: "给自己一个简单的动作:倒一杯温水,慢慢喝完。在喝的过程中,只关注水的温度和喉咙的感觉,什么都不想。喝完之后,再回头看刚才那件事——它还在,但你和它之间,多了一点点距离。这点距离,就是觉察的空间。"
    },
    {
      zh: "嗔心起处,即是觉时。",
      en: "Where anger arises, awareness is already present.",
      src: "禅门语",
      plain: "你能注意到自己在生气,这件事本身就比愤怒本身更重要。大多数时候,人是被情绪带着跑,直到事情搞砸了才反应过来。而你现在,在愤怒还没烧完的时候,已经停下来打开这个应用——这一刻,你已经从「被愤怒控制」变成了「看着愤怒」。这就是修行的开始,不是消灭情绪,而是看见情绪。",
      parable: "一位修行人问大珠禅师:「我嗔心难除,怎么办?」大珠说:「嗔从何处起?」修行人想了半天,答不上来。大珠说:「找不到起处,也就找不到落处。你执着它,它才有住的地方。」",
      parableSrc: "《大珠慧海禅师语录》",
      action: "把手放在自己的胸口或腹部,感受一下身体里愤怒的位置——是发热的胸口?紧的下颌?攥紧的拳头?不去评判,也不急着消除,只是「看见」它在那里。光是这个动作,就能让身体慢下来。你不是在对抗愤怒,你是在陪伴自己。"
    },
    {
      zh: "不思善,不思恶,正与么时,那个是明上座本来面目?",
      en: "Not thinking good, not thinking evil—at this very moment, what is your original face?",
      src: "《六祖坛经》",
      plain: "当你陷入「他错了,我对了」「他该被惩罚」的判断里时,心是紧的、是燃烧的。六祖问的「本来面目」,是在判断升起之前,那个还没有被「对错」染色的你——那个仅仅是在呼吸、在存在的你。愤怒从来不是问题,但被「我必须证明我对」绑架的愤怒,会让你忘记自己原本是谁。",
      parable: "慧明追上六祖,索要衣钵。六祖把衣钵放在石上说:「这衣钵代表的是法,岂能力争?你拿去吧。」慧明去提,竟提不动。他惊惧之下,改口求法。六祖说:「不思善,不思恶,这个时候,什么是你本来的面目?」慧明当下大悟。",
      parableSrc: "《六祖坛经》",
      action: "暂时把「谁对谁错」放在一边——不要放弃立场,只是先放下五分钟。然后问自己:「如果不需要证明任何事,我此刻最想要的是什么?」答案可能是「被理解」,可能是「休息一下」,可能是「一个拥抱」。愤怒底下,藏着一个更柔软的需要。看见它,你就拿回了主导权。"
    }
  ],

  anxious: [
    {
      zh: "心若不动,风又奈何;你若不伤,岁月无恙。",
      en: "If the mind does not stir, what can the wind do?",
      src: "禅门语",
      plain: "焦虑大部分时候不是来自正在发生的事,而是来自心里对未来的一千种假设。事情还没发生,你已经把所有坏结果在脑子里演完了一遍——身体也跟着紧张得像真的经历了一样。这句话提醒你:外面的风一直在吹,但风吹不动一棵根扎得深的树。安定不是来自外面平静,而是来自里面有根。",
      parable: "两个僧人争论:旗在动,还是风在动?六祖走过,说:「不是风动,不是旗动,是仁者心动。」一句话,两人都怔住了。",
      parableSrc: "《六祖坛经》",
      action: "找一个具体的、当下能感知的东西作为「锚」——可以是脚踩在地上的感觉、椅子托着你的感觉、或手指捏住自己手腕脉搏的感觉。在这个锚上停留一分钟,只感受它的存在。当心又开始飘到未来时,温柔地把它带回这个锚。锚住了,风再大也不怕。"
    },
    {
      zh: "竹影扫阶尘不动,月穿潭底水无痕。",
      en: "Bamboo shadows sweep the steps, yet no dust stirs; the moon pierces the pond, yet leaves no trace.",
      src: "《菜根谭》",
      plain: "你担心的那些事,大部分像竹影、像月光——看起来在动,在搅,但其实从未真正碰到你。心是台阶,是潭水;念头是竹影,是月光。台阶不会因为竹影扫过就脏了,潭水不会因为月光穿过就破了。你之所以累,是因为你把每一个掠过的念头都当成了真的入侵。",
      parable: "学僧问云门禅师:「如何是清净法身?」云门答:「花药栏。」学僧问:「怎么进入?」云门答:「金毛狮子。」答非所问,却也字字到位——清净不在别处,就在你眼前那一栏花、那只狮子。你看着它,但不被它困住。",
      parableSrc: "《云门广录》",
      action: "拿张纸,把此刻让你焦虑的事情一条条列出来。然后在每一条后面打一个标记:「✓ 现在能做点什么的」或「× 现在做不了的」。对「×」的那些,允许自己暂时把它们放在纸上,而不是放在心里。纸能承担的,你不必都用身体扛着。"
    },
    {
      zh: "未来心不可得,过去心不可得,现在心不可得。",
      en: "The mind of the past cannot be grasped; the mind of the future cannot be grasped; the mind of the present cannot be grasped.",
      src: "《金刚经》",
      plain: "焦虑的本质,是住在还没发生的事里。你不停地推演、预演、防备,但你推演的那个「未来的你」此刻并不存在,只有「现在的你」是真的。金刚经这三句话不是哲学绕口令,是在告诉你:你正在为一个抓不住的东西消耗自己。回到现在,不是因为现在更好,而是因为现在,是你唯一真正拥有的地方。",
      parable: "德山禅师精通《金刚经》,挑着自己的注疏去南方传法。途中向一位老婆婆买点心。老婆婆问:「经里说『三心不可得』,大师要点哪个心?」德山答不出。他这才明白:经文背得再熟,过不了一个卖点心的老婆婆。当晚,他烧掉了自己所有的注疏。",
      parableSrc: "《五灯会元》",
      action: "做一个小练习:说出你现在能看到的 5 样东西、能听到的 4 种声音、能感觉到的 3 处身体接触(衣服、椅子、地面)、能闻到的 2 种气味、能尝到的 1 种味道。这个练习叫「5-4-3-2-1」,它能在 90 秒内把你的神经系统从未来拉回现在。试一次,你会感觉到差别。"
    },
       {
      zh: "随处作主,立处皆真。",
      en: "Wherever you are, be the master there; wherever you stand, that is the true place.",
      src: "《临济录》",
      plain: "焦虑常常源于一种被动感——事情在推着你走,你只能被迫应对。临济禅师这句话,是把主动权还给你:无论现在身处什么处境,你都可以做自己的主人,而不是任由情境摆布。「作主」不是要控制一切,而是在你能掌控的那一点小事上,稳稳地立住。哪怕只是决定「我现在喝口水」「我现在站起来走两步」,那一刻你就不是被焦虑推着走,而是自己迈出了脚。",
      parable: "临济禅师说:「你在哪里,就在哪里做主。脚下站的地方,就是真实。」有人问他怎么修行,他答:「饿了吃饭,困了睡觉。」那人不解,说:「人人都这样啊。」临济说:「他们吃饭时百般思索,睡觉时千般计较——这就不是吃饭睡觉了。」",
      parableSrc: "《临济录》",
      action: "找出此刻你能完全掌控的一件小事——倒一杯水、整理桌面一角、把手机调成勿扰、给自己泡杯茶。不论多小,把它认真做完。在做的过程中,只专注这件事本身。做完之后告诉自己:「这一件,是我做主完成的。」一件一件地累积,你会重新感觉到地面在脚下。"
    }
  ],

  sad: [
    {
      zh: "应无所住,而生其心。",
      en: "Let the mind arise without abiding anywhere.",
      src: "《金刚经》",
      plain: "悲伤来了,允许它来;悲伤走时,允许它走。问题不在悲伤本身,而在我们试图「住」在某种状态里——要么死死抓住悲伤反复咀嚼,要么用力推开它假装没事。这句话告诉你:心是流动的,情绪是流动的,让它经过你,而不要让它定居在你这里。你不是你的悲伤,你是悲伤经过的那个空间。",
      parable: "六祖慧能本是个砍柴的樵夫。一日送柴到客店,听见有人诵《金刚经》,诵到「应无所住而生其心」,他当下心开。他没有读过经,却在这一句话里看见了自己——不被任何东西黏住的心,才是自由的心。",
      parableSrc: "《六祖坛经》",
      action: "给自己 10 分钟,什么都不做,只是让悲伤在身体里流动。它可能是胸口的发闷、眼眶的发热、喉咙的紧。不要分析它从哪里来,也不要急着让它走。把手放在最难受的地方,像安抚一个哭泣的孩子那样,对自己说:「我知道你在,我陪着你。」10 分钟之后,悲伤也许还在,但你已经不那么害怕它了。"
    },
    {
      zh: "诸行无常,是生灭法;生灭灭已,寂灭为乐。",
      en: "All formations are impermanent; their nature is to arise and pass. When arising and passing cease, peace is bliss.",
      src: "《涅槃经》",
      plain: "你现在心里的这份难过,看起来像永远不会过去,但事实是——它一定会过去。不是因为时间会冲淡一切这种鸡汤,而是因为这是这个世界的规律:任何升起的东西,都会落下。星辰、季节、呼吸、念头、悲伤,没有一样能停在原地。看懂这一点,你不是变得冷漠,而是不再害怕情绪本身——因为你知道,它来了,也终将走。",
      parable: "一位母亲抱着死去的孩子来求佛陀救活他。佛陀说:「可以,但你需要从一户从未死过人的人家,讨一粒芥子来。」母亲挨家挨户去问,问遍全城,没有一户人家没有失去过亲人。她最终明白了,把孩子安葬,出家修行。",
      parableSrc: "《法句经注》(吉莎乔答弥的故事)",
      action: "拿出纸笔,写下一句话:「这份悲伤,会过去。」不要试图说服自己马上相信它,只是写下来,看着它。然后写下你过去经历过的、已经过去的某次难过——那时你也以为过不去,但你过来了。提醒自己:你不是第一次悲伤,也不是第一次穿越悲伤。你比你以为的更有韧性。"
    },
    {
      zh: "烦恼即菩提。",
      en: "Affliction itself is awakening.",
      src: "《维摩诘经》",
      plain: "我们习惯把悲伤当作要消灭的「问题」,但禅宗看法很不一样——悲伤本身,就是觉悟的入口。一个从未哭过的人,理解不了什么是慈悲;一个从未失去过的人,理解不了什么是珍惜。你此刻的难过,不是要被擦掉的污点,它正在把你雕刻成一个更深、更柔软、更能理解他人的人。不要急着「好起来」,先允许自己「在这里」。",
      parable: "维摩诘居士生病,文殊菩萨前来探望。文殊问:「您的病从何而来?」维摩诘答:「众生病,所以我病。若众生病愈,我病也愈。」他的病不是肉身的病,是对众生苦难感同身受的「病」。能为众生而痛,本身就是觉悟。",
      parableSrc: "《维摩诘经》",
      action: "问自己一个问题:「这份悲伤,在教我看见什么?」也许是某段关系对你的真正分量,也许是某个被忽略已久的需要,也许是你一直没敢承认的某个真相。不用现在就找到答案,把问题放在心里。悲伤是带着信使的——你不赶它走,它才会把信交给你。"
    },
    {
      zh: "千江有水千江月,万里无云万里天。",
      en: "Where there is water in a thousand rivers, the moon reflects in all; where the sky is cloudless, it stretches ten thousand miles.",
      src: "《嘉泰普灯录》",
      plain: "悲伤的时候,我们容易觉得自己很孤单——好像全世界只有你一个人在这种黑暗里。但其实月亮一直都在,它照在你的水面上,也照在千万个此刻同样难过的人的水面上。你不是异类,你只是在经历人类共通的一种感受。当云散开,你会发现天本来一直都那么辽阔——你的悲伤是真的,但你不是被困住的。",
      parable: "有人问玄沙禅师:「学人初入丛林,乞师指示一条路。」玄沙说:「你听到溪水声了吗?」那人答:「听到了。」玄沙说:「从这里入。」声音一直都在,路一直都在,只是你之前没听见。",
      parableSrc: "《五灯会元》",
      action: "如果可以,走到窗边或户外,抬头看一下天空——不管是白天的云、傍晚的霞、还是夜里的月。看一分钟就好。提醒自己:此刻,有无数人也在看着同一片天空,也在经历着自己的难过。你不是一个人在这个世界上扛着这些。你和很多人,共享着同一片天。"
    }
  ],
  shame: [
    {
      zh: "本来无一物,何处惹尘埃。",
      en: "Originally there is not a single thing—where could dust alight?",
      src: "《六祖坛经》",
      plain: "羞愧让你觉得自己有问题、有污点、不配。但六祖这句话指向一个更根本的真相:你本来就是干净的。所谓的「不堪」「不配」「丢人」,是后来贴上去的标签,不是你本来的样子。你今天做错的事,可以承担、可以修正,但它不等于你这个人。把「我做了一件不好的事」和「我是一个不好的人」分开——前者可以处理,后者是一个不公平的判决。",
      parable: "五祖让弟子作偈呈见。神秀写:「身是菩提树,心如明镜台,时时勤拂拭,勿使惹尘埃。」六祖慧能不识字,请人代写:「菩提本无树,明镜亦非台,本来无一物,何处惹尘埃。」五祖夜半秘密传衣钵给慧能——因为他看见了「无需擦拭」的那一层。",
      parableSrc: "《六祖坛经》",
      action: "把「我是一个 ___ 的人」这种判决,改写成「我做了一件 ___ 的事」。比如把「我是个失败者」改成「我这次没做成」,把「我是个糟糕的人」改成「我刚才说了一句伤人的话」。改写的过程,是把你从「人」的层面解救出来,放回到「事」的层面。事是可以处理的,人是不该被定罪的。"
    },
    {
      zh: "归元性无二,方便有多门。",
      en: "The source has no duality; only the methods are many.",
      src: "《楞严经》",
      plain: "羞愧常常源于一种比较——别人都做到了,只有我没做到;别人都活得光鲜,只有我这么糟。但每个人走向同一个「好好活着」的方向,路径完全不同。有人少年得志,有人大器晚成;有人靠勤奋,有人靠机遇;有人在顺境里学会感恩,有人在挫败里学会慈悲。你绕的远路、走的弯路,不是你不够好的证据,而是你自己的路。",
      parable: "五百比丘各自陈述自己悟道的入口——有的从眼根,有的从耳根,有的从呼吸,有的从触觉。文殊菩萨听完后说,在这个世界,通过耳根听闻最容易入门,所以观音菩萨的法门最契合此方众生。每个人都从自己最近的那扇门进。",
      parableSrc: "《楞严经》",
      action: "写下三件你最近一年做成的事——不论多小。可能是「坚持每天起床」「照顾了某个人」「学会了一项新技能」「在难过时没有伤害自己」。羞愧让你只看见缺失,这个练习是让你重新看见自己已经走过的路。你不是从零开始,你已经走了很远。"
    },
    {
      zh: "佛性常清净,何处有尘埃?",
      en: "Buddha-nature is forever pure—where could dust be?",
      src: "《六祖坛经》",
      plain: "羞愧的最深层,是觉得自己「坏掉了」、「修不好了」。但禅宗的核心信念是:你最里面的那个东西——觉性、本心、佛性——从来没有被污染过,也不可能被污染。表面的尘可以擦,深处的金从未失去光泽。你做过的错事是真的,但它们没有伤到你的本质。能感到羞愧,本身就说明你心里的那盏灯还亮着——一个真正「坏」的人,是不会羞愧的。",
      parable: "一位弟子向赵州哭诉自己罪业深重。赵州问:「你的罪业现在在哪里?」弟子愣住了,找不到。赵州说:「找不到,就放下吧。」罪业是念头,不是实物;放不下,是因为你一直在举着它。",
      parableSrc: "《赵州禅师语录》",
      action: "做一个简单的练习:把右手放在自己的胸口,左手放在腹部。慢慢地呼吸三次。然后对自己说一句话:「我今天做错了一些事,但我没有坏掉。」说出口,或者只是在心里说。重复三次。这不是自我安慰,是在重新校准你和自己的关系——你可以是一个有缺点的人,同时也是一个值得被自己善待的人。"
    },
    {
      zh: "放下屠刀,立地成佛。",
      en: "Lay down the blade—in this very moment, awaken.",
      src: "禅门语",
      plain: "这句话常被误解为「做了坏事的人才需要放下」,但它真正的含义是:无论你过去做过什么,你都可以在「此刻」开始转向。「立地」两个字很重要——不是等你赎清了所有的罪、不是等你变好了之后,而是就在你放下的这一刻,你已经在新的方向上了。羞愧让你觉得自己永远不配重来,但禅宗说,重来从不需要资格,只需要一个转身。",
      parable: "有一名屠夫一生杀生无数,晚年听闻佛法,放下屠刀,跪地忏悔。旁人讥笑:「你罪业深重,岂能成佛?」屠夫答:「我前半生杀生,是因为我不知;现在我知道了,我便不再杀。我的『不再杀』,和从未杀过的人的『不杀』,有什么不同?」",
      parableSrc: "禅门公案",
      action: "找一件你今天就可以做的小事,作为你「转身」的标记——可以是给某个被你冷落的人发一句问候,可以是把拖了很久的某件小事做完,可以是认真地吃完一顿饭。不要等「准备好了」再开始。从「现在」开始,本身就是最重要的那一步。你不需要先变成一个完美的人,才能开始好好活着。"
    }
  ],

  numb: [
    {
      zh: "平常心是道。",
      en: "Ordinary mind is the Way.",
      src: "《无门关》",
      plain: "麻木的时候,我们常常以为是因为自己「出了问题」——为什么我感觉不到快乐?为什么我对什么都提不起劲?但赵州的「平常心」告诉你:不一定每一刻都要有强烈的感受,平淡本身也是生活的一部分。你不需要时刻热血、时刻感动、时刻有意义感。允许自己只是在这里——吃饭、走路、睡觉,什么都不感觉,也没关系。麻木不是病,它是身心在保护你、在休息。",
      parable: "赵州问南泉:「如何是道?」南泉答:「平常心是道。」赵州又问:「还可趣向也无?」(还能朝它走去吗?)南泉说:「拟向即乖。」(一旦想朝它走,就已经偏了。)道不在远处,就在你此刻这颗不动声色的平常心里。",
      parableSrc: "《无门关》",
      action: "今天不要逼自己「振作」,也不要逼自己「感受」。给自己一个许可:就让自己平淡地过这一天。做一件最基本的事——比如好好吃一顿饭,慢慢地嚼,感受食物的温度和质地。不需要享受,不需要感动,只是「在那里」。能好好吃完一顿饭,已经是今天的修行。"
    },
    {
      zh: "饥来吃饭,困来即眠。",
      en: "When hungry, eat; when tired, sleep.",
      src: "《大珠慧海禅师语录》",
      plain: "麻木常常伴随着对自己的责备——「我应该更努力」「我应该更有热情」「我不应该这样浑浑噩噩」。但禅师说,真正的修行不是逼自己达到某种状态,而是把基本的事情认真做好。饿了就吃,困了就睡——听起来简单,但麻木的人往往连这个都做不到:饿了不知道吃,困了不肯睡,身体的信号被忽略,人就更空洞。回到身体的基本节律,是从麻木走出来的第一步。",
      parable: "有人问大珠禅师:「师父修道,用功否?」大珠答:「用功。」「如何用功?」「饥来吃饭,困来即眠。」「一切人都这样,跟师父用功一样吗?」大珠说:「不同。他们吃饭时不肯吃饭,百种须索;睡时不肯睡,千般计较。」",
      parableSrc: "《大珠慧海禅师语录》",
      action: "今天只做一件事:在饿的时候认真吃,在困的时候认真睡。吃饭时不刷手机,只是吃;睡觉时不熬夜,只是睡。如果做不到全部,至少做到一顿饭、一次午睡。这不是消极,这是把你的身体重新接回地面。麻木的人需要的不是更多的刺激,而是更稳的根。"
    },
    {
      zh: "不风流处也风流。",
      en: "Even where there is no charm, there is charm.",
      src: "《碧岩录》",
      plain: "我们总以为生活要「精彩」才值得过——要有激情、要有意义、要有让人羡慕的瞬间。但禅宗说,真正的「风流」恰恰在不刻意追求风流的时候。你此刻的平淡、无聊、提不起劲,本身也是生活的一部分,不比任何「精彩时刻」低一等。麻木的人不是没有生活,而是被「生活该是什么样」的标准困住了。放下那个标准,你才会发现——一杯水、一阵风、一缕光,本来就够了。",
      parable: "有人问云门禅师:「如何是佛?」云门答:「干屎橛。」(一根擦屁股的木条。)这个答案不是亵渎,而是在说:佛不在高远处,就在最平凡、最不起眼的东西里。你不需要去远方寻找意义,意义就在你身边那些「不风流」的小事里。",
      parableSrc: "《云门广录》",
      action: "找一样你身边最普通的东西——一只杯子、一支笔、一片树叶。认真地看它一分钟。看它的形状、颜色、纹理、光在它身上的样子。不要去想它「有什么用」「值不值得看」,只是看。一分钟之后,你会发现:它一直在这里,只是你一直没看见。意义不是去找来的,是看见的。"
    },
    {
      zh: "一花一世界,一叶一如来。",
      en: "In one flower, a whole world; in one leaf, the Buddha.",
      src: "《华严经》义",
      plain: "麻木的本质,是和世界之间的连接断了——什么都进不来,也什么都出不去。这句话提醒你:不需要伟大的事件来重新唤醒你,一朵花、一片叶子里,就藏着整个宇宙的丰盛。重新连接的方式不是去找更大的刺激,而是把感官重新打开,在最小的事物里发现整个世界。你的麻木不是因为世界变得无聊了,而是因为你看世界的眼睛累了。让眼睛先休息,然后重新看。",
      parable: "佛陀在灵山会上,默然不语,只拈起一朵花。众弟子茫然,唯有迦叶尊者破颜微笑。佛陀说:「吾有正法眼藏,涅槃妙心,实相无相,微妙法门,付嘱摩诃迦叶。」一朵花,传了整个佛法。",
            parableSrc: "《大梵天王问佛决疑经》",
      action: "走到离你最近的一扇窗前,或者拿起手边一样有生命迹象的东西(一盆植物、一只水果、甚至一杯水里反射的光)。看着它,问自己:「它此刻在做什么?」——叶子在呼吸,水果在慢慢变熟,光在不停地变化。看一会儿,你会发现:就算你什么都感觉不到的时候,生命还在不停地进行。你不需要追上它,你只需要看见它一直都在。"
    }
  ]
};

const EMOTION_GROUP = {
  "愤怒": "anger", "烦躁": "anger", "委屈": "anger",
  "焦虑": "fear", "恐惧": "fear", "不安": "fear",
  "悲伤": "sadness", "失落": "sadness", "孤独": "sadness",
  "嫉妒": "craving", "不甘": "craving", "渴望": "craving",
  "麻木": "numb", "空虚": "numb", "疲惫": "numb"
};

const EMOTIONS = [
  ["愤怒", "烦躁", "委屈"],
  ["焦虑", "恐惧", "不安"],
  ["悲伤", "失落", "孤独"],
  ["嫉妒", "不甘", "渴望"],
  ["麻木", "空虚", "疲惫"]
];

let state = {
  step: 0, event: "", emotion: "", intensity: 5,
  expectation: "", fear: "", quote: null, reframe: ""
};

const app = document.getElementById("app");
// ============ 工具函数 ============
function stepHeader(n, zh, en) {
  return `
    <div class="step-header">
      <div class="step-num">${n} / 6</div>
      <div class="step-title-zh">${zh}</div>
      <div class="step-title-en">${en}</div>
    </div>
  `;
}

function escapeHtml(s) {
  return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function nl2br(s) {
  return escapeHtml(s).replace(/\n/g, "<br/>");
}

// ============ 首页 ============
function renderHome() {
  state = { step: 0, event: "", emotion: "", intensity: 5, expectation: "", fear: "", quote: null, reframe: "" };
  const allQuotes = Object.values(QUOTES).flat();
  const daily = allQuotes[Math.floor(Math.random() * allQuotes.length)];

  app.innerHTML = `
    <div class="screen home">
      <div class="title">
        <div class="title-zh">知 念</div>
        <div class="title-en">Mindful Witness</div>
      </div>
      <div class="daily-quote">
        <div class="daily-zh">${daily.zh}</div>
        <div class="daily-en">${daily.en}</div>
        <div class="daily-src">— ${daily.src}</div>
      </div>
      <button class="candle-btn" onclick="startFlow()">
        <span class="candle-glow"></span>
        <span class="candle-text">记录此刻</span>
      </button>
      <a class="history-link" onclick="renderHistory()">过往觉察 ›</a>
    </div>
  `;
}

// ============ 呼吸过渡 ============
function startFlow() {
  app.innerHTML = `
    <div class="screen breath">
      <div class="breath-circle"></div>
      <div class="breath-text">先深呼吸三次</div>
      <div class="breath-sub">Breathe</div>
      <button class="text-btn breath-next" onclick="renderStep1()">准备好了 ›</button>
    </div>
  `;
}

// ============ 步骤 1:此刻 ============
function renderStep1() {
  state.step = 1;
  app.innerHTML = `
    <div class="screen">
      ${stepHeader(1, "此刻", "What is happening")}
      <div class="prompt">像在讲一个别人的故事,<br/>发生了什么?</div>
      <textarea id="input-event" placeholder="此刻发生了什么……">${escapeHtml(state.event)}</textarea>
      <div class="nav">
        <button class="text-btn" onclick="renderHome()">‹ 返回</button>
        <button class="primary-btn" onclick="saveStep1()">下一步 ›</button>
      </div>
    </div>
  `;
}
function saveStep1() {
  state.event = document.getElementById("input-event").value.trim();
  if (!state.event) { alert("请先写一点点。"); return; }
  renderStep2();
}

// ============ 步骤 2:情绪 ============
function renderStep2() {
  state.step = 2;
  const emotionsHtml = EMOTIONS.map(group =>
    `<div class="emotion-row">${group.map(e =>
      `<button class="emotion-chip ${state.emotion === e ? 'selected' : ''}" onclick="selectEmotion('${e}')">${e}</button>`
    ).join('')}</div>`
  ).join('');

  app.innerHTML = `
    <div class="screen">
      ${stepHeader(2, "情绪", "Name the feeling")}
      <div class="prompt">给这份感受一个名字。</div>
      <div class="emotions">${emotionsHtml}</div>
      <div class="intensity-block ${state.emotion ? '' : 'hidden'}" id="intensity-block">
        <div class="intensity-label">强度 <span id="intensity-val">${state.intensity}</span> / 10</div>
        <input type="range" id="intensity" min="1" max="10" value="${state.intensity}" oninput="document.getElementById('intensity-val').textContent=this.value;state.intensity=parseInt(this.value)"/>
      </div>
      <div class="nav">
        <button class="text-btn" onclick="renderStep1()">‹ 上一步</button>
        <button class="primary-btn" onclick="saveStep2()">下一步 ›</button>
      </div>
    </div>
  `;
}
function selectEmotion(e) {
  state.emotion = e;
  document.querySelectorAll(".emotion-chip").forEach(b => {
    b.classList.toggle("selected", b.textContent === e);
  });
  document.getElementById("intensity-block").classList.remove("hidden");
}
function saveStep2() {
  if (!state.emotion) { alert("请选择一个情绪。"); return; }
  renderStep3();
}

// ============ 步骤 3:期待 ============
function renderStep3() {
  state.step = 3;
  app.innerHTML = `
    <div class="screen">
      ${stepHeader(3, "期待", "The expectation")}
      <div class="prompt">这份情绪之下,<br/>你原本期待的是什么?</div>
      <div class="hint">"我希望……" / "我以为……" / "本该……"</div>
      <textarea id="input-exp" placeholder="我原本希望……">${escapeHtml(state.expectation)}</textarea>
      <div class="nav">
        <button class="text-btn" onclick="renderStep2()">‹ 上一步</button>
        <button class="primary-btn" onclick="saveStep3()">下一步 ›</button>
      </div>
    </div>
  `;
}
function saveStep3() {
  state.expectation = document.getElementById("input-exp").value.trim();
  if (!state.expectation) { alert("请写下你的期待。"); return; }
  renderStep4();
}

// ============ 步骤 4:恐惧 ============
function renderStep4() {
  state.step = 4;
  app.innerHTML = `
    <div class="screen">
      ${stepHeader(4, "恐惧", "The fear beneath")}
      <div class="prompt">如果这份期待落空,<br/>你最深处害怕的是什么?</div>
      <div class="hint">"我怕……" / "这意味着……"</div>
      <textarea id="input-fear" placeholder="我害怕的其实是……">${escapeHtml(state.fear)}</textarea>
      <div class="nav">
        <button class="text-btn" onclick="renderStep3()">‹ 上一步</button>
        <button class="primary-btn" onclick="saveStep4()">下一步 ›</button>
      </div>
    </div>
  `;
}
function saveStep4() {
  state.fear = document.getElementById("input-fear").value.trim();
  if (!state.fear) { alert("慢慢来,试着写一点。"); return; }
  renderStep5();
}
// ============ 步骤 5:静语(按情绪取,有停顿)============
function renderStep5() {
  const pool = QUOTES[state.emotion] || QUOTES.fire;
  if (!state.quote) {
    state.quote = pool[Math.floor(Math.random() * pool.length)];
  }
  const q = state.quote;

  app.innerHTML = `
    <div class="quote-screen fade-in">
      <div class="step-label">第五步 · 静语 / Stillness</div>

      <div class="quote-frame">
        <div class="quote-ornament">❋</div>
        <div class="quote-zh">${q.zh}</div>
        <div class="quote-en">${q.en}</div>
        <div class="quote-src">— ${q.src}</div>
      </div>

      <button class="annot-toggle" id="annotToggle">
        <span class="annot-toggle-text">展开注解</span>
        <span class="annot-toggle-en">Unfold the commentary</span>
      </button>

      <div class="annot-wrap" id="annotWrap">
        <div class="annot-block">
          <div class="annot-label">白话 · In plain words</div>
          <div class="annot-text">${q.plain}</div>
        </div>

        <div class="annot-block annot-parable">
          <div class="annot-label">公案 · A parable</div>
          <div class="annot-text">${q.parable}</div>
          <div class="annot-src">— ${q.parableSrc}</div>
        </div>

        <div class="annot-block annot-action">
          <div class="annot-label">此刻可以做的 · What you can do now</div>
          <div class="annot-text">${q.action}</div>
        </div>
      </div>

      <div class="quote-hint" id="quoteHint">静坐片刻 / Stay a while</div>
      <button class="primary-btn hidden" id="quoteNext">
        <span class="btn-zh">继续</span>
        <span class="btn-en">Continue</span>
      </button>
    </div>
  `;

  // 折叠展开
  const toggle = document.getElementById('annotToggle');
  const wrap = document.getElementById('annotWrap');
  const toggleText = toggle.querySelector('.annot-toggle-text');
  const toggleEn = toggle.querySelector('.annot-toggle-en');
  toggle.addEventListener('click', () => {
    const open = wrap.classList.toggle('open');
    toggleText.textContent = open ? '收起注解' : '展开注解';
    toggleEn.textContent = open ? 'Fold back' : 'Unfold the commentary';
  });

  // 12 秒后显示「继续」按钮
  setTimeout(() => {
    const hint = document.getElementById('quoteHint');
    const next = document.getElementById('quoteNext');
    if (hint) hint.classList.add('hidden');
    if (next) {
      next.classList.remove('hidden');
      next.addEventListener('click', () => { state.step = 6; render(); });
    }
  }, 12000);
}

// ============ 步骤 6:重新看见 ============
function renderStep6() {
  state.step = 6;
  app.innerHTML = `
    <div class="screen">
      ${stepHeader(6, "重新看见", "Look again")}
      <div class="prompt">现在,试着用新的眼睛<br/>看看刚才那件事。</div>
      <div class="hint">不必强求改变,只是看看。</div>
      <textarea id="input-reframe" placeholder="此刻我看到……">${escapeHtml(state.reframe)}</textarea>
      <div class="nav">
        <button class="text-btn" onclick="renderStep5()">‹ 上一步</button>
        <button class="primary-btn" onclick="saveAndFinish()">完成 ›</button>
      </div>
    </div>
  `;
}

// ============ 保存 + 觉察轨迹页 ============
function saveAndFinish() {
  state.reframe = document.getElementById("input-reframe").value.trim();
  if (!state.reframe) { alert("写一句也好。"); return; }

  const record = {
    time: Date.now(),
    event: state.event,
    emotion: state.emotion,
    intensity: state.intensity,
    expectation: state.expectation,
    fear: state.fear,
    quote: state.quote,
    reframe: state.reframe
  };
  const history = JSON.parse(localStorage.getItem("zhinian_history") || "[]");
  history.unshift(record);
  localStorage.setItem("zhinian_history", JSON.stringify(history));

  renderTrace(record);
}

function renderTrace(r) {
  app.innerHTML = `
    <div class="screen trace">
      <div class="trace-title">
        <div class="trace-title-zh">你看见了</div>
        <div class="trace-title-en">What you witnessed</div>
      </div>

      <div class="trace-block">
        <div class="trace-label">此刻 · Moment</div>
        <div class="trace-content">${nl2br(r.event)}</div>
      </div>

      <div class="trace-block">
        <div class="trace-label">情绪 · Feeling</div>
        <div class="trace-content">${r.emotion} <span class="trace-dim">· 强度 ${r.intensity}/10</span></div>
      </div>

      <div class="trace-block">
        <div class="trace-label">期待 · Expectation</div>
        <div class="trace-content">${nl2br(r.expectation)}</div>
      </div>

      <div class="trace-block">
        <div class="trace-label">恐惧 · Fear</div>
        <div class="trace-content">${nl2br(r.fear)}</div>
      </div>

      <div class="trace-block trace-quote">
        <div class="trace-label">静语 · Stillness</div>
        <div class="trace-content trace-q-zh">${r.quote.zh}</div>
        <div class="trace-q-en">${r.quote.en}</div>
        <div class="trace-q-src">— ${r.quote.src}</div>
      </div>

      <div class="trace-block trace-reframe">
        <div class="trace-label">重新看见 · A new seeing</div>
        <div class="trace-content trace-r-text">${nl2br(r.reframe)}</div>
      </div>

      <div class="trace-end">
        <div class="trace-circle">◯</div>
        <div class="trace-wish-zh">愿你安住</div>
        <div class="trace-wish-en">May you rest in stillness</div>
      </div>

      <div class="nav nav-center">
        <button class="primary-btn" onclick="renderHome()">回到首页</button>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

// ============ 历史 ============
function renderHistory() {
  const history = JSON.parse(localStorage.getItem("zhinian_history") || "[]");
  if (history.length === 0) {
    app.innerHTML = `
      <div class="screen">
        <div class="step-header">
          <div class="step-title-zh">过往觉察</div>
          <div class="step-title-en">Past witnessings</div>
        </div>
        <div class="empty">还没有记录。</div>
        <div class="nav nav-center">
          <button class="primary-btn" onclick="renderHome()">回到首页</button>
        </div>
      </div>
    `;
    return;
  }

  const items = history.map((r, i) => `
    <div class="history-item" onclick="viewHistory(${i})">
      <div class="history-date">${new Date(r.time).toLocaleString('zh-CN', {month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'})}</div>
      <div class="history-emotion">${r.emotion} · ${r.intensity}/10</div>
      <div class="history-preview">${escapeHtml(r.event).slice(0, 40)}${r.event.length > 40 ? '…' : ''}</div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="screen">
      <div class="step-header">
        <div class="step-title-zh">过往觉察</div>
        <div class="step-title-en">Past witnessings</div>
      </div>
      <div class="history-list">${items}</div>
      <div class="nav nav-center">
        <button class="text-btn" onclick="renderHome()">‹ 返回</button>
      </div>
    </div>
  `;
}

function viewHistory(i) {
  const history = JSON.parse(localStorage.getItem("zhinian_history") || "[]");
  if (history[i]) renderTrace(history[i]);
}

// ============ 启动 ============
renderHome();
