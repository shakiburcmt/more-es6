const users = [
    { id: 1, name: 'Sizan', job: 'software engineer' }
]
// jehetu array tai evabe likhte hobe, tahole object er property pawa jabe
console.log(users[0].job)

// object er moddhe array theke object er property find
const leader = {
    id: 20120,
    team: 'Chennani Super King',
    data: [
        { id: 1, name: 'Sizan', job: 'software engineer' },
        { id: 2, name: 'Mizan', job: 'engineer' }
    ]
}
console.log(leader.data[1].name)

// object er object theke property find
const user = {
    id: 20120,
    team: 'Chennani Super King',
    data: {
        id: { named: 'Sizan', job: 'software engineer' }
    }
}
console.log(user.data.idd?.job)
// . er por . evabe kaj korake chaining bole tobe jekhane ? dewa hobe er mane oikhane vul thakle value pabe na tobe error dekhabe na etake optional chain bole