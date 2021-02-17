import {
    VIDEO_ADD,
    VIDEO_DELETE,
    VIDEO_CLICK,
    VIDEO_SET_ACCESS_TYPE,
    VIDEO_SET_SEARCH_STRING_RESULT,
    VIDEO_SET_OUTPUT_CONTENT_AFTER_APPLIED_SEARCH_STRING
} from '../actionTypes'

import image1 from 'data/previews/CO_2020.jpg';
import image2 from 'data/previews/dokmed_2020.jpg';
import image3 from 'data/previews/dokmed2.jpg';
import image5 from 'data/previews/neyrogenetika_2020.jpg';
import image6 from 'data/previews/neyrosteroidy2020.jpg';
import image7 from 'data/previews/Carpe_Deim.jpg';
import image8 from 'data/previews/Medach_On_Air_1.jpg';
import image9 from 'data/previews/Medach_On_Air_2.jpg';
import image10 from 'data/previews/Weekend_Medicine_1.jpg';
import image11 from 'data/previews/Weekend_Medicine_2.jpg';
import image12 from 'data/previews/science_dont_do.jpg';

import video1 from 'data/video/CO_2020.mp4';
import video2 from 'data/video/dokmed_2020.mp4';
import video3 from 'data/video/dokmed2.mp4';
import video5 from 'data/video/neyrogenetika_2020.mp4';
import video6 from 'data/video/neyrosteroidy2020.mp4';
import video7 from 'data/video/Carpe_Deim.mp4';
import video8 from 'data/video/Medach_On_Air_1.mp4';
import video9 from 'data/video/Medach_On_Air_2.mp4';
import video10 from 'data/video/Weekend_Medicine_1.mp4';
import video11 from 'data/video/Weekend_Medicine_2.mp4';
import video12 from 'data/video/science_dont_do.mp4';

import imageAvatarMedicalChannel from 'data/avatars/mc.png';

import {ACCESS_TYPE_DEFAULT, ACCESS_TYPE_STUDENT, ACCESS_TYPE_SPECIAL} from '../../components/LoginForm/AccessTypes';

import fuzzySearch from 'fuzzy-search';

const contentVideo = [
    {
        id: 0,
        title: 'Отравления угарным газом: помощь на догоспитальном этапе',
        author: 'Кремков Андрей Владимирович',
        url_preview: image1,
        url_video: video1,
        url_avatar: null,
        leftMenu: {
            storage: [
                {
                    sectionName: 'Вступление',
                    section: [
                        {
                            headerName: 'Клинический случай',
                            timingName: '0:00',
                            subheaders: [
                                {
                                    headerName: 'Анамнез',
                                    timingName: '0:33',
                                },
                                {
                                    headerName: 'Опрос',
                                    timingName: '1:04',
                                },
                                {
                                    headerName: 'Осмотр',
                                    timingName: '1:44',
                                },
                                {
                                    headerName: 'Вопрос',
                                    timingName: '2:03',
                                },
                                {
                                    headerName: 'Диагноз',
                                    timingName: '2:54',
                                },
                            ],
                        },
                        {
                            headerName: 'Угарный газ',
                            timingName: '3:34',
                            subheaders: [],
                        },
                    ],
                },
            ],
        },
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 1,
        title: 'Основы и принципы доказательной медицины',
        author: 'Арсланов Глеб Маратович',
        url_preview: image2,
        url_video: video2,
        url_avatar: null,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 2,
        title: 'Доказательная медицина: мода и необходимость',
        author: 'Барон Екатерина Алексеевна',
        url_preview: image3,
        url_video: video3,
        url_avatar: null,
        accessType: ACCESS_TYPE_STUDENT,
    },
    {
        id: 4,
        title: 'Генетика и Психопатология',
        author: 'Евгений Касьянов',
        url_preview: image5,
        url_video: video5,
        url_avatar: null,
        accessType: ACCESS_TYPE_SPECIAL,
    },
    {
        id: 5,
        title: 'Нейростероиды: биологические функции и терапевтический потенциал',
        author: 'Осипенко Антон Николаевич',
        url_preview: image6,
        url_video: video6,
        url_avatar: null,
        accessType: ACCESS_TYPE_SPECIAL,
    },
    {
        id: 6,
        title: 'Carpe Deim: О научной карьере',
        author: 'Medical Channel',
        url_preview: image7,
        url_video: video7,
        url_avatar: imageAvatarMedicalChannel,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 7,
        title: 'Medach On Air #1',
        author: 'Medical Channel',
        url_preview: image8,
        url_video: video8,
        url_avatar: imageAvatarMedicalChannel,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 8,
        title: 'Medach On Air #2',
        author: 'Medical Channel',
        url_preview: image9,
        url_video: video9,
        url_avatar: imageAvatarMedicalChannel,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 9,
        title: 'Weekend Medicine #1',
        author: 'Medical Channel',
        url_preview: image10,
        url_video: video10,
        url_avatar: imageAvatarMedicalChannel,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 10,
        title: 'Weekend Medicine #2',
        author: 'Medical Channel',
        url_preview: image11,
        url_video: video11,
        url_avatar: imageAvatarMedicalChannel,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 11,
        title: 'Чем (не) занимается когнитивная наука',
        author: 'Medical Channel',
        url_preview: image12,
        url_video: video12,
        url_avatar: imageAvatarMedicalChannel,
        accessType: ACCESS_TYPE_DEFAULT,
    },
];

const initialState = { content: contentVideo, accessType: ACCESS_TYPE_DEFAULT, searchString: '', searchOutput: [], searchStatus: "" };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case VIDEO_ADD: {
            let result = {...state};
            result.content.push(action.video);

            return result;
        }
        case VIDEO_DELETE: {
            let result = {...state};

            result = result.content.filter((item) => item.id === action.video.id);

            return result;
        }
        case VIDEO_CLICK: {
            return {};
        }
        case VIDEO_SET_ACCESS_TYPE: {
            let result = {...state};
            result.accessType = action.accessType;
            return result;
        }
        case VIDEO_SET_SEARCH_STRING_RESULT: {
            // TODO: deprecated delete this
            /*
            let result = {...state};
            result.searchString = action.searchString;

            return result;*/

            break;
        }
        case VIDEO_SET_OUTPUT_CONTENT_AFTER_APPLIED_SEARCH_STRING: {
            let result = {...state};

            result.searchString = action.searchString;

            if (!result.searchString) {
                result.searchOutput = [];
                result.searchStatus = "";
                return result;
            }

            const wheretosearch = result.content.filter(element => element.accessType <= result.accessType);
            const whattosearch = ['title', 'author'];
            const searcher = new fuzzySearch(wheretosearch, whattosearch, {caseSensitive: false});

            const test = searcher.search(result.searchString);

            if (test.length === 0) {
                result.searchStatus = "[PLACEHOLDER] can't find anything by your string! [PLACEHOLDER]";
            }

            result.searchOutput = test;

            return result;
        }
    }

    return state;
};
