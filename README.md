# Geomartian 사전작업

1. [GIT](#chapter1)
2. [node](#chapter2)

### GIT <a id ="chapter1"></a>
1. [GIT install](#gitinstall)
2. [Sourcetree install](#sourcetreeinstall)

###### Git install <a id ="gitinstall"></a>
[GitInstall](https://git-scm.com/download/win) <- 링크를 통해서 다운 받을 수 있습니다.<br>
http://library1008.tistory.com/51 이 링크를 보시고 설치하시면 됩니다.

###### Sourcetree <a id ="sourcetreeinstall"></a>
 Sourcetree란 GIT GUI 툴입니다.<br>
 [SourcetreeInstall](https://www.sourcetreeapp.com/) <- 링크를 통해서 다운 받을 수 있습니다.

### node <a id = "chapter2"</a>
1. [node install](#node_install)
2. [gulp 설정](#gulp_set)
3. [server.js 설정](#server_set)

###### node install <a id ="node_install"></a>
https://nodejs.org/en/download/ 에서 window 64bit 버전을 다운 받아서 설치<br>

###### gulp 설정 <a id = "gulp_set"></a>
1. Geomartian 프로젝트로 이동
2. $npm install gulp -g
3. $npm install gulp -save-dev
4. $npm install gulp-webserver gulp-concat gulp-uglify gulp-minify-html gulp-sass gulp-livereload --save-dev
5. $npm install gulp-clean-css
5. $npm install gulp-rename
5. $npm install gulp-util
5. $npm install gulp-convert-encoding
5. $npm install gulp-jasmine
5. $npm install gulp-jasmine-browser
5. $npm install gulp-watch
5. $npm install del

##### server가 필요한 npm(Node Package Modules) <a id = "server_set"></a>
1. Geomartian 프로젝트로 이동
2. $npm install compression
3. $npm install request
4. $npm install yargs
