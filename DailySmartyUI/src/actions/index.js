import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPost() {
  return function(dispatch) {
    axios.get('https://api.dailysmarty.com/posts')
      .then(response => {
        console.log(response.date.post);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data.posts
        })
      })
  }
}
