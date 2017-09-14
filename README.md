# RegistrationSystem

#### 湖工大在线，在线报名系统


---

#### 使用方法

##### 依赖
`npm > 5.0`
`node.js > 8.2`
`mongodb > 3.4`

##### 基本安装步骤
```
git clone https://github.com/hgdonline/RegistrationSystem.git
cd RegistrationSystem
mkdir db
npm install
npm run build
mongod --dbpath=./db
npm start
```

##### 可定制部分

修改app.js&server.js的mongodb定义，即可切换端口和数据库
修改config.json 更换为自定义的token

##### 基本使用步骤
访问`/`目录是报名表，提交后跳转到`/success`（有缺陷）
访问`/api/adminUserList?token={your token}`取得json格式数据，也可以通过mongodb shell导出csv

---

MIT license
