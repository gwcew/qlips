import {
    COMMENT_ADD,
    COMMENT_DELETE,
    COMMENT_STORAGE_GET_FOR_VIDEO_PAGE_BY_ID,
} from '../actionTypes'

import imageNikolayPirogov from 'data/avatars/avatar_np.jpg';
import imageTheophrastusHohenheim from 'data/avatars/avatar_th.jpg';
import imagePaulEhrlich from 'data/avatars/avatar_pe.jpg';
import imageCharlesRichet from 'data/avatars/avatar_cr.jpg';
import imageAulusCorneliusCelsus from 'data/avatars/avatar_acs.jpg';
import imageAlbertSchweitzer from 'data/avatars/avatar_as.jpg';
import imageErnstFeuchtersleben from 'data/avatars/avatar_ef.jpg';
import imageRonaldRoss from 'data/avatars/avatar_rr.jpg';
import imageHansSelye from 'data/avatars/avatar_hs.jpg';
import imageFrederickCook from 'data/avatars/avatar_fc.jpg';
import imageValdisZatlers from 'data/avatars/avatar_vz.jpg';
import imageGiuseppeMoscati from 'data/avatars/avatar_gm.jpg';

const initialState = {
    commentsStorage: [
        //  Отравления угарным газом
        {
            id_to_video_page: 0,
            comments: [
                {
                    authorName: 'Николай Пирогов',
                    urlAvatarImage: imageNikolayPirogov,
                    commentTextName: 'Будущее принадлежит медицине предохранительной. Эта наука, идя рука об руку с лечебной, принесет несомненную пользу человечеству',
                    userReplies: [],
                },
                {
                    authorName: 'Теофраст Гогенхайм',
                    urlAvatarImage: imageTheophrastusHohenheim,
                    commentTextName: 'Всё есть яд, и ничто не лишено ядовитости, и только доза делает яд безвредным',
                    userReplies: [],
                },
            ],

        },

        // Основы и принципы доказательной медицины
        {
            id_to_video_page: 1,
            comments: [
                {
                    authorName: 'Пауль Эрлих',
                    urlAvatarImage: imagePaulEhrlich,
                    commentTextName: 'Причина всех наших неудач заключается в недостаточной точности работы. Обязательно должны быть какие-то математические законы, управляющие действием ядов, вакцин и сывороток',
                    userReplies: [
                        {
                            authorName: 'Шарль Рише',
                            urlAvatarImage: imageCharlesRichet,
                            commentTextName: 'Не тот глупец, кто чего-то не понимает, а тот, кто таки понимает, но действует, как если бы не понимал вот.',
                        },
                    ],
                },
                {
                    authorName: 'Авл Корнелий Цельс',
                    urlAvatarImage: imageAulusCorneliusCelsus,
                    commentTextName: 'Болезни не красноречием, а лекарствами лечатся',
                    userReplies: [],
                },
            ],
        },

        // Доказательная медицина
        {
            id_to_video_page: 2,
            comments: [
                {
                    authorName: 'Альберт Швейцер',
                    urlAvatarImage: imageAlbertSchweitzer,
                    commentTextName: 'Личный пример - не просто лучший метод убеждения, а единственный',
                    userReplies: [],
                },
                {
                    authorName: 'Эрнст Фейхтерслебен',
                    urlAvatarImage: imageErnstFeuchtersleben,
                    commentTextName: 'Существует только одна нравственность — это правда, только одна безнравственность — ложь.',
                    userReplies: [],
                },
            ],
        },

        // Генетика и Психопатология
        {
            id_to_video_page: 4,
            comments: [
                {
                    authorName: 'Рональд Росс',
                    urlAvatarImage: imageRonaldRoss,
                    commentTextName: 'Все, за что бы я ни принимался, мне не удавалось. Но неудачи не сразили меня. Они увлекли меня ввысь, на далекие холодные вершины одиночества. В этом настроении была известная доля эгоизма, но много было в нем и возвышенного. Мне ничего не хотелось, я не искал ничьей похвалы. У меня не было ни друзей, ни врагов, ни любви, ни ненависти',
                    userReplies: [],
                },
            ],
        },

        // Нейростероиды
        {
            id_to_video_page: 5,
            comments: [
                {
                    authorName: 'Ганс Селье',
                    urlAvatarImage: imageValdisZatlers,
                    commentTextName: 'Секрет удачного выбора сотрудников прост - надо находить людей, которые сами хотят делать то, что бы вам хотелось от них',
                    userReplies: [],
                },
                {
                    authorName: 'Николай Бурденко',
                    urlAvatarImage: null,
                    commentTextName: 'Тот, кто работает, всегда молод. И иногда мне кажется, что, может быть, труд вырабатывает какие-нибудь особые гормоны, повышающие жизненный импульс.',
                    userReplies: [],
                },
            ],
        },

        // Carpe Deim
        {
            id_to_video_page: 6,
            comments: [
                {
                    authorName: 'Валдис Затлерс',
                    urlAvatarImage: imageValdisZatlers,
                    commentTextName: 'Нет плана действий, нет действий',
                    userReplies: [],
                },
                {
                    authorName: 'Джузеппе Москати',
                    urlAvatarImage: imageGiuseppeMoscati,
                    commentTextName: 'Рядом с больным нет иерархии. Все мы приходим сюда, чтобы учиться: заведующие, коадъюторы, ассистенты - все мы приходим к ложу больного, потому что больной - это книга природы.',
                    userReplies: [],
                },
            ],
        },

        // Medach On Air #1
        {
            id_to_video_page: 7,
            comments: [],
        },

        // Medach On Air #2
        {
            id_to_video_page: 8,
            comments: [],
        },

        // Weekend Medicine #1
        {
            id_to_video_page: 9,
            comments: [],
        },

        // Weekend Medicine #2
        {
            id_to_video_page: 10,
            comments: [],
        },

        // Чем (не) занимается когнитивная наука
        {
            id_to_video_page: 11,
            comments: [
                {
                    authorName: 'Альберт Швейцер',
                    urlAvatarImage: imageAlbertSchweitzer,
                    commentTextName: 'Абстракция — это смерть для этики, ибо этика есть живое отношение к живой жизни',
                    userReplies: [],
                },
                {
                    authorName: 'Фредерик Кук',
                    urlAvatarImage: imageFrederickCook,
                    commentTextName: 'Истинное удовлетворение дает не само достижение цели, а преодоление препятствий на пути к ней.',
                    userReplies: [],
                },
            ],
        },
    ],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case COMMENT_ADD: {
            const result = {...state};

            return result;
        }
        case COMMENT_DELETE: {
            const result = {...state};

            return result;
        }
    }

    return state;
};
