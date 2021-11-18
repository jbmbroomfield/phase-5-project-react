const topicAccessDescription = (whoCanView, whoCanPost) => ({
    all: {
        all: 'Anyone can view and post, including guests.',
        users: 'Anyone can view the thread, including guests. Only members can post.',
        password_all: 'Anyone can view the thread, including guests. Only members and guests with the password can post. You can also add members as a poster.',
        password: 'Anyone can view the thread, including guests. Only members with the password can post. You can also add members as a poster.',
        add: 'Anyone can view the thread, including guests. Only members you add as a poster can post.',
    },
    users: {
        users: 'Only members can view and post.',
        password: 'Only members can view the thread. Only members with the password can post. You can also add members as a poster.',
        add: 'Only members can view the thread. Only members you add as a poster can post.',
    },
    url_all: {
        all: 'Only members and guests with the URL can view and post. You can also add members.',
        users: 'Only members and guests with the URL can view the thread. Only members with the URL can post. You can also add members.',
        password_all: 'Only members and guests with the URL can view the thread. Only members and guests with the URL and the password can post. You can also add members as a viewer or poster.',
        password: 'Only members and guests with the URL can view the thread. Only members with the URL and the password can post. You can also add members as a viewer or poster.',
        add: 'Only members and guests with the URL can view the thread. Only members you add as a poster can post. You can also add members as a viewer.',
    },
    url: {
        users: 'Only members with the URL can view and post. You can also add members as a viewer or poster.',
        password: 'Only members with the URL can view the thread. Only members with the URL and the password can post.',
        add: 'Only members with the URL can view the thread. Only members you add as a poster can post. You can also add members as a viewer.',
    },
    add: {
        users: 'Only members you add can view and post.',
        password: 'Only members you add as a viewer can view the thread. Only members you add as a viewer and have the password can post. You can also add members as a poster.',
        add: 'Only members you add as a viewer can view the thread. Only members you add as a poster can post.',
    },
}[whoCanView][whoCanPost])

export default topicAccessDescription