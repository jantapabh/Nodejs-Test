const checkAuth = (id, pass) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const authData = '6035512034';
            console.log('User Authenicated');
            resolve({
                id: id,
                pass: pass,
                auth: authData
            });

        }, 1000);
    });

}

const getStudent = (auth) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const data = {

                name: 'Jan',
                permission: 'admin'
            };
            resolve(data);

        }, 2000);
    });
}

const getTheResult = async () => {

    const auth = await checkAuth(1, 'mypassword');
    const data = await getStudent(auth);
    console.log(data);
}

// aysnc/awit คือการบอกว่าให้รอผลลัพธ์จากฟังก์ชั่นหลัง await ก่อนจึงนำไปเก็บยังตัวแปรได้


getTheResult();