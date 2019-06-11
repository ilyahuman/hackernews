export default function getReadableStories(state) {
    const archiveState = state.archiveState;
    return state.storyState.filter(story => {
        return archiveState.indexOf(story.objectID) === -1;
    });
}