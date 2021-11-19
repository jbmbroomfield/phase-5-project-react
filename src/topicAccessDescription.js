const topicAccessDescription = (whoCanView, whoCanPost) => ({
    all: {
        all: 'Anyone can view and post, including guests.',
        users: 'Anyone can view the thread, including guests. Only members can post.',
        password_all: 'Anyone can view the thread, including guests. Only members and guests with the password can post. Members can also be added as a poster.',
        password: 'Anyone can view the thread, including guests. Only members with the password can post. Members can also be added as a poster.',
        add: 'Anyone can view the thread, including guests. Only members added as a poster can post.',
    },
    users: {
        all: 'Only members can view and post.',
        users: 'Only members can view and post.',
        password_all: 'Only members can view the thread. Only members with the password can post. Members can also be added as a poster.',
        password: 'Only members can view the thread. Only members with the password can post. Members can also be added as a poster.',
        add: 'Only members can view the thread. Only members added as a poster can post.',
    },
    url_all: {
        all: 'Only members and guests with the URL can view and post. Members can also be added.',
        users: 'Only members and guests with the URL can view the thread. Only members with the URL can post. Members can also be added.',
        password_all: 'Only members and guests with the URL can view the thread. Only members and guests with the URL and the password can post. Members can also be added as a viewer or poster.',
        password: 'Only members and guests with the URL can view the thread. Only members with the URL and the password can post. Members can also be added as a viewer or poster.',
        add: 'Only members and guests with the URL can view the thread. Only members added as a poster can post. Members can also be added as a viewer.',
    },
    url: {
        all: 'Only members with the URL can view and post. Members can also be added as a viewer or poster.',
        users: 'Only members with the URL can view and post. Members can also be added as a viewer or poster.',
        password_all: 'Only members with the URL can view the thread. Only members with the URL and the password can post.',
        password: 'Only members with the URL can view the thread. Only members with the URL and the password can post.',
        add: 'Only members with the URL can view the thread. Only members added as a poster can post. Members can also be added as a viewer.',
    },
    add: {
        all: 'Only members added can view and post.',
        users: 'Only members added can view and post.',
        password_all: 'Only members added as a viewer can view the thread. Only members added as a viewer and who have the password can post. Members can also be added as a poster.',
        password: 'Only members added as a viewer can view the thread. Only members added as a viewer and who have the password can post. Members can also be added as a poster.',
        add: 'Only members added as a viewer can view the thread. Only members added as a poster can post.',
    },
}[whoCanView][whoCanPost])

export default topicAccessDescription