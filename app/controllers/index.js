
/*
 * GET home page.
 */
var mongoose = require('mongoose'),
    User = require('../models/user.js'),
    fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: '天開藏聆・異想盧經堂厝' });
};

exports.real_name = function(req, res){
  console.log(req.params.page);
  // parse a json, return the correct page real_name
  res.json({test: [1, 2, 3]});
}

exports.menu = function(req, res){

  var public_url = "/images/menu/dish/"

  res.json( { 

    cover: {
      title: "伸春餘",
      subtitle: "食堂",
      description: [
      "我們把關品質口感，選用優質食材與澄淨水質，", 
      "呈現最純淨真實的美味，期望從舌尖回歸人與人自然純粹的關係。", 
      "請與我們一起品味純真，從味蕾顫動到心靈深處。"]
    },
    data: {
      food: {
        name: "輕食熟食", 
        items: [
        { name: '玉簡藏春', real_name: '香蕉水果捲', 
          description:'薄透的潤餅皮包裹一整根完整的香蕉，灑上些許花生粉及長條小黃瓜，凸顯香蕉本身豐盈的香甜。', 
          origin: ['潤餅皮展開捲起，形似書簡，色澤溫潤剔透如玉，裹成春捲，藏覆了滿滿的好味道。'],
          price: 100, url: public_url + '玉簡藏春.jpg' },
        { name: '聚寶連心', real_name: '米糕', 
          description:'糯米的黏性揉合飽實的鷹嘴豆，搭配旁邊的醃大頭菜，酸鹹的滋味令人食指大動，一解你的米食渴望。', 
          origin: ['米糕鑲嵌多種食材，便如聚寶一般。再取其中一個食材「雪蓮子」的諧音，稱作「 連心」。'],
          price: 50, url: public_url + '聚寶連心.jpg' },
        { name: '采階透玉', real_name: '蘿蔔糕', 
          description:'綿密軟細的蘿蔔糕在口中慢慢化開，帶出清甜的蘿蔔韻味與濃厚米香，卻沒有一絲油膩，只餘下甘甜清爽在舌尖迴盪。', 
          origin: ['一塊一塊的蘿蔔糕，如同玉製石階般層層疊起，「采透」則藏了「菜頭」二字，暗示其原料與香氣。'],
          price: 50, url: public_url + '采階透玉.jpg' },
        // { name: '紫玉裹珍', real_name: '芋粿', 
        //   description:'',
        //   origin:'芋粿用料實在，譬若藏珍；色澤微紫，又如白玉。並且藏「芋粿」於「玉裹」二字之中。', 
        //   price: 50, url: public_url + '紫玉裹珍.jpg' },
        { name: '滿圓餘福', real_name: '魚丸湯', 
          description:'安平海港的味道，鎖進大大小小的魚丸之中，與甘甜的白蘿蔔一起熬煮，滿滿都是大海的鮮甜與土地的樸實。', 
          origin: ['取魚丸另稱魚圓，藏於「餘」「圓」二字之中，期望帶出滿足幸福的充實感受。'],
          price: 50, url: public_url + '滿圓餘福.jpg' },
        { name: '赤瓦吐金', real_name: '炭烤地瓜', 
          description:'悶烤一夜的地瓜，內餡在高溫的催化下，由金黃轉為褐色的閃亮焦糖，增添焦香的地瓜更讓人難以抗拒。', 
          origin: ['地瓜在燒得赤紅的瓦罐中，炭烤至金黃，以此意象命名。'],
          price: 50, url: public_url + '赤瓦吐金.jpg' }
        // ,{ name: '沉香綿心', real_name: '溏心蛋', 
        //   description:'新鮮雞蛋在滷汁中緩慢重生，老滷汁漸漸沁入蛋心，奶油般口感的蛋黃，更讓滷香在嘴裡濃烈無法消散。', 
        //   origin: [''],
        //   price: 50, url: public_url + '沉香綿心.jpg' }
        ]
      },
      drink: {
        name: "冷熱飲品", 
        items: [
        { name: '盼得春來', real_name: '水果茶', 
          description:'熬煮一夜的新鮮鳳梨，搭配爽脆的蘋果丁，在巧妙的酸甜平衡中跳動，每一口都是水果真實的滋味。', 
          origin: ['「先春」一詞為茶葉的異名，亦能譬喻水果的香甜氣息。一杯水果茶，便盛滿了春意。'],
          price: 100, hot: false, url: public_url + '盼得春來.jpg'},
        { name: '畫眉嫁紅', real_name: '番茄話梅', 
          description:'粒實飽滿的新鮮番茄與酸甜的話梅融為一體，清爽的汁液滲入喉嚨，解消所有的乾渴暑氣。', 
          origin: ['「畫眉」藏「話梅」，與番茄兩股鮮紅相伴而成，如同新人嫁娶，富含吉祥之意。'],
          price: 100, hot: false, url: public_url + '畫眉嫁紅.jpg' },
        { name: '醇脂郁蜜', real_name: '香蕉牛奶', 
          description:'新鮮的香蕉變換姿態，讓濃郁的牛奶包裹自身的香甜，慢慢在口中四溢而出，香氣餘繞在嘴裡。', 
          origin: ['牛奶醇厚的脂香，配上香蕉濃郁的蜜意，在嘴中迴盪不去。'],
          price: 100, hot: false, url: public_url + '醇脂郁蜜.jpg' },
        { name: '金焙銀釀', real_name: '炭烤地瓜牛奶', 
          description:'重新詮釋傳統的炭烤地瓜，用牛奶包裹住地瓜的焦炭香，在嘴裡溫和的釋放出來，口中充滿地瓜的焦糖香氣。', 
          origin: ['地瓜為金、牛奶為銀，一個在烈火中焙、一個在舌尖上釀，搭配起來溫和香甜。'],
          price: 100, hot: false, url: public_url + '金焙銀釀.jpg' },
        // { name: '暖陽細熬', real_name: '薑母茶', 
        //   description:'',
        //   origin:'細細熬煮的薑母茶如同暖陽一般，一口喝下，全身便熱烘烘的。', 
        //   price: 100, hot: true, url: public_url + '暖陽細熬.jpg' },
        { name: '墨渲霜融', real_name: '一口咖啡', 
          description:'滑順的冰奶油，溫柔包裹滾燙的咖啡，醇厚的咖啡香與濃郁奶香，混合了外層的冰糖漿，黑白冰火的衝突在嘴裡交織，久久不捨吞下這一口幸福。', 
          origin: ['取咖啡與鮮奶油的顏色，一黑一白、一火一冰，強烈的對比打在口中，如霜雪墨暈般融化渲染。'],
          price: 100, hot: true, url: public_url + '墨渲霜融.jpg' },
        { name: '天晴苦盡', real_name: '希望咖啡', 
          description:'希望咖啡的咖啡豆產於寮國迪爾它咖啡莊園，不受貿易商剝削，收入全被用於資助寮國的希望小學。在希望咖啡的香氣背後，更有滿滿的愛。', 
          origin: ['咖啡的苦韻在嘴裡消散後，期待希望小學的孩子們，都能露出晴天般的燦爛笑容。'],
          price: 150, hot: true, url: public_url + '天晴苦盡.jpg' }
        ]
      },
      // set: {
      //   name: "套餐", 
      //   items: [
      //   { name: '套餐', real_name: '玉簡藏春 + 聚寶連心 + 赤瓦吐金 + 沉香綿心 + 咖啡外飲品擇一', 
      //     description:'同時品嘗香蕉水果捲、米糕、炭烤地瓜、溏心蛋與一種飲品，各種口感風味互相激盪，讓人驚喜不斷、心滿意足！', 
      //     origin: [''],
      //     price: 200, url: public_url + '套餐.jpg' }
      //   ]
      // }
      set: {
        name: "套餐", 
        items: [
        { name: '套餐', real_name: '玉簡藏春 + 聚寶連心 + 赤瓦吐金 + 咖啡外飲品擇一', 
          description:'同時品嘗香蕉水果捲、米糕、炭烤地瓜與一種飲品，各種口感風味互相激盪，讓人驚喜不斷、心滿意足！', 
          origin: [''],
          price: 200, url: public_url + '套餐.jpg' }
        ]
      }
  }});
}

exports.art = function(req, res){

  var public_url = "/images/art/work/"


  res.json( { 

    cover: {
      title: "伸春餘",
      subtitle: "文創品",
      description: [
      "我們把關品質口感，選用優質食材與澄淨水質，", 
      "呈現最純淨真實的美味，期望從舌尖回歸人與人自然純粹的關係。", 
      "請與我們一起品味純真，從味蕾顫動到心靈深處。"]
    },
    data: {
      art: {
        name: "眼耳", 
        items: [
        { name: '楊洔・七轉八起', real_name: '禪畫明信片', 
          description:'人生中經常圍繞著「稱、譏、毀、譽、利、衰、苦、樂」八種境界，八境所轉，自我當下，轉識為智，轉苦為樂。\
          借畫引本有清淨心；積極向上，永不退縮氣度，轉七下為八上，束縛轉為自在。', 
          origin: [
          '本名楊世甫，民國四十一年生於台南縣將軍鄉嘔汪，與生俱來繪畫宿慧，未受美術學校訓練，法師自然和古今方家，水墨創作三十數年。', 
          '',
          '1999年，自印度雲遊回台，禪境入畫，拙樸簡單。',
          '2000年，「心靈畫展」個展，元旦台北市社教館，3月高雄市政府，8月台北市國父紀念館德明藝廊邀請個展，10月配合行政院衛生署，巡迴全國各縣市署立醫院。',
          '2002年，「清涼畫展」個展，巡迴各縣市文化局。',
          '2006年，「指月畫展」巡迴個展。',
          '2009年，「楊世甫禪畫展」，巡迴各縣市文化局。',
          '2011年，「寬，彧禪畫展」，元旦屏東縣文化局，2月新竹縣文化局，3月嘉義市文化局，4、5月高雄義大醫院，6月高雄醫學院醫院。',
          '2012年，「寬，彧禪畫展」，元旦彰化縣文化局， 3-5月台中市政府，6月秀傳醫院人文藝術館。', 
          '2013年，「寬，彧禪畫展」，3月宜蘭縣文化局，7月雲林縣文化局，8月鹿港藝文館，9月台北國父紀念館德明藝廊個展。'
          ],
          price: -1, url: public_url + '楊洔・七轉八起.jpg' },
        { name: '阿貴柴燒', real_name: '陶藝', 
          description:'在拿捏恰到好處的火侯，產生自然落灰釉，色澤溫潤且變化萬千，創造出渾厚內斂的質感、樸拙的色彩。', 
          origin: [
          '黃春貴・陶歷',
          '',
          '阿貴老師以極大的體力與耐力，連續四天三夜，拿捏恰到好處的火侯，在1230℃高溫不斷投材地燒。\
          火直接載體坯上留下自然的火痕，燃燒後的灰燼落在作品熔融，產生自然落灰釉。完全燃燒的灰燼極輕，隨著熱氣流飄散，\
          在受火痕與背火面所產生的陰陽變化，色澤溫潤且變化萬千。木灰中的鐵與陶坯上中的鐵變化不同色彩的釉，呈現厚薄不均的釉面，\
          留下火焰燻燒的痕跡，或者沾染厚厚的、粗糙的、似熔未熔的灰釉，創造出渾厚內斂的質感，樸拙的色彩。',
          '',
          '1962/生於台北市陽明山',
          '1995/成立親子陶藝工作坊',
          '1998/親子陶藝工作坊個人展',
          '1999/成立親子柴燒窯',
          '2000/世貿陶瓷與琉璃藝術聯展',
          '陶藝後援會聯展',
          '2001/兩岸陶藝創作展',
          '蘆洲永平陶藝聯展',
          '新竹新光三越個人展',
          '2002/台北新光三越A8館聯展',
          '高雄新光三越聯展',
          '台北京華城聯展',
          '2005/台北市勞工中心聯展',
          '原親子窯更名為陶燒窯',
          '國立中正紀念堂個展（典藏）',
          '2006/台北市勞工教育中心五一開園作品聯展',
          '2007/台北市政府勞動藝術家聯展',
          '2008/台北市勞工教育館「土與火的魔術師」柴燒個展（典藏）',
          '2009台北市勞工教育館「火舞中的禪定」柴燒個展',
          '2010/台中春稻藝術坊「火 土 對 話」柴燒個展',
          '2011/台北市勞工教育館「金.木.水.火.土」柴燒個展',
          '生活美學陶藝展',
          '2012/第四屆金壺獎入選',
          '謙卑（千杯展）在苗栗',
          '2013/台北市國父紀念館「火舞・禪定」柴燒個展（典藏）'
          ],
          price: -1, url: public_url + '阿貴柴燒.jpg' },
          { name: '詹筱帆插畫', real_name: '明信片', 
          description:'以盧經堂厝與日治時期「食衣住行育樂」各面發想，以輕巧的筆畫、躍動的色彩，繪出一幅一幅生動寫景，帶我們回到日治時期的氛圍之中。', 
          origin: [
          '詹筱帆　簡歷',
          '漫畫粉絲專業『靠山』',
          'https://www.facebook.com/cozen2012',
          '1983 生於台灣高雄',
          '',
          '－學歷－',
          '2000 畢業於前鎮高中美術班',
          '2006 畢業於台北藝術大學美術系',
          '',
          '－展覽－',
          '2003 《早餐》，台北藝術大學 綜合展覽廳',
          '2004 《當我們同在一起》，台北藝術大學 綜合展覽廳',
          '《Fun Show 放爽的mini影展》，台北市立教育大學 藝術館展覽室',
          '2005 《少女末期的夢與現實》，台北藝術大學　南北畫廊',
          '2006 《太陽雨》，二十號倉庫',
          '2010《Geisai Taiwan》，華山文創園區', 
          '',
          '－在職經歷－',
          '2006 創意核動畫有限公司 / 3d燈光,特效,合成，美術',
          '2010 頑石創意股份有限公司 / 原創美術',
          '',
          '－其他經歷－',
          '2006 甜橘牛排餐廳 / 室內空間壁畫設計製作',
          '2009 八方出版社 我的第一本塔羅牌 / 插畫繪製',
          '2010 台北花燈節 / 主視覺設計',
          '2011 金鐘獎動畫 卡滋幫 / 美術設計',
          '2012 共玩創作 / 偶動畫立體場景道具製作',
          '2014 城邦出版社 貓咪家庭醫學大百科 / 封面設計，插畫繪製',
          '2015 梁靜茹演唱會『你的名字是愛情』 / 開幕動畫插畫繪製',
          '',
          '與多間出版社穩定插畫合作中'
          ],
          price: -1, url: public_url + '詹筱帆插畫.jpg' }
        ]
      },
      food: {
        name: "鼻舌", 
        items: [
        { name: '馨山茶園', real_name: '迎香紅茶 / 四季春紅茶', 
          description:'宜蘭冬山河源頭，甘澈的泉水繚繞著深遠的茶香。便是在這清幽的山水中，劉秉稼夫婦堅守好茶葉的品質，\
          從栽種、管理到製作，方方面面絕不馬虎，為各位呈上最溫潤醇厚的茶茗。', 
          origin: [''],
          price: -1, url: public_url + '馨山茶園.jpg' },
        { name: '得意中華', real_name: '滷味', 
          description:'不添加人工香料、防腐劑，不煙燻不油炸，堅持「吃的健康、吃的安全」之理念。口味獨特，口感香Q有勁，\
          保有最傳統之風味。以真空包裝、高溫滅菌，讓你在安心沈浸在滷味的餘香中。', 
          origin: ['「千萬不要小看自己！」將近二十年前，誰能想得到，一個揹著四個月大娃兒在高雄十全夜市擺攤賣滷味的婦女，\
          竟可以賣到開工廠、把產品出口到全世界；只有高工畢業的家庭主婦、邊工作邊學習，竟可以把傳統的滷味國際化，成為台灣食品代表；\
          誰又曾想得到，一家位在台灣南部鄉下農村、由中高齡媽媽組成的公司，賣的鐵蛋和滷味，在對岸引起風潮，\
          在金融海嘯期間創造百分之百成長率佳績。',
          '',
          '得意中華把台灣最普遍的美食：滷味，變成黃金，並且在農村創造就業，「不要小看自己，要對台灣有信心，」\
          臉上堆滿著熱情、親切樸實的得意中華董事長陳秀卿說，「放下身段，只要你願意，沒有什麼不可能的！」',
          '',
          '陳秀卿和林琮隆這檔創業夫妻本來是同事，婚後陳秀卿辭職帶孩子，為能兼顧帶孩子和貼補家用，\
          自一九九三年起陳秀卿地開始了做起滷味生意，早上去菜市場批貨，在家煮滷味，傍晚揹著才四個月大的娃兒到高雄市後火車站的十全夜市賣滷味。',
          '',
          '丈夫林琮隆辭了工作，一起做滷味生意。滷味生意蒸蒸日上，兒子也漸漸長大，陳秀卿已無法再揹著兒子在夜市賣滷味，照顧孩子成為大問題。\
          於是陳秀卿思考轉型，在穩定了批發這塊市場之後，她毅然決然收掉了夜市滷味攤，專供貨給全高雄市一百多家滷味，\
          其中最受歡迎的產品就是鐵蛋，幾年後她自創「頑皮鐵蛋」品牌。',
          '',
          '林琮隆學習到常溫保存技術，應用到鐵蛋及滷味保存，即利用真空包裝、高溫殺菌方法，可使鐵蛋和滷味不必含防腐劑、\
          卻能保存一年，即是俗稱「軟罐頭」，這項技術至今在國內領先業界，這保存技術奠定了得意中華鐵蛋和滷味行銷到海外的利基。',
          '',
          '二○○五年六月新工廠落成啟用，並開始全力衝外銷，陳秀卿經常跟員工說，「我們雖當不成巨人，但可以疊羅漢」，\
          於是澳洲、英國、加拿大、紐西蘭、美國、日本都是得意中華的市場。二○○九年更進軍大陸，短短一年後，中國大陸已成為得意中華海外第二大市場，僅次於美國。'],
          price: -1, url: public_url + '得意中華.jpg' }
        // ,{ name: '周錦香　香老舖', real_name: '檀香 / 沉香', 
        //   description:'秉持「做好香，植福田」的信念，以天然實在的用料，不添一點化學香料，製出沉靜淡雅的香品。', 
        //   origin: [
        //   '－四代自製，良心香的堅持－',
        //   '【周錦香　香老舖】創辦人自小在祖父於宜蘭開設的玉馨堂長大，無形中培養了對香氣的敏感與喜愛。\
        //   15歲起師承杜春發師傅，學習製香多年，深入研究製香的每一個過程，秉持對製香的熱忱，\
        //   民國65年於內湖開設【周錦香　香老舖】，擁有第一間自己的店面，並傳承自祖父起「香品自製」的堅持，\
        //   在內湖洲子街開設製香工廠為在地人服務。',
        //   '製香超過37年，一直以來憑著良心及信譽經營老字號，不斷堅持香的品質，希望將好香提供給社會大眾，一同舒心品香。',
        //   '－做好香，植福田－',
        //   '【周錦香　香老舖】一直以來秉持的信念是「做好香、植福田」。香品自製始終堅持香的品質，用心製造每一根「良心香」，\
        //   期望將好香品平價提供給社會大德，成就「人人買得起，人人點好香」的大願。',
        //   '－環保天然的高品質香品－',
        //   '【周錦香　香老舖】 的香品，堅持香料自製，使用天然實在的原料，不添加任何的化學香料，\
        //   並且經過SGS檢驗合格。如此香品不但品質優秀，更是環保天然無汙染，無論是對環境或是社會大眾皆能安心使用。',
        //   '－邀請您一同品香－',
        //   '【周錦香　香老舖】的好香，或高雅清香，或濃郁醇正。點一支香，享其香韶舒心、沉靜舒暢之氛圍。\
        //   品茗、閱讀、冥想、瑜珈、禪坐、禮佛時，讓好香伴您平靜悠然。'
        //   ],
        //   price: -1, url: public_url + '周錦香　香老舖.jpg' }
        ]
      }
  }});

}