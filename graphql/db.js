export const people = [
	{
        id: "0",
		name: "Nicolas",
		age: 18,
		gender: "female"
    },
    {
        id: "1",
		name: "Saro",
		age: 25,
		gender: "female"
    },
    {
        id: "2",
		name: "Hyunwoo",
		age: 27,
		gender: "male"
    },
    {
        id: "3",
		name: "jincheol",
		age: 21,
		gender: "male"
    },
    {
        id: "4",
		name: "jiyeong",
		age: 21,
		gender: "female"
    },
    {
        id: "5",
		name: "Bosong",
		age: 27,
		gender: "female"
    },
    {
        id: "6",
		name: "Jeongeun",
		age: 24,
		gender: "female"
    },
    {
        id: "7",
		name: "Jeonga",
		age: 20,
		gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};