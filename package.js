Package.describe({
    name: 'gantrim:jquery-scrolling', // All modules should api.use() this.
    summary: "Meteor Port of darkseal's Jquery.scrolling/Jquery.appear plugin",
    version: '0.0.1',
    git: 'https://github.com/gantrim/meteor-jquery-scrolling'
});

Package.onUse(function (api) {

    api.versionsFrom(['METEOR@1.2.1']);

    var packages = ['jquery',];

    api.use(packages);
    api.imply(packages);

    if (process.env.IS_PRODUCTION) {
        api.use('xolvio:inspectlet');
        api.export('__insp');
    }

    api.addFiles([
        'lib/client/jquery-scrolling.js',
    ], ['client']);
});
