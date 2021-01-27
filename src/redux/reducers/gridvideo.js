import {VIDEO_ADD, VIDEO_DELETE, VIDEO_CLICK} from '../actionTypes'
import image1 from 'data/previews/CO_2020.png'
import image2 from 'data/previews/dokmed_2020.png'
import image3 from 'data/previews/dokmed2.jpg'
import image4 from 'data/previews/test1.jpg'
import image5 from 'data/previews/neyrogenetika_2020.jpg'
import image6 from 'data/previews/neyrosteroidy2020.png'
 


const contentVideo = [
    {
        id: 1,
        title: 'Name1',
        author: 'author1',
        url_preview: image1,
        url_video: '../../data/video/CO_2020.mp4',
    },
    {
        id: 2,
        title: 'Name2',
        author: 'author2',
        url_preview: image2,
        url_video: '../../data/video/dokmed_2020.mp4',
    },
    {
        id: 3,
        title: 'Name3',
        author: 'author3',
        url_preview: image3,
        url_video: '../../data/video/dokmed2.mp4',
    },
    {
        id: 4,
        title: 'Name4',
        author: 'author4',
        url_preview: image4,
        url_video: '../../data/video/demo1.mov',
    },
    {
        id: 5,
        title: 'Name5',
        author: 'author5',
        url_preview: image5,
        url_video: '../../data/video/neyrogenetika_2020.mp4',
    },
    {
        id: 6,
        title: 'Name6',
        author: 'author6',
        url_preview: image6,
        url_video: '../../data/neyrosteroidy2020.mp4',
    },
];

const initialState = { content: contentVideo, };

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
    }

    return state;
};