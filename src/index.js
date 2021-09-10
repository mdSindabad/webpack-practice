import './styles/index.scss';

const student = {
    id: 1,
    name: 'John Doe',
    class: 'XII',
    badge: 'green'
}

const captain = {
    ...student,
    isCaptain: true,
    badge: 'blue'
}

console.log(student);
console.log(captain);