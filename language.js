/* 金沢水めぐり：日本語・英語・簡体字中国語・韓国語 */
(() => {
  'use strict';
  const key = 'kanazawa-language';
  const names = {ja:'日本語', en:'English', zh:'简体中文', ko:'한국어'};
  const home = {
    en: ['Kanazawa Waterways', 'Explore the\nWaterways!!', 'Follow the flowing water and discover the history and charm of Kanazawa.', 'Explore Kanazawa on Foot', 'History of the Waterways', 'Stamp Rally', 'Map', 'Kanazawa and Its Waterways', 'Historic canals flow through Kanazawa, supporting local life for centuries.', 'Walk along the water and discover a different side of the city.'],
    zh: ['金泽水之旅', '漫步金泽\n探访水渠！', '循着潺潺流水，发现金泽的历史与魅力。', '步行探索水之城', '水渠的历史', '集章活动', '地图', '金泽与水渠', '金泽市内流淌着历史悠久的水渠，世代支撑着当地居民的生活。', '沿着水渠漫步，发现金泽不一样的风景。'],
    ko: ['가나자와 물길 여행', '가나자와\n수로를 걸어요!', '물길을 따라 가나자와의 역사와 매력을 발견해 보세요.', '물의 도시를 걸으며 만나다', '수로의 역사', '스탬프 랠리', '지도', '가나자와와 수로', '가나자와에는 오랫동안 사람들의 생활을 지탱해 온 역사적인 수로가 흐릅니다.', '물길을 따라 걸으며 가나자와의 새로운 매력을 만나 보세요.']
  };
  // 各項目: 名前、キャッチコピー、概要、歴史、見どころ
  const historyData = {
    en: {
      tatsumi:['Tatsumi Canal','Water for Kanazawa Castle','Built to improve the castle’s water supply after a major fire, Tatsumi Canal showcases ingenious Edo-period engineering.','Construction followed the Hōsenji fire of 1631. Using the terrain of the Kodatsuno plateau, the canal was reportedly completed in less than a year. From the Meiji period onward, its water served farming, daily life, and waterwheels for rice polishing and flour milling.','The canal stretches about 11 km from its intake to Kenrokuen Garden. Rock-cut tunnels survive upstream. At the Art Path between Nakamura Memorial Museum and Ishikawa Prefectural Museum of Art, water cascades down the slope.'],
      onosho:['Onoshō Canal','Transport and the castle town','One of Kanazawa’s oldest canals, it served transport, agriculture and many needs of the castle town.','Tradition traces the canal back to the Oyama Gobō era. It was used for irrigation, shipping goods, firefighting, defense and snow removal, and reportedly helped build Kanazawa Castle. Timber was carried from the former Miyakoshi port (Kanaiwa), earning the name Onigawa. Downstream of the old timber landing it was called Kobikigawa.','A plaque dated 1915 can be seen near the start of the open channel. Local sources describe starch rinsing at a dye shop in Katamachi. The canal runs by the historic Nagamachi samurai district, where small fish can sometimes be spotted.'],
      kuratsuki:['Kuratsuki Canal','Powering waterwheels and industry','Kuratsuki Canal supported farming, castle-town defenses and later manufacturing through waterwheel power.','Its original construction date is uncertain. Between Kakinokibatake and Nagamachi it functioned as part of the castle’s outer defenses. Tradition holds that the channel was improved in 1644–1648 to stabilize the flow for rapeseed-oil waterwheels. In the Meiji era it powered rice and flour mills, the Kanazawa Silk Mill and other industries.','Sections have been reopened to the air and small pocket parks created, bringing the sound and sight of water back to the city center.'],
      izumi:['Izumi Canal','Irrigating the Teramachi plateau','A historic agricultural canal winding along the foot of the Teramachi plateau.','The canal dates from the early feudal period and appears on castle-town maps from the late 17th century. Its former intake lay beneath Saigawa Bridge, and its water irrigated areas including Masuizumi, Izumi and Nishiizumi.','Look for arched channel structures, stone embankments and differently designed bridges near the Nishi Chaya District.'],
      nakamura:['Nakamura–Takabatake Canal','Two waterways become one','Two originally separate agricultural canals came to share an intake.','Nakamura Canal is recorded on late 17th-century maps. Takabatake Canal once flowed separately, but their intake was unified in 1918 and the combined name came into use.','Kandamachi Children’s Park has a waterside space fed by the canal.'],
      asahi:['Asahi Canal','Spring water and greenery','A canal known for its green surroundings and its former natural spring.','It is the only canal taking water from the left bank of the Asano River along the Kodatsuno plateau. Named for Asahimachi, it flows past Tsuruma Slope, once famous for its wooded scenery. The Asahi Shimizu spring supplied local drinking water until it dried up around 1955; its site remains.','Stone banks, washing places, waterside flowers and greenery create a peaceful landscape.'],
      kanaura:['Kanaura Canal','Water for the former Kanaura district','An agricultural canal named for the district it once served.','Its name comes from the former Kanaura area, which it irrigated from the feudal period to the middle of the Meiji era.','Local notes mention an ornamental waterwheel in a private garden in Chōshimachi.'],
      kobashi:['Kobashi Canal','Waterwheels and rapeseed oil','A canal associated with early water-powered oil production.','The exact date of construction is unknown, but the canal appears on late 17th-century maps. A waterwheel for producing rapeseed oil was reportedly installed in the old Suishamachi district during the time of Lord Maeda Toshitsune, suggesting that the channel existed by the early 17th century.','A wooden waterwheel at Motomachi Third Children’s Park recalls its industrial past.'],
      nakajima:['Nakajima Canal','From natural stream to irrigation','This canal may have begun as a natural branch of the Asano River.','Records describe repairs to a narrowed channel in 1698, together with Kobashi Canal. Before a shared movable weir was built, water was taken in through a temporary dam in the former Nakajimamachi area.','Much of the channel is covered in the city center, but it supplies agricultural water around Okimachi and Isobemachi.'],
      kantarogawa:['Kantarō River','A branch supporting waterwheel industries','A branch of Tatsumi Canal once used by local workshops and industries.','The name is said to come from a resident called Kantarō in Ishibiki, though its origin is uncertain. Until after World War II, waterwheels powered silk work, refining, rice polishing and milling in nearby neighborhoods.','Between Hakusan Slope and Nijūnin Slope you can find surprisingly tranquil scenery in the city.'],
      teratsu:['Teratsu Canal','Farming, electricity and drinking water','Water from the upper Saigawa River was used for irrigation and later energy and water supply.','Tanaka Kakubei proposed the canal in 1646. Work began in 1664 and was completed the following year to irrigate districts upstream of Tatsumi Canal. Underground tunnels were dug upstream. The water powered Kanazawa’s first power station, Tatsumi Power Station, in 1900; after the Sue Water Treatment Plant opened in 1930, it also served the city’s water supply.','Nature-rich walking paths follow parts of the canal.'],
      nagasaka:['Nagasaka Canal','Opening new farmland','The canal helped develop farmland on the Teramachi plateau.','Built under domain orders by local leaders including the headman Tahei, the canal drew water from the Uchikawa tributary of the Saigawa River. It contributed to the settlement of Nagasaka and increased production around Izumino. In 1973, the upper channel began sharing a conduit with the Saigawa waterworks and was shortened by nearly 4 km.','In the Uchikawa area, the water winds through bamboo groves in a largely natural setting.']
    },
    zh: {
      tatsumi:['辰巳用水','支撑金泽城的水源','为改善金泽城的供水而修建，展现了江户时代高超的水利工程技术。','1631年法船寺大火后，为改善金泽城的用水条件而开凿。工程利用小立野台地地形，据传不到一年便完工。明治时期以后，也用于农业、生活及水车驱动的碾米和磨粉。','从取水口至兼六园约11公里。上游保留着在岩石中开凿的隧道。中村纪念美术馆与石川县立美术馆之间的“美术小径”可欣赏瀑布般的流水。'],
      onosho:['大野庄用水','城下町发展与物资运输','金泽最古老的水渠之一，曾用于运输木材、农业和城下町生活。','传说其历史可追溯至尾山御坊时代。除了灌溉，还用于运输、防火、防御及融雪，并据说参与了金泽城的建造。昔日从宫腰（金石港）运输木材，因此也称“御荷川”或“鬼川”；下游又称“木曳川”。','明渠起点附近可见1915年的铭牌。资料记载，片町的染坊曾利用水渠清洗浆料。长町武家屋敷遗址一带可以欣赏水渠与古街景，有时还能看到小鱼。'],
      kuratsuki:['鞍月用水','推动水车与近代产业','不仅用于农业和城下町防御，也曾为各种产业提供水车动力。','具体开凿年代不详。柿木畠至长町一段曾兼作金泽城的外围防御水道。据传1644至1648年间，为稳定榨取菜籽油的水车用水而改修。明治时期用于碾米、磨粉、金泽缫丝厂及其他工业。','部分水道已重新露天开放，并建有口袋公园，让市中心重新亲近流水。'],
      izumi:['泉用水','流经寺町台地的农业水渠','沿寺町台地山脚流淌的古老农业用水。','水渠在藩政初期已存在，17世纪后半叶的城下町地图中也有记载。旧取水口位于犀川大桥下方，灌溉增泉、泉、西泉等地区。','可以欣赏拱形水道、石砌护岸，以及西茶屋街附近设计各异的桥梁。'],
      nakamura:['中村高畠用水','两条水渠汇为一体','原本独立的中村用水和高畠用水后来共用取水口。','中村用水见于17世纪后半叶地图。高畠用水原本独立流淌，1918年两者统一取水口，并使用现在的名称。','神田町儿童公园设有引入水渠流水的亲水空间。'],
      asahi:['旭用水','清泉与绿意','因绿树环绕和昔日的清泉而闻名。','这是小立野台地沿线唯一从浅野川左岸取水的用水，名称来自旭町。沿途的鹤间坂从前竹林茂密。曾供居民饮用的“旭清水”约于1955年枯竭，如今仍留有泉眼遗迹。','石砌河岸、洗涤场与水边花木构成宁静的风景。'],
      kanaura:['金浦用水','滋润昔日金浦乡','以过去灌溉的地区命名的农业水渠。','名称源于藩政时期至明治中期受其灌溉的旧金浦乡地区。','当地资料提到铫子町一户人家的庭院里有观赏用水车。'],
      kobashi:['小桥用水','水车与菜籽油制作','与早期利用水车榨油的生产活动密切相关。','开凿年代尚不明确，但17世纪后半叶的地图已有记载。据传前田利常时代曾在旧水车町安装用于榨取菜籽油的水车，因此推测17世纪前半叶水渠已存在。','元町第三儿童公园的木制水车让人联想到昔日景象。'],
      nakajima:['中岛用水','从自然河道到农业用水','可能源自浅野川的一条自然支流。','1698年的记录提到与小桥用水一同改修变窄的水道。在建成共用的活动堰之前，曾在旧中岛町设置临时拦水设施取水。','市中心大部分已成暗渠，但在冲町、矶部町一带仍用于农业灌溉。'],
      kantarogawa:['勘太郎川','支撑水车产业的分流','由辰巳用水分流，曾为当地手工业提供动力。','据说名称源于石引地区一位名叫勘太郎的居民，但来源并不确定。直到战后，附近仍有利用水车进行制丝、精炼、碾米和磨粉的家庭作坊。','白山坂至二十人坂附近保留着市区中难得的宁静景色。'],
      teratsu:['寺津用水','农业、发电与自来水','取用犀川上游水源，先用于灌溉，后来还用于发电和供水。','1646年田中觉兵卫提出建造建议，1664年开工，次年竣工，用于灌溉辰巳用水上游地区。上游开有隧道。1900年利用此水建成金泽首座发电站“辰巳发电站”；1930年末净水场建成后，又用于城市供水。','水渠沿岸设有自然环境优美的步道。'],
      nagasaka:['长坂用水','为开垦新农田引水','促进寺町台地的开垦与农业发展。','当地村落领袖太兵卫等奉藩命开凿水渠，从犀川支流内川取水，帮助形成长坂新村并提高泉野地区的农业生产。1973年上游与犀川净水场导水路共用，使水渠缩短近4公里。','在内川地区，流水穿过竹林，保留了接近自然的景观。']
    },
    ko: {
      tatsumi:['다쓰미 용수','가나자와성을 지탱한 물길','큰 화재 이후 가나자와성의 용수 공급을 개선하기 위해 만든 수로로, 에도 시대의 뛰어난 토목 기술을 보여 줍니다.','1631년 호센지 대화재를 계기로 가나자와성의 물 공급을 개선하기 위해 건설되었습니다. 고다쓰노 대지의 지형을 활용해 1년도 채 걸리지 않아 완공되었다고 전해집니다. 메이지 시대 이후에는 농업과 생활용수, 정미·제분용 물레방아에도 사용되었습니다.','취수구에서 겐로쿠엔까지 약 11km입니다. 상류에는 바위를 파서 만든 터널 수로가 남아 있습니다. 나카무라 기념미술관과 이시카와 현립미술관 사이의 ‘미술의 오솔길’에서는 폭포처럼 흐르는 물을 볼 수 있습니다.'],
      onosho:['오노쇼 용수','성하마을의 발전과 물자 운송','가나자와에서 가장 오래된 수로 중 하나로, 목재 운송과 농업 등 다양한 역할을 했습니다.','오야마 고보 시대부터 존재했다는 전승이 있습니다. 관개·물자 운송·방화·방어·제설에 쓰였고 가나자와성 축성에도 기여했다고 전해집니다. 옛 미야코시항(가나이와)에서 목재를 운반해 ‘오니가와’라고도 불렸으며, 하류는 ‘고비키가와’라고 불렸습니다.','개방된 수로의 시작 지점에서 1915년의 명판을 볼 수 있습니다. 자료에는 가타마치 염색점에서 물을 이용해 풀을 씻어 낸다고 기록되어 있습니다. 나가마치 무사 저택 거리에서는 옛 거리와 수로 풍경을 함께 즐길 수 있습니다.'],
      kuratsuki:['구라쓰키 용수','물레방아와 근대 산업의 동력','농업과 성하마을의 방어뿐 아니라 물레방아로 산업을 뒷받침한 수로입니다.','축조 시기는 명확하지 않습니다. 가키노키바타케에서 나가마치까지는 가나자와성의 외곽 방어 수로 역할도 했습니다. 1644~1648년에는 유채기름 제조용 물레방아의 물 공급을 안정시키기 위해 개수했다고 전해집니다. 메이지 시대에는 정미·제분과 가나자와 제사장 등의 동력으로 이용되었습니다.','수로를 다시 개방하고 작은 공원을 정비해 도심에서도 물가 풍경을 즐길 수 있습니다.'],
      izumi:['이즈미 용수','데라마치 대지를 흐르는 농업용수','데라마치 대지 기슭을 따라 흐르는 오래된 농업용수입니다.','번정 초기부터 존재했으며 17세기 후반의 성하마을 지도에도 나타납니다. 옛 취수구는 사이가와 대교 아래에 있었고 마스이즈미·이즈미·니시이즈미 등의 농지를 적셨습니다.','아치형 수로와 돌제방, 니시 차야 거리 부근의 서로 다른 디자인의 다리를 볼 수 있습니다.'],
      nakamura:['나카무라 다카바타케 용수','두 물길이 하나로','원래 별개였던 두 농업용수가 하나의 취수구를 공유하게 되었습니다.','나카무라 용수는 17세기 후반 지도에 기록되어 있습니다. 다카바타케 용수는 별개의 물길이었으나 1918년에 취수구를 통합하면서 현재의 이름이 되었습니다.','간다마치 어린이공원에는 수로의 물을 끌어들인 친수 공간이 있습니다.'],
      asahi:['아사히 용수','샘물과 초록의 풍경','푸른 자연과 옛 샘물로 알려진 수로입니다.','고다쓰노 대지를 따라 아사노강 좌안에서 취수하는 유일한 수로이며 아사히마치에서 이름을 따왔습니다. 쓰루마 언덕 주변에는 예부터 대나무숲과 나무가 우거졌습니다. 주민들의 식수였던 ‘아사히 시미즈’ 샘은 1955년 무렵 말랐지만 흔적이 남아 있습니다.','돌로 쌓은 제방과 빨래터, 물가의 꽃과 나무가 어우러진 풍경을 감상할 수 있습니다.'],
      kanaura:['가나우라 용수','옛 가나우라 지역을 적신 물길','예전에 물을 공급하던 지역의 이름을 딴 농업용수입니다.','번정 시대부터 메이지 중기까지 관개하던 옛 가나우라 지역에서 이름이 유래했습니다.','지역 자료에는 조시마치 민가 정원의 관상용 물레방아가 소개되어 있습니다.'],
      kobashi:['고바시 용수','물레방아와 유채기름','초기 물레방아를 이용한 기름 생산과 관련이 있는 수로입니다.','정확한 축조 연대는 알 수 없지만 17세기 후반 지도에 기록되어 있습니다. 마에다 도시쓰네 시대에 옛 스이샤마치에 유채기름 생산용 물레방아를 설치했다고 전해져, 17세기 전반부터 수로가 있었던 것으로 추정됩니다.','모토마치 제3어린이공원의 나무 물레방아가 과거의 모습을 떠올리게 합니다.'],
      nakajima:['나카지마 용수','자연 하천에서 농업용수로','아사노강에서 갈라진 자연 수로가 기원일 가능성이 있습니다.','1698년 고바시 용수와 함께 좁아진 수로를 보수했다는 기록이 있습니다. 두 수로가 공유하는 가동 보가 생기기 전에는 옛 나카지마마치에서 임시 물막이로 취수했습니다.','시가지 대부분은 덮인 수로가 되었지만 오키마치·이소베마치 일대에서는 농업용수로 활용됩니다.'],
      kantarogawa:['간타로강','물레방아 산업을 지탱한 지류','다쓰미 용수에서 갈라져 주변 산업에 사용된 물길입니다.','이시비키에 살던 ‘간타로’라는 사람에게서 이름이 왔다고 하나 확실하지는 않습니다. 전후까지 주변 지역에서는 물레방아로 제사·정련·정미·제분 등을 했습니다.','하쿠산 언덕부터 니주닌 언덕 부근까지 도심이라고 믿기 어려운 한적한 풍경이 펼쳐집니다.'],
      teratsu:['데라쓰 용수','농업·발전·상수도를 위한 물','사이가와 상류의 물을 관개에 사용했고, 이후 발전과 수도 공급에도 이용했습니다.','1646년 다나카 가쿠베이가 제안했고 1664년 착공해 이듬해 완공했습니다. 다쓰미 용수보다 상류의 농지를 위한 수로로, 상류에는 터널도 팠습니다. 1900년 가나자와 최초의 발전소인 다쓰미 발전소에 이용되었으며, 1930년 스에 정수장 완공 후에는 상수도에도 사용되었습니다.','수로를 따라 자연이 풍부한 산책로가 정비되어 있습니다.'],
      nagasaka:['나가사카 용수','새 농경지를 개척한 물','데라마치 대지의 농지를 적시고 지역 개간에 기여한 수로입니다.','마을 지도자 다헤이 등이 번의 명령으로 사이가와 지류 우치카와에서 물을 끌어오는 수로를 건설했습니다. 나가사카 신촌의 형성과 이즈미노 지역의 생산력 향상에 도움이 되었습니다. 1973년 상류 구간이 사이가와 정수장의 도수로와 공용되면서 수로 길이가 약 4km 줄었습니다.','우치카와 지역에서는 수로가 대나무숲 사이로 흐르며 자연스러운 모습을 간직하고 있습니다.']
    }
  };
  const pageText = {
    en: {site:'Kanazawa Waterways', back:'← Home', title:'History of the Waterways', subtitle:'Stories carried by Kanazawa’s waterways', intro:'A Castle Town Shaped by Water', description:'Kanazawa’s canals have supported farming, firefighting, transport and water-powered industries. Discover the history and sights of 12 waterways below.', scroll:'Scroll down to explore every waterway.', past:'History and Origins', present:'Scenery and Highlights', source:'This content was adapted from historical notes gathered by the project team. Please be mindful of safety and local residents when visiting.', return:'Back to Home'},
    zh: {site:'金泽水之旅',back:'← 首页',title:'水渠的历史',subtitle:'金泽城下町的流水故事',intro:'流水孕育的城下町',description:'金泽的水渠不仅用于农业，还支撑防火、运输和水车产业。下面为您介绍12处水渠的历史与看点。',scroll:'向下滚动即可连续阅读所有水渠的介绍。',past:'历史与起源',present:'现存景观与看点',source:'内容根据项目组整理的历史资料编写。参观时请注意安全并尊重周边居民。',return:'返回首页'},
    ko: {site:'가나자와 물길 여행',back:'← 홈',title:'수로의 역사',subtitle:'가나자와 물길이 들려주는 이야기',intro:'물길이 키운 성하마을',description:'가나자와의 수로는 농업뿐 아니라 방화, 물자 운송, 물레방아 산업을 지탱해 왔습니다. 아래에서 12개 수로의 역사와 볼거리를 만나 보세요.',scroll:'아래로 스크롤하면 모든 수로를 이어서 읽을 수 있습니다.',past:'역사와 형성 과정',present:'오늘날의 풍경과 볼거리',source:'이 내용은 프로젝트 팀이 수집한 역사 자료를 바탕으로 작성했습니다. 방문 시 안전과 주변 주민을 배려해 주세요.',return:'홈으로 돌아가기'}
  };
  const getStored = () => {try { const v=localStorage.getItem(key); return names[v] ? v : 'ja';} catch {return 'ja';}};
  let current = getStored();
  const picker = document.getElementById('languagePicker');
  const toggle = document.getElementById('languageToggle');
  const options = document.getElementById('languageOptions');
  const langDisplay = document.getElementById('currentLanguage');
  if (!picker || !toggle || !options || !langDisplay) return;

  const takeText = selector => [...document.querySelectorAll(selector)].map(el=>el.innerHTML);
  const setHTML = (selector, contents) => { document.querySelectorAll(selector).forEach((el,i)=>{if(contents[i]!==undefined) el.innerHTML=contents[i];}); };
  const isHistory = !!document.querySelector('.history-main');
  const homeSelectors=['.brand','.hero h1','.hero-description','main > h2','.menu-title','.introduction h2','.introduction p'];
  const homeOriginal=Object.fromEntries(homeSelectors.map(s=>[s,takeText(s)]));
  const historySelectors=['.header .brand','.back-link','.history-hero h1','.history-hero > p:last-child','.history-intro h2','.history-intro > p:not(.history-scroll-note)','.history-scroll-note','.history-source','.return-button'];
  const historyOriginal=Object.fromEntries(historySelectors.map(s=>[s,takeText(s)]));
  const originalSections=[...document.querySelectorAll('section.waterway')].map(section=>section.innerHTML);

  function applyLanguage(lang) {
    current=lang;
    document.documentElement.lang = {ja:'ja',en:'en',zh:'zh-CN',ko:'ko'}[lang];
    document.title = lang==='ja' ? (isHistory?'用水路の歴史 | 金沢水めぐり':'用水路をめぐろう!! | 金沢') : (isHistory ? pageText[lang].title : home[lang][1].replace('\n',' ')) + ' | Kanazawa';
    langDisplay.textContent=names[lang];
    if (isHistory) {
      if (lang==='ja') {
        for (const s of historySelectors) setHTML(s, historyOriginal[s]);
        document.querySelectorAll('section.waterway').forEach((section,i)=>section.innerHTML=originalSections[i]);
      } else {
        const t=pageText[lang];
        const replacements=[t.site,t.back,t.title,t.subtitle,t.intro,t.description,t.scroll,t.source,t.return];
        historySelectors.forEach((s,i)=>setHTML(s,[replacements[i]]));
        document.querySelectorAll('section.waterway').forEach(section=>{
          const d=historyData[lang][section.id];
          if(!d)return;
          section.querySelector('h2').textContent=d[0];
          section.querySelector('.waterway-tagline').textContent=d[1];
          section.querySelector('.waterway-lead').textContent=d[2];
          const headings=section.querySelectorAll('h3');
          headings[0].textContent=t.past;
          headings[1].textContent=t.present;
          // 詳細の各段落の順番を保持し、翻訳内容をまとめて表示
          const paragraphs=[...section.querySelectorAll(':scope > p')];
          const pastStart=paragraphs.indexOf(section.querySelector('.waterway-lead'))+1;
          const contentParagraphs=[...section.children].filter(el=>el.tagName==='P' && !el.classList.length);
          contentParagraphs.forEach((el,i)=>{
            const beforeSights=!!(el.compareDocumentPosition(headings[1]) & Node.DOCUMENT_POSITION_FOLLOWING);
            // h3[1]より前の段落は歴史、それ以降は見どころ
            const isHistoryPara=!!(el.compareDocumentPosition(headings[1]) & Node.DOCUMENT_POSITION_FOLLOWING);
            const sameType=contentParagraphs.filter(p=>Boolean(p.compareDocumentPosition(headings[1]) & Node.DOCUMENT_POSITION_FOLLOWING)===isHistoryPara);
            const ordinal=sameType.indexOf(el);
            el.textContent=ordinal===0 ? (isHistoryPara?d[3]:d[4]) : '';
            el.hidden=ordinal!==0;
          });
          const img=section.querySelector('img'); if(img) img.alt=d[0];
        });
      }
    } else {
      if(lang==='ja') homeSelectors.forEach(s=>setHTML(s,homeOriginal[s]));
      else {
        const a=home[lang];
        setHTML('.brand',[a[0]]);
        setHTML('.hero h1',[a[1].replace('\n','<br>')]);
        setHTML('.hero-description',[a[2]]);
        setHTML('main > h2',[a[3]]);
        setHTML('.menu-title',a.slice(4,7));
        setHTML('.introduction h2',[a[7]]);
        setHTML('.introduction p',a.slice(8,10));
      }
    }
    if(options.hidden===false) renderOptions();
  }
  function renderOptions() {
    options.replaceChildren();
    for(const [code,label] of Object.entries(names)) {
      if(code===current) continue; // 選択中の言語は表示しない
      const btn=document.createElement('button');
      btn.type='button'; btn.className='language-option'; btn.setAttribute('role','menuitem');
      btn.textContent=label;
      btn.addEventListener('click',()=>{
        try { localStorage.setItem(key,code); } catch {}
        applyLanguage(code); closeMenu(); toggle.focus();
      });
      options.appendChild(btn);
    }
  }
  function closeMenu(){options.hidden=true;toggle.setAttribute('aria-expanded','false');}
  toggle.addEventListener('click',()=>{
    if(!options.hidden){closeMenu();return;}
    renderOptions();options.hidden=false;toggle.setAttribute('aria-expanded','true');
  });
  document.addEventListener('click',e=>{if(!picker.contains(e.target))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  applyLanguage(current);
})();
