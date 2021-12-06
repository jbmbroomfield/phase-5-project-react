const topicAccessDescription = (guestAccess, whoCanView, whoCanPost) => ({

    [null]: {
        anyone: {
            anyone: 'Only members can view and post.',
            password: 'Only members can view the thread. Only members with the password can post. Members can also be added as a poster.',
            add: 'Only members can view the thread. Only members added as a poster can post.',
        },
        url: {
            anyone: 'Only members with the URL can view and post. Members can also be added.',
            password: 'Only members with the URL can view the thread. Only members with the URL and the password can post.',
            add: 'Only members with the URL can view the thread. Only members added as a poster can post. Members can also be added as a viewer.',
        },
        add: {
            anyone: 'Only added members can view and post.',
            password: 'Only members added as a viewer can view the thread. Only members added as a viewer and who have the password can post. Members can also be added as a poster.',
            add: 'Only members added as a viewer can view the thread. Only members added as a poster can post.',
        },
    },

    view: {
        anyone: {
            anyone: 'Anyone can view the thread, including guests. Only members can post.',
            password: 'Anyone can view the thread, including guests. Only members with the password can post. Members can also be added as a poster.',
            add: 'Anyone can view the thread, including guests. Only members added as a poster can post.',
        },
        url: {
            anyone: 'Only members and guests with the URL can view the thread. Only members with the URL can post. Members can also be added.',
            password: 'Only members and guests with the URL can view the thread. Only members with the URL and the password can post. Members can also be added as a viewer or poster.',
            add: 'Only members and guests with the URL can view the thread. Only members added as a poster can post. Members can also be added as a viewer.',
        },
    },

    post: {
        anyone: {
            anyone: 'Anyone can view and post, including guests.',
            password: 'Anyone can view the thread, including guests. Only members and guests with the password can post. Members can also be added as a poster.',
        },
        url: {
            anyone: 'Only members and guests with the URL can view and post. Members can also be added.',
            password: 'Only members and guests with the URL can view the thread. Only members and guests with the URL and the password can post. Members can also be added as a viewer or poster.',
        },
    },
    
}[guestAccess][whoCanView][whoCanPost])

export default topicAccessDescription