const path = {
    home() {
        return '/';
    },
    topic(topicSlug: string) {
        return `/topic/${topicSlug}`;
    },
    postCraete(topicSlug: string) {
        return `/topic/${topicSlug}/posts/new`;
    },
    PostShow(topicSlug: string, postId: string) {
        return `topic/${topicSlug}/posts/${postId}`;
    },
}