import {
    VIDEO_ADD,
    VIDEO_DELETE,
    VIDEO_CLICK,
    VIDEO_SET_ACCESS_TYPE,
    VIDEO_SET_SEARCH_STRING_RESULT,
    VIDEO_SET_OUTPUT_CONTENT_AFTER_APPLIED_SEARCH_STRING
} from '../actionTypes'

import image1 from 'data/previews/CO_2020.png'
import image2 from 'data/previews/dokmed_2020.png'
import image3 from 'data/previews/dokmed2.jpg'
import image4 from 'data/previews/test1.jpg'
import image5 from 'data/previews/neyrogenetika_2020.jpg'
import image6 from 'data/previews/neyrosteroidy2020.png'
 
import video1 from 'data/video/CO_2020.mp4';
import video2 from 'data/video/dokmed_2020.mp4';
import video3 from 'data/video/dokmed2.mp4';
import video4 from 'data/video/demo1.mov';
import video5 from 'data/video/neyrogenetika_2020.mp4';
import video6 from 'data/video/neyrosteroidy2020.mp4';

import {ACCESS_TYPE_DEFAULT, ACCESS_TYPE_STUDENT, ACCESS_TYPE_SPECIAL} from '../../components/LoginForm/AccessTypes';

import fuzzySearch from 'fuzzy-search';


const contentVideo = [
    {
        id: 0,
        title: 'Name1',
        author: 'author1',
        url_preview: image1,
        url_video: video1,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 1,
        title: 'Name2',
        author: 'author2',
        url_preview: image2,
        url_video: video2,
        accessType: ACCESS_TYPE_DEFAULT,
    },
    {
        id: 2,
        title: 'Name3',
        author: 'author3',
        url_preview: image3,
        url_video: video3,
        accessType: ACCESS_TYPE_STUDENT,
    },
    {
        id: 3,
        title: 'Name4',
        author: 'author4',
        url_preview: image4,
        url_video: video4,
        accessType: ACCESS_TYPE_STUDENT,
    },
    {
        id: 4,
        title: 'Name5',
        author: 'author5',
        url_preview: image5,
        url_video: video5,
        accessType: ACCESS_TYPE_SPECIAL,
    },
    {
        id: 5,
        title: 'Name6',
        author: 'author6',
        url_preview: image6,
        url_video: video6,
        accessType: ACCESS_TYPE_SPECIAL,
    },
];

const initialState = { content: contentVideo, accessType: ACCESS_TYPE_DEFAULT, searchString: '', searchOutput: [] };

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
            let result = {...state};
            result.searchString = action.searchString;

            return result;
        }
        case VIDEO_SET_OUTPUT_CONTENT_AFTER_APPLIED_SEARCH_STRING: {
            let result = {...state};

            if (result.searchString === '') {
                result.searchOutput = [];
                return result;
            }

            const wheretosearch = result.content.filter(element => element.accessType <= result.accessType);
            
            const searcher = new fuzzySearch(wheretosearch, ['title', 'author'], {caseSensitive: false});

            const test = searcher.search(result.searchString);

            result.searchOutput = test;

            return result;
        }
    }

    return state;
};