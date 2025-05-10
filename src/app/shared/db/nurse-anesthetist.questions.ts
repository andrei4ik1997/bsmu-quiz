import type { Question } from '@shared/entities/shared.types';

export const nurseAnesthetistQuestions: Question[] = [
	{
		id: 1,
		question: 'Какой из анестетиков может спровоцировать приступ бронхиальной астмы?',
		answers: [
			{
				id: 0,
				value: 'фентанил',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дормикум',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'тиопентал натрия',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'кетамин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'тиопентал натрия',
	},
	{
		id: 2,
		question: 'Частые побочные эффекты опиодных анальгетиков:',
		answers: [
			{
				id: 0,
				value: 'тахикардия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'тошнота и рвота',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'остановка дыхания',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'артериальная гипертензия',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'тошнота и рвота, остановка дыхания',
	},
	{
		id: 3,
		question: 'Анестетик, способный вызвать обезболивание без снижения АД:',
		answers: [
			{
				id: 0,
				value: 'кетамин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'фентанил',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'севоран',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'пропофол',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'кетамин',
	},
	{
		id: 4,
		question: 'Выберите из списка компоненты общей анестезии:',
		answers: [
			{
				id: 0,
				value: 'сохранение сознания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'сохранение тонуса мышц',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'миорелаксация',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'анальгезия (обезболивание)',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'анальгезия (обезболивание), миорелаксация',
	},
	{
		id: 5,
		question:
			'Расположите в правильно порядке стадии анестезии эфиром по Гведелу: 1) хирургический наркоз; 2) терминальная; 3) возбуждение; 4) анальгезия',
		answers: [
			{
				id: 0,
				value: '1-2-3-4',
				isCorrect: true,
			},
			{
				id: 1,
				value: '3-4-1-2',
				isCorrect: false,
			},
			{
				id: 2,
				value: '2-1-3-4',
				isCorrect: false,
			},
			{
				id: 3,
				value: '4-3-1-2',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: '4-3-1-2, 1-2-3-4',
	},
	{
		id: 6,
		question:
			'При попытке интубации у пациента развилась рвота. Вероятно, интубацию производили на стадии наркоза:',
		answers: [
			{
				id: 0,
				value: 'диафрагмального дыхания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'хирургической',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'возбуждения',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'движения глазных яблок',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'возбуждения',
	},
	{
		id: 7,
		question: 'Побочные эффекты кетамина:',
		answers: [
			{
				id: 0,
				value: 'галлюцинации',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'внутричерепная гипертензия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'остановка дыхания',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'гипотензия',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'галлюцинации, внутричерепная гипертензия',
	},
	{
		id: 8,
		question: 'Примерный диаметр эндотрахеальной трубки для взрослого мужчины:',
		answers: [
			{
				id: 0,
				value: '№ 3-5',
				isCorrect: false,
			},
			{
				id: 1,
				value: '№ 1',
				isCorrect: false,
			},
			{
				id: 2,
				value: '№ 6-7',
				isCorrect: false,
			},
			{
				id: 3,
				value: '№ 8-9',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '№ 8-9',
	},
	{
		id: 9,
		question: 'Для ингаляционной индукции подходит:',
		answers: [
			{
				id: 0,
				value: 'севоран',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'изофлюран',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'закись азота',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'десфлюран',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'севоран, закись азота',
	},
	{
		id: 10,
		question: 'Анестезия по какому контуру наиболее выгодна экономически?',
		answers: [
			{
				id: 0,
				value: 'открытому',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'нереверсивному',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'закрытому',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'полуоткрытому',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'закрытому',
	},
	{
		id: 11,
		question: 'У пациента на лице маска, на маске ватка с севораном. Это анестезия по контуру:',
		answers: [
			{
				id: 0,
				value: 'закрытому',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'открытому',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'полуоткрытому',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'реверсивному',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'открытому, закрытому',
	},
	{
		id: 12,
		question: 'Опасности положения пациента сидя во время операции:',
		answers: [
			{
				id: 0,
				value: 'гипотензия',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'эмболия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'массивное кровотечение из вен шеи',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'рвота',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'гипотензия, эмболия',
	},
	{
		id: 13,
		question:
			'Дыхательный контур замкнут в кольцо, так что дыхательная смесь может возвращаться в него после того, как пациент выдохнул. Какой это контур?',
		answers: [
			{
				id: 0,
				value: 'только закрытый',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'любой реверсивный',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'открытый',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'нереверсивный',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'любой реверсивный',
	},
	{
		id: 14,
		question: 'Стадия наркоза, которая отсутствует при анестезии внутривенными анестетиками:',
		answers: [
			{
				id: 0,
				value: 'терминальная',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'возбуждения',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'хирургическая',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'анальгезии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'возбуждения',
	},
	{
		id: 15,
		question: 'Рациональные сочетания препаратов для внутривенной анестезии:',
		answers: [
			{
				id: 0,
				value: 'кетамин + диазепам',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'пропофол + фентанил',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'тиопентал натрия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'кетамин + дитилин',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'пропофол + фентанил, кетамин + диазепам',
	},
	{
		id: 16,
		question: 'Прекураризация помогает:',
		answers: [
			{
				id: 0,
				value: 'уменьшить дозу дитилина',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'успокоить пациента',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ускорить пробуждение',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'предотвратить фасцикуляции мышц на введение дитилина',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'предотвратить фасцикуляции мышц на введение дитилина',
	},
	{
		id: 17,
		question: 'Главное правило введения миорелаксантов:',
		answers: [
			{
				id: 0,
				value: 'противопоказаний для введения нет',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'нельзя вводить во время СЛР',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'нельзя вводить ослабленным пациентам',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'вводить пациентам в сознании',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'вводить пациентам в сознании',
	},
	{
		id: 18,
		question: 'Частые осложнения спинальной анестезии:',
		answers: [
			{
				id: 0,
				value: 'гипотензия во время анестезии',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'ранение спинного мозга',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'головная боль',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'остеохондроз',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'головная боль, гипотензия во время анестезии',
	},
	{
		id: 19,
		question: 'Анестезия выбора при операции кесарева сечения:',
		answers: [
			{
				id: 0,
				value: 'регионарные методы анестезии (спинальная, эпидуральная)',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'внутривенная',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'общая эндотрахеальная',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'местная инфильтрационная',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'регионарные методы анестезии (спинальная, эпидуральная)',
	},
	{
		id: 20,
		question: 'Синдром Мендельсона (кислотно-аспирационный пневмонит) развивается в результате:',
		answers: [
			{
				id: 0,
				value: 'интубации в одно лёгкое',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'рвоте у пациента в сознании',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'попадания в дыхательные пути непереваренной пищи',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'аспирации кислого желудочного содержимого',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'аспирации кислого желудочного содержимого',
	},
	{
		id: 21,
		question: 'После прекращения подачи закиси азота необходима 100% оксигенация, т.к. реальна угроза:',
		answers: [
			{
				id: 0,
				value: 'бронхоспазма',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гипоксии',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'спазма дыхательной мускулатуры легких',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ларингоспазма',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'гипоксии, ларингоспазма',
	},
	{
		id: 22,
		question:
			'Расположение трех анальгезирующих веществ, отражающий возрастающую степень анальгитической активности, имеет вариант:',
		answers: [
			{
				id: 0,
				value: 'суфентанил, фентанил, морфин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'фентанит, морфин, суфентанил',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'морфин, суфентанил, фентанил',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'морфин, фентанил, суфентанил',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'морфин, фентанил, суфентанил',
	},
	{
		id: 23,
		question: 'Анальгетический эффект раньше наступает при анестезии:',
		answers: [
			{
				id: 0,
				value: 'спинальной',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'эпидуральной',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'спинальной',
	},
	{
		id: 24,
		question:
			'При проведении операции по срочным показаниям под наркозом, при условии, что больной принимал пищу за 1 час до поступления:',
		answers: [
			{
				id: 0,
				value: 'нельзя начинать, ждать 6 часов, затем введение зонда в желудок',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'время приема пищи не имеет значения',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'можно ограничиться назначением альмагеля, фосфолюгеля',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'операцию можно начинать после заведения зонда',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'операцию можно начинать после заведения зонда',
	},
	{
		id: 25,
		question:
			'Вероятная причина резкого расширения зрачков при сохранении их реакции на свет и повышенном слезотечении у больного при операции под масочным наркозом:',
		answers: [
			{
				id: 0,
				value: 'слишком поверхностный наркоз',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'рефлекторная остановка сердца',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'фибрилляция миокарда',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'передозировка наркотического вещества',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'слишком поверхностный наркоз',
	},
	{
		id: 26,
		question: 'Критерием достаточной глубины вводного наркоза является:',
		answers: [
			{
				id: 0,
				value: 'остановка дыхания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'потеря сознания с развитием сна',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'снижение артериального давления',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'широкие зрачки',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'потеря сознания с развитием сна',
	},
	{
		id: 27,
		question:
			'Препарат в процессе введения в наркоз которым могут начаться фибрилляторные подергивания в начале мимический мускулатуры затем мышц туловища, верхних и нижних конечностей',
		answers: [
			{
				id: 0,
				value: 'дитилин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'тиопентал натрия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дормикум',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дроперидол',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дитилин',
	},
	{
		id: 28,
		question:
			'При введении деполяризующих релаксантов возникает мышечная фибрилляция, проявляющаяся в последующих мышечных болях. Для предупреждения таких болей рекомендуется предварительно вводить больному:',
		answers: [
			{
				id: 0,
				value: 'ардуан',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'димедрол',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'прозерин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'атропин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'ардуан',
	},
	{
		id: 29,
		question: 'Калипсол абсолютно противопоказан больным с:',
		answers: [
			{
				id: 0,
				value: 'шизофренией',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'кровопотерей',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гипотонией',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'ИБС',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'шизофренией, гипотонией',
	},
	{
		id: 30,
		question: 'Прозерин является антидотом следующего релаксанта:',
		answers: [
			{
				id: 0,
				value: 'листенола',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'атракуриума',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'сукцинилхолина',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дитилина',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атракуриума',
	},
	{
		id: 31,
		question: 'Характерно повышение АД при вводном наркозе для следующего препарата:',
		answers: [
			{
				id: 0,
				value: 'Тиопентала натрия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'Кетамина',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'Дипривана',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'Кетамина',
	},
	{
		id: 32,
		question: 'Максимально допустимая общая доза тиопентала натрия в наркозе:',
		answers: [
			{
				id: 0,
				value: '500 мг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '1000 мг',
				isCorrect: true,
			},
			{
				id: 2,
				value: '2500 мг',
				isCorrect: false,
			},
			{
				id: 3,
				value: '100 мг',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '1000 мг',
	},
	{
		id: 33,
		question: 'Калипсол вызывает:',
		answers: [
			{
				id: 0,
				value: 'снижение глотательных рефлексов',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'преходящее снижение АД и ЧСС',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'мышечную релаксацию',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'мышечную ригидность',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'мышечную ригидность',
	},
	{
		id: 34,
		question: 'Индукционная внутривенная дозировка калипсола составляет:',
		answers: [
			{
				id: 0,
				value: '3,0-4,0 мк/кг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '4,0-5,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '0,5-1,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 3,
				value: '1,5-2,5 мг/кг',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '1,5-2,5 мг/кг',
	},
	{
		id: 35,
		question: 'Отчетливое влияние на гемодинамику, используемый для нейролептаналгезии оказывает:',
		answers: [
			{
				id: 0,
				value: 'Дроперидол',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'Дормикум',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'Фенталин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'Закись азота',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'Дроперидол',
	},
	{
		id: 36,
		question: 'Метод обезболивания можно назвать атаралгезией при комбинации препаратов:',
		answers: [
			{
				id: 0,
				value: 'Оксибутират натрия и промедол',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'Атропин и промедол',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'Дроперидол и фентанил',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'Седуксен и фентанил',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'Седуксен и фентанил',
	},
	{
		id: 37,
		question: 'При пальцевом прижатии сонной артерии её прижимают к:',
		answers: [
			{
				id: 0,
				value: 'середине грудино-ключично-сосцевидной мышцы',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'поперечному отростку VI шейного позвонка',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'ключице',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ребру',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'поперечному отростку VI шейного позвонка',
	},
	{
		id: 38,
		question:
			'Для снятия брадикардии, граничащей с остановкой сердца и обильного слюнотечения, вызванными введением в\\в 4 мл 0,5% р-ра прозерина, больному необходимо ввести:',
		answers: [
			{
				id: 0,
				value: 'атропин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'норадреналин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'димедрол',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'эфедрин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атропин',
	},
	{
		id: 39,
		question: 'Адсорбер в наркозном аппарате необходим для:',
		answers: [
			{
				id: 0,
				value: 'регенерации кислорода',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'поглощения влаги',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'подогрева газонаркотической смеси',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'поглощения СО2',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'поглощения СО2',
	},
	{
		id: 40,
		question: 'Обезболивание закисью азота противопоказано при:',
		answers: [
			{
				id: 0,
				value: 'остром инфаркте миокарда',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пневмотораксе',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'закрытой травме живота',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'переломе трубчатых костей',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пневмотораксе',
	},
	{
		id: 41,
		question: 'Введение транквилизаторов перед кетамином предотвращает:',
		answers: [
			{
				id: 0,
				value: 'угнетение сознания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'возникновение галлюцинаций',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гиперсаливацию',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'урежение ритма дыхания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'возникновение галлюцинаций',
	},
	{
		id: 42,
		question: 'Венепункция при масочном наркозе:',
		answers: [
			{
				id: 0,
				value: 'на усмотрение врача',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'не обязательна',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'по клиническим показаниям',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'обязательна',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'обязательна, на усмотрение врача',
	},
	{
		id: 43,
		question: 'Пропофол:',
		answers: [
			{
				id: 0,
				value: 'может вызвать брадикардию и асистолию',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'вызывает быстрое наступление медикаментозного сна',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'может вызвать тахикардию и повышение АД',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'вызывает переферическую вазоконстрикцию',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'может вызвать брадикардию и асистолию, вызывает быстрое наступление медикаментозного сна',
	},
	{
		id: 44,
		question: 'Проявлениями токсичности лидокаина являются:',
		answers: [
			{
				id: 0,
				value: 'покалывание вокруг рта',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'затруднение речи',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'заторможенность',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все ответы верны',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все ответы верны',
	},
	{
		id: 45,
		question: 'Норма парциального давления углекислоты в крови:',
		answers: [
			{
				id: 0,
				value: '25-30 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 1,
				value: '51-60 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 2,
				value: '35-45 мм рт. ст.',
				isCorrect: true,
			},
			{
				id: 3,
				value: '45-50 мм рт. ст.',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '35-45 мм рт. ст.',
	},
	{
		id: 46,
		question: 'Вопрос снят',
		answers: [
			{
				id: 0,
				value: 'да',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'нет',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'да',
	},
	{
		id: 47,
		question:
			'При использовании более безопасных и качественных анестетиков премедикация используется главным образом для:',
		answers: [
			{
				id: 0,
				value: 'снятия беспокойства и страха перед операцией',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'усиления действия общих анестетиков',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ускорения выхода из анестезии',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'предотвращения рвоты и тошноты',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'снятия беспокойства и страха перед операцией',
	},
	{
		id: 48,
		question: 'Для проведения искусственной вентиляции легких необходимо в первую очередь:',
		answers: [
			{
				id: 0,
				value: 'Сделать пробное вдувание воздуха',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'Нажать на грудину',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'Закрыть нос пострадавшему',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'Голову пострадавшего запрокинуть с выдвиганием вперёд нижней челюсти',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'Голову пострадавшего запрокинуть с выдвиганием вперёд нижней челюсти',
	},
	{
		id: 49,
		question: 'Показания к переливанию крови и кровезаменителей:',
		answers: [
			{
				id: 0,
				value: 'кардиогеный шок',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ожоговый шок',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'анафилактический шок',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'острая кровопотеря',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'острая кровопотеря, ожоговый шок',
	},
	{
		id: 50,
		question: 'Оксибутират натрия (ГОМК) не обладает:',
		answers: [
			{
				id: 0,
				value: 'противосудорожным',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'седативным',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'противорвотным',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'наркотическим',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'противорвотным',
	},
	{
		id: 52,
		question: 'Последовательность симптомов при острой остановке кровообращения:',
		answers: [
			{
				id: 0,
				value: 'выключение сознания, появление судорог, расширение зрачков',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'расширение зрачков, выключение сознания, появление судорог',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'последовательность проявляется индивидуально у разных пациентов',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'появление судорог, расширение зрачков, выключение сознания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'выключение сознания, появление судорог, расширение зрачков',
	},
	{
		id: 53,
		question:
			'Контроль функций и процессов жизнедеятельности больного, выявление их отклонений во время анестезии и реанимации - суть:',
		answers: [
			{
				id: 0,
				value: 'метрологической проверки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дефибрилляции',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ивл',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'мониторинга',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'мониторинга',
	},
	{
		id: 54,
		question: 'При всех методах ингаляции кислородом требуется:',
		answers: [
			{
				id: 0,
				value: 'возвышенное положение больного',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'согревание дыхательной смеси',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'назначение больному бронхоспазмолитиков',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'увлажнение дыхательной смеси',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'увлажнение дыхательной смеси, согревание дыхательной смеси',
	},
	{
		id: 55,
		question: 'Клинические формы острой сосудистой недостаточности:',
		answers: [
			{
				id: 0,
				value: 'коллапс',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'стенокардия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'обморок',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'отек легких',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'коллапс, обморок',
	},
	{
		id: 56,
		question: 'Транспортировка пациентов в бессознательном состоянии осуществляется:',
		answers: [
			{
				id: 0,
				value: 'в положении «лягушки»',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'лежа на боку',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'лежа на спине',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'лежа на животе',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'лежа на боку',
	},
	{
		id: 57,
		question: 'При потере сознания у пациента, в первую очередь, нужно проверить:',
		answers: [
			{
				id: 0,
				value: 'реакцию зрачков на свет',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пульс на сонных артериях',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'наличие самостоятельного дыхания',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'пульс на лучевой артерии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пульс на сонных артериях',
	},
	{
		id: 58,
		question: 'Блокада на уровне корешков спинного мозга производится при анестезии:',
		answers: [
			{
				id: 0,
				value: 'проводниковой',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'перидуральной',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'инфильтрационной',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'спинальной',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'перидуральной',
	},
	{
		id: 59,
		question:
			'Для снятия брадикардии, граничащей с остановкой сердца и обильного слюнотечения, вызванными введением в\\в 4 мл 0,5% р-ра прозерина, больному необходимо ввести:',
		answers: [
			{
				id: 0,
				value: 'норадреналин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'димедрол',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'атропин',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'эфедрин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атропин',
	},
	{
		id: 60,
		question: 'При пальцевом прижатии сонной артерии её прижимают к:',
		answers: [
			{
				id: 0,
				value: 'ключице',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ребру',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'поперечному отростку VI шейного позвонка',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'середине грудино-ключично-сосцевидной мышцы',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'поперечному отростку VI шейного позвонка',
	},
	{
		id: 61,
		question: 'Условия, которые необходимо соблюдать при госпитализации больных с острым инфарктом миокарда:',
		answers: [
			{
				id: 0,
				value: 'транспортировка лежа на носилках с продолжающимся обезболиванием и в/в инфузией лекарственных средств',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'транспортировка на носилках под контролем АД',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'транспортировка на носилках под контролем ЭКГ',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'срочная доставка в стационар в любом положении',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer:
			'транспортировка лежа на носилках с продолжающимся обезболиванием и в/в инфузией лекарственных средств',
	},
	{
		id: 62,
		question: 'Характерные симптомы острой дыхательной недостаточности:',
		answers: [
			{
				id: 0,
				value: 'головная боль, потемнение в глазах, кашель с гнойной мокротой',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'одышка, кашель, цианоз кожи, повышение ад, повышение цвд',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'боли в области сердца, одышка, головная боль, перебои в работе сердца',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'боли в животе, головокружение, похолодание конечностей, цианоз кожи',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'одышка, кашель, цианоз кожи, повышение ад, повышение цвд',
	},
	{
		id: 63,
		question: 'При применении каких медикаментов могут возникнуть аллергические реакции у пациента:',
		answers: [
			{
				id: 0,
				value: 'физиологический раствор',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'лидокаин',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'глюкоза',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дикаин',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'лидокаин, дикаин',
	},
	{
		id: 64,
		question:
			'Если во время гипертонического криза появилась сильнейшая боль за грудиной, не снимающаяся нитроглицерином, это признак:',
		answers: [
			{
				id: 0,
				value: 'инфаркта миокарда',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'межреберной невралгии',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'астмы',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'стенокардии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'инфаркта миокарда',
	},
	{
		id: 65,
		question: 'Глубина продавливания грудины при непрямом массаже сердца у ребенка:',
		answers: [
			{
				id: 0,
				value: '4-5 см',
				isCorrect: false,
			},
			{
				id: 1,
				value: '1/3 передне-заднего размера грудной клетки',
				isCorrect: true,
			},
			{
				id: 2,
				value: '6-8 см',
				isCorrect: false,
			},
			{
				id: 3,
				value: '1-2 см',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '1/3 передне-заднего размера грудной клетки',
	},
	{
		id: 66,
		question: 'Струйное введение препаратов кальция показано:',
		answers: [
			{
				id: 0,
				value: 'всегда при асистолии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'при асистолии, обусловленной гиперкалиемией',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'всегда при фибрилляции желудочков',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'при гипокалиемии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'при асистолии, обусловленной гиперкалиемией',
	},
	{
		id: 67,
		question: 'В механизме развития сепсиса имеют значение:',
		answers: [
			{
				id: 0,
				value: 'реактивность организма',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'передозировка антибиотиков',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'пол пациента',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'количество попавших в организм микроорганизмов',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'количество попавших в организм микроорганизмов, реактивность организма',
	},
	{
		id: 68,
		question: 'Укажите основной признак черепно-мозговой травмы:',
		answers: [
			{
				id: 0,
				value: 'потеря больным сознания в момент травмы',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'вялость, сонливость',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'тошнота, рвота после травмы',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'головные боли и головокружение',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'потеря больным сознания в момент травмы',
	},
	{
		id: 69,
		question: 'Центральной венозное давление в норме:',
		answers: [
			{
				id: 0,
				value: '6-12 см водного столба',
				isCorrect: true,
			},
			{
				id: 1,
				value: '0-5 см водного столба',
				isCorrect: false,
			},
			{
				id: 2,
				value: '12-20 см водного столба',
				isCorrect: false,
			},
			{
				id: 3,
				value: '20-30 см водного столба',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '6-12 см водного столба',
	},
	{
		id: 70,
		question: 'Проведение обезболивания закисью азота при отсутствии кислорода:',
		answers: [
			{
				id: 0,
				value: 'кислород не требуется',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'безопасно',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'противопоказано',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'возможно только после интубации трахеи',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'противопоказано',
	},
	{
		id: 71,
		question: 'Признаками клинической смерти являются:',
		answers: [
			{
				id: 0,
				value: 'потеря сознания, нитевидный пульс, цианоз',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'нитевидный пульс, цианоз, агональное дыхание',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'потеря сознания, отсутствие пульса на лучевой артерии',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'потеря сознания, отсутствие пульса на сонных артериях, остановка дыхания, расширение зрачков',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'потеря сознания, отсутствие пульса на сонных артериях, остановка дыхания, расширение зрачков',
	},
	{
		id: 72,
		question: 'Анальгетическим эффектом обладают:',
		answers: [
			{
				id: 0,
				value: 'ThNa',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'калипсол',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'глюкоза',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'гексенал',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'калипсол',
	},
	{
		id: 73,
		question: 'К кристаллоидным инфузионным препаратам относится:',
		answers: [
			{
				id: 0,
				value: 'полиглюкин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'желатиноль',
				isCorrect: false,
			},
			{
				id: 2,
				value: '0,9% р-р натрия хлорида',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'реополиглюкин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '0,9% р-р натрия хлорида',
	},
	{
		id: 74,
		question: 'Волюмоспирометр в аппарате ингаляционного наркоза и респираторе позволяет определить:',
		answers: [
			{
				id: 0,
				value: 'пульс, частоту сердечных сокращений',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'частоту дыхательных движений',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дыхательный объем',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'артериальное давление',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дыхательный объем',
	},
	{
		id: 75,
		question:
			'Больше предпосылок к развитию отека легких в постреанимационном периоде создается при утоплении в воде:',
		answers: [
			{
				id: 0,
				value: 'пресной',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'морской',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'морской',
	},
	{
		id: 76,
		question: 'Какие из препаратов не вызывают боли по ходу вен и не способствуют развитию тромбофлебита:',
		answers: [
			{
				id: 0,
				value: 'пропофол',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'оксибутират натрия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'кетамин',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'тиопентал натрия',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'кетамин',
	},
	{
		id: 77,
		question: 'При внезапном снижении объема циркулирующей крови появляются:',
		answers: [
			{
				id: 0,
				value: 'возбуждение, гиперактивность пациента',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'цианоз, гипотензия, аритмия, тахипноэ, слабость, потеря сознания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'бледность, головокружение, слабость, гипотензия, пульс слабого наполнения, аритмия',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'бледность, гипертензия, напряженный пульс, головокружение',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'бледность, головокружение, слабость, гипотензия, пульс слабого наполнения, аритмия',
	},
	{
		id: 78,
		question: 'При перидуральной анестезии артериальное давление может:',
		answers: [
			{
				id: 0,
				value: 'повышаться',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'понижаться',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'понижаться',
	},
	{
		id: 79,
		question:
			'Для купирования судорог, развившихся у пациента, страдающего стенозом привратника, в ответ на введение оксибутирата натрия вводится раствор:',
		answers: [
			{
				id: 0,
				value: 'хлористого натрия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'хлористого кальция',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'реополиглюкин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'хлористого калия',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'хлористого калия',
	},
	{
		id: 80,
		question: 'При непрямом массаже сердца глубина продавливания грудины у взрослого должен быть:',
		answers: [
			{
				id: 0,
				value: '4-5 см',
				isCorrect: true,
			},
			{
				id: 1,
				value: '2-4 см',
				isCorrect: false,
			},
			{
				id: 2,
				value: '6-8 см',
				isCorrect: false,
			},
			{
				id: 3,
				value: '1-2 см',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '4-5 см',
	},
	{
		id: 81,
		question: 'Введение транквилизаторов перед кетамином предотвращает:',
		answers: [
			{
				id: 0,
				value: 'урежение ритма дыхания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'угнетение сознания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гиперсаливацию',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'возникновение галлюцинаций',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'возникновение галлюцинаций',
	},
	{
		id: 82,
		question: 'Анестезиологическое устройство для подключения к больному:',
		answers: [
			{
				id: 0,
				value: 'мешок «Амбу»',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'аппарат ИВЛ',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'наркозный аппарат',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'наркозный аппарат',
	},
	{
		id: 83,
		question: 'При возникновении рвоты у послеоперационного больного необходимо:',
		answers: [
			{
				id: 0,
				value: 'сделать больному инъекцию церукала',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'провести зондирование желудка',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'вызвать дежурного врача',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'срочно опустить головной конец кровати и повернуть голову больного на бок',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'срочно опустить головной конец кровати и повернуть голову больного на бок',
	},
	{
		id: 84,
		question: 'Неотложная помощь при приступе сердечной астмы:',
		answers: [
			{
				id: 0,
				value: 'положение больного сидя или полусидя с опушенными ногами',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'наложение венозных жгутов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'оксигенотерапия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все варианты верны',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все варианты верны',
	},
	{
		id: 85,
		question: 'Неотложная помощь при судорожном синдроме:',
		answers: [
			{
				id: 0,
				value: 'супраcтин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'коргликон',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'кардиамин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'седуксен',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'седуксен',
	},
	{
		id: 86,
		question: 'Обязательными условиями при проведении непрямого массажа сердца является:',
		answers: [
			{
				id: 0,
				value: 'наличие двух реанимирующих',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'наличия валика под лопатками',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'наличие твердой поверхности',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'положение рук реанимирующего на границе средней и нижней трети грудины',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'наличие твердой поверхности, положение рук реанимирующего на границе средней и нижней трети грудины',
	},
	{
		id: 87,
		question: 'Стремительно развивающийся шок:',
		answers: [
			{
				id: 0,
				value: 'Травматический',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'Гемотрансфузионный',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'Геморрагический',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'Анафилактический',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'Анафилактический',
	},
	{
		id: 88,
		question: 'Раствор атропина сульфата:',
		answers: [
			{
				id: 0,
				value: 'обладает М-холино блокирующим действием, уменьшает секрецию слюнных, потовых, желудочных желез',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'расширяет коронарные сосуды и усиливает приток крови к сердцу',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'повышает сердечный выброс',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'удлиняет действие адреналина гидрохлорида',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'обладает М-холино блокирующим действием, уменьшает секрецию слюнных, потовых, желудочных желез',
	},
	{
		id: 89,
		question: 'Прямой массаж сердца применяют при:',
		answers: [
			{
				id: 0,
				value: 'неэффективности непрямого массажа сердца',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'утоплении',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'наличии инструментов, позволяющих вскрыть грудную клетку',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'остановке или фибрилляции сердца во время операции на органах грудной клетки',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'остановке или фибрилляции сердца во время операции на органах грудной клетки',
	},
	{
		id: 90,
		question: 'Препаратами первой линии при анафилактическом шоке являются:',
		answers: [
			{
				id: 0,
				value: 'антибиотики',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'противовирусные препараты',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'адреналин',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'спазмолитики',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'адреналин',
	},
	{
		id: 91,
		question: 'Пропофол (диприван):',
		answers: [
			{
				id: 0,
				value: 'противопоказан у больных с гиповолемией',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'вызывает быстрое восстановление сознания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'противопоказан при бронхоскопиях',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'подходит для использования у больных с повышенным внутричерепным давлением',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'подходит для использования у больных с повышенным внутричерепным давлением, противопоказан у больных с гиповолемией',
	},
	{
		id: 92,
		question: 'При проведении плановой операции под эндотрахеальным наркозом назначение премедикации:',
		answers: [
			{
				id: 0,
				value: 'необязательно',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'желательно',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'по решению врача',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'обязательно',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'обязательно',
	},
	{
		id: 93,
		question: 'Приступ стенокардии купируют:',
		answers: [
			{
				id: 0,
				value: 'папаверином',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'парацетамолом',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'нитроглицерином',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'дибазолом',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'нитроглицерином',
	},
	{
		id: 94,
		question: 'Неблагоприятные последствия неумышленного охлаждения новорожденных во время анестезии:',
		answers: [
			{
				id: 0,
				value: 'гипогликемия',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'изменение внутренней среды в сторону ацидоза',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гипервентиляция',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'брадикардия',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'изменение внутренней среды в сторону ацидоза, гипогликемия, брадикардия',
	},
	{
		id: 95,
		question: 'При отравлениях возможны следующие виды шока:',
		answers: [
			{
				id: 0,
				value: 'токсический, травматический, анафалитический, токсико-инфекционный',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'токсический, гиповолемический, гемолитический',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'кардиогенный, травматический',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'гиповолемический, септический, кардиогенный',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'токсический, гиповолемический, гемолитический',
	},
	{
		id: 96,
		question: 'Приоритетная проблема пациента при абдоминальной форме инфаркта миокарда:',
		answers: [
			{
				id: 0,
				value: 'рвота',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'боль в эпигастрии',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'симптомы раздражения кишечника',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'парез кишечника',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'боль в эпигастрии',
	},
	{
		id: 97,
		question: 'Укажите дозу дитилина, необходимую для интубации трахеи у взрослого больного:',
		answers: [
			{
				id: 0,
				value: '2,0 мг/кг',
				isCorrect: true,
			},
			{
				id: 1,
				value: '3,0мг/кг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '1,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 3,
				value: '1,5 мг/кг',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '2,0 мг/кг',
	},
	{
		id: 98,
		question: 'К частым причинам послеоперационной депрессии дыхания у новорожденных относятся:',
		answers: [
			{
				id: 0,
				value: 'гипотензия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гипотермия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'сопротивление воздушных путей',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'гипогликемия',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'гипотермия, гипогликемия',
	},
	{
		id: 99,
		question: 'Максимальная нагрузка по обслуживанию больных на одну сестру в реанимационном отделении:',
		answers: [
			{
				id: 0,
				value: 'три койки',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'одна койка',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'шесть коек',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'четыре койки',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'три койки',
	},
	{
		id: 100,
		question: 'Метрологическая проверку средств измерения аппарата ИВЛ должна проводиться:',
		answers: [
			{
				id: 0,
				value: 'старшей медицинской сестрой отделения',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'врачом анестезиологом-реаниматологом',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'метрологической службой',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'медицинской сестрой-анестезисткой',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'метрологической службой',
	},
	{
		id: 101,
		question: 'При отсутствии возможности для проведения дефибрилляции сердца проводится:',
		answers: [
			{
				id: 0,
				value: 'проба Вальсальва',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'прекардиальный удар',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'прием Геймлиха',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'погружение лица в ледяную воду',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'прекардиальный удар',
	},
	{
		id: 102,
		question: 'Потеря сознания при внезапном прекращении кровообращения в головном мозге наступает через:',
		answers: [
			{
				id: 0,
				value: '30-45 сек',
				isCorrect: false,
			},
			{
				id: 1,
				value: '7-10 сек',
				isCorrect: true,
			},
			{
				id: 2,
				value: '15-30 сек',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'через минуту',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '7-10 сек',
	},
	{
		id: 103,
		question: 'Результатом правильного наложения жгута при кровотечении является:',
		answers: [
			{
				id: 0,
				value: 'уменьшение кровотечения, сохранение пульса, увеличение цианоза',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'прекращение кровотечения, отсутствие пульса, нарастание цианоза',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'уменьшение кровотечения, сохранение пульса, бледность кожи',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'прекращение кровотечения, отсутствие пульса, бледность кожи',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'прекращение кровотечения, отсутствие пульса, бледность кожи',
	},
	{
		id: 104,
		question: 'Формы острых аллергических реакций:',
		answers: [
			{
				id: 0,
				value: 'крапивница',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'снижение температуры тела',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'отёк Квинке',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'анафилактический шок',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'крапивница, отёк Квинке, анафилактический шок',
	},
	{
		id: 105,
		question: 'Кровь дозируется точно при заборе:',
		answers: [
			{
				id: 0,
				value: 'пластиковыми пробирками',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пробирка не имеет значения для дозирования',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'стеклянными пробирками',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'вакуумными пробирками',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'вакуумными пробирками',
	},
	{
		id: 106,
		question: 'Достоверные признаки клинической смерти:',
		answers: [
			{
				id: 0,
				value: 'поверхностное и учащенное дыхание, узкие зрачки без реакции на свет, нитевидный пульс',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'отсутствие дыхания, отсутствие сердцебиения, расширенные зрачки без реакции на свет',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'нарушение ритма сердца, диспное, цианоз',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'судороги, холодные конечности, гипотензия',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'отсутствие дыхания, отсутствие сердцебиения, расширенные зрачки без реакции на свет',
	},
	{
		id: 107,
		question:
			'Оказывая помощь при ожоге первой степени, в первую очередь необходимо обработать обожжённую поверхность:',
		answers: [
			{
				id: 0,
				value: 'холодной водой до онемения',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'жиром',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'стерильным новокаином',
				isCorrect: false,
			},
			{
				id: 3,
				value: '96% этиловым спиртом',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'холодной водой до онемения',
	},
	{
		id: 108,
		question: 'Для промывания желудка необходимо приготовить чистую воду с температурой:',
		answers: [
			{
				id: 0,
				value: '12-15 градусов С',
				isCorrect: false,
			},
			{
				id: 1,
				value: '36-40 градусов С',
				isCorrect: false,
			},
			{
				id: 2,
				value: '24-36 градусов С',
				isCorrect: false,
			},
			{
				id: 3,
				value: '18-20 градусов С',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '18-20 градусов С',
	},
	{
		id: 109,
		question: 'До прихода врача больному с желудочно-кишечным кровотечением нужно:',
		answers: [
			{
				id: 0,
				value: 'поставить очистительную клизму',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'положить на живот горячую грелку',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'положить на эпигастрий пузырь со льдом',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'положить на эпигастрий пузырь со льдом',
	},
	{
		id: 110,
		question: 'Контроль давления в дыхательных путях при ИВЛ должен осуществляться:',
		answers: [
			{
				id: 0,
				value: '1 раз в час',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'непрерывно',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'по мере необходимости',
				isCorrect: false,
			},
			{
				id: 3,
				value: '1 раз в сутки',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'непрерывно',
	},
	{
		id: 111,
		question: 'Длительность действия эпидуральной анестезии зависит от:',
		answers: [
			{
				id: 0,
				value: 'фазы анестетика',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'вида анестетика',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'уровня квалификации врача',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'вида анестетика',
	},
	{
		id: 112,
		question: 'Достоверным диагностическим критерием инфаркта миокарда является:',
		answers: [
			{
				id: 0,
				value: 'экг',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'анамнез',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'анализ крови',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'рентгенологическое исследование сердца',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'экг',
	},
	{
		id: 113,
		question: 'Потенциальная проблема пациента при отеке Квинке:',
		answers: [
			{
				id: 0,
				value: 'диарея',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'отек гортани',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'боли в животе',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'лихорадка',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'отек гортани',
	},
	{
		id: 114,
		question: 'Назовите первичные клинические признаки осложнения при переливании несовместимой крови больному:',
		answers: [
			{
				id: 0,
				value: 'выраженное беспокойство, озноб, боли в голове, пояснице, одышка, гиперемия лица, тахикардия, резкое падение АД',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'рвота и кровохаркание, потеря сознания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'остановка дыхания и сердечной деятельности',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer:
			'выраженное беспокойство, озноб, боли в голове, пояснице, одышка, гиперемия лица, тахикардия, резкое падение АД',
	},
	{
		id: 115,
		question: 'О правильности выполнения непрямого массажа сердца свидетельствует:',
		answers: [
			{
				id: 0,
				value: 'видимое набухание шейных вен',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'перелом ребер',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'наличие пульса на лучевой артерии',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'наличие проводимой пульсации на сонных артериях во время компрессий грудной клетки',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'наличие проводимой пульсации на сонных артериях во время компрессий грудной клетки',
	},
	{
		id: 116,
		question: 'Уровень выполнения эпидуральной анестезии:',
		answers: [
			{
				id: 0,
				value: 'грудной и поясничный',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'грудной',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'шейный',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'грудной и поясничный',
	},
	{
		id: 117,
		question: 'Если у больного после введения инсулина появляется дрожание конечностей, чувство голода - это:',
		answers: [
			{
				id: 0,
				value: 'гипогликемическая кома',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гипергликемия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гипогликемическое состояние',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'гипогликемическое состояние',
	},
	{
		id: 118,
		question: 'Доза пропофола для индукции у взрослых:',
		answers: [
			{
				id: 0,
				value: '4-5 мг/кг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '5-6 мг/кг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '2-2,5 мг/кг',
				isCorrect: true,
			},
			{
				id: 3,
				value: '3 мг/кг',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '2-2,5 мг/кг',
	},
	{
		id: 119,
		question: 'Тройной прием по Сафару включает:',
		answers: [
			{
				id: 0,
				value: 'освобождение от стесняющей одежды области шеи',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'отгибание головы назад, выведение нижней челюсти вперед, открытие рта',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'поворот головы пострадавшего на бок, открывание рта, валик под голову',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'отгибание головы назад, выведение нижней челюсти вперед, открытие рта',
	},
	{
		id: 120,
		question: 'Основными признаками остановки сердца являются:',
		answers: [
			{
				id: 0,
				value: 'отсутствие пульса на сонной артерии',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'узкие зрачки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'судороги',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'отсутствие сознания',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'отсутствие пульса на сонной артерии, отсутствие сознания',
	},
	{
		id: 121,
		question: 'С целью профилактики воздушной эмболии при катетеризации подключичной вены:',
		answers: [
			{
				id: 0,
				value: 'под лопатки подкладывают валик, высотой 10 см',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'поднимают ножной конец кровати',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'голову больного поворачивает в противоположную сторону',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'поднимают ножной конец кровати',
	},
	{
		id: 122,
		question: 'В состоянии агонии АД:',
		answers: [
			{
				id: 0,
				value: 'определяется на бедренной артерии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'определяется на лучевой артерии',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'не определяется',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'не определяется',
	},
	{
		id: 123,
		question: 'К причинам обструкции дыхательных путей не относят:',
		answers: [
			{
				id: 0,
				value: 'отек слизистой дыхательных путей',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'бронхоспазм',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ларингоспазм',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'угнетение дыхательного центра',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'угнетение дыхательного центра',
	},
	{
		id: 124,
		question: 'Первыми признаками развивающего травматического шока являются:',
		answers: [
			{
				id: 0,
				value: 'резкое побледнение кожных покровов, липкий холодный пот',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'психомоторное возбуждение, неадекватная оценка своего состояния',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'судороги, апатия, потоотделение',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'гиперемия, сухость кожи, пенистое отделение изо рта, галлюцинации',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'резкое побледнение кожных покровов, липкий холодный пот, психомоторное возбуждение, неадекватная оценка своего состояния',
	},
	{
		id: 125,
		question: 'Монитор предназначен для непрерывного контроля:',
		answers: [
			{
				id: 0,
				value: 'оксигенации, вентиляции и кровообращения',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'работы аппарата ингаляционного наркоза',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'экг, ад, цвд, ээг, температуры, дыхания',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'концентрации кислорода в дыхательной смеси',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'экг, ад, цвд, ээг, температуры, дыхания',
	},
	{
		id: 126,
		question: 'Принципы оказания помощи при химических ожогах:',
		answers: [
			{
				id: 0,
				value: 'промывание прохладной водой',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'присыпать тальком',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'по возможности нейтрализовать вещества, вызывающие ожог',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'анальгетики, начиная со второй степени – сухие асептические повязки без обработки обожжённой поверхности',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'промывание прохладной водой, анальгетики, начиная со второй степени – сухие асептические повязки без обработки обожжённой поверхности',
	},
	{
		id: 127,
		question:
			'Укажите соотношение сыворотки крови больного и эритроцитов донора при проведении пробы на совместимость индивидуальную по системе АВО:',
		answers: [
			{
				id: 0,
				value: 'сыворотка реципиента к крови донора = 10 : 1',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'объем эритроцитов больше, чем объем сыворотки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'равные объемы сыворотки и эритроцитов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'сыворотка реципиента к крови донора = 10 : 1',
	},
	{
		id: 128,
		question: 'Непрямой массаж сердца проводится:',
		answers: [
			{
				id: 0,
				value: 'на 1 см выше мечевидного отростка',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'на границе верхней и средней трети грудины',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'на границе средней и нижней трети грудины',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'на границе средней и нижней трети грудины',
	},
	{
		id: 129,
		question: 'Основное отличие эпидуральной анестезии – это выпадение:',
		answers: [
			{
				id: 0,
				value: 'двигательной функции',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дыхательной функции',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'болевой чувствительности',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'всех видов чувствительности',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'болевой чувствительности',
	},
	{
		id: 130,
		question: 'При гипокапнии норма парциального давления углекислоты в крови:',
		answers: [
			{
				id: 0,
				value: '45-50 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 1,
				value: '51-60 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 2,
				value: '25-30 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 3,
				value: '35-45 мм рт. ст.',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '35-45 мм рт. ст.',
	},
	{
		id: 131,
		question: 'Признаки гипергликемической комы:',
		answers: [
			{
				id: 0,
				value: 'запах ацетона на выдохе',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кожа и видимые слизистые сухие',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'снижен мышечный тонус конечностей',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все варианты верны',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все варианты верны',
	},
	{
		id: 132,
		question: 'Прекардиальный удар- это резкий удар в грудную клетку:',
		answers: [
			{
				id: 0,
				value: 'в области мечевидного отростка',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'на границе средней и нижней части грудины',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'в области левого подреберья',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'на границе средней и нижней части грудины',
	},
	{
		id: 133,
		question: 'Метод анестезии, основанный на перерыве проводимости чувствительности нерва на протяжении:',
		answers: [
			{
				id: 0,
				value: 'проводниковая, или регионарная',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'спинальная',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'перидуральная',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'инфильтрационная',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'проводниковая, или регионарная',
	},
	{
		id: 134,
		question: 'Минимальная продолжительность предоперационной подготовки при экстренной операции до:',
		answers: [
			{
				id: 0,
				value: '12 часов',
				isCorrect: false,
			},
			{
				id: 1,
				value: '4-6 часов',
				isCorrect: false,
			},
			{
				id: 2,
				value: '2-4 часов',
				isCorrect: true,
			},
			{
				id: 3,
				value: '24 часа',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '2-4 часов',
	},
	{
		id: 135,
		question: 'Спинальная анестезия может вызвать:',
		answers: [
			{
				id: 0,
				value: 'аллергическе реакции',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'гипертермию',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гипотонию, коллапс',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'тахипноэ, одышку',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'гипотонию, коллапс, аллергическе реакции',
	},
	{
		id: 136,
		question: 'При обнаружении кровотечения из трахеостомы дежурная медсестра должна:',
		answers: [
			{
				id: 0,
				value: 'срочно вызвать врача',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'провести санацию ТБД',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'измерить температуру тела',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'провести гомостатическую терапию',
				isCorrect: false,
			},
			{
				id: 4,
				value: 'измерить показатели гемодинамики',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'срочно вызвать врача, провести санацию ТБД',
	},
	{
		id: 137,
		question: 'Th Na и гексанал изменяют сердечный выброс:',
		answers: [
			{
				id: 0,
				value: 'увеличивают',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'уменьшают его',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'не влияют на него',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'уменьшают его',
	},
	{
		id: 138,
		question: 'На локтевой и коленный суставы накладывается повязка:',
		answers: [
			{
				id: 0,
				value: '«Черепашья»',
				isCorrect: true,
			},
			{
				id: 1,
				value: '8-образная',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'Спиральная',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'Циркулярная',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '«Черепашья»',
	},
	{
		id: 139,
		question: 'Больше всего находится крови в следующем отделе сердечно-сосудистой системы:',
		answers: [
			{
				id: 0,
				value: 'в венах большого круга кровообращения',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'в сосудах легких и сердца',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'в артериях большого круга кровообращения',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'в капиллярах',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'в венах большого круга кровообращения',
	},
	{
		id: 140,
		question: 'Транспортировка пострадавшего с сотрясением головного мозга осуществляется в положении:',
		answers: [
			{
				id: 0,
				value: 'с приподнятым головным концом',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'с опущенным головным концом',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'горизонтальном',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'с приподнятым головным концом',
	},
	{
		id: 141,
		question: 'На обожженную поверхность накладывают:',
		answers: [
			{
				id: 0,
				value: 'повязку с синтомициновой эмульсией',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'сухую асептическую повязку',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'повязку с раствором чайной соды',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'сухую асептическую повязку',
	},
	{
		id: 142,
		question: 'Предоперационный период начинается с момента:',
		answers: [
			{
				id: 0,
				value: 'принятия решения об операции',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'начала подготовим к операции',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'поступления в стационар',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'заболевания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'принятия решения об операции',
	},
	{
		id: 143,
		question: 'Действия медицинской сестры при отсутствии поступления крови при заборе из подключичного катетера:',
		answers: [
			{
				id: 0,
				value: 'забрать кровь для анализов из периферической вены',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'сообщить дежурному врачу',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'провести бужирование катетера проводником',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'освободить катетер от фиксации и изменить его положение',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'сообщить дежурному врачу',
	},
	{
		id: 144,
		question: 'Наиболее важная психологическая проблема у пациента с острым инфарктом миокарда:',
		answers: [
			{
				id: 0,
				value: 'страх смерти',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'снижение памяти',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'недооценка состояния',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'тревога',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'страх смерти',
	},
	{
		id: 145,
		question: 'Индукционная внутривенная дозировка дипривана составляет:',
		answers: [
			{
				id: 0,
				value: '1,0-1,5 мг/кг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '3,0-3,5 мг/кг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '2,0-2,5 мг/кг',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '2,0-2,5 мг/кг',
	},
	{
		id: 146,
		question: 'Пациента с большой кровопотерей транспортируют:',
		answers: [
			{
				id: 0,
				value: 'лежа с приподнятым головным концом на носилках',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'лежа с опущенным головным концом на носилках',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'полусидя',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'сидя',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'лежа с опущенным головным концом на носилках',
	},
	{
		id: 147,
		question: 'Окклюзионная повязка применяется при:',
		answers: [
			{
				id: 0,
				value: 'после пункции сустава',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'открытом пневмотораксе',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'венозных кровотечениях',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ранение мягких тканей головы',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'открытом пневмотораксе',
	},
	{
		id: 148,
		question: 'При острой сосудистой недостаточности (обморок, коллапс) больному надо придать положение:',
		answers: [
			{
				id: 0,
				value: 'горизонтальное с приподнятой головой',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'полусидячее',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'горизонтальное с приподнятыми ногами',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'ровное горизонтальное',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'горизонтальное с приподнятыми ногами',
	},
	{
		id: 149,
		question: 'Продолжительность подготовки к плановой операции:',
		answers: [
			{
				id: 0,
				value: '2-4 часа',
				isCorrect: false,
			},
			{
				id: 1,
				value: '12 часов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'до 10 суток',
				isCorrect: true,
			},
			{
				id: 3,
				value: '4-6 часов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'до 10 суток',
	},
	{
		id: 150,
		question: 'При своевременно замеченной фибрилляции желудочков следует немедленно предпринять:',
		answers: [
			{
				id: 0,
				value: 'дефибрилляцию сердца',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'введение медикаментозных средств',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'искусственное дыхание',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'открытый массаж сердца',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дефибрилляцию сердца',
	},
	{
		id: 151,
		question: 'Приоритетная психологическая проблема пациента в предоперационный период:',
		answers: [
			{
				id: 0,
				value: 'учащенное мочеиспускание',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'страх операции',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'боль',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'рвота',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'страх операции',
	},
	{
		id: 152,
		question: 'Индукционная внутривенная дозировка калипсола составляет:',
		answers: [
			{
				id: 0,
				value: '1,5-2,5 мг/кг',
				isCorrect: true,
			},
			{
				id: 1,
				value: '4,0-5,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '0,5-1,0 мг/кг',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '1,5-2,5 мг/кг',
	},
	{
		id: 153,
		question:
			'Показатель диуреза у взрослого больного, страдающего почечной недостаточностью, составляющий 3 мл\\сутки оценивается как:',
		answers: [
			{
				id: 0,
				value: 'олигурия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'анурия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'полиурия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'нормальный',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'анурия',
	},
	{
		id: 154,
		question: 'При ушибе миокарда необходимо:',
		answers: [
			{
				id: 0,
				value: 'тугое бинтование грудной клетки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'контроль экг, показателей гемодинамики',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'плевральная пункция',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дренирование плевральной полости',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'контроль экг, показателей гемодинамики',
	},
	{
		id: 155,
		question: 'Противопоказанием для проведения реанимации является:',
		answers: [
			{
				id: 0,
				value: 'инфаркт миокарда',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'по заключению консилиума (врачи + юрист)',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'инсульт',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'по заключению консилиума (врачи + юрист)',
	},
	{
		id: 156,
		question: 'При остром отравлении желудок промывается:',
		answers: [
			{
				id: 0,
				value: 'кипяченой водой 8 л',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'количеством воды 12-15 л',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'до чистых промывных вод',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'количеством воды 12-15 л',
	},
	{
		id: 157,
		question: 'Приоритетная проблема пациента при анафилактическом шоке:',
		answers: [
			{
				id: 0,
				value: 'кожный зуд',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'резкая слабость',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'падение АД',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'головная боль',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'падение АД',
	},
	{
		id: 158,
		question: 'Первая помощь при гипогликемической предкоме:',
		answers: [
			{
				id: 0,
				value: 'срочно доставить в ЛПУ',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'срочно ввести инсулин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дать пару кусков сахара, конфету, кусок хлеба',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'сделать непрямой массаж сердца',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дать пару кусков сахара, конфету, кусок хлеба',
	},
	{
		id: 159,
		question: 'При своевременно замеченной фибрилляции желудочков следует немедленно произвести:',
		answers: [
			{
				id: 0,
				value: 'ЭКГ',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'искусственное дыхание',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дефибрилляцию',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'введение медикаментозных средств',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дефибрилляцию',
	},
	{
		id: 160,
		question: 'О правильности выполнения искусственного дыхания свидетельствует:',
		answers: [
			{
				id: 0,
				value: 'видимые выбухание эпигастрии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'наличие экскурсии грудной клетки',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'парадоксальный пульс на сонных артериях',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'видимое набухание шейных вен',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'наличие экскурсии грудной клетки',
	},
	{
		id: 161,
		question: 'Головные боли после спинальный пункции:',
		answers: [
			{
				id: 0,
				value: 'могут сопровождаться менингеальными симптомами',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'могут появиться в течении 52 часов после пункции',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'могут появиться чаще у пожилых',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'проходят при ограничении приема жидкости',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'могут сопровождаться менингеальными симптомами, могут появиться в течении 52 часов после пункции',
	},
	{
		id: 162,
		question:
			'При отравлении ядами прижигающего действия промывание желудка через зонд проводится в сроки после отравления до:',
		answers: [
			{
				id: 0,
				value: '3 суток',
				isCorrect: false,
			},
			{
				id: 1,
				value: '12 часов',
				isCorrect: true,
			},
			{
				id: 2,
				value: '24 часов',
				isCorrect: false,
			},
			{
				id: 3,
				value: '2 суток',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '12 часов',
	},
	{
		id: 163,
		question: 'Последовательность появление симптомов при острой остановке кровообращения:',
		answers: [
			{
				id: 0,
				value: 'расширение зрачков, появление судорог, выключение сознания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'выключение сознания, появление судорог, расширение зрачков',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'появление судорог, расширение зрачков, отключения сознания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'выключение сознания, появление судорог, расширение зрачков',
	},
	{
		id: 164,
		question: 'Проверка аппаратов ИВЛ производится медицинской сестрой-анестезистом:',
		answers: [
			{
				id: 0,
				value: 'через 10 мин. после подключения к больному',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'каждые 15 минут',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'после отключения аппарата',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'перед каждым подключением пациента к аппарату ИВЛ',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'перед каждым подключением пациента к аппарату ИВЛ',
	},
	{
		id: 165,
		question: 'С гемостатической целью применяют:',
		answers: [
			{
				id: 0,
				value: 'кальция хлорид',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'этамзилат',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'химатрипин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'цепорин',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'этамзилат, кальция хлорид',
	},
	{
		id: 166,
		question: 'Во время проведения реанимации лекарственные препараты не вводятся:',
		answers: [
			{
				id: 0,
				value: 'внутрисердечно',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'внутривенно',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'внутримышечно',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'эндотрахеально',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'внутримышечно',
	},
	{
		id: 167,
		question: 'При наркозе эфиром глазные яблоки фиксируются в:',
		answers: [
			{
				id: 0,
				value: '1 стадии',
				isCorrect: false,
			},
			{
				id: 1,
				value: '3 стадии на первом уровне',
				isCorrect: true,
			},
			{
				id: 2,
				value: '3 стадии на втором уровне',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '3 стадии на первом уровне',
	},
	{
		id: 168,
		question: 'Кетамин обычно увеличивает:',
		answers: [
			{
				id: 0,
				value: 'ЧСС',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'АД',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'кровоток мозга',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все варианты верны',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все варианты верны',
	},
	{
		id: 169,
		question: 'Промывание мочевого пузыря проводится 2-4 раза в сутки:',
		answers: [
			{
				id: 0,
				value: 'фурацилином 1:1000',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'раствором диоксидина 1%',
				isCorrect: false,
			},
			{
				id: 2,
				value: '0,025% перманганата калия',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'фурацилином 1:1000',
	},
	{
		id: 170,
		question: 'Охлаждение ожоговой поверхности холодной водой показано:',
		answers: [
			{
				id: 0,
				value: 'при ожоге II степени',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'не показано',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'в первые минуты после ожога в течении 10-15 минут',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'в первые минуты после ожога в течении 10-15 минут',
	},
	{
		id: 171,
		question: 'Первыми признаками развивающего травматического шока являются:',
		answers: [
			{
				id: 0,
				value: 'гиперемия, сухость кожи, пенистое отделение изо рта, галлюцинации',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'психомоторное возбуждение, неадекватная оценка своего состояния',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'судороги, апатия, потоотделение',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'резкое побледнение кожных покровов, липкий холодный пот',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'резкое побледнение кожных покровов, липкий холодный пот, психомоторное возбуждение, неадекватная оценка своего состояния',
	},
	{
		id: 172,
		question: 'Ранним признаком биологической смерти является:',
		answers: [
			{
				id: 0,
				value: 'трупные окоченения',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'положительный симптом "кошачьего зрачка"',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'асистолия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'отсутствие сознания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'положительный симптом "кошачьего зрачка"',
	},
	{
		id: 173,
		question: 'Оптимальное время оказания медицинской помощи с момента травмы:',
		answers: [
			{
				id: 0,
				value: '1 час',
				isCorrect: false,
			},
			{
				id: 1,
				value: '2 часа',
				isCorrect: false,
			},
			{
				id: 2,
				value: '5-30 минут',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '5-30 минут',
	},
	{
		id: 174,
		question: 'Появление розовой пенящейся жидкости в просвете интубационной трубки во время ИВЛ связано с:',
		answers: [
			{
				id: 0,
				value: 'возникновением ателектаза',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'развитием отека легких',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'накоплением мокроты',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'смещением интубационной трубки',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'развитием отека легких',
	},
	{
		id: 175,
		question: 'Санитарно-противоэпидемический режим означает проведение комплекса мероприятий:',
		answers: [
			{
				id: 0,
				value: 'направленных на пропаганду «Здорового образа жизни»',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'по профилактике внутрибольничной инфекции',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'по профилактике экзогенных интоксикаций',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'по профилактике внутрибольничной инфекции',
	},
	{
		id: 176,
		question: 'Моюще-дезинфицирующее средство используют для:',
		answers: [
			{
				id: 0,
				value: 'Дезинфекции и предстерилизационной очистки инструментария',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'Дезинфекции использованного инструментария',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'Дезинфекции и стерилизации инструментария',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'Дезинфекции использованного инструментария, Дезинфекции и предстерилизационной очистки инструментария',
	},
	{
		id: 177,
		question: 'При введении крови и кровезаменителей инфузионную систему следует менять:',
		answers: [
			{
				id: 0,
				value: 'после каждой трансфузии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'каждые 24 часа',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'через 12 часов',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'каждые 6 часов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'каждые 24 часа',
	},
	{
		id: 178,
		question: 'Транспортируют пострадавшего с переломом ребер и грудины:',
		answers: [
			{
				id: 0,
				value: 'лежа на боку',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'в положении сидя',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'лежа на спине',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'в положении сидя',
	},
	{
		id: 179,
		question: 'Дезинсекция это:',
		answers: [
			{
				id: 0,
				value: 'Борьба с грызунами в лечебном учреждении',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'Борьба с паразитирующими на людях и предметах их обихода членистоногими',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'Борьба с паразитирующими на людях и предметах их обихода членистоногими',
	},
	{
		id: 180,
		question: 'Для купирования приступа бронхиальной астмы, м/сестра должна подготовить лекарства:',
		answers: [
			{
				id: 0,
				value: 'новокаин, преднизалон, эуфиллин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'эуфиллин',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'плазма, новокаин, преднизолон, эуфиллин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'преднизолон и эуфиллин',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'преднизолон и эуфиллин',
	},
	{
		id: 181,
		question:
			'Тактика оказывающего помощь на доврачебном этапе при ранении грудной клетки в случае, если из раны выступает ранящий предмет:',
		answers: [
			{
				id: 0,
				value: 'удаление ранящего предмета, тугая тампонада раны, наложение повязки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'наложение повязки без удаления ранящего предмета',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'удаление ранящего предмета, наложение тугой повязки',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'наложение окклюзионной повязки',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'наложение повязки без удаления ранящего предмета',
	},
	{
		id: 182,
		question: 'Ультрафиолетовые лучи убивают микобактерии за',
		answers: [
			{
				id: 0,
				value: '2–3 д',
				isCorrect: false,
			},
			{
				id: 1,
				value: '2–3 минуты',
				isCorrect: true,
			},
			{
				id: 2,
				value: '2–3 часа',
				isCorrect: false,
			},
			{
				id: 3,
				value: '2–3 секунды',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '2–3 минуты',
	},
	{
		id: 183,
		question:
			'Какой препарат следует ввести в первую очередь при рефлекторной остановке сердца вследствие раздражения рефлекторных зон гортани и трахеи в процессе интубации:',
		answers: [
			{
				id: 0,
				value: 'Атропин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'Пипольфен',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'Эуфиллин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'Промедол',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'Атропин',
	},
	{
		id: 184,
		question: 'Доврачебная неотложная помощь при приступе бронхиальной астмы:',
		answers: [
			{
				id: 0,
				value: 'беротока или сальбутамола (1 доза)',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'ингаляция кислорода',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'инъекция эуфиллина 2,4 % — 10,0',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'беротока или сальбутамола (1 доза)',
	},
	{
		id: 185,
		question: 'Обезболивание закисью азота противопоказано при:',
		answers: [
			{
				id: 0,
				value: 'пневмотораксе',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'остром инфаркте миокарда',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'закрытой травме живота',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'переломе трубчатых костей',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пневмотораксе',
	},
	{
		id: 186,
		question: 'Анафилактическая реакция на внутривенные анестетики:',
		answers: [
			{
				id: 0,
				value: 'зависит от дозы',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'характеризуется глубокой гипотензией',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'предупреждается премедикацией антигистаминными препаратами',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'чаще случается при повторном введении',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'характеризуется глубокой гипотензией',
	},
	{
		id: 187,
		question: 'Бактерицидные лампы дезинфицируют:',
		answers: [
			{
				id: 0,
				value: 'антисептиком',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'моющим средством',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'согласно инструкции производителя',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'хлоргексидином спиртовым 0,5%',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'согласно инструкции производителя',
	},
	{
		id: 188,
		question:
			'Вероятная причина резкого расширения зрачков при сохранении их реакции на свет и повышенном слезотечении у больного при операции под масочным наркозом:',
		answers: [
			{
				id: 0,
				value: 'слишком поверхностный наркоз',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'фибрилляция миокарда',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'рефлекторная остановка сердца',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'передозировка наркотического вещества',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'слишком поверхностный наркоз',
	},
	{
		id: 189,
		question: 'Утрата всех видов чувствительности — это:',
		answers: [
			{
				id: 0,
				value: 'анальгезия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'анестезия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'сопор',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'обморок',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'анестезия',
	},
	{
		id: 190,
		question: 'Внутривенное введение каких препаратов показано при развитии у больного анафилактического шока:',
		answers: [
			{
				id: 0,
				value: 'адреналина',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'баралгина',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'эуфилина',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'преднизолона',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'преднизолона, адреналина, эуфилина',
	},
	{
		id: 191,
		question: 'При развитии клиники анафилактического шока необходимо срочно ввести:',
		answers: [
			{
				id: 0,
				value: 'адреналин 1 мл, обеспечить инфузию физ.раствора',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'кофеин натрия бензоат 1 мл, адреналин 1 мл, супрастин 2 мл',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'преднизолон 60-120 мг,',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'ввести адреналин 1-2 мл, супрастин 2 мл, хлористый кальций',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'адреналин 1 мл, обеспечить инфузию физ.раствора, преднизолон 60-120 мг,',
	},
	{
		id: 192,
		question: 'Время отсчета реакции агглютинации при определении резус-принадлежности по цоликлонам:',
		answers: [
			{
				id: 0,
				value: '10 минут',
				isCorrect: false,
			},
			{
				id: 1,
				value: '2 минуты',
				isCorrect: false,
			},
			{
				id: 2,
				value: '3 минуты',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '3 минуты',
	},
	{
		id: 193,
		question: 'Для проведения миорелаксации при судорожном синдроме применяются:',
		answers: [
			{
				id: 0,
				value: 'адреналин, кордиамин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'коргликон, строфантин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'хлористый кальций, глюконат кальция',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'диазепам, реланиум, седуксен',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'диазепам, реланиум, седуксен',
	},
	{
		id: 194,
		question: 'Частота искусственных вдохов при ИВЛ у новорожденного должна быть:',
		answers: [
			{
				id: 0,
				value: '12-16 в минуту',
				isCorrect: false,
			},
			{
				id: 1,
				value: '4-5 в минут',
				isCorrect: false,
			},
			{
				id: 2,
				value: '60-80 в минуту',
				isCorrect: true,
			},
			{
				id: 3,
				value: '40 в минуту',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '60-80 в минуту',
	},
	{
		id: 195,
		question: 'Максимально допустимая общая доза тиопентала натрия в наркозе:',
		answers: [
			{
				id: 0,
				value: '500 мг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '2500 мг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '1000 мг',
				isCorrect: true,
			},
			{
				id: 3,
				value: '100 мг',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '1000 мг',
	},
	{
		id: 196,
		question: 'Наиболее безопасным для здоровья персонала является контур дыхания:',
		answers: [
			{
				id: 0,
				value: 'закрытый',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'открытый',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'полузакрытый',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'полуоткрытый',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'закрытый',
	},
	{
		id: 197,
		question: 'Немедленные мероприятия при развитии гипотензии при спинальной анестезии',
		answers: [
			{
				id: 0,
				value: 'ввести атропин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ввести коллоиды (полиглюкин, ГЭК)',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'провести ИВЛ',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ввести антибиотики',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'ввести коллоиды (полиглюкин, ГЭК)',
	},
	{
		id: 198,
		question:
			'Показатель диуреза у взрослого больного, страдающего почечной недостаточностью, составляющий 3 мл\\сутки оценивается как:',
		answers: [
			{
				id: 0,
				value: 'нормальный',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'олигурия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'полиурия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'анурия',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'анурия',
	},
	{
		id: 199,
		question: 'Кратность обследования медицинского работника на антитела к ВИЧ после аварийной ситуации:',
		answers: [
			{
				id: 0,
				value: 'только после аварийной ситуации',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'после аварийной ситуации и далее, через 1; 3; 6 месяцев',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'после аварийной ситуации и далее, через 3; 6 месяцев',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'после аварийной ситуации и далее, через 3; 6 месяцев',
	},
	{
		id: 200,
		question: 'Дезинфекция жгута в процедурном кабинете проводится:',
		answers: [
			{
				id: 0,
				value: 'после каждого пациента',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'в конце рабочей смены',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'после загрязнения биологической жидкостью пациента',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'после каждого пациента',
	},
	{
		id: 201,
		question: 'Приоритетная проблема при инфаркте миокарда у лиц пожилого и старческого возраста:',
		answers: [
			{
				id: 0,
				value: 'лихорадка',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'удушье',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'головная боль',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'сердцебиение',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'удушье',
	},
	{
		id: 202,
		question:
			'При применении какого контура больной вдыхает газонаркотическую смесь из аппарата, а выдыхает в аппарат и частично в атмосферу:',
		answers: [
			{
				id: 0,
				value: 'полуоткрытого',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'полузакрытого',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'закрытого',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'открытого',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'полузакрытого',
	},
	{
		id: 203,
		question: 'Метод оценки вентиляции легких:',
		answers: [
			{
				id: 0,
				value: 'акцелерография',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'капнография',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'пульсоксиметрия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'платизмография',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'капнография',
	},
	{
		id: 204,
		question:
			'В высохшей мокроте на различных предметах внешней среды микобактерии туберкулеза могут сохранять свои свойства в течение',
		answers: [
			{
				id: 0,
				value: 'нескольких месяцев',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'несколько часов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'нескольких дней',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'несколько лет',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'нескольких месяцев',
	},
	{
		id: 205,
		question: 'Детям до года общую анестезию при отсутствии современных аппаратов для детей проводят по:',
		answers: [
			{
				id: 0,
				value: 'полузакрытому контуру',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'полуоткрытому контуру (система аира)',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'открытому контуру',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'закрытому контуру',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'полуоткрытому контуру (система аира)',
	},
	{
		id: 206,
		question: 'К коллоидным растворам относятся:',
		answers: [
			{
				id: 0,
				value: 'трисоль',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гидроксиэтилкрахмал',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'дисоль',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'реаполиглюкин',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'реаполиглюкин, гидроксиэтилкрахмал',
	},
	{
		id: 207,
		question: 'Окончательная остановка кровотечения производится:',
		answers: [
			{
				id: 0,
				value: 'наложением жгута',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'прижатием сосуда на протяжении',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'перевязкой сосуда в ране',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'наложением зажима в ране',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'перевязкой сосуда в ране',
	},
	{
		id: 208,
		question: 'Ксенон используется в анестезиологии для:',
		answers: [
			{
				id: 0,
				value: 'проведения местной анестезии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'проведения ингаляционной анестезии',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'проведения неингаляционной анестезии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'проведения ингаляционной анестезии',
	},
	{
		id: 209,
		question: 'Противопоказания для введения кетамина:',
		answers: [
			{
				id: 0,
				value: 'артериальная гипертензия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'эпилепсия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'психические заболевания',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все варианты верны',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все варианты верны',
	},
	{
		id: 210,
		question: 'Травматический шок — это остро развивающееся и угрожающее жизни состояние после:',
		answers: [
			{
				id: 0,
				value: 'повреждения тканей проникающей радиацией',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'поражения электрическим током',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'повреждения тканей действием высоких температур',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'тяжелой механической травмы',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'тяжелой механической травмы',
	},
	{
		id: 211,
		question: 'ВИЧ-инфекция не передается при:',
		answers: [
			{
				id: 0,
				value: 'рукопожатии',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'Использовании одного шприца, несколькими лицами',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'пользовании туалетами или душевыми',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'от инфицированной матери плоду',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'рукопожатии, пользовании туалетами или душевыми',
	},
	{
		id: 212,
		question: 'Чесоточный клещ вне тела человека живет',
		answers: [
			{
				id: 0,
				value: 'до 5 суток',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'до 2 суток',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'до 5 часов',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'до 2 недель',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'до 5 суток',
	},
	{
		id: 213,
		question: 'Синусовый ритм в здоровом сердце формируется в:',
		answers: [
			{
				id: 0,
				value: 'волокнах Пуркинье',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пазухе между двумя полыми венами',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'атриовентрикулярном узле',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'пучке Гиса',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пазухе между двумя полыми венами',
	},
	{
		id: 214,
		question: 'Больше всего находится крови в следующем отделе сердечнососудистой системы:',
		answers: [
			{
				id: 0,
				value: 'в венах большого круга кровообращения',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'в артериях большого круга кровообращения',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'в капиллярах',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'в сосудах легких и сердца',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'в венах большого круга кровообращения',
	},
	{
		id: 215,
		question: 'Отек мозга нередко развивается при:',
		answers: [
			{
				id: 0,
				value: 'гнойно-воспалительных процессах',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'черепно-мозговой травме',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'травме позвоночника',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'сердечно-легочной реанимации',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'черепно-мозговой травме',
	},
	{
		id: 216,
		question: 'Категории лиц, не имеющих право на отказ от медицинского вмешательства:',
		answers: [
			{
				id: 0,
				value: 'пациенты со злокачественными новообразованиями',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'проходящие судебно-медицинскую экспертизу',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'пациенты с ВИЧ-инфекцикй',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'проходящие судебно-медицинскую экспертизу',
	},
	{
		id: 217,
		question: 'Наибольшей гепатотоксичностью обладает препарат:',
		answers: [
			{
				id: 0,
				value: 'фторотан',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'эфир',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'закись азота',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'изофлюран',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'фторотан',
	},
	{
		id: 218,
		question: 'Критерием достаточной глубины вводного наркоза является:',
		answers: [
			{
				id: 0,
				value: 'широкие зрачки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'остановка дыхания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'снижение артериального давления',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'потеря сознания с развитием сна',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'потеря сознания с развитием сна',
	},
	{
		id: 219,
		question: 'При обнаружении кровотечения из трахеостомы дежурная медсестра должна:',
		answers: [
			{
				id: 0,
				value: 'измерить показатели гемодинамики',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'срочно вызвать врача',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'провести санацию ТБД',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'провести гомостатическую терапию',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'срочно вызвать врача, провести санацию ТБД',
	},
	{
		id: 220,
		question: 'Пути передачи вирусных гепатитов В, С:',
		answers: [
			{
				id: 0,
				value: 'трансмиссивный',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'вертикальный путь',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'половой путь',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'парентеральный путь',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'половой путь, парентеральный путь, вертикальный путь',
	},
	{
		id: 221,
		question:
			'Ярко-красный цвет кожных покровов, повышенный тонус скелетных мышц, умеренное расширение зрачков при сохранении их реакции на свет и подвижных глазных яблоках, крепкое сжатие век, неполное включение конъюнктивальных рефлексов характерна для стадии наркоза по Гведелу:',
		answers: [
			{
				id: 0,
				value: '2-й',
				isCorrect: true,
			},
			{
				id: 1,
				value: '1-й',
				isCorrect: false,
			},
			{
				id: 2,
				value: '4-й',
				isCorrect: false,
			},
			{
				id: 3,
				value: '3-й',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '2-й',
	},
	{
		id: 222,
		question: 'Декураризация проводится в случаях, когда у пациента:',
		answers: [
			{
				id: 0,
				value: 'продленная искусственная вентиляция лёгких',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'спонтанное адекватное дыхание (по окончанию операции)',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'отсутствует самостоятельное дыхание',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'поверхностное неадекватное дыхание (по окончанию операции)',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'поверхностное неадекватное дыхание (по окончанию операции)',
	},
	{
		id: 223,
		question: 'Дератизация это:',
		answers: [
			{
				id: 0,
				value: 'борьба с паразитирующими на людях и предметах их обихода членистоногими',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'борьба с грызунами в лечебном учреждении',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'борьба с грызунами в лечебном учреждении',
	},
	{
		id: 224,
		question: 'На ВИЧ-инфекцию обследуются обязательно:',
		answers: [
			{
				id: 0,
				value: 'беременные женщины',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'больные парентеральными вирусными гепатитами',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'доноры крови и органов',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'больные с поражениями легких',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'беременные женщины, больные парентеральными вирусными гепатитами, доноры крови и органов',
	},
	{
		id: 225,
		question: 'Медицинская помощь в первую очередь оказывается:',
		answers: [
			{
				id: 0,
				value: 'пострадавшим с повреждениями с нарастающими расстройствами жизненных функций',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'легкопострадавшим',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'пострадавшим с повреждениями, несовместимыми с жизнью',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пострадавшим с повреждениями с нарастающими расстройствами жизненных функций',
	},
	{
		id: 226,
		question: 'Вопрос снят',
		answers: [
			{
				id: 0,
				value: 'да',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'нет',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'да',
	},
	{
		id: 227,
		question: 'Для восстановления сердечной деятельности внутривенно вводят:',
		answers: [
			{
				id: 0,
				value: 'Раствор кальция хлорида',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'раствор кофеин-бензоната натрия',
				isCorrect: false,
			},
			{
				id: 2,
				value: '0,1 % раствор адреналина гидрохлорида',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'кордиамин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '0,1 % раствор адреналина гидрохлорида',
	},
	{
		id: 228,
		question: 'Группа лекарственных средств, вводимых при травматическом шоке:',
		answers: [
			{
				id: 0,
				value: 'гормоны, мочегонные, сульфат магнезии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'адреналин, гормоны, антигистаминные средства',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'полиглюкин, реополиглюкин, солевые растворы, наркотические анальгетики',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'антибиотики, гормоны',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'полиглюкин, реополиглюкин, солевые растворы, наркотические анальгетики',
	},
	{
		id: 229,
		question: 'Основной признак коматозного состояния:',
		answers: [
			{
				id: 0,
				value: 'угнетение сознания',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'угнетение периферической нервной системы',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'нарушение гемодинамики',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'угнетение дыхания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'угнетение сознания',
	},
	{
		id: 230,
		question: 'Причины продленного апноэ:',
		answers: [
			{
				id: 0,
				value: 'передозировка релаксантов',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'заболевания с поражением нервно- мышечной проводимости',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'ателектаз легкого, инфаркт легкого, отек легкого',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'угнетение дыхательного центра',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'угнетение дыхательного центра, передозировка релаксантов, заболевания с поражением нервно- мышечной проводимости',
	},
	{
		id: 231,
		question: 'Во время коллапса кожные покровы:',
		answers: [
			{
				id: 0,
				value: 'гиперемированные, сухие',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'бледные, сухие, теплые',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гиперемированные, влажные',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'бледные, влажные, прохладные',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'бледные, влажные, прохладные',
	},
	{
		id: 232,
		question: 'Основные клинические проявления травматического шока:',
		answers: [
			{
				id: 0,
				value: 'гипертензия, брадикардия, обычный цвет кожных покровов',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гипотония, тахикардия, акроцианоз',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'гипотония, тахикардия, акроцианоз',
	},
	{
		id: 233,
		question: 'Первичный реанимационный комплекс включает:',
		answers: [
			{
				id: 0,
				value: 'закрытый массаж сердца',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'восстановление проходимости дыхательных путей, ИВЛ',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'регистрацию ЭКГ, введение адреналина внутрисердечно, дифибриляцию',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'восстановление проходимости дыхательных путей, ИВЛ, закрытый массаж сердца',
	},
	{
		id: 234,
		question: 'Интенсивная терапия при острых отравлениях:',
		answers: [
			{
				id: 0,
				value: 'антибиотикотерапия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'выведение яда из организма, антидотная терапия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'введение лазикса',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'вынос из зоны поражения',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'выведение яда из организма, антидотная терапия',
	},
	{
		id: 235,
		question:
			'Действия дежурной медицинской сестры при отключении электропитания в отделении реанимации во время проведения ИВЛ у больного:',
		answers: [
			{
				id: 0,
				value: 'вызвать дежурного электрика',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'продолжить ИВЛ любым другим способом',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'вызвать врача',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'продолжить ИВЛ любым другим способом',
	},
	{
		id: 236,
		question: '«Клиническая смерть» – это состояние:',
		answers: [
			{
				id: 0,
				value: 'характеризующиеся кратковременной потерей сознания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'приводящее к резкому повышению ад',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'пограничное между жизнью и смертью',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'перехода острого заболевания в хроническое',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пограничное между жизнью и смертью',
	},
	{
		id: 237,
		question: 'Кожный антисептик применяют для:',
		answers: [
			{
				id: 0,
				value: 'гигиенической обработки рук',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'для снятия использованного халата',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'для измерения температуры тела',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'хирургической обработки рук',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'гигиенической обработки рук, хирургической обработки рук',
	},
	{
		id: 238,
		question: 'Группы риска инфицирования ВИЧ:',
		answers: [
			{
				id: 0,
				value: 'потребители инъекционных наркотиков',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'мужчины, имеющие секс с мужчинами',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'работники учреждений образования',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'пациенты, получающие кортикостероиды',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'потребители инъекционных наркотиков, мужчины, имеющие секс с мужчинами',
	},
	{
		id: 239,
		question: 'Показатель диуреза в норме у взрослого весом 70 кг:',
		answers: [
			{
				id: 0,
				value: '140 мл/час',
				isCorrect: false,
			},
			{
				id: 1,
				value: '350 мл/час',
				isCorrect: false,
			},
			{
				id: 2,
				value: '700 мл/час',
				isCorrect: false,
			},
			{
				id: 3,
				value: '70 мл/час',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '70 мл/час',
	},
	{
		id: 240,
		question:
			'Провести профилактику ВИЧ-инфекции медработнику после аварийной ситуации с ВИЧ-инфицированным пациентом антиретровирусными препаратами следует в период, не позднее:',
		answers: [
			{
				id: 0,
				value: '5 суток',
				isCorrect: false,
			},
			{
				id: 1,
				value: '14 дней',
				isCorrect: false,
			},
			{
				id: 2,
				value: '72 часов',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '72 часов',
	},
	{
		id: 241,
		question: 'Концентрация кислорода во вдыхаемой смеси, которая является безопасной в течение многих суток:',
		answers: [
			{
				id: 0,
				value: '75%',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'до 30%',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'до 50%',
				isCorrect: false,
			},
			{
				id: 3,
				value: '100%',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'до 30%',
	},
	{
		id: 242,
		question: 'Типичная клиническая форма инфаркта миокарда:',
		answers: [
			{
				id: 0,
				value: 'астматическая',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'церебральная',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'болевая',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'абдоминальная',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'болевая',
	},
	{
		id: 243,
		question: 'Короткодействующим анальгетиком является:',
		answers: [
			{
				id: 0,
				value: 'трамал',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'фентанил',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'кеторолак',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'морфин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'фентанил',
	},
	{
		id: 244,
		question: 'Адсорбер в наркозном аппарате необходим для:',
		answers: [
			{
				id: 0,
				value: 'подогрева газонаркотической смеси',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'поглощения влаги',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'регенерации кислорода',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'поглощения СО2',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'поглощения СО2',
	},
	{
		id: 245,
		question: 'Принципы лечения чесотки',
		answers: [
			{
				id: 0,
				value: 'мытье больного со сменой нательного и постельного белья в начале и конце курса терапии',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'одновременное лечение всех больных в очаге',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'обработка препаратомпротив чесотки всех контактных лиц старше 18 лет',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'втирание препарата против чесотки тампоном или салфеткой',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'одновременное лечение всех больных в очаге, мытье больного со сменой нательного и постельного белья в начале и конце курса терапии',
	},
	{
		id: 246,
		question: 'При острой сосудистой недостаточности (обморок, коллапс) больному надо придать положение:',
		answers: [
			{
				id: 0,
				value: 'горизонтальное с приподнятой головой',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'полусидячее',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ровное горизонтальное',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'горизонтальное с приподнятыми ногами',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'горизонтальное с приподнятыми ногами',
	},
	{
		id: 247,
		question: 'С гемостатической целью применяют:',
		answers: [
			{
				id: 0,
				value: 'кальция хлорид',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'эноксапарин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'этамзилат',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'аспирин',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'этамзилат, кальция хлорид',
	},
	{
		id: 248,
		question: 'Для профилактики аритмии при инфаркте миокарда может использоваться следующий препарат:',
		answers: [
			{
				id: 0,
				value: 'клофилин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кордарон',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'новокаинамид',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'лидокаин',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'лидокаин',
	},
	{
		id: 249,
		question: 'ВИЧ погибает',
		answers: [
			{
				id: 0,
				value: 'при нагревании до 36 градусов в течении 30 минут',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'в замороженной крови, сперме',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'при дезинфекции, в соответствующем режиме',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'при дезинфекции, в соответствующем режиме',
	},
	{
		id: 250,
		question:
			'Назовите лекарственные и трансфузионные средства, необходимые для оказания первой помощи при гемолитическом шоке:',
		answers: [
			{
				id: 0,
				value: 'введение гормонов, противошоковых средств, кровезаменителей и спазмолитиков',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'введение антигистаминных средств',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'переливание консервированной донорской крови со сроком хранения до 3-х суток',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'введение гормонов, противошоковых средств, кровезаменителей и спазмолитиков',
	},
	{
		id: 251,
		question: 'При отравлении каким ядом в качестве антидота используют этиловый спирт:',
		answers: [
			{
				id: 0,
				value: 'метанолом',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'дихлорэтаном',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'азотной кислотой',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'уксусной кислотой',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'метанолом',
	},
	{
		id: 252,
		question: 'Нарушение дыхательной функции крови происходит при:',
		answers: [
			{
				id: 0,
				value: 'снижении содержания кислорода в крови',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'отравлении СО',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'нарушении диффузии между тканевыми капиллярами и митохондриями',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'недостаточности паренхиматозных органов',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'снижении содержания кислорода в крови, отравлении СО',
	},
	{
		id: 253,
		question: 'Факторы передачи гепатита «В»:',
		answers: [
			{
				id: 0,
				value: 'кровь',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'медицинский инструментарий',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'продукты питания',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'воздух',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'кровь, медицинский инструментарий',
	},
	{
		id: 254,
		question: 'С целью профилактики воздушной эмболии при катетеризации подключичной вены:',
		answers: [
			{
				id: 0,
				value: 'поднимают ножной конец кровати',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'под лопатки подкладывают валик, высотой 10 см',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'голову пациента поворачивает в противоположную сторону',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'поднимают ножной конец кровати',
	},
	{
		id: 255,
		question: 'К методам временной остановки наружного кровотечения относятся:',
		answers: [
			{
				id: 0,
				value: 'тугая тампонада раны, полости',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'прижатие артерии фиксированием конечности в положении максимального сгибания в суставе',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'придание поврежденной части тела возвышенного положения по отношению к сердцу',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'наложение кровоостанавливающего зажима',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'прижатие артерии фиксированием конечности в положении максимального сгибания в суставе, наложение кровоостанавливающего зажима, тугая тампонада раны, полости',
	},
	{
		id: 256,
		question: 'Введение транквилизаторов перед кетамином предотвращает:',
		answers: [
			{
				id: 0,
				value: 'гиперсаливацию',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'возникновение галлюцинаций',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'угнетение сознания',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'урежение ритма дыхания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'возникновение галлюцинаций',
	},
	{
		id: 257,
		question: 'Пропофол:',
		answers: [
			{
				id: 0,
				value: 'может вызвать брадикардию и асистолию',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'вызывает периферическую вазодилатацию',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'может вызвать тахикардию и повышение АД',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'вызывает периферическую вазодилатацию, может вызвать брадикардию и асистолию',
	},
	{
		id: 258,
		question: 'Журнал учета работы ультрафиолетовой бактерицидной установки заполняется:',
		answers: [
			{
				id: 0,
				value: 'ежедневно',
				isCorrect: false,
			},
			{
				id: 1,
				value: '1 раз в месяц',
				isCorrect: false,
			},
			{
				id: 2,
				value: '1 раз в неделю',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'при каждом включении установки',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'при каждом включении установки',
	},
	{
		id: 259,
		question: 'Количество компрессий на грудину при реанимации взрослого человека:',
		answers: [
			{
				id: 0,
				value: '60-80',
				isCorrect: false,
			},
			{
				id: 1,
				value: '100-120',
				isCorrect: true,
			},
			{
				id: 2,
				value: '20-30',
				isCorrect: false,
			},
			{
				id: 3,
				value: '30-40',
				isCorrect: false,
			},
			{
				id: 4,
				value: '80-90',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '100-120',
	},
	{
		id: 260,
		question: 'Волюметр включается в следующую часть дыхательного контура:',
		answers: [
			{
				id: 0,
				value: 'контур отвода отработанной газонаркотической смеси',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'контур выдоха респиратора',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'контур вдоха респиратора',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'контур выдоха респиратора',
	},
	{
		id: 261,
		question: 'Премедикация обычно включает назначение двух лекарств:',
		answers: [
			{
				id: 0,
				value: 'дыхательных аналептиков и миорелаксантов',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'барбитуратов и седативных',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'седативного и парасимпатолитика',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'барбитуратов и миорелаксантов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'седативного и парасимпатолитика',
	},
	{
		id: 262,
		question: 'Приоритетная проблема пациента при абдоминальной форме инфаркта миокарда:',
		answers: [
			{
				id: 0,
				value: 'рвота',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'боль в эпигастрии',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'симптомы раздражения кишечника',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'парез кишечника',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'боль в эпигастрии',
	},
	{
		id: 263,
		question: 'Понятие "врачебная тайна" предусматривается:',
		answers: [
			{
				id: 0,
				value: 'конституцией',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'трудовым кодексом',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'законом о здравоохранении',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'законом об адвокатской деятельности',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'законом о здравоохранении',
	},
	{
		id: 264,
		question: 'Для перелома основания черепа характерен симптом:',
		answers: [
			{
				id: 0,
				value: 'Брудзинского',
				isCorrect: false,
			},
			{
				id: 1,
				value: '"очков"',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'Кернига',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '"очков"',
	},
	{
		id: 265,
		question: 'Пригодность рабочего раствора азопирама проверяют нанесением',
		answers: [
			{
				id: 0,
				value: '2-3-х капель раствора на пятно крови',
				isCorrect: true,
			},
			{
				id: 1,
				value: '2-3-х капель раствора на стерильный ватный шарик',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '2-3-х капель раствора на пятно крови',
	},
	{
		id: 266,
		question: 'Пропофол (диприван):',
		answers: [
			{
				id: 0,
				value: 'противопоказан при бронхоскопиях',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'вызывает быстрое восстановление сознания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'противопоказан у больных с гиповолемией',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'подходит для использования у больных с повышенным внутричерепным давлением',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'подходит для использования у больных с повышенным внутричерепным давлением, противопоказан у больных с гиповолемией',
	},
	{
		id: 267,
		question:
			'Тактика оказывающего помощь на доврачебном этапе при ранении грудной клетки в случае, если из раны выступает ранящий предмет:',
		answers: [
			{
				id: 0,
				value: 'удаление ранящего предмета, тугая тампонада раны, наложение повязки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'наложение окклюзионной повязки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'наложение повязки без удаления ранящего предмета',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'удаление ранящего предмета, наложение тугой повязки',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'наложение повязки без удаления ранящего предмета',
	},
	{
		id: 268,
		question: 'Соотношение вдыханий и компрессий на грудину при проведении реанимации взрослому человеку:',
		answers: [
			{
				id: 0,
				value: 'на 1 вдох — 6 компресий',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'на 2 вдоха — 30 компресий',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'на 1 вдох — 2 компресии',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'на 2 вдоха — 6 компресий',
				isCorrect: false,
			},
			{
				id: 4,
				value: 'на 1 вдох — 15 компресий',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'на 2 вдоха — 30 компресий',
	},
	{
		id: 269,
		question: 'Двигательное возбуждение, повышение АД, мышечная ригидность — симптомы, возникающие после введения:',
		answers: [
			{
				id: 0,
				value: 'кетамина',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'гексенала',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'депривана',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'кетамина',
	},
	{
		id: 270,
		question: 'Метод оценки вентиляции легких:',
		answers: [
			{
				id: 0,
				value: 'пульсоксиметрия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'электрокардиография',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'капнография',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'платизмография',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'капнография',
	},
	{
		id: 271,
		question: 'Прозерин является антидотом следующего релаксанта:',
		answers: [
			{
				id: 0,
				value: 'дитилина',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'листенола',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'атракурия',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'сукцинилхолина',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атракурия',
	},
	{
		id: 272,
		question: 'При дефибрилляции наиболее эффективна:',
		answers: [
			{
				id: 0,
				value: 'двухфазная форма импульса электрического тока',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'монофазная форма импульса электрического тока',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'двухфазная форма импульса электрического тока',
	},
	{
		id: 273,
		question: 'Естественные пути передачи ВИЧ-инфекции:',
		answers: [
			{
				id: 0,
				value: 'вертикальный',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'половой',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'горизонтальный',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'трансфузионный',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'половой, вертикальный',
	},
	{
		id: 274,
		question: 'Прямой массаж сердца применяют при:',
		answers: [
			{
				id: 0,
				value: 'неэффективности непрямого массажа сердца',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'утоплении',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'остановке или фибрилляции сердца во время операции на органах грудной клетки',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'наличии инструментов, позволяющих вскрыть грудную клетку',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'остановке или фибрилляции сердца во время операции на органах грудной клетки',
	},
	{
		id: 275,
		question: 'Признак коматозного состояния:',
		answers: [
			{
				id: 0,
				value: 'угнетение дыхания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'нарушение гемодинамики',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'угнетение сознания',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'угнетение периферической нервной системы',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'угнетение сознания',
	},
	{
		id: 276,
		question: 'Частота искусственных вдохов при ИВЛ у взрослых должна быть:',
		answers: [
			{
				id: 0,
				value: '50-70 в минуту',
				isCorrect: false,
			},
			{
				id: 1,
				value: '4-5 в минут',
				isCorrect: false,
			},
			{
				id: 2,
				value: '30-40 в минуту',
				isCorrect: false,
			},
			{
				id: 3,
				value: '12-16 в минуту',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '12-16 в минуту',
	},
	{
		id: 277,
		question: 'Противошоковый в/в анестетик:',
		answers: [
			{
				id: 0,
				value: 'калипсол',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'деприван',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'тиопентал натрия',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'калипсол',
	},
	{
		id: 278,
		question: 'Реанимация это:',
		answers: [
			{
				id: 0,
				value: 'раздел клинической медицины, изучающей терминальные состояния',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'отделение многопрофильной больницы',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'практические действия, направленные на восстановление жизнедеятельности',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'комплекс мероприятий по профилактике ИСМП',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'практические действия, направленные на восстановление жизнедеятельности',
	},
	{
		id: 279,
		question: 'Пути передачи внутрибольничной инфекции:',
		answers: [
			{
				id: 0,
				value: 'биологический',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'контактный',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'воздушно-капельный',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'парентеральный',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'парентеральный, контактный, воздушно-капельный',
	},
	{
		id: 280,
		question: 'ВИЧ-инфекция передается при:',
		answers: [
			{
				id: 0,
				value: 'кашле, чихании',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'рукопожатии',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'использовании одного шприца, несколькими лицами',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'от инфицированной матери плоду',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'использовании одного шприца, несколькими лицами, от инфицированной матери плоду',
	},
	{
		id: 281,
		question: 'При гипертензивном кризе для нормализации АД необходимо использовать:',
		answers: [
			{
				id: 0,
				value: 'внутривенно медленно дибазол 5 мл',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'внутривенно баралгин 5 мг',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'внутримышечно анальгин 50% — 2 мл',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'капотен — половину таблетки (12,5 мг) сублингвально',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'капотен — половину таблетки (12,5 мг) сублингвально',
	},
	{
		id: 282,
		question: 'Введение транквилизаторов перед кетамином предотвращает:',
		answers: [
			{
				id: 0,
				value: 'остановку дыхания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гипотензию',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гиперсаливацию',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'возникновение галлюцинаций',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'возникновение галлюцинаций',
	},
	{
		id: 283,
		question: 'Препаратами выбора при анафилактическом шоке являются:',
		answers: [
			{
				id: 0,
				value: 'противогрибковые средства',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'солевые растворы',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гормоны',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'эпинефрин',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'солевые растворы, эпинефрин',
	},
	{
		id: 284,
		question:
			'Провести профилактику ВИЧ-инфекции медработнику после аварийной ситуации с ВИЧ-инфицированным пациентом антиретровирусными препаратами следует не позднее:',
		answers: [
			{
				id: 0,
				value: '72 часов',
				isCorrect: true,
			},
			{
				id: 1,
				value: '96 часов',
				isCorrect: false,
			},
			{
				id: 2,
				value: '84 часов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '72 часов',
	},
	{
		id: 285,
		question: 'Неотложная помощь при приступе стенокардии:',
		answers: [
			{
				id: 0,
				value: 'обеспечить покой, использовать сублингвально нитроглицерин 0,05 мг, контроль АД',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'Измерить АД, сделать инъекцию анальгина 50% — 2 мл',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'Измерить АД, сделать инъекцию баралгин 5 мг',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'обеспечить покой, использовать сублингвально нитроглицерин 0,05 мг, контроль АД',
	},
	{
		id: 286,
		question: 'Методы дезинфекции:',
		answers: [
			{
				id: 0,
				value: 'физический',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'химический',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гравитационный',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'фильтрационный',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'химический, физический',
	},
	{
		id: 287,
		question:
			'Если во время гипертонического криза появилась сильнейшая боль за грудиной, не снимающаяся нитроглицерином, это признак:',
		answers: [
			{
				id: 0,
				value: 'отека легких',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'инфаркта миокарда',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'межреберной невралгии',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'инсульта',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'инфаркта миокарда',
	},
	{
		id: 288,
		question: 'При проведении реанимации непрямой массаж сердца и искусственное дыхание проводятся в соотношении:',
		answers: [
			{
				id: 0,
				value: '5:1 при оказании помощи двумя реаниматорами',
				isCorrect: false,
			},
			{
				id: 1,
				value: '30:2 при любом количестве реаниматоров',
				isCorrect: true,
			},
			{
				id: 2,
				value: '15:2 при любом количестве реаниматоров',
				isCorrect: false,
			},
			{
				id: 3,
				value: '15:2 только при оказании помощи одним реаниматором',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '30:2 при любом количестве реаниматоров',
	},
	{
		id: 289,
		question: 'Для достижения обеззараживания кожи рук необходимо соблюдать следующие условия:',
		answers: [
			{
				id: 0,
				value: 'отсутствие на руках ювелирных украшений',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'наличие искусственных ногтей',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'наличие лака на ногтях',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'отсутствие на руках ювелирных украшений',
	},
	{
		id: 290,
		question: 'Транспортируют пострадавшего с переломом ребер и грудины:',
		answers: [
			{
				id: 0,
				value: 'в положении сидя',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'лежа на спине',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'лежа на боку',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'в положении сидя',
	},
	{
		id: 291,
		question: 'Наиболее частая причина остановки сердца у детей:',
		answers: [
			{
				id: 0,
				value: 'аритмия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'отравление',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'инфаркт миокарда',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'обструкция дыхательных путей инородным телом',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'обструкция дыхательных путей инородным телом',
	},
	{
		id: 292,
		question: 'Клинические проявления ИМ:',
		answers: [
			{
				id: 0,
				value: 'если боль есть, она, как правило, сильнее, чем раньше',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'всегда только боли за грудиной',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'бывают безболевые формы',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'боль может локализоваться в животе',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'боль может локализоваться в животе, бывают безболевые формы, если боль есть, она, как правило, сильнее, чем раньше',
	},
	{
		id: 293,
		question: 'Порядок оказания реанимационной помощи новорождённому:',
		answers: [
			{
				id: 0,
				value: 'интубация, компрессии грудной клетки, согреть',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'согреть, немедленно начать компрессии грудной клетки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'согреть, начать ИВЛ через лицевую маску, оценить сердцебиение',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'согреть, начать ИВЛ через лицевую маску, оценить сердцебиение',
	},
	{
		id: 294,
		question: 'Особенности реанимационных мероприятий у детей:',
		answers: [
			{
				id: 0,
				value: 'достаточно компрессий грудной клетки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'начинают с оценки проходимости дыхательных путей и двух вдохов',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'у новорождённых компрессии осуществляют двумя пальцами',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'частота компрессий грудной клетки – 150 в минуту',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'начинают с оценки проходимости дыхательных путей и двух вдохов, у новорождённых компрессии осуществляют двумя пальцами',
	},
	{
		id: 295,
		question:
			'У пациента развивается одышка, кашель с розовой пенистой мокротой, цианоз губ. Какое положение следует придать ему в постели?',
		answers: [
			{
				id: 0,
				value: 'сидя или полусидя',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'лёжа горизонтально',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'на боку',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'лёжа с приподнятыми ногами',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'сидя или полусидя',
	},
	{
		id: 296,
		question: 'Предрасполагающие факторы для развития инфаркта миокарда:',
		answers: [
			{
				id: 0,
				value: 'женский пол',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пожилой возраст',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'курение',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все перечисленное выше',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все перечисленное выше',
	},
	{
		id: 297,
		question: 'Препарат первой линии при анафилактическом шоке – это:',
		answers: [
			{
				id: 0,
				value: 'атропин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'преднизолон',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'супрастин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'адреналин',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'адреналин',
	},
	{
		id: 298,
		question:
			'Пациент потерял сознание в коридоре, свидетели отмечают до этого судороги конечностей, кожа покрыта липким потом. Со слов персонала известно, что он страдает сахарным диабетом. Какое состояние у него развилось?',
		answers: [
			{
				id: 0,
				value: 'гипергликемия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'эпилептический приступ',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гипогликемическая кома',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'инсульт',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'гипогликемическая кома',
	},
	{
		id: 299,
		question: 'Препараты первой помощи при инфаркте миокарда:',
		answers: [
			{
				id: 0,
				value: 'нитроглицерин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'корвалол',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'аспирин',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'бета-блокаторы',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'нитроглицерин, бета-блокаторы, аспирин',
	},
	{
		id: 300,
		question: 'Доза адреналина при лечении анафилактического шока:',
		answers: [
			{
				id: 0,
				value: '0,5 мл каждые 5 минут',
				isCorrect: true,
			},
			{
				id: 1,
				value: '1 мл через 10 минут',
				isCorrect: false,
			},
			{
				id: 2,
				value: '1 мл – максимальная доза',
				isCorrect: false,
			},
			{
				id: 3,
				value: '0,5 мл каждые 3 минуты',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '0,5 мл каждые 5 минут',
	},
	{
		id: 301,
		question: 'Порядок проведения СЛР взрослому пациенту:',
		answers: [
			{
				id: 0,
				value: 'позвать на помощь, 30 компрессий, 2 вдоха',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'позвать на помощь, 2 вдоха, 30 компрессий',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'позвать на помощь, проводить компрессии с частотой 100-120 в минуту, интубация и ИВЛ с частотой 10 в минуту',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'позвать на помощь, вдохи и компрессии в зависимости от числа спасателей',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'позвать на помощь, 30 компрессий, 2 вдоха',
	},
	{
		id: 302,
		question:
			'Пациент потерял сознание в коридоре, свидетели отмечают до этого судороги конечностей, кожа покрыта липким потом. Со слов персонала известно, что он страдает сахарным диабетом. Как оказать первую помощь пациенту?',
		answers: [
			{
				id: 0,
				value: 'дать понюхать нашатырный спирт',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'незамедлительно ввести 20 мл 40% раствора глюкозы',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'ввести диазепам',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'незамедлительно ввести 20 мл 40% раствора глюкозы',
	},
	{
		id: 303,
		question: 'Частота компрессий грудной клетки при проведении СЛР:',
		answers: [
			{
				id: 0,
				value: '100-120 в минуту',
				isCorrect: true,
			},
			{
				id: 1,
				value: '150 в минуту у детей',
				isCorrect: false,
			},
			{
				id: 2,
				value: '80 в минуту у взрослых',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'зависит от возраста',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '100-120 в минуту',
	},
	{
		id: 304,
		question:
			'У пациента с острым коронарным синдромом на ЭКГ следующая картина: Какие действия необходимо осуществить?',
		answers: [
			{
				id: 0,
				value: 'немедленно вызвать врача',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'отнести ЭКГ на расшифровку',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ввести морфин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'приступить к сердечно-лёгочной реанимации',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'немедленно вызвать врача, приступить к сердечно-лёгочной реанимации',
	},
	{
		id: 305,
		question: 'Осложнения тромболитической терапии:',
		answers: [
			{
				id: 0,
				value: 'аритмия сердца',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'кровотечение',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'геморрагический инсульт',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'тромбоз вены, в которую вводится препарат',
				isCorrect: false,
			},
			{
				id: 4,
				value: 'анафилактический шок',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'кровотечение, аритмия сердца, геморрагический инсульт, анафилактический шок',
	},
	{
		id: 306,
		question: 'Помощь при судорожном приступе:',
		answers: [
			{
				id: 0,
				value: 'зафиксировать голову пациента во избежание травм',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'если приступ не проходит самостоятельно, ввести противосудорожные препараты',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'разжать зубы и вытащить язык, чтобы не прикусил',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дать подышать нашатырным спиртом',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'зафиксировать голову пациента во избежание травм, если приступ не проходит самостоятельно, ввести противосудорожные препараты',
	},
	{
		id: 307,
		question: 'Парентеральное питание:',
		answers: [
			{
				id: 0,
				value: 'назначают пациентам после операций на ЖКТ',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'приносит больше пользы, чем энтеральное',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'может приводить к осложнениям',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'обязательно назначают всем пациентам',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'назначают пациентам после операций на ЖКТ, может приводить к осложнениям',
	},
	{
		id: 308,
		question: 'К источникам энергии в составе парентерального питания относятся:',
		answers: [
			{
				id: 0,
				value: 'жировые эмульсии',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'растворы глюкозы',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'витамины',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'аминокислоты',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'растворы глюкозы, жировые эмульсии',
	},
	{
		id: 309,
		question: 'Выберите из списка коллоидные растворы:',
		answers: [
			{
				id: 0,
				value: 'трисоль',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'желатиноль',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'раствор Рингера',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'раствор гидроксиэтилкрахмала',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'раствор гидроксиэтилкрахмала, желатиноль',
	},
	{
		id: 310,
		question:
			'Поступил пациент с большой кровопотерей, ему требуется экстренно перелить эритроцитарную массу. Однако в стационаре его группы крови нет, осталась только О(I) Rh-. Сколько этой крови можно перелить пациенту?',
		answers: [
			{
				id: 0,
				value: 'до 1000 мл',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'переливать нельзя',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'до 250 мл',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'до 500 мл',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'до 500 мл',
	},
	{
		id: 311,
		question: 'Группу крови по системе АВ0 можно определить с помощью:',
		answers: [
			{
				id: 0,
				value: 'и стандартных сывороток, и стандартных эритроцитов',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'стандартных сывороток',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'стандартных эритроцитов',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'только в электронном анализаторе в лаборатории',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'и стандартных сывороток, и стандартных эритроцитов',
	},
	{
		id: 312,
		question: 'Действия при развитии острой трансфузионной реакции:',
		answers: [
			{
				id: 0,
				value: 'зависят от вида реакции',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'прекратить трансфузию – наладить сосудистый доступ – позвать на помощь – сменить систему – начать переливать физраствор – поставить мочевой катетер – согреть пациента',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'прекратить трансфузию – ввести гормоны – начать переливать следующий компонент крови',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'позвать на помощь – ввести гормоны – продолжать трансфузию',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer:
			'прекратить трансфузию – наладить сосудистый доступ – позвать на помощь – сменить систему – начать переливать физраствор – поставить мочевой катетер – согреть пациента',
	},
	{
		id: 313,
		question: 'Центральный венозный катетер может стоять:',
		answers: [
			{
				id: 0,
				value: 'до 7 суток',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'столько, сколько требуется',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'без признаков инфекции – столько, сколько требуется',
				isCorrect: true,
			},
			{
				id: 3,
				value: '72 часа',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'без признаков инфекции – столько, сколько требуется',
	},
	{
		id: 314,
		question: 'В периферические вены нежелательно вводить:',
		answers: [
			{
				id: 0,
				value: 'пропофол',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'раствор глюкозы 40%',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'препараты для парентерального питания',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'неразведённые кардиотоники',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'неразведённые кардиотоники, препараты для парентерального питания',
	},
	{
		id: 315,
		question: 'Неразведённый раствор адреналина можно вводить:',
		answers: [
			{
				id: 0,
				value: 'при сердечно-лёгочной реанимации – в периферическую вену',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'в центральную вену',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'при анафилактическом шоке – внутримышечно',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'в артерию',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'в центральную вену, при сердечно-лёгочной реанимации – в периферическую вену, при анафилактическом шоке – внутримышечно',
	},
	{
		id: 316,
		question:
			'Пациенту пожилого возраста переливают много кристаллоидных растворов из-за обезвоживания. Через некоторое время давление у пациента поднимается до нормальных цифр, а затем снова падает. Что можно предположить?',
		answers: [
			{
				id: 0,
				value: 'анафилактический шок',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'сердечная недостаточность на фоне перегрузки объёмом',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'острая почечная недостаточность',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'отёк мозга',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'сердечная недостаточность на фоне перегрузки объёмом',
	},
	{
		id: 317,
		question:
			'При определении группы крови стандартными сыворотками агглютинация наступила во всех пробирках и даже с сывороткой AB (IV) группы. Какую группу крови написать в бланке?',
		answers: [
			{
				id: 0,
				value: 'никакую: кровь пациента следует доставить в лабораторию',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'О (I)',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'AB (IV)',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'AB (IV) резус «—»',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'никакую: кровь пациента следует доставить в лабораторию',
	},
	{
		id: 318,
		question:
			'При определении группы крови стандартными сыворотками агглютинация наступила во всех пробирках и даже с сывороткой AB (IV) группы. Препараты крови какой группы можно переливать пациенту?',
		answers: [
			{
				id: 0,
				value: 'разрешено переливать препараты крови после индивидуального подбора на станции переливания',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'отмытые эритроциты О (I) резус «—»',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'препараты крови переливать запрещено',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'свежезамороженную плазму AB (IV) – в ней нет агглютининов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'разрешено переливать препараты крови после индивидуального подбора на станции переливания',
	},
	{
		id: 319,
		question:
			'Через два года после экстренного переливания крови у пациента начинаются частые простудные заболевания, увеличиваются лимфоузлы, ухудшается общее самочувствие. Это может быть признаком:',
		answers: [
			{
				id: 0,
				value: 'реакции «трансплантат против хозяина»',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'иммунизации по резус-фактору',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'заражения ВИЧ через донорскую кровь',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'перегрузки железом',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'заражения ВИЧ через донорскую кровь',
	},
	{
		id: 320,
		question: 'Отличительная особенность сосудов-буферов (аорта и крупные артерии):',
		answers: [
			{
				id: 0,
				value: 'способны депонировать кровь',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'в них не происходит газообмен',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'содержат большую часть крови',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'в них не происходит газообмен',
	},
	{
		id: 321,
		question: 'Капилляры относятся к:',
		answers: [
			{
				id: 0,
				value: 'насосным сосудам',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'мИкроциркуляции',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'мАкроциркуляции',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'мИкроциркуляции',
	},
	{
		id: 322,
		question: 'Главная функция системы мАкроциркуляции:',
		answers: [
			{
				id: 0,
				value: 'движение и транспорт крови',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'газообмен',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'перераспределение сердечного выброса',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'движение и транспорт крови',
	},
	{
		id: 323,
		question: 'К инвазивному измерению артериального давления относится:',
		answers: [
			{
				id: 0,
				value: 'измерение АД с помощью ртутного тонометра',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'измерение АД с помощью электронного тонометра',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'измерение АД через катетер в лучевой артерии',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'измерение АД через катетер в лучевой артерии',
	},
	{
		id: 324,
		question: 'Подсчёт пульса и подсчёт ЧСС:',
		answers: [
			{
				id: 0,
				value: 'это одно и то же',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'цифры всегда совпадают',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'цифры могут отличаться',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'цифры могут отличаться',
	},
	{
		id: 325,
		question: 'Происхождение клеток крови:',
		answers: [
			{
				id: 0,
				value: 'печень',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'костный мозг',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'жировая ткань',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'костный мозг',
	},
	{
		id: 326,
		question: 'Белки плазмы крови:',
		answers: [
			{
				id: 0,
				value: 'синтезируются в костном мозге',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'происходят из пищи',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'синтезируются в печени',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'синтезируются в печени',
	},
	{
		id: 327,
		question: 'Факторы свёртывания крови – это:',
		answers: [
			{
				id: 0,
				value: 'белки плазмы',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'неорганические вещества',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'клетки крови',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'белки плазмы',
	},
	{
		id: 328,
		question: 'Сосудисто-тромбоцитарный (первичный) гемостаз:',
		answers: [
			{
				id: 0,
				value: 'требует участия всех факторов свёртывания крови',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'способен остановить кровотечение из аорты',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'является единственным механизмом при заживлении мелких порезов',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'является единственным механизмом при заживлении мелких порезов',
	},
	{
		id: 329,
		question: 'Количество групп крови у человека:',
		answers: [
			{
				id: 0,
				value: 'зависит от рассматриваемой системы антигенов',
				isCorrect: true,
			},
			{
				id: 1,
				value: '8',
				isCorrect: false,
			},
			{
				id: 2,
				value: '4',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'зависит от рассматриваемой системы антигенов',
	},
	{
		id: 330,
		question: 'Система групп крови АВ0:',
		answers: [
			{
				id: 0,
				value: 'антитела врождённые',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'не имеет антител',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'антитела развиваются после переливания несовместимой крови',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'антитела врождённые',
	},
	{
		id: 331,
		question: 'Группу крови по системе АВ0 можно определить с помощью:',
		answers: [
			{
				id: 0,
				value: 'стандартных сывороток',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'стандартных эритроцитов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'и того, и другого',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'стандартных сывороток',
	},
	{
		id: 332,
		question: 'Показания к переливанию эритроцитов:',
		answers: [
			{
				id: 0,
				value: 'гемоглобин 80 после операции',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дефицит кислородной ёмкости крови',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гемоглобин 50 у пациента с хронической анемией',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дефицит кислородной ёмкости крови',
	},
	{
		id: 333,
		question: 'При первом в жизни пациента переливании резус-несовместимой крови:',
		answers: [
			{
				id: 0,
				value: 'разовьётся гемолитическая реакция',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ничего не произойдёт',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'со временем появятся аллоиммунные антитела',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'со временем появятся аллоиммунные антитела',
	},
	{
		id: 334,
		question: 'Время наблюдения за планшеткой при определении группы крови по АВ0:',
		answers: [
			{
				id: 0,
				value: 'проба оценивается сразу же',
				isCorrect: false,
			},
			{
				id: 1,
				value: '3 минуты',
				isCorrect: false,
			},
			{
				id: 2,
				value: '5 минут',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '5 минут',
	},
	{
		id: 335,
		question: 'Метод переливания крови, который сейчас запрещён:',
		answers: [
			{
				id: 0,
				value: 'аутогемотрансфузия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'непрямое переливание крови',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'прямое переливание крови',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'прямое переливание крови',
	},
	{
		id: 336,
		question: 'Аутогемотрансфузию заготовленной аутокровью следует проводить:',
		answers: [
			{
				id: 0,
				value: 'у пациента тяжёлый лейкоз',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'планируется операция с незначительной кровопотерей',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'у пациента редкая группа крови',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'у пациента редкая группа крови',
	},
	{
		id: 337,
		question: 'Пациентам с трансфузионными реакциями в анамнезе следует переливать:',
		answers: [
			{
				id: 0,
				value: 'облучённые эритроциты',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'обычную эритроцитарную массу',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'отмытые эритроциты после индивидуального подбора',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'отмытые эритроциты после индивидуального подбора',
	},
	{
		id: 338,
		question: 'Биологическая проба показана:',
		answers: [
			{
				id: 0,
				value: 'при переливании плазмы',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'при переливании любого компонента крови',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'при переливании эритроцитов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'при переливании любого компонента крови',
	},
	{
		id: 339,
		question: 'Перечислите принципы поведения медицинских работников:',
		answers: [
			{
				id: 0,
				value: 'принцип милосердия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'принцип гуманизма',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'все вышеперечисленное верно',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'принцип профессионализма',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'все вышеперечисленное верно',
	},
	{
		id: 340,
		question: 'Принцип толерантности медработника включает в себя:',
		answers: [
			{
				id: 0,
				value: 'отсутствие дискриминации по религиозному и (или) национальному признакам, запрете привилегий и (или) ограничений по признакам расы, политическим и другим убеждениям, полу, возрасту, этническому и социальному происхождению, по языковым и другим признакам',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'проявление пренебрежительного отношения к пациентам с другими убеждениями',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'проявление понимания и терпимости к пациенту и иным лицам, уважение их взглядов и убеждений',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'проявление бюрократизма и формализма',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'проявление понимания и терпимости к пациенту и иным лицам, уважение их взглядов и убеждений, отсутствие дискриминации по религиозному и (или) национальному признакам, запрете привилегий и (или) ограничений по признакам расы, политическим и другим убеждениям, полу, возрасту, этническому и социальному происхождению, по языковым и другим признакам',
	},
	{
		id: 341,
		question: 'ИСМП (определение):',
		answers: [
			{
				id: 0,
				value: 'любое заболевание, которое развивается у пациента в результате его поступления в больницу, обращения в нее за лечебной помощью, или любое заболевание сотрудника больницы, развившееся вследствие его пребывания по месту жительства',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'любое клинически распознаваемое инфекционное заболевание, которое развивается у пациента в результате его поступления в учреждение образования для повышения квалификации',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'любое клинически распознаваемое соматическое заболевание, которое развивается у пациента в результате его поступления в больницу, обращения в нее за лечебной помощью',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'любое клинически распознаваемое инфекционное заболевание, которое развивается у пациента в результате его поступления в больницу, обращения в нее за лечебной помощью, или любое инфекционное заболевание сотрудника больницы, развившееся вследствие его работы в данном учреждении',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer:
			'любое клинически распознаваемое инфекционное заболевание, которое развивается у пациента в результате его поступления в больницу, обращения в нее за лечебной помощью, или любое инфекционное заболевание сотрудника больницы, развившееся вследствие его работы в данном учреждении',
	},
	{
		id: 342,
		question: 'ИСМП могут вызывать:',
		answers: [
			{
				id: 0,
				value: 'бактерии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'вирусы',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'споры бактерий',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'всё вышеперечисленное верно',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'всё вышеперечисленное верно',
	},
	{
		id: 343,
		question: 'Источники ИМСП:',
		answers: [
			{
				id: 0,
				value: 'члены семьи пациента по месту жительства',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'медработники',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'пациенты',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'соседи по месту проживания пациента',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'пациенты, медработники',
	},
	{
		id: 344,
		question: 'К профилактическим мерам предупреждения развития ИСМП относят:',
		answers: [
			{
				id: 0,
				value: 'соблюдение санэпидрежима',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'соблюдения асептики и антисептики',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дезинфекция и стерилизация',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'всё вышеперечисленное верно',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'всё вышеперечисленное верно',
	},
	{
		id: 345,
		question:
			'Мероприятия, направленные на предупреждение инфицирования ПВГ пациентов в организациях здравоохранения, включают:',
		answers: [
			{
				id: 0,
				value: 'переливание крови и (или) ее компонентов по медицинским показаниям в соответствии с требованиями клинических протоколов, по решению консилиума врачей',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'использование для гемотрансфузии только одноразовых систем для переливания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'использование одного контейнера крови и ее компонентов для одного реципиента',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'соблюдение требований к проведению дезинфекционных и стерилизационных мероприятий',
				isCorrect: false,
			},
			{
				id: 4,
				value: 'мероприятий по гигиене рук и использованию защитных перчаток работниками организаций здравоохранения',
				isCorrect: false,
			},
			{
				id: 5,
				value: 'всё вышеперечисленное верно',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'всё вышеперечисленное верно',
	},
	{
		id: 346,
		question:
			'Мероприятия, направленные на предупреждение инфицирования ПВГ работников организаций здравоохранения, включают:',
		answers: [
			{
				id: 0,
				value: 'обследование на ПВГ работников организаций здравоохранения при проведении обязательных медицинских осмотров в соответствии с законодательством Республики Беларусь',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'профилактическую иммунизацию против ВГB в соответствии с законодательством Республики Беларусь',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'соблюдение работниками организаций здравоохранения мер безопасности при работе с кровью (органами, тканями человека, другим биологическим материалом)',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'всё вышеперечисленное верно',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'всё вышеперечисленное верно',
	},
	{
		id: 347,
		question: 'При проведении операции медицинские работники должны соблюдать следующие требования:',
		answers: [
			{
				id: 0,
				value: 'надеть перед входом в операционную чистый хирургический костюм, бахилы, головной убор, СИЗ органов дыхания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'выполнить в помещении предоперационной хирургическую антисептику рук в соответствии с требованиями Санитарных норм и правил, надеть в помещении операционной стерильный хирургический халат и стерильные перчатки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'медицинские работники, которые являются членами анестезиологической бригады, в операционной могут использовать чистую нестерильную СО',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'всё вышеперечисленное верно',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'всё вышеперечисленное верно',
	},
	{
		id: 348,
		question: 'Работники организации должны использовать стерильные медицинские перчатки:',
		answers: [
			{
				id: 0,
				value: 'при доступе к магистральным сосудам и проведении медицинских вмешательств на сосудах',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'при медицинских вмешательствах, в ходе выполнения которых возможен контакт со стерильными полостями и зонами организма пациента',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'при проведении сбора анамнеза заболевания пациента',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'при измерении артериального давления у пациента',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'при доступе к магистральным сосудам и проведении медицинских вмешательств на сосудах, при медицинских вмешательствах, в ходе выполнения которых возможен контакт со стерильными полостями и зонами организма пациента',
	},
	{
		id: 349,
		question: 'С целью профилактики пролежней (по стандарту) положение пациента в постели необходимо менять:',
		answers: [
			{
				id: 0,
				value: 'каждый час',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'каждые 3 часа',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'каждые 2 часа',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'каждые 2 часа',
	},
	{
		id: 350,
		question: 'Первым признаком появления пролежней является:',
		answers: [
			{
				id: 0,
				value: 'участок бледной кожи в местах риска развития пролежней',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'участок гиперемии кожи, исчезающей при осмотре за 1 – 2 минуты',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'участок стойкой неисчезающей гиперемии',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'участок некроза кожи',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'участок стойкой неисчезающей гиперемии',
	},
	{
		id: 351,
		question: 'Больше всего находится крови в следующем отделе сердечно-сосудистой системы:',
		answers: [
			{
				id: 0,
				value: 'в капиллярах',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'в сосудах легких и сердца',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'в артериях большого круга кровообращения',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'в венах большого круга кровообращения',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'в венах большого круга кровообращения',
	},
	{
		id: 352,
		question: 'Нормальная величина центрального венозного давления составляет:',
		answers: [
			{
				id: 0,
				value: '60-120 мм вод. ст',
				isCorrect: true,
			},
			{
				id: 1,
				value: '20-30 мм вод. ст.',
				isCorrect: false,
			},
			{
				id: 2,
				value: '10% от системного АД',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '60-120 мм вод. ст',
	},
	{
		id: 353,
		question: 'Медицинской сестре в процессе наблюдения за пациентом важно выяснить:',
		answers: [
			{
				id: 0,
				value: 'локализацию боли',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'характер боли',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'факторы, вызывающие или усиливающие боль',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'действие анальгетиков',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'локализацию боли, характер боли, факторы, вызывающие или усиливающие боль',
	},
	{
		id: 354,
		question: 'Указать концентрацию раствора глюкозы, который является изотоническим:',
		answers: [
			{
				id: 0,
				value: '10%',
				isCorrect: false,
			},
			{
				id: 1,
				value: '3%',
				isCorrect: false,
			},
			{
				id: 2,
				value: '5%',
				isCorrect: true,
			},
			{
				id: 3,
				value: '4,2%',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '5%',
	},
	{
		id: 355,
		question: 'В пожароопасной обстановке можно использовать:',
		answers: [
			{
				id: 0,
				value: 'закись азота',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'эфир',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'севоран',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'севоран',
	},
	{
		id: 356,
		question: 'Периоды острой почечной недостаточности (ОПН):',
		answers: [
			{
				id: 0,
				value: 'нарушение кислотно-щелочного равновесия (КЩР)',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'восстановление диуреза',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'воздействие агрессивного фактора',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'олигурия или анурия',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'воздействие агрессивного фактора, олигурия или анурия, восстановление диуреза',
	},
	{
		id: 357,
		question: 'Учащение дыхания обозначают термином:',
		answers: [
			{
				id: 0,
				value: 'брадипноэ',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'диспноэ',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'тахипноэ',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'апноэ',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'тахипноэ',
	},
	{
		id: 358,
		question: 'Полное отсутствие сознания, отсутствие реакции на раздражения, в том числе болевые - симптомы:',
		answers: [
			{
				id: 0,
				value: 'делирия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'комы',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'сопора',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'комы',
	},
	{
		id: 359,
		question: 'При острой сосудистой недостаточности (обморок, коллапс) больному надо придать положение:',
		answers: [
			{
				id: 0,
				value: 'ровное горизонтальное',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'горизонтальное с приподнятой головой',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'горизонтальное с приподнятыми ногами',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'полусидячее',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'горизонтальное с приподнятыми ногами',
	},
	{
		id: 360,
		question: 'К группе наркотических анальгетиков относится препарат:',
		answers: [
			{
				id: 0,
				value: 'промедол',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'аминазин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'пипольфен',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'аспирин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'промедол',
	},
	{
		id: 361,
		question: 'Самую высокую воспламеняемость и взрывоопасность имеет вещество:',
		answers: [
			{
				id: 0,
				value: 'закись азота',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'тиопентал натрия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'фторотан',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'эфир',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'эфир',
	},
	{
		id: 362,
		question: 'Транспортируется в сжиженном виде газ, используемый для наркоза:',
		answers: [
			{
				id: 0,
				value: 'ксенон',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'закись азота',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'кислород',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'закись азота',
	},
	{
		id: 363,
		question: 'Резиновые детали наркозного аппарата имеют черный цвет, потому что:',
		answers: [
			{
				id: 0,
				value: 'черный цвет в сочетании с хромированными деталями аппарата более эстетичен',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'в резину добавлено специальное вещество, предохраняющее ее от разрушения при стерилизации',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'на черном фоне лучше видны следы загрязнений',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'в резину добавлен уголь в качестве антистатика',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'в резину добавлен уголь в качестве антистатика',
	},
	{
		id: 364,
		question: 'Возможные причины обтурации дыхательных путей:',
		answers: [
			{
				id: 0,
				value: 'западение языка',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'ларингоспазм',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'рвота',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'гипертонический криз',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'ларингоспазм, западение языка, рвота',
	},
	{
		id: 365,
		question: 'Фильтр наркотических веществ (ФНВ) при ЭТН с ИВЛ по полузакрытому контуру устанавливается к:',
		answers: [
			{
				id: 0,
				value: 'выходному патрубку предохранительного клапана наркозного аппарата',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'выходному патрубку респиратора 2,0 под его столиком',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'клапану дополнительного вдоха',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'выходному патрубку предохранительного клапана наркозного аппарата',
	},
	{
		id: 366,
		question: 'При гиперкапнии артериальное давление:',
		answers: [
			{
				id: 0,
				value: 'понижается',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'не изменяется',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'повышается',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'всегда понижается',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'повышается',
	},
	{
		id: 367,
		question: 'Для восстановления сердечной деятельности внутривенно вводят:',
		answers: [
			{
				id: 0,
				value: '0,1% раствор адреналина гидрохлорида',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'раствор кальция хлорида',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'кордиамин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'раствор кофеин-бензоната натрия',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '0,1% раствор адреналина гидрохлорида',
	},
	{
		id: 368,
		question: 'Основными признаками остановки сердца являются:',
		answers: [
			{
				id: 0,
				value: 'отсутствие пульса на сонной артерии',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'узкие зрачки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'отсутствие сознания',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'судороги',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'отсутствие сознания, отсутствие пульса на сонной артерии',
	},
	{
		id: 369,
		question: 'Перевод больного из отделения реанимации осуществляется силами отделения:',
		answers: [
			{
				id: 0,
				value: 'реанимационного',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'приемного',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'хирургического',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'реанимационного',
	},
	{
		id: 370,
		question:
			'Больной с очень лабильной психикой перед операцией находится в состоянии резкого эмоционального напряжения с преобладанием чувства страха. В качестве средства для премедикации отдается предпочтение:',
		answers: [
			{
				id: 0,
				value: 'дроперидолу',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'морфину',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'промедолу',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'диазепаму',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'диазепаму',
	},
	{
		id: 371,
		question: 'Прекураризация показана для:',
		answers: [
			{
				id: 0,
				value: 'профилактики п/о мышечных болей',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'облегчения интубации',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'уменьшения выброса гистамина',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'профилактики п/о мышечных болей',
	},
	{
		id: 372,
		question:
			'В процессе введения в наркоз (общее обезболивание с ИВЛ) на определенном этапе у больного начались фибрилляторные подергивания в начале мимической мускулатуры лица, затем мышц туловища, верхних и нижних конечностей. Данная клиническая картина развилась на препарат:',
		answers: [
			{
				id: 0,
				value: 'дитилин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'атракурий',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'тиопентал натрия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дроперидол',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дитилин',
	},
	{
		id: 373,
		question:
			'При введении деполяризующих релаксантов возникает мышечная фибрилляция, обуславливающая в последующем мышечные боли. Для предупреждения таких болей рекомендуется предварительно вводить больному:',
		answers: [
			{
				id: 0,
				value: 'атракурий в небольшой дозе',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'прозерин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'димедрол',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'атропин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атракурий в небольшой дозе',
	},
	{
		id: 374,
		question:
			'Сестра-анестезист ввела больному миорелаксант. Расслабление мышц наступило постепенно без предшествующей мышечной фибрилляции. Введен следующий препарат:',
		answers: [
			{
				id: 0,
				value: 'дитилин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'листенон',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'рокуроний',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'миорелаксин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'рокуроний',
	},
	{
		id: 375,
		question: 'Прозерин является антидотом следующего релаксанта:',
		answers: [
			{
				id: 0,
				value: 'листенона',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дитилина',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'миорелаксина',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'атракурия',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'атракурия',
	},
	{
		id: 376,
		question: 'Укажите дозу дитилина, необходимую для интубации трахеи у взрослого больного:',
		answers: [
			{
				id: 0,
				value: '1,0-1,5 мг/кг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '2,5-3,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '0,5-1,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 3,
				value: '1,5-2,0 мг/кг',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '1,5-2,0 мг/кг',
	},
	{
		id: 377,
		question: 'Дитилин нельзя вводить больным с:',
		answers: [
			{
				id: 0,
				value: 'глаукомой',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'бронхитом',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'диабетом',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'глаукомой',
	},
	{
		id: 378,
		question: 'Отчетливое влияние на гемодинамику в процессе нейролептанальгезии оказывает:',
		answers: [
			{
				id: 0,
				value: 'морфин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дормикум',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дроперидол',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'фентанил',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дроперидол',
	},
	{
		id: 379,
		question: 'Характерно повышение АД при вводном наркозе для следующего препарата:',
		answers: [
			{
				id: 0,
				value: 'дипривана',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'тиопентала натрия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'кетамина',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'гексенала',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'кетамина',
	},
	{
		id: 380,
		question: 'Наиболее выражена депрессия дыхания при применении:',
		answers: [
			{
				id: 0,
				value: 'кетамина',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'тиопентала натрия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'пропофола',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'тиопентала натрия',
	},
	{
		id: 381,
		question: 'Максимально допустимая общая доза тиопентала натрия в наркозе:',
		answers: [
			{
				id: 0,
				value: '100 мг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '500 мг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '1000 мг',
				isCorrect: true,
			},
			{
				id: 3,
				value: '2500 мг',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '1000 мг',
	},
	{
		id: 382,
		question: 'Индукционная внутривенная дозировка калипсола составляет:',
		answers: [
			{
				id: 0,
				value: '0,5-1,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 1,
				value: '4,0-5,0 мг/кг',
				isCorrect: false,
			},
			{
				id: 2,
				value: '1,5-2,5 мг/кг',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '1,5-2,5 мг/кг',
	},
	{
		id: 383,
		question: 'Метод обезболивания можно назвать атаралгезией при комбинации препаратов:',
		answers: [
			{
				id: 0,
				value: 'оксибутират натрия и промедол',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дроперидол и фентанил',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'атропин и промедол',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'седуксен и фентанил',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'седуксен и фентанил',
	},
	{
		id: 384,
		question: 'Калипсол вызывает:',
		answers: [
			{
				id: 0,
				value: 'мышечную ригидность',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'снижение глоточных рефлексов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'мышечную релаксацию',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'мышечную ригидность',
	},
	{
		id: 385,
		question: 'Введение транквилизаторов перед кетамином предотвращает:',
		answers: [
			{
				id: 0,
				value: 'угнетение сознания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'урежение ритма дыхания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гиперсаливацию',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'возникновение галлюцинаций',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'возникновение галлюцинаций',
	},
	{
		id: 386,
		question:
			'Создается угроза так называемой “тихой” аспирации желудочного содержимого в трахеобронхиальное дерево с развитием аспирационного синдрома при использовании следующего анестетика:',
		answers: [
			{
				id: 0,
				value: 'калипсола',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'оба препарата не создают такую угрозу',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'при применении любого их этих препаратов',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'тиопентала-натрия',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'при применении любого их этих препаратов',
	},
	{
		id: 387,
		question:
			'Следующая симптоматика: яркокрасный цвет кожных покровов, повышенный тонус скелетных мышц, умеренное расширение зрачков при сохранении их реакции на свет и подвижных глазных яблоках, крепкое сжатие век, неполное включение конъюнктивальных рефлексов характерна для стадии наркоза по Гведелу:',
		answers: [
			{
				id: 0,
				value: '4-й стадии',
				isCorrect: false,
			},
			{
				id: 1,
				value: '2-й стадии',
				isCorrect: true,
			},
			{
				id: 2,
				value: '1-й стадии',
				isCorrect: false,
			},
			{
				id: 3,
				value: '3-й стадии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '2-й стадии',
	},
	{
		id: 388,
		question: 'Предельно допустимая концентрация закиси азота в смеси с кислородом:',
		answers: [
			{
				id: 0,
				value: '80%',
				isCorrect: true,
			},
			{
				id: 1,
				value: '60%',
				isCorrect: false,
			},
			{
				id: 2,
				value: '90%',
				isCorrect: false,
			},
			{
				id: 3,
				value: '40%',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '80%',
	},
	{
		id: 389,
		question: 'Пропофол:',
		answers: [
			{
				id: 0,
				value: 'может вызвать брадикардию и асистолию',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'вызывает периферическую вазоконстрикцию',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'может вызвать тахикардию и подъем АД',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'может вызвать брадикардию и асистолию',
	},
	{
		id: 390,
		question:
			'Максимальное АД у гипертоника в процессе проведения управляемой гипотонии при постоянном у него АД - 220/120 мм рт.ст. можно снижать до следующих цифр:',
		answers: [
			{
				id: 0,
				value: 'до 130 мм рт. ст.',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'до 60 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'до 100 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'до 180 мм рт. ст.',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'до 130 мм рт. ст.',
	},
	{
		id: 391,
		question:
			'В ближайшем постнаркозном периоде у больного развилось осложнение, именуемое “Синдром Мендельсона”. Сущность этого осложнения:',
		answers: [
			{
				id: 0,
				value: 'рефлекторная остановка сердца',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'острый пневмонит',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гиперкапния',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'бронхоспазм',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'острый пневмонит',
	},
	{
		id: 392,
		question: 'После прекращения подачи закиси азота необходима 100% оксигенация, т.к. реально угроза:',
		answers: [
			{
				id: 0,
				value: 'бронхоспазма',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ларингоспазма',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гипоксии',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'гипоксии',
	},
	{
		id: 393,
		question: 'При каком из указанных заболеваний противопоказан наркоз тиопенталом натрия?',
		answers: [
			{
				id: 0,
				value: 'гипертоническая болезнь',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'бронхиальная астма',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'сахарный диабет',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'язвенная болезнь желудка',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'бронхиальная астма',
	},
	{
		id: 394,
		question:
			'В процессе наркоза с ИВЛ, осуществляемой вручную, появилось нарастающее затруднение при прохождении газонаркотической смеси, преимущественно на выдохе. На расстоянии слышны бронхиальные шумы. Стали нарастать гипоксия и гиперкапния. В комплексе с другими реанимационными мероприятиями вводится следующий препарат:',
		answers: [
			{
				id: 0,
				value: 'атракурий',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'морфин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'прозерин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'эуфиллин',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'эуфиллин',
	},
	{
		id: 395,
		question:
			'Сестра-анестезист с целью устранения остаточной кураризации ввела больному в/в 4 мл 0,5% р-ра прозерина. После этого у больного развилась резкая брадикардия, граничащая с остановкой сердца, появилось обильное слюнотечение. Для снятия описанной симптоматики необходимо ввести больному:',
		answers: [
			{
				id: 0,
				value: 'эфедрин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'атропин',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'димедрол',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'норадреналин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атропин',
	},
	{
		id: 396,
		question: 'Основные причины обтурации дыхательных путей:',
		answers: [
			{
				id: 0,
				value: 'западение языка',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'рвота',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ларингоспазм',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'аспирация инородных тел',
				isCorrect: false,
			},
			{
				id: 4,
				value: 'все перечисленное',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все перечисленное',
	},
	{
		id: 397,
		question: 'Препаратом выбора при анафилактическом шоке является:',
		answers: [
			{
				id: 0,
				value: 'антибиотики',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гормоны',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'адреналин',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'антигистаминные препараты',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'адреналин',
	},
	{
		id: 398,
		question: 'Причины продленного апноэ:',
		answers: [
			{
				id: 0,
				value: 'угнетение дыхательного центра, передозировка релаксантов, заболевания с поражением нервномышечной проводимости',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'ателектаз легкого, инфаркт легкого, отек легкого',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer:
			'угнетение дыхательного центра, передозировка релаксантов, заболевания с поражением нервномышечной проводимости',
	},
	{
		id: 399,
		question:
			'Больному введен 0,5% р-р бупивакаина в пространство между твердой мозговой оболочкой спинного мозга и внутренней поверхностью спинно-мозгового канала. Выполнена анестезия:',
		answers: [
			{
				id: 0,
				value: 'эпидуральная',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'спинальная',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'паравертебральная',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'проводниковая',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'эпидуральная',
	},
	{
		id: 400,
		question: 'Больше предпосылок для нарушения сердечно-сосудистой системы при проведении анестезии:',
		answers: [
			{
				id: 0,
				value: 'проводниковой',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'спинальной',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'эпидуральной',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'сакральной',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'спинальной',
	},
	{
		id: 401,
		question:
			'Расположение трех анальгезирующих веществ, отражающий возрастающую степень анальгетической активности, имеет вариант:',
		answers: [
			{
				id: 0,
				value: 'суфентанил, фентанил, морфин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'морфин, суфентанил, фентанил',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'морфин, фентанил, суфентанил',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'морфин, фентанил, суфентанил',
	},
	{
		id: 402,
		question: 'Норма парциального давления углекислоты в крови:',
		answers: [
			{
				id: 0,
				value: '30-35 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 1,
				value: '45-50 мм рт. ст.',
				isCorrect: false,
			},
			{
				id: 2,
				value: '35-45 мм рт. ст.',
				isCorrect: true,
			},
			{
				id: 3,
				value: '25-30 мм рт. ст.',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '35-45 мм рт. ст.',
	},
	{
		id: 403,
		question: 'Максимальным повреждающим действием на стенку вены обладает препарат:',
		answers: [
			{
				id: 0,
				value: 'физиологический раствор Na Cl',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'промедол',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'тиопентал натрий',
				isCorrect: false,
			},
			{
				id: 3,
				value: '10% раствор хлористого калия',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '10% раствор хлористого калия',
	},
	{
		id: 404,
		question: 'Постуральный дренаж - это:',
		answers: [
			{
				id: 0,
				value: 'дренирование плевральной полости подводным дренажом',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дренирование плевральной полости трубкой с клапаном',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дренирование плевральной полости с активной аспирацией',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'особые положения больного, обеспечивающие отток мокроты из трахеобронхиального дерева',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'особые положения больного, обеспечивающие отток мокроты из трахеобронхиального дерева',
	},
	{
		id: 405,
		question: 'Указать концентрацию раствора глюкозы, который является изотоническим:',
		answers: [
			{
				id: 0,
				value: '4,2%',
				isCorrect: false,
			},
			{
				id: 1,
				value: '0,85%',
				isCorrect: false,
			},
			{
				id: 2,
				value: '3%',
				isCorrect: false,
			},
			{
				id: 3,
				value: '5%',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '5%',
	},
	{
		id: 406,
		question: 'При переливании плазмы реципиенту необходимо:',
		answers: [
			{
				id: 0,
				value: 'переливание плазмы в соответствии резус-принадлежности',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'проведение пробы на совместимость по системе АВО',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'проведение биологической пробы',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'проведение биологической пробы',
	},
	{
		id: 407,
		question: 'Показания к переливанию крови и кровезаменителей:',
		answers: [
			{
				id: 0,
				value: 'анафилактический шок',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кардиогенный шок',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ожоговый шок и травматический шок, острая кровопотеря',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'ожоговый шок и травматический шок, острая кровопотеря',
	},
	{
		id: 408,
		question: 'Потеря сознания при внезапном прекращении кровообращения в головном мозге наступает через:',
		answers: [
			{
				id: 0,
				value: '30-45 сек',
				isCorrect: false,
			},
			{
				id: 1,
				value: '15-30 сек',
				isCorrect: false,
			},
			{
				id: 2,
				value: '7-10 сек',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '7-10 сек',
	},
	{
		id: 409,
		question: 'Биологическая проба при переливании крови и её компонентов проводится:',
		answers: [
			{
				id: 0,
				value: 'струйно по 10-15 мл 3 раза',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'капельно 15-20 мл 3 раза',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'струйно по 10-15 мл 3 раза',
	},
	{
		id: 410,
		question: 'При проведении непрямого массажа сердца компрессию на грудину взрослого человека производят:',
		answers: [
			{
				id: 0,
				value: 'всей ладонью',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'проксимальной частью ладони',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'тремя пальцами',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'проксимальной частью ладони',
	},
	{
		id: 411,
		question: 'Наибольшую тромбоопасность представляют центральные венозные катетеры, изготовленные из:',
		answers: [
			{
				id: 0,
				value: 'полиуретана',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'полиэтилена',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'силикона',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'полиэтилена',
	},
	{
		id: 412,
		question: 'При катетеризации бедренной вены:',
		answers: [
			{
				id: 0,
				value: 'инфузия не должна превышать 3-х суток',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пациенту запрещается поворачиваться на бок со стороны катетеризации',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'запрещается введение жировой эмульсии в бедренную вену',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'пациент должен соблюдать постельный режим',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'пациент должен соблюдать постельный режим',
	},
	{
		id: 413,
		question:
			'У больного, находящегося в постреанимационном периоде, отмечается полное отсутствие сознания, он не реагирует ни на какие, в том числе болевые, раздражители. Это состояние характеризует неврологический термин:',
		answers: [
			{
				id: 0,
				value: 'сопор',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кома',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'делирий',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'кома',
	},
	{
		id: 414,
		question: 'При всех методах ингаляции кислородом требуется:',
		answers: [
			{
				id: 0,
				value: 'назначение больному бронхоспазмолитиков',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'возвышенное положение больного',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'согревание дыхательной смеси',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'увлажнение дыхательной смеси',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'увлажнение дыхательной смеси',
	},
	{
		id: 415,
		question:
			'Указать концентрацию кислорода во вдыхаемой смеси, которая является безопасной в течение многих суток:',
		answers: [
			{
				id: 0,
				value: 'до 30%',
				isCorrect: true,
			},
			{
				id: 1,
				value: '100%',
				isCorrect: false,
			},
			{
				id: 2,
				value: '75%',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'до 50%',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'до 30%',
	},
	{
		id: 416,
		question: 'В каких случаях наблюдается преимущественно экспираторная одышка? :',
		answers: [
			{
				id: 0,
				value: 'заглоточный абсцесс',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'бронхиальная астма',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'острая неосложненная пневмония',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'круп',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'бронхиальная астма',
	},
	{
		id: 417,
		question: 'При обнаружении кровотечения из трахеостомы дежурная медсестра должна сделать:',
		answers: [
			{
				id: 0,
				value: 'срочно вызвать врача',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'провести санацию ТБД',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'провести гемостатическую терапию',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'измерить показатели гемодинамики',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'срочно вызвать врача',
	},
	{
		id: 418,
		question:
			'Больной, находящийся на ИВЛ, интубирован пластмассовой термопластической трубкой. Предельный срок допустимости пребывания трубки в трахее без реинтубации является:',
		answers: [
			{
				id: 0,
				value: '6 час',
				isCorrect: false,
			},
			{
				id: 1,
				value: '3 дня',
				isCorrect: false,
			},
			{
				id: 2,
				value: '7-10 дней',
				isCorrect: true,
			},
			{
				id: 3,
				value: '12 час',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '7-10 дней',
	},
	{
		id: 419,
		question: 'Какой в/в анестетик можно назвать противошоковым:',
		answers: [
			{
				id: 0,
				value: 'калипсол',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'тиопентал натрия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'пропофол',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'калипсол',
	},
	{
		id: 420,
		question: 'Основные принципы оказания помощи на догоспитальном этапе при травматическом шоке:',
		answers: [
			{
				id: 0,
				value: 'гемостатическая терапия, обезболивание, антибактериальная терапия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'обезболивание, иммобилизация, инфузионная терапия',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'обезболивание, иммобилизация, инфузионная терапия',
	},
	{
		id: 421,
		question: 'Выбор сосудистого доступа при травматическом шоке:',
		answers: [
			{
				id: 0,
				value: 'периферическая вена',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'катетеризация центральной вены',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'катетеризация центральной вены',
	},
	{
		id: 422,
		question: 'Какие из следующих патологических состояний не позволяют использовать кровь для реинфузии?',
		answers: [
			{
				id: 0,
				value: 'краевой разрыв печени',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'разрыв селезенки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'можно обойтись без переливания крови и кровезаменителей',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'разрыв тонкого кишечника',
				isCorrect: true,
			},
			{
				id: 4,
				value: 'разрыв аневризмы аорты',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'разрыв тонкого кишечника',
	},
	{
		id: 423,
		question: 'Назовите средства, которые используют при анафилактическом шоке:',
		answers: [
			{
				id: 0,
				value: 'антигистаминные, адреналин, СЗП',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'адреналин, гормоны, антигистаминные',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'эфедрин, СЗП, антигистаминные',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'адреналин, гормоны, антигистаминные',
	},
	{
		id: 424,
		question: 'Перед катетеризацией мочевого пузыря:',
		answers: [
			{
				id: 0,
				value: 'проводят гигиенические мероприятия',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'вводят анальгетики',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'просят больного помочиться',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'проводят гигиенические мероприятия',
	},
	{
		id: 425,
		question:
			'Диурез у взрослого больного, страдающего почечной недостаточностью, составил 350 мл/сутки. Данный показатель оценивается как:',
		answers: [
			{
				id: 0,
				value: 'имеет место анурия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'имеет место полиурия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'имеет место олигурия',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'показатель нормален',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'имеет место олигурия',
	},
	{
		id: 426,
		question: 'При остром отравлении желудок промывается:',
		answers: [
			{
				id: 0,
				value: 'кипяченая вода 8 л',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'до чистых промывных вод (не менее 10л)',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'вода 2-5 л',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'до чистых промывных вод (не менее 10л)',
	},
	{
		id: 427,
		question: 'Жировые слабительные применяются при отравлении следующими веществами:',
		answers: [
			{
				id: 0,
				value: 'угарным газом',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кислотой',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дихлорэтаном',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'щелочью',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дихлорэтаном',
	},
	{
		id: 428,
		question: 'Промывание глаз производят:',
		answers: [
			{
				id: 0,
				value: '0,05% перекисью водорода',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кипяченой водой',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'р-ром перманганата калия 1:1000',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'кипяченой водой',
	},
	{
		id: 429,
		question: 'При проведении зондового питания головной конец кровати:',
		answers: [
			{
				id: 0,
				value: 'опускается на 15 мин.',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'не изменяется',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'поднимается на 30-35° в течение 30 минут',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'поднимается на 20° в течение 10 минут',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'поднимается на 30-35° в течение 30 минут',
	},
	{
		id: 430,
		question: 'Перед введением смеси в желудок при зондовом питании:',
		answers: [
			{
				id: 0,
				value: 'голова больного опускается до 10°',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'температура смеси должна быть 40°',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'проводится контрольная аспирация из желудка',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'проводится контрольная аспирация из желудка',
	},
	{
		id: 431,
		question: 'Основные опасности коматозных состояний:',
		answers: [
			{
				id: 0,
				value: 'аспирация желудочного содержимого, синдром позиционного сдавления',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'тромбоэмболия легочной артерии, острый инфаркт миокарда',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'аспирация желудочного содержимого, синдром позиционного сдавления',
	},
	{
		id: 432,
		question: 'При возникновении рвоты у послеоперационного больного необходимо:',
		answers: [
			{
				id: 0,
				value: 'провести зондирование желудка',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'сделать больному инъекцию церукала',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'срочно опустить головной конец кровати и повернуть голову больного на бок',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'срочно опустить головной конец кровати и повернуть голову больного на бок',
	},
	{
		id: 433,
		question:
			'Вероятная причина резкого расширения зрачков при сохранении их реакции на свет и повышенном слезотечении у больного при операции под масочным наркозом:',
		answers: [
			{
				id: 0,
				value: 'рефлекторная остановка сердца',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'слишком поверхностный наркоз',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'фибрилляция желудочков',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'передозировка наркотического вещества',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'слишком поверхностный наркоз',
	},
	{
		id: 434,
		question: 'Критерием достаточной глубины вводного наркоза является:',
		answers: [
			{
				id: 0,
				value: 'широкие зрачки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'снижение артериального давления',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'остановка дыхания',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'потеря сознания с развитием сна',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'потеря сознания с развитием сна',
	},
	{
		id: 435,
		question: 'Выберите способ обработки операционного поля в положении больного на боку:',
		answers: [
			{
				id: 0,
				value: 'с верхних участков к нижним',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'от периферии к центру',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'от центра к периферии',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'от центра к периферии',
	},
	{
		id: 436,
		question: 'Укажите время развития спинальной анестезии с момента введения анестетика:',
		answers: [
			{
				id: 0,
				value: 'мгновенно',
				isCorrect: false,
			},
			{
				id: 1,
				value: '3-10 минут',
				isCorrect: true,
			},
			{
				id: 2,
				value: '25-30 минут',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '3-10 минут',
	},
	{
		id: 437,
		question: 'К осложнениям спинномозговой анестезии не относится:',
		answers: [
			{
				id: 0,
				value: 'брадикардия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гипертензия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гипотензия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'остановка дыхания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'гипертензия',
	},
	{
		id: 438,
		question:
			'В момент проведения спинальной анестезии у больного появились тошнота, рвота. Необходимо подумать о:',
		answers: [
			{
				id: 0,
				value: 'аллергической реакции на анестезин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'наличии “полного” желудка',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'развитии гипотонии',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'развитии гипотонии',
	},
	{
		id: 439,
		question: 'Коматозные состояния характеризуются:',
		answers: [
			{
				id: 0,
				value: 'отсутствием сознания, угнетением функции дыхания и сердечной деятельности',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'угнетением функции черепно-мозговых нервов при сохранении сознания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'угнетением сердечной деятельности при сохраненном сознании',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'отсутствием сознания, угнетением функции дыхания и сердечной деятельности',
	},
	{
		id: 440,
		question: 'Клинические признаки гипогликемической комы:',
		answers: [
			{
				id: 0,
				value: 'сознание отсутствует, кожа сухая, запах ацетона изо рта, тонус мышц снижен',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'сознание отсутствует, кожа сухая, сероземлистого цвета, запах мочевины изо рта, тонус мышц повышен',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'сознание отсутствует, кожа бледная, обильное потоотделение, отсутствие запаха ацетона изо рта, тонус мышц повышен',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer:
			'сознание отсутствует, кожа бледная, обильное потоотделение, отсутствие запаха ацетона изо рта, тонус мышц повышен',
	},
	{
		id: 441,
		question: 'Показания для масочного наркоза у детей:',
		answers: [
			{
				id: 0,
				value: 'операция больше 2-х часов',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'операция до 1 часа',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'операция больше 1,5 часов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'операция до 1 часа',
	},
	{
		id: 442,
		question: 'Показания для эндотрахеального наркоза у детей:',
		answers: [
			{
				id: 0,
				value: 'грыжесечение',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'тонзилэктомия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'вправление вывиха',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'тонзилэктомия',
	},
	{
		id: 443,
		question: 'Выбрать препарат для купирования судорог у детей:',
		answers: [
			{
				id: 0,
				value: 'аспирин, тизерцин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'анальгин, димедрол',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'седуксен',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'седуксен',
	},
	{
		id: 444,
		question: 'Гипертермический синдром у детей купируется:',
		answers: [
			{
				id: 0,
				value: 'антибиотиками, аналгетиками',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'физическими методами охлаждения, анальгетиками ненаркотического ряда, антигистаминными препаратами, нейролептиками',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'сульфаниламидами, сердечными гликозидами',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer:
			'физическими методами охлаждения, анальгетиками ненаркотического ряда, антигистаминными препаратами, нейролептиками',
	},
	{
		id: 445,
		question: 'С какой частотой выполняются компрессии грудной клетки при проведении СЛР у беременных:',
		answers: [
			{
				id: 0,
				value: '100-120 в мин',
				isCorrect: true,
			},
			{
				id: 1,
				value: '90-110 в мин',
				isCorrect: false,
			},
			{
				id: 2,
				value: '120-140 в мин',
				isCorrect: false,
			},
			{
				id: 3,
				value: '140-160 в мин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '100-120 в мин',
	},
	{
		id: 446,
		question: 'Регургитация — это:',
		answers: [
			{
				id: 0,
				value: 'не бывает без рвоты',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пассивное истечение желудочного содержимого в ротоглотку',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'результат подавления рвотного рефлекса',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'возникает только после рвоты',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пассивное истечение желудочного содержимого в ротоглотку',
	},
	{
		id: 447,
		question: 'Риск аспирации желудочного содержимого выше:',
		answers: [
			{
				id: 0,
				value: 'при выходе из наркоза',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'при эпидуральной анестезии',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'во время приступа эклампсии',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'при ручном отделении последа',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'во время приступа эклампсии',
	},
	{
		id: 448,
		question: 'При кесаревом сечении до извлечения ребенка надо:',
		answers: [
			{
				id: 0,
				value: 'обязательно ввести антибиотик для профилактики эндометрита',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'глюкозу вводить только при наличии гипогликемии, по указанию врача',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'ввести раствор глюкозы для улучшения сокращения матки',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'вводить фентанил',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'глюкозу вводить только при наличии гипогликемии, по указанию врача',
	},
	{
		id: 449,
		question: 'Что относится к причинам остановки сердца у беременных?',
		answers: [
			{
				id: 0,
				value: 'эмболия околоплодными водами',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кровопотеря',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ТЭЛА',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все вышеперечисленное',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'все вышеперечисленное',
	},
	{
		id: 450,
		question: 'При подозрении на воздушную эмболию во время кесарева сечения надо:',
		answers: [
			{
				id: 0,
				value: 'поднять ножной конец',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'приподнять головной конец',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'отключить закись азота',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'наклонить больную',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'отключить закись азота',
	},
	{
		id: 451,
		question: 'При проведении магнезиальной терапии покраснение лица и тошнота являются симптомами:',
		answers: [
			{
				id: 0,
				value: 'гипокальциемии',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'передозировки магния',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'подъема АД',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'аллергической реакции',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'передозировки магния',
	},
	{
		id: 452,
		question: 'Перед началом сердечно-лёгочной реанимации больному придаётся положение:',
		answers: [
			{
				id: 0,
				value: 'на животе',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'горизонтальное, с жёстким основанием',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'с приподнятыми нижними конечностями',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'Фаулера',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'горизонтальное, с жёстким основанием',
	},
	{
		id: 453,
		question: 'Информативным показателем острой почечной недостаточности является:',
		answers: [
			{
				id: 0,
				value: 'содержание креатинина в плазме крови',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'удельный вес мочи',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'почасовой диурез',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'концентрация электролитов в плазме',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'содержание креатинина в плазме крови',
	},
	{
		id: 454,
		question: 'Гепарин вводится:',
		answers: [
			{
				id: 0,
				value: 'внутривенно струйно',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'внутривенно капельно',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'под кожу передней брюшной стенки',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'внутримышечно',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'под кожу передней брюшной стенки, внутривенно капельно, внутривенно струйно',
	},
	{
		id: 455,
		question: 'Причиной смерти при остром инфаркте миокарда могут быть:',
		answers: [
			{
				id: 0,
				value: 'кардиогенный шок',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'разрыв миокарда',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'нарушения ритма сердца',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'блокада правой ножки пучка Гиса',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'кардиогенный шок, разрыв миокарда, нарушения ритма сердца',
	},
	{
		id: 456,
		question: 'Чаще всего причиной острого инфаркта миокарда является:',
		answers: [
			{
				id: 0,
				value: 'коронароспазм',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'коронаросклероз',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'воспаление коронарных сосудов',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'гипертоническая болезнь',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'коронаросклероз',
	},
	{
		id: 457,
		question: 'При остром инфаркте миокарда в сыворотке крови раньше других возрастает уровень активности:',
		answers: [
			{
				id: 0,
				value: 'креатинфосфокиназы (КФК)',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'лактатдегидрогеназы (ЛДГ)',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'аспарагиновой трансаминазы ( АсАТ)',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'миоглобина',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'миоглобина',
	},
	{
		id: 458,
		question: 'При кардиогенном шоке для нормализации АД наиболее эффективен:',
		answers: [
			{
				id: 0,
				value: 'мезатон',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'сердечные гликозиды',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'допамин',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'норадреналин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'допамин',
	},
	{
		id: 459,
		question: 'Клинические проявления кетоацидотической комы:',
		answers: [
			{
				id: 0,
				value: 'тургор кожи повышен',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'кожный покров бледный, сухой',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'гипотония',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'гипертензия',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'кожный покров бледный, сухой, гипотония',
	},
	{
		id: 460,
		question: 'Клинические проявления гипогликемической комы:',
		answers: [
			{
				id: 0,
				value: 'тахикардия',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'кожные покровы влажные',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'повышение артериального давления',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'тонус мышц повышен, судороги',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'кожные покровы влажные, тонус мышц повышен, судороги, тахикардия',
	},
	{
		id: 461,
		question: 'Продолжительность клинической смерти составляет:',
		answers: [
			{
				id: 0,
				value: '10–12 мин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'до 20 мин',
				isCorrect: false,
			},
			{
				id: 2,
				value: '4–6 мин',
				isCorrect: true,
			},
			{
				id: 3,
				value: '1–2 мин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '4–6 мин',
	},
	{
		id: 462,
		question: 'К симптомам желудочно-кишечного кровотечения относятся:',
		answers: [
			{
				id: 0,
				value: 'черный дегтеобразный стул - мелена',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'рвота цвета «кофейной гущи» или кровавая рвота',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'повышение АД',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'отрыжка, тошнота',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'рвота цвета «кофейной гущи» или кровавая рвота, черный дегтеобразный стул - мелена',
	},
	{
		id: 463,
		question: 'Дезинфекция – это комплекс мероприятий:',
		answers: [
			{
				id: 0,
				value: 'механическое удаление микроорганизмов с поверхности изделий мед назначения',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'по уничтожению микроорганизмов на поверхностях изделий медицинского назначения и объектах внешней среды',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'по уничтожению всех микроорганизмов, в тои числе и спор',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'по предупреждению попадания микроорганизмов в рану',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer:
			'по уничтожению микроорганизмов на поверхностях изделий медицинского назначения и объектах внешней среды',
	},
	{
		id: 464,
		question: 'Стерилизация – это комплекс мероприятий:',
		answers: [
			{
				id: 0,
				value: 'по предупреждению попадания микроорганизмов в рану',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'по уничтожению патогенных микроорганизмов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'механическое удаление микроорганизмов с поверхности изделий мед назначения',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'по уничтожению всех микроорганизмов, в тои числе и спор',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'по уничтожению всех микроорганизмов, в тои числе и спор',
	},
	{
		id: 465,
		question: 'Срок хранения стерильного материала в биксах без фильтра, не раскрытого:',
		answers: [
			{
				id: 0,
				value: 'одни сутки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'семь суток',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'двадцать одни сутки',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'трое суток',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'трое суток',
	},
	{
		id: 466,
		question: 'Внутрибольничная инфекция возникает при наличии:',
		answers: [
			{
				id: 0,
				value: 'факторов и путей передачи',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'источника инфекции',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'источника инфекции + факторов передачи + восприимчивого коллектива',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'источника инфекции + факторов передачи + восприимчивого коллектива',
	},
	{
		id: 467,
		question: 'Фекально-оральный механизм передачи характерен для:',
		answers: [
			{
				id: 0,
				value: 'вирусного гепатита А',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'вирусного гепатита В',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'вирусного гепатита Д',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'вирусного гепатита С',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'вирусного гепатита А',
	},
	{
		id: 468,
		question: 'Пути передачи ВИЧ-инфекции:',
		answers: [
			{
				id: 0,
				value: 'половой, воздушно-капельный',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'парентеральный, половой, вертикальный',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'контактно-бытовой, половой',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'парентеральный, половой, вертикальный',
	},
	{
		id: 469,
		question: 'Клетки, являющиеся главной мишенью ВИЧ',
		answers: [
			{
				id: 0,
				value: 'эритроциты',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'Т-лимфоциты',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'лейкоциты',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'В-лимфоциты',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'Т-лимфоциты',
	},
	{
		id: 470,
		question: 'Заражение ВИЧ-инфекцией может произойти при:',
		answers: [
			{
				id: 0,
				value: 'пользовании общей посудой',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'при пользовании общим туалетом, ванной',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'при переливании крови, препаратов крови, при пересадке органов и тканей',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'при переливании крови, препаратов крови, при пересадке органов и тканей',
	},
	{
		id: 471,
		question: 'Антитела к ВИЧ у ВИЧ-инфицированных наиболее часто определяются:',
		answers: [
			{
				id: 0,
				value: 'через 6 месяцев после инфицирования',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'в течение 1-2 недели после заражения',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'через 3 месяца после заражения',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'через 1 месяц после инфицирования',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'через 3 месяца после заражения',
	},
	{
		id: 472,
		question: 'Искусственные пути передачи ВИЧ-инфекции:',
		answers: [
			{
				id: 0,
				value: 'через медицинские отходы, прошедшие дезинфекцию',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'трансфузионный',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'при употреблении в/в наркотиков',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'аэрогенный',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'трансфузионный, при употреблении в/в наркотиков',
	},
	{
		id: 473,
		question: 'При сборе медицинских отходов запрещается:',
		answers: [
			{
				id: 0,
				value: 'использовать мягкую одноразовую упаковку для сбора острого медицинского инструментария и иных острых предметов',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'снимать вручную иглу со шприца после его использования, надевать колпачок на иглу после инъекции',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'собирать в специальные контейнеры, предназначенные для сбора медицинских отходов',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'снимать вручную иглу со шприца после его использования, надевать колпачок на иглу после инъекции, использовать мягкую одноразовую упаковку для сбора острого медицинского инструментария и иных острых предметов',
	},
	{
		id: 474,
		question: 'Что такое трансфузионная терапия?',
		answers: [
			{
				id: 0,
				value: 'внутривенное введение синтетических кристаллоидных растворов',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'внутривенное введение синтетических коллоидных растворов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'внутриартериальное введение коллоидных растворов',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'внутривенное введение препаратов крови',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'внутривенное введение препаратов крови',
	},
	{
		id: 475,
		question: 'Что такое инфузионная терапия?',
		answers: [
			{
				id: 0,
				value: 'внутриартериальное введение плазмы',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'внутривенное введение любых препаратов крови',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'внутривенное введение плазмы',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'внутривенное введение любых синтетических растворов',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'внутривенное введение любых синтетических растворов',
	},
	{
		id: 476,
		question: 'С какой целью не используется инфузионная терапия?',
		answers: [
			{
				id: 0,
				value: 'дезинтоксикации',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дегидратации',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'коррекции тяжелой анемии',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'регидратации',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'коррекции тяжелой анемии',
	},
	{
		id: 477,
		question: 'Что такое трехкратная биопроба при трансфузии?',
		answers: [
			{
				id: 0,
				value: 'трехкратное определение совместимости',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'трехкратное определение группы крови',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'трехкратное введение крови реципиенту',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'трехкратное определение резус-фактора',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'трехкратное введение крови реципиенту',
	},
	{
		id: 478,
		question: 'Что будет показанием к эндотрахеальному наркозу?',
		answers: [
			{
				id: 0,
				value: 'длительные многочасовые операции',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'операции на конечностях',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'кратковременные операции',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'операции с применением лазеротерапии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'длительные многочасовые операции',
	},
	{
		id: 479,
		question: 'На основании каких исследований можно поставить диагноз дыхательной недостаточности?',
		answers: [
			{
				id: 0,
				value: 'рентгенологического исследования грудной клетки',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ОАК, БАК',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'КТ грудной клетки',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'исследования газов крови (pO2, pCO2)',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'исследования газов крови (pO2, pCO2)',
	},
	{
		id: 480,
		question:
			'Определите более вероятную причину: У больного 48 лет после введения инсулина отмечается внезапная потеря сознания, редкое поверхностное дыхание, холодный пот.',
		answers: [
			{
				id: 0,
				value: 'анафилактический шок',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'обморок',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гипогликемическая кома',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'гипергликемическая кома',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'гипогликемическая кома',
	},
	{
		id: 481,
		question:
			'Нужно сделать: У ребенка 3-х лет с диагнозом “Стенозирующий ларинготрахеит” отмечается одышка в покое и при нагрузке, выраженный периоральный цианоз, акроцианоз',
		answers: [
			{
				id: 0,
				value: 'непрямой массаж сердца',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'срочная интубация трахеи',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'длительные слабощелочные ингаляции',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'введение эуфиллина внутривенно',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'срочная интубация трахеи',
	},
	{
		id: 482,
		question: 'Причиной развития ларингоспазма у пациента при проведении интубации трахеи является:',
		answers: [
			{
				id: 0,
				value: 'недостаточная миорелаксация',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'предварительная ингаляция кислорода',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'измерение температуры тела',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'предварительное удаление съемных протезов из полости рта',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'недостаточная миорелаксация',
	},
	{
		id: 483,
		question: 'Какие из препаратов стимулируют образование сурфактанта:',
		answers: [
			{
				id: 0,
				value: 'мукалтин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'куросурф',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'амброксол',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ацетилцистеин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'куросурф',
	},
	{
		id: 484,
		question:
			'Определить степень дыхательной недостаточности: У пациента 18 лет с диагнозом “Пневмония” отмечается одышка при физической нагрузке, в покое одышки нет',
		answers: [
			{
				id: 0,
				value: 'ДН I степени',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'ДН III степени',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'ДН IIIа степени',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ДН II степени',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'ДН I степени',
	},
	{
		id: 485,
		question:
			'Определить степень дыхательной недостаточности: У ребенка с диагнозом “Плевропневмония” отмечается одышка в покое и при физической нагрузке. Цианоза не наблюдается. Кожа и слизистые розовые',
		answers: [
			{
				id: 0,
				value: 'ДН I степени',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ДН II степени',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'ДН III степени',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ДН IIIа степени',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'ДН II степени',
	},
	{
		id: 486,
		question: 'Проявлениями токсичности лидокаина являются:',
		answers: [
			{
				id: 0,
				value: 'возбуждение, неадекватное поведение пациента',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'покалывание вокруг рта, шум в ушах',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'ничего из вышеперечисленного',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'все вышеперечисленное',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'покалывание вокруг рта, шум в ушах',
	},
	{
		id: 487,
		question:
			'Какова причина следующего состояния после в/м введения п/столбнячной сыворотки: ощущение нехватки воздуха, страх смерти, боли в пояснице, холодный пот?',
		answers: [
			{
				id: 0,
				value: 'обморок',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'препарат неправильно введен (в/м вместо п/к введения)',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'анафилактический шок',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'гипогликемическое состояние',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'анафилактический шок',
	},
	{
		id: 488,
		question: 'Для чего нужен базис-наркоз?',
		answers: [
			{
				id: 0,
				value: 'стимуляции дыхания',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'достижения хирургической стадии',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'выключения сознания и уменьшения возбуждения',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'кратковременной остановки дыхания',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'достижения хирургической стадии',
	},
	{
		id: 489,
		question: 'Частота дыхания в 1 минуту у новорожденных детей:',
		answers: [
			{
				id: 0,
				value: '25-35',
				isCorrect: false,
			},
			{
				id: 1,
				value: '16-18',
				isCorrect: false,
			},
			{
				id: 2,
				value: '20-25',
				isCorrect: false,
			},
			{
				id: 3,
				value: '40-50 в мин',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: '40-50 в мин',
	},
	{
		id: 490,
		question: 'Инородные тела легких чаще выявляются:',
		answers: [
			{
				id: 0,
				value: 'в левом бронхе',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'в правом бронхе',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'в трахее',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'в правом бронхе',
	},
	{
		id: 491,
		question: 'Жидкие ингаляционные анестетики:',
		answers: [
			{
				id: 0,
				value: 'закись азота',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'диприван',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'изофлюран',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'изофлюран',
	},
	{
		id: 492,
		question: 'Доставлен пациент с рваной раной бедра (травма на строительстве). Что вводим по методу Безредка?',
		answers: [
			{
				id: 0,
				value: 'антирабическую сыворотку',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'противостолбнячную сыворотку',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'противоботулиническую сыворотку',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'противотуляремийную сыворотку',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'противостолбнячную сыворотку',
	},
	{
		id: 493,
		question:
			'Доставлен больной с рубленой раной кисти. Вам необходимо ввести п/столбнячную сыворотку. Ампула и доза в которой начинаем вводить лекарства по методу Безредка:',
		answers: [
			{
				id: 0,
				value: 'с лечебной сыворотки 2,0',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'с лечебной сыворотки 0,1 мл',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'с разведенной лошадиной сыворотки 0,1 мл',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'с разведенной человеческой сыворотки 0,1 мл',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'с разведенной лошадиной сыворотки 0,1 мл',
	},
	{
		id: 494,
		question:
			'Какой должен быть вид анестезии: Ребенок 4-х лет готовится к плановой операции по поводу неосложненной паховой грыжи. Состояние удовлетворительное. Сопутствующих заболеваний нет',
		answers: [
			{
				id: 0,
				value: 'общая анестезия',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'перидуральная анестезия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'местная анестезия новокаином',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'общая анестезия в сочетании с местной анестезией',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'общая анестезия',
	},
	{
		id: 495,
		question:
			'Каковы дальнейшие действия: У пациента 14 лет с диагнозом: “Флегмона правой кисти” на фоне ингаляции фторотаном отмечается сон, снижение болевой чувствительности, ровное дыхание',
		answers: [
			{
				id: 0,
				value: 'необходимо дополнительно ввести фентанил в/в',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'необходимо углубить наркоз до III стадии',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'можно вскрыть флегмону',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'необходима интубация трахеи, затем начать операцию',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'можно вскрыть флегмону',
	},
	{
		id: 496,
		question: 'Вопрос снят',
		answers: [
			{
				id: 0,
				value: 'да',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'нет',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'да',
	},
	{
		id: 497,
		question: 'Обезболивание закисью азота противопоказано при:',
		answers: [
			{
				id: 0,
				value: 'пневмотораксе',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'закрытой травме живота',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'переломе трубчатых костей',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'остром инфаркте миокарда',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'пневмотораксе',
	},
	{
		id: 498,
		question:
			'Какие действия нужно сделать в первую очередь в данной конкретной ситуации? К приезду реанимационной бригады пациент обнаружен в бессознательном состоянии, дыхание и сердцебиение отсутствуют, зрачки стойко расширены, отмечается трупное окоченение',
		answers: [
			{
				id: 0,
				value: 'непрямой массаж сердца',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'внутривенное введение адреналина и атропина',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'аппаратная ИВЛ',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'нет необходимости в проведении каких-либо мероприятий',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'нет необходимости в проведении каких-либо мероприятий',
	},
	{
		id: 499,
		question:
			'При использовании более безопасных и качественных анестетиков премедикация используется главным образом для:',
		answers: [
			{
				id: 0,
				value: 'предотвращения тошноты и рвоты',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'усиления действия общих анестетиков',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'снятия беспокойства и страха перед операцией',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'ускорения выхода из анестезии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'снятия беспокойства и страха перед операцией',
	},
	{
		id: 500,
		question: 'Антидотом миорелаксантов будет:',
		answers: [
			{
				id: 0,
				value: 'атропин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'пентамин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'цианокоболамин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'прозерин',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'прозерин',
	},
	{
		id: 501,
		question: 'Название момента расслабления сердечной мышцы:',
		answers: [
			{
				id: 0,
				value: 'систола',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'диастола',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'пустула',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'фистула',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'диастола',
	},
	{
		id: 502,
		question: 'Нужна ли предварительная очистка полости рта при проведении ИВЛ?',
		answers: [
			{
				id: 0,
				value: 'необязательна',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'обязательна только у взрослых',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'обязательна',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'обязательна при наличии протезов',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'обязательна',
	},
	{
		id: 503,
		question: 'Безопасная медицинская среда – это внимательное и вежливое обращение с пациентом',
		answers: [
			{
				id: 0,
				value: 'условия комфорта и безопасности, позволяющие эффективно удовлетворять все свои жизненно важные потребности пациенту и медицинскому работнику',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'улучшение качества медицинской помощи',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'комфортная палата для пациента',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer:
			'условия комфорта и безопасности, позволяющие эффективно удовлетворять все свои жизненно важные потребности пациенту и медицинскому работнику',
	},
	{
		id: 504,
		question: 'Во сколько раз снижается количество микроорганизмов на коже рук при мытье с мылом и водой?',
		answers: [
			{
				id: 0,
				value: '40-50 раз',
				isCorrect: false,
			},
			{
				id: 1,
				value: '100-1000 раз',
				isCorrect: true,
			},
			{
				id: 2,
				value: '1000-10000 раз',
				isCorrect: false,
			},
			{
				id: 3,
				value: '10-20 раз',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '100-1000 раз',
	},
	{
		id: 505,
		question: 'Время, необходимое для начала обработки наркозно-дыхательной аппаратуры',
		answers: [
			{
				id: 0,
				value: 'не позднее 30 минут после отсоединения от пациента',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'в конце рабочего дня',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'не позднее 3 часов после отсоединения от пациента',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'не позднее 30 минут после отсоединения от пациента',
	},
	{
		id: 506,
		question: 'ИСМП (инфекции, связанные с оказанием медицинской помощи) при проведении ларингоскопии',
		answers: [
			{
				id: 0,
				value: 'парентеральные вирусные гепатиты.',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'заболевания дыхательных путей',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'неприятный запах из ротовой полости',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'заболевания дыхательных путей, парентеральные вирусные гепатиты.',
	},
	{
		id: 507,
		question: 'Инфекции, относящиеся к ИСМП',
		answers: [
			{
				id: 0,
				value: 'инфекции, присоединившиеся к основному заболеванию у госпитализированных пациентов',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'инфекции, передающиеся половым путем',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'инфицирование медицинских работников в результате их профессиональной деятельности',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'любые инфекционные заболевания пациента до госпитализации',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'инфекции, присоединившиеся к основному заболеванию у госпитализированных пациентов, инфицирование медицинских работников в результате их профессиональной деятельности',
	},
	{
		id: 508,
		question: 'Инфекционные риски для медицинского персонала',
		answers: [
			{
				id: 0,
				value: 'работа по графику',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'работа с документами',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'травматизация при медманипуляциях',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'контакт с дезсредствами, антисептиками',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'травматизация при медманипуляциях',
	},
	{
		id: 509,
		question: 'Катетер-ассоциированные инфекции кровотока развиваются при',
		answers: [
			{
				id: 0,
				value: 'подкожном введении лекарственного препарата',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'внутривенном введении лекарственных средств',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'переливании препаратов крови',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'использовании сосудистого катетера для введения лекарственных средств',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'использовании сосудистого катетера для введения лекарственных средств',
	},
	{
		id: 510,
		question: 'Меры профилактики вентилятор-ассоциированной пневмонии у пациентов на ИВЛ',
		answers: [
			{
				id: 0,
				value: 'использование гидрофобных антибактериальных дыхательных фильтров-ТВО',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'использование одноразовых дыхательных контуров',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'применение антибиотиков широкого спектра действия',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'применение противопролежневого матраса',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'использование гидрофобных антибактериальных дыхательных фильтров-ТВО, использование одноразовых дыхательных контуров',
	},
	{
		id: 511,
		question: 'Места размещения дозатора с кожным антисептиком',
		answers: [
			{
				id: 0,
				value: 'у входа в палату',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'комната отдыха медицинского персонала',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'у постели больного',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'ординаторская',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'у входа в палату, у постели больного',
	},
	{
		id: 512,
		question: 'Норма сатурации в %',
		answers: [
			{
				id: 0,
				value: '85-90%',
				isCorrect: false,
			},
			{
				id: 1,
				value: '80-85%',
				isCorrect: false,
			},
			{
				id: 2,
				value: '96-100%',
				isCorrect: true,
			},
			{
				id: 3,
				value: '90-92%',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '96-100%',
	},
	{
		id: 513,
		question: 'Основные методы борьбы с ИСМП (инфекции, связанные с оказанием медицинской помощи)',
		answers: [
			{
				id: 0,
				value: 'совершенствование методов обработки рук медицинского персонала',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'применение антибиотиков широкого сектора действия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'увеличение срока пребывания пациента в стационаре',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дезинфекция объектов внутрибольничной среды',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'дезинфекция объектов внутрибольничной среды, совершенствование методов обработки рук медицинского персонала',
	},
	{
		id: 514,
		question: 'Гиперкапния — это..',
		answers: [
			{
				id: 0,
				value: 'избыточное содержание О2 в крови',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'недостаточное содержание О2 в крови',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'избыточное содержание СО2 в крови',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'недостаточное содержание СО2 в крови',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'избыточное содержание СО2 в крови',
	},
	{
		id: 515,
		question: 'Какой из перечисленных препаратов не угнетает дыхание?',
		answers: [
			{
				id: 0,
				value: 'морфин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'фентанил',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'суфентанил',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'кетамин',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'кетамин',
	},
	{
		id: 516,
		question: 'Периодичность осмотра состояния центрального венозного катетера',
		answers: [
			{
				id: 0,
				value: 'при внутривенном введении лекарственного препарата или подсоединения инфузионной системы',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ежедневно',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'при выявлении проблемы, связанной с катетером (боль, отёчность руки, промокание повязки)',
				isCorrect: false,
			},
			{
				id: 3,
				value: '1 раз в три дня',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'ежедневно',
	},
	{
		id: 517,
		question: 'После использования бактериально-вирусного фильтра в аппарате ИВЛ',
		answers: [
			{
				id: 0,
				value: 'подлежит повторному использованию',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'подлежит дезинфекции и утилизации, как медицинские отходы',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'его утилизируют как коммунальные отходы',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'подлежит дезинфекции и утилизации, как медицинские отходы',
	},
	{
		id: 518,
		question: 'После использования одноразовые дыхательные контуры',
		answers: [
			{
				id: 0,
				value: 'подлежат дезинфекции и утилизации как медицинские отходы',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'утилизируют как коммунальные отходы',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'подлежат дезинфекции, ПСО и стерилизации согласно руководству по эксплуатации соответствующего аппарата',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'после высушивания подлежат повторному использованию',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'подлежат дезинфекции и утилизации как медицинские отходы',
	},
	{
		id: 519,
		question: 'Последовательность проведения очистки наркозно-дыхательной аппаратуры',
		answers: [
			{
				id: 0,
				value: 'предстерилизационная очистка, стерилизация, дезинфекция',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'дезинфекция, предстерилизационная очистка, стерилизация',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'дезинфекция, стерилизация, предстерилизационная очистка',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'ополаскивание под проточной водой, дезинфекция',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'дезинфекция, предстерилизационная очистка, стерилизация',
	},
	{
		id: 520,
		question: 'При гигиене рук менее эффективно обеззараживаются следующие участки кожи',
		answers: [
			{
				id: 0,
				value: 'большой палец',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'мизинец',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'кончики пальцев',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'межпальцевые промежутки',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'большой палец, кончики пальцев, межпальцевые промежутки',
	},
	{
		id: 521,
		question: 'Причины дерматитов у медицинских работников',
		answers: [
			{
				id: 0,
				value: 'многократная обработка рук, с образованием трещин, сухостью кожи',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'чрезмерное ополаскивание рук водой',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'использование разнообразных антисептиков',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'многократная обработка рук, с образованием трещин, сухостью кожи',
	},
	{
		id: 522,
		question:
			'Проблемы, возникающие при развитии нозокомиальных инфекций у пациентов ОРИТ (отделение реанимации и интенсивной терапии)',
		answers: [
			{
				id: 0,
				value: 'снижение стоимости лечения',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'увеличение сроков пребывания пациентов в ОРИТ',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'ограничение применения антибиотиков',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'повышение риска летального исхода',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'повышение риска летального исхода, увеличение сроков пребывания пациентов в ОРИТ',
	},
	{
		id: 523,
		question: 'Продолжительность использования одноразовых дыхательных контуров',
		answers: [
			{
				id: 0,
				value: '12 часов',
				isCorrect: false,
			},
			{
				id: 1,
				value: '48 часов',
				isCorrect: false,
			},
			{
				id: 2,
				value: '72 часа',
				isCorrect: true,
			},
			{
				id: 3,
				value: '24 часа',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '72 часа',
	},
	{
		id: 524,
		question: 'Прямая ларингоскопия – это',
		answers: [
			{
				id: 0,
				value: 'обследование гортани и голосовых связок с помощью ларингоскопа',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'постановка трахеостомической трубки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'обследование ротовой полости при помощи шпателя',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'обследование гортани и голосовых связок с помощью ларингоскопа',
	},
	{
		id: 525,
		question: 'Составляющие безопасной среды медицинских работников',
		answers: [
			{
				id: 0,
				value: 'использование средств индивидуальной защиты',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'получение второго образования',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'выполнение манипуляций с соблюдением асептики и антисептики',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'работа в дневную смену',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'выполнение манипуляций с соблюдением асептики и антисептики, использование средств индивидуальной защиты',
	},
	{
		id: 526,
		question: 'Составные части безопасной медицинской среды',
		answers: [
			{
				id: 0,
				value: 'увеличение заработной платы медицинским работникам',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'применение антибиотиков широкого спектра действия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'безопасность пациента',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'безопасность медицинского персонала',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'безопасность медицинского персонала, безопасность пациента',
	},
	{
		id: 527,
		question: 'Способы, относящиеся к гигиенической обработке рук',
		answers: [
			{
				id: 0,
				value: 'надевание халата',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'надевание перчаток',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гигиеническая обработка рук путем мытья с мылом и водой',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'обработка рук кожным антисептиком',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer: 'гигиеническая обработка рук путем мытья с мылом и водой, обработка рук кожным антисептиком',
	},
	{
		id: 528,
		question: 'Транзиторная микрофлора',
		answers: [
			{
				id: 0,
				value: 'присутствует на поверхности рук всегда',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'приобретается медицинским персоналом во время работы',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'условно-патогенные микроорганизмы',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'приобретается медицинским персоналом во время работы',
	},
	{
		id: 529,
		question: 'Требования к контейнеру для сбора острых медицинских отходов',
		answers: [
			{
				id: 0,
				value: 'размер не более 2 литров',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'плотно прилегающая крышка, исключающая возможность самопроизвольного вскрытия',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'одноразовый непрокалываемый влагостойкий контейнер',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'одноразовый непрокалываемый влагостойкий контейнер, плотно прилегающая крышка, исключающая возможность самопроизвольного вскрытия',
	},
	{
		id: 530,
		question: 'С целью профилактики воздушной эмболии при катетеризации подключичной вены:',
		answers: [
			{
				id: 0,
				value: 'под лопатки подкладывают валик, высотой 10 см',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'голову больного поворачивает в противоположную сторону',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'поднимают ножной конец кровати',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'поднимают ножной конец кровати',
	},
	{
		id: 531,
		question: 'Условия эффективного мытья и обеззараживания рук',
		answers: [
			{
				id: 0,
				value: 'коротко подстриженные ногти',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'отсутствие искусственных ногтей',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'отсутствие повреждений на коже',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'наличие раковины',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer: 'коротко подстриженные ногти, отсутствие искусственных ногтей',
	},
	{
		id: 532,
		question:
			'Факторы, влияющие на развитие ИСМП (инфекции, связанные с оказанием медицинской помощи) у пациентов в ОРИТ',
		answers: [
			{
				id: 0,
				value: 'появление микроорганизмов устойчивых к воздействию антибиотиков и химических средств',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'снижение иммунного статуса организма',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'перевод пациента на парентеральное питание',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'применение наркотических анальгетиков с целью обезболивания',
				isCorrect: false,
			},
		],
		isMultiple: true,
		rightAnswer:
			'появление микроорганизмов устойчивых к воздействию антибиотиков и химических средств, снижение иммунного статуса организма',
	},
	{
		id: 533,
		question: 'Функции бактериально-вирусного фильтра в аппарате ИВЛ',
		answers: [
			{
				id: 0,
				value: 'снижает стоимость наркоза',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'является барьером на пути жидкостей (слюны, мокроты, конденсата)',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'усиливает действие наркотических анальгетиков',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'защищает дыхательную аппаратуру от воздушно-капельной бактериальной и вирусной инфекции',
				isCorrect: true,
			},
		],
		isMultiple: true,
		rightAnswer:
			'защищает дыхательную аппаратуру от воздушно-капельной бактериальной и вирусной инфекции, является барьером на пути жидкостей (слюны, мокроты, конденсата)',
	},
	{
		id: 534,
		question:
			'При взятии материала для анализов из подключичного катетера кровь не поступает. Медицинская сестра должна:',
		answers: [
			{
				id: 0,
				value: 'провести бужирование катетера проводником',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'освободить катетер от фиксации и изменить его положение',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'забрать кровь для анализов из периферической вены',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'сообщить дежурному врачу',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'сообщить дежурному врачу',
	},
	{
		id: 535,
		question: 'Что свойственно коме:',
		answers: [
			{
				id: 0,
				value: 'отсутствие сознания и рефлексов',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'падение АД',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'боли в загрудинной области',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'одышка с выделением розовой мокроты',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'отсутствие сознания и рефлексов',
	},
	{
		id: 536,
		question: 'Как называется изогнутый клинок ларингоскопа?',
		answers: [
			{
				id: 0,
				value: 'клинок Миллера',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'клинок Макинтоша',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'оксфордский клинок',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'клинок Макинтоша',
	},
	{
		id: 537,
		question: 'Цель вводного наркоза:',
		answers: [
			{
				id: 0,
				value: 'управление дыханием',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'выключение сознания',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'управляемая гипотония',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'достижение хирургической стадии',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'выключение сознания',
	},
	{
		id: 538,
		question: 'При отеке легких необходима ингаляция кислорода, чем его увлажняют?',
		answers: [
			{
				id: 0,
				value: '70% спиртом',
				isCorrect: true,
			},
			{
				id: 1,
				value: '40% глюкозой',
				isCorrect: false,
			},
			{
				id: 2,
				value: '30% спиртом',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'водой, подогретой до 60°С',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: '70% спиртом',
	},
	{
		id: 539,
		question: 'К противопоказаниям к назначению b-блокаторов относятся все, кроме:',
		answers: [
			{
				id: 0,
				value: 'ЧСС 100 уд/мин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'отек легких',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'бронхиальная астма',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'A-V блокады 2-3 степени',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'ЧСС 100 уд/мин',
	},
	{
		id: 540,
		question: 'С чего начинают сердечно-легочную реанимацию при клинической смерти?',
		answers: [
			{
				id: 0,
				value: 'вызова врача',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'подготовки к интубации трахеи',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'внутрисердечного введения препаратов',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'укладки пациента на твердую поверхность',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'укладки пациента на твердую поверхность',
	},
	{
		id: 541,
		question: 'Название сниженного объема циркулирующей крови:',
		answers: [
			{
				id: 0,
				value: 'гипертония',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гиперволемия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гиповолемия',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'гипотония',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'гиповолемия',
	},
	{
		id: 542,
		question: 'Что нужно поддерживать при проведении масочного наркоза?',
		answers: [
			{
				id: 0,
				value: 'артериальное давление',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'температуру тела',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'диурез',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'проходимость дыхательных путей',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'проходимость дыхательных путей',
	},
	{
		id: 543,
		question: 'Что свойственно в хирургической стадии?',
		answers: [
			{
				id: 0,
				value: 'редкое поверхностное дыхание',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ровное ритмичное дыхание',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'частое глубокое дыхание',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'частое поверхностное дыхание',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'ровное ритмичное дыхание',
	},
	{
		id: 544,
		question:
			'Больной вдыхает газонаркотическую смесь из аппарата, а выдыхает в аппарат и частично в атмосферу. Осуществляется контур дыхания:',
		answers: [
			{
				id: 0,
				value: 'полуоткрытый',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'открытый',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'полузакрытый',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'закрытый',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'полузакрытый',
	},
	{
		id: 545,
		question: 'Свойство дроперидола?',
		answers: [
			{
				id: 0,
				value: 'вызывает рвоту',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'противорвотное',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'противошоковое – повышает АД',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'противоаллергическое',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'противорвотное',
	},
	{
		id: 546,
		question: 'Для чего нужен адсорбер в наркозном аппарате?',
		answers: [
			{
				id: 0,
				value: 'согревания газонаркотической смеси)',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'поглощения углекислого газа',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'поглощения влаги',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'дезинфекции газонаркотической смеси',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'поглощения углекислого газа',
	},
	{
		id: 547,
		question: 'Прием Селлика применяют для?',
		answers: [
			{
				id: 0,
				value: 'предупреждения регургитации',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'интубации трахеи',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'дифференциирования трахеи и пищевода',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'введения желудочного зонда',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'предупреждения регургитации',
	},
	{
		id: 548,
		question: 'Пульсоксиметр, капнограф, волюмоспирометр предназначены для непрерывного контроля:',
		answers: [
			{
				id: 0,
				value: 'концентрации кислорода в дыхательной смеси',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'ЭКГ, АД, ЦВД, температуры',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'работы аппарата ИВЛ',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'оксигенации, пульса, вентиляции',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'оксигенации, пульса, вентиляции',
	},
	{
		id: 549,
		question: 'Наиболее безопасным для здоровья персонала является контур дыхания:',
		answers: [
			{
				id: 0,
				value: 'полуоткрытый',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'открытый',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'закрытый',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'полузакрытый',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'закрытый',
	},
	{
		id: 550,
		question: 'Что нужно для профилактики регургитации больному?',
		answers: [
			{
				id: 0,
				value: 'измерить ЦВД',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'измерить АД',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'опорожнить желудок',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'катетеризировать мочевой пузырь',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'опорожнить желудок',
	},
	{
		id: 551,
		question: 'Что отмечают при кровопотере?',
		answers: [
			{
				id: 0,
				value: 'нормоволемия',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'гипогликемия',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'гиповолемия',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'гиперволемия',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'гиповолемия',
	},
	{
		id: 552,
		question: 'Неингаляционный анестетик:',
		answers: [
			{
				id: 0,
				value: 'галотан',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'циклопропан',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'десфлуран',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'диприван',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'диприван',
	},
	{
		id: 553,
		question: 'При применении какого дыхательного контура обязательно включение адсорбера:',
		answers: [
			{
				id: 0,
				value: 'открытого',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'закрытого',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'полуоткрытого',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'скрытого',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'закрытого',
	},
	{
		id: 554,
		question:
			'Через какое время медицинская сестра-анестезист должна отмечать в анестезиологической карте показатели, характеризующие состояние пациента, в соответствии со стандартом минимального мониторинга?',
		answers: [
			{
				id: 0,
				value: 'каждые 15 минут',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'каждые 5 минут',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'каждые 3 минуты',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'каждые 10 минут',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'каждые 5 минут',
	},
	{
		id: 555,
		question: 'Что используют для декураризации?',
		answers: [
			{
				id: 0,
				value: 'кофеин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'эфедрин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'прозерин',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'эуфиллин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'прозерин',
	},
	{
		id: 556,
		question: 'Что используют при отравлениях опиатами?',
		answers: [
			{
				id: 0,
				value: 'налорфин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'кофеин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'эфедрин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'прозерин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'налорфин',
	},
	{
		id: 557,
		question: 'Холинолитический препарат:',
		answers: [
			{
				id: 0,
				value: 'эуфиллин',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'атропин',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'прозерин',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'адреналин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атропин',
	},
	{
		id: 558,
		question: 'При возникновении фибрилляции желудочков какой препарат не вводится?',
		answers: [
			{
				id: 0,
				value: 'атропин',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'лидокаин',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'амиодарон',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'адреналин',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'атропин',
	},
	{
		id: 559,
		question: 'Терминальные состояния — это:',
		answers: [
			{
				id: 0,
				value: 'агония, клиническая смерть, биологическая смерть',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'обморок, коллапс, клиническая смерть',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'предагония, агония, клиническая смерть',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'предагония, агония, клиническая смерть',
	},
	{
		id: 560,
		question: 'Что такое положение Тренделенбурга?',
		answers: [
			{
				id: 0,
				value: 'наклон нижних конечностей на 15-45 градусов',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'подъем нижних конечностей на 15-45 градусов',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'подъем головного конца на 15-45 градусов',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'наклон головного конца на 15-45 градусов',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'наклон головного конца на 15-45 градусов',
	},
	{
		id: 561,
		question: 'При чем применяют зажим Магилла?',
		answers: [
			{
				id: 0,
				value: 'катетеризации центральных вен',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'перидуральной анестезии',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'интубации трахеи',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'пункции плевральной полости',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'интубации трахеи',
	},
	{
		id: 562,
		question: 'В качестве дезинфицирующих средств не используют:',
		answers: [
			{
				id: 0,
				value: 'гуанидинсодержащие',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'галоидсодержащие',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'соли тяжелых металлов',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'третичные амины',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'соли тяжелых металлов',
	},
	{
		id: 563,
		question:
			'Каким образом, с помощью каких средств можно герметично закрыть (скрепить) упаковки со стерилизуемыми изделиями:',
		answers: [
			{
				id: 0,
				value: 'термосшивающий аппарат',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'канцелярские скрепки',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'степлер',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'медицинский скотч',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'термосшивающий аппарат',
	},
	{
		id: 564,
		question: 'Что такое брадипноэ?',
		answers: [
			{
				id: 0,
				value: 'урежение дыхания',
				isCorrect: true,
			},
			{
				id: 1,
				value: 'учащение дыхания',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'учащение пульса',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'урежение пульса',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'урежение дыхания',
	},
	{
		id: 565,
		question: 'Каково название приема удаления инородного тела из дыхательных путей у взрослых?',
		answers: [
			{
				id: 0,
				value: 'прием Тределенбурга',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'прием Пастернацкого',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'прием Геймлиха',
				isCorrect: true,
			},
			{
				id: 3,
				value: 'прием Селлика',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'прием Геймлиха',
	},
	{
		id: 566,
		question: 'Можно ли применять остаток плазмы после плазмотрансфузии?',
		answers: [
			{
				id: 0,
				value: 'только тому же донору',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'нельзя никому',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'любому донору этой группы',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'только в тот же день',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'нельзя никому',
	},
	{
		id: 567,
		question: 'При наступлении чего неэффективно проводить реанимационные мероприятия?',
		answers: [
			{
				id: 0,
				value: 'клинической смерти',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'биологической смерти',
				isCorrect: true,
			},
			{
				id: 2,
				value: 'агонии',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'фибрилляции сердца',
				isCorrect: false,
			},
		],
		isMultiple: false,
		rightAnswer: 'биологической смерти',
	},
	{
		id: 568,
		question: 'При проведении наружного массажа сердца ладони следует расположить:',
		answers: [
			{
				id: 0,
				value: 'на середине грудины',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'на границе верхней и средней трети грудины',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'под мечевидным отростком',
				isCorrect: false,
			},
			{
				id: 3,
				value: 'на границе средней и нижней трети грудины',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'на границе средней и нижней трети грудины',
	},
	{
		id: 569,
		question: 'Патология какого органа приводит к хронической анемии?',
		answers: [
			{
				id: 0,
				value: 'тимус',
				isCorrect: false,
			},
			{
				id: 1,
				value: 'лимфатические узлы',
				isCorrect: false,
			},
			{
				id: 2,
				value: 'почки',
				isCorrect: true,
			},
		],
		isMultiple: false,
		rightAnswer: 'почки',
	},
];
