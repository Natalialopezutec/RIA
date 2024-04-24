const getUser = async () => {
    const response = await fetch('user/user1.json');
    const data = await response.json();
    return data;
};

console.log('iniciando...');
getUser().then(data => {
    console.log('resolve: ', data);
});
console.log('fin!');

