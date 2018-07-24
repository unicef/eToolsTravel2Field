
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

var proxy = require('http-proxy-middleware');
var backendProxy = proxy(['/api','/users/api/', '/users/myprofile/','/admin/', '/login/', '/static/'], {
  target: 'http://139.59.134.232:9090/',
  changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
  pathRewrite: {
        '^/admin/': '/admin/',
        '^/login/': '/admin/login/',
        '^/static/': '/static/'
  },
});

var adminProxy = proxy(['/admin/', '/login/', ], {
  target: 'http://139.59.134.232:9090/',
  changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
  pathRewrite: {
        '^/admin/': '/admin/',
        '^/login/': '/admin/login/'
  },
});

module.exports = {
    'ui': {
        'port': 3002,
        'weinre': {
            'port': 8080
        }
    },
    'files': ['t2f/**/*', 'test/**/*'],
    'watchOptions': {},
    'server': false,
    'proxy': 'localhost:3000',
    'port': 3001,
    'middleware': [backendProxy, adminProxy],
    'serveStatic': [],
    'ghostMode': false,
    'logLevel': 'info',
    'logPrefix': 'BS',
    'logConnections': false,
    'logFileChanges': true,
    'logSnippet': false,
    'rewriteRules': [],
    'open': '',
    'browser': 'default',
    'cors': false,
    'xip': false,
    'hostnameSuffix': false,
    'reloadOnRestart': false,
    'notify': true,
    'scrollProportionally': true,
    'scrollThrottle': 0,
    'scrollRestoreTechnique': 'window.name',
    'scrollElements': [],
    'scrollElementMapping': [],
    'snippetOptions': {
        rule: {
            match: /<\/head>/i,
            fn: function(snippet, match) {
                return snippet + match;
            }
        }
    },
    'reloadDelay': 0,
    'reloadDebounce': 0,
    'reloadThrottle': 0,
    'plugins': [],
    'injectChanges': true,
    'startPath': null,
    'minify': true,
    'host': null,
    'localOnly': false,
    'codeSync': true,
    'timestamps': true,
    'clientEvents': [
        'scroll',
        'scroll:element',
        'input:text',
        'input:toggles',
        'form:submit',
        'form:reset',
        'click'
    ],
    'socket': {
        'socketIoOptions': {
            'log': false
        },
        'socketIoClientConfig': {
            'reconnectionAttempts': 50
        },
        'path': '/browser-sync/socket.io',
        'clientPath': '/browser-sync',
        'namespace': '/browser-sync',
        'clients': {
            'heartbeatTimeout': 5000
        }
    },
    'tagNames': {
        'less': 'link',
        'scss': 'link',
        'css': 'link',
        'jpg': 'img',
        'jpeg': 'img',
        'png': 'img',
        'svg': 'img',
        'gif': 'img',
        'js': 'script'
    }
};
