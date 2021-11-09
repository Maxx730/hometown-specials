const SettingsToArray = (settings) => {
    const _settings = [];
    Object.keys(settings).forEach(_setting => {
        console.log(_setting)
        _settings.push({
            name: _setting,
            value: settings[_setting]
        });
    });
    return _settings;
}

export { SettingsToArray }