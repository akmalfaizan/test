cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.moreapps.datepicker/www/datepicker.js",
        "id": "nl.moreapps.datepicker.Datepicker",
        "clobbers": [
            "window.datePicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "nl.moreapps.datepicker": "1.0.2"
}
// BOTTOM OF METADATA
});