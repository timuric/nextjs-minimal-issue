export default async function Two() {

    await fetch('https://jsonplaceholder.typicode.com/users/1', {next:  {tags: ['users']}})
    await fetch('https://jsonplaceholder.typicode.com/photos/1', {next:  {tags: ['photos']}})

    return <></>;
}
