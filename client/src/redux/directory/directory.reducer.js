const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: '/images/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: '/images/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: '/images/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: '/images/womens.png',
        id: 4,
        linkUrl: 'shop/womens',
        size: 'large'
      },
      {
        title: 'mens',
        imageUrl: '/images/men.png',
        id: 5,
        linkUrl: 'shop/mens',
        size: 'large'
      }
    ]
}

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default: return state;
    }
}

export default directoryReducer;