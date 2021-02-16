import {
    COMMENT_ADD,
    COMMENT_DELETE,
} from '../actionTypes'


 

const initialState = {
    commentsStorage: [
        //  Отравления угарным газом
        {
            id_to_video_page: 0,
            comments: [
                {
                    authorName: 'Николай Пирогов',
                    contentTextName: 'Будущее принадлежит медицине предохранительной. Эта наука, идя рука об руку с лечебной, принесет несомненную пользу человечеству',
                    userReplies: [],
                },
                {
                    authorName: 'Теофраст Гогенхайм',
                    contentTextName: 'Всё есть яд, и ничто не лишено ядовитости, и только доза делает яд безвредным',
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
                    contentTextName: 'Причина всех наших неудач заключается в недостаточной точности работы. Обязательно должны быть какие-то математические законы, управляющие действием ядов, вакцин и сывороток',
                    userReplies: [
                        {
                            authorName: 'Шарль Рише',
                            contentTextName: 'Не тот глупец, кто чего-то не понимает, а тот, кто таки понимает, но действует, как если бы не понимал вот.',
                        },
                    ],
                },
                {
                    authorName: 'Авл Корнелий Цельс',
                    contentTextName: 'Болезни не красноречием, а лекарствами лечатся',
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
                    contentTextName: 'Личный пример - не просто лучший метод убеждения, а единственный',
                    userReplies: [],
                },
                {
                    authorName: 'Эрнст Фейхтерслебен',
                    contentTextName: 'Существует только одна нравственность — это правда, только одна безнравственность — ложь.',
                    userReplies: [],
                },
            ],
        },

        // Генетика и Психопатология
        {
            id_to_video_page: 4,
            comments: [
                {
                    authorName: 'Альберт Швейцер',
                    contentTextName: 'Личный пример - не просто лучший метод убеждения, а единственный',
                    userReplies: [],
                },
                {
                    authorName: 'Эрнст Фейхтерслебен',
                    contentTextName: 'Существует только одна нравственность — это правда, только одна безнравственность — ложь.',
                    userReplies: [],
                },
            ],
        },

        // Нейростероиды
        {
            id_to_video_page: 5,
            authorName: 'bruh',
            commentTextName: 'something',
        },

        // Carpe Deim
        {
            id_to_video_page: 6,
            authorName: 'bruh',
            commentTextName: 'something',
        },

        // Medach On Air #1
        {
            id_to_video_page: 7,
            authorName: 'bruh',
            commentTextName: 'something',
        },

        // Medach On Air #2
        {
            id_to_video_page: 8,
            authorName: 'bruh',
            commentTextName: 'something',
        },

        // Weekend Medicine #1
        {
            id_to_video_page: 9,
            authorName: 'bruh',
            commentTextName: 'something',
        },

        // Weekend Medicine #2
        {
            id_to_video_page: 10,
            authorName: 'bruh',
            commentTextName: 'something',
        },

        // Чем (не) занимается когнитивная наука
        {
            id_to_video_page: 11,
            authorName: 'bruh',
            commentTextName: 'something',
        },
    ],
};