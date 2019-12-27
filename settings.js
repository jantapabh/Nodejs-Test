const Settings = {
    secretKey: 'GT345_3!ky12Bb1KJjdr',
    userPasss: 'fdfdfdfdfdhgjhgh',
    databaseName: 'iosthaillands'

}

const getSecretKey = () => {

        return Settings.secretKey;

}

module.exports.getSecretKey = getSecretKey;
module.exports.userPasss = Settings.userPasss;
module.exports.databaseName = Settings.databaseName;