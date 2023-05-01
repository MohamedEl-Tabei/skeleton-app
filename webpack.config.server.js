const path=require("path")
const cwd=process.cwd();
const webPack=require("webpack")
const nodeExternals=require("webpack-node-externals")
const config={
    name:"server",
    entry:path.join(cwd,"./backEnd/server.js"),
    target:"node",
    output:{
        filename:"server.generated.js",
        path:path.join(cwd,"./dist/"),
        publicPath:"/dist/",
        libraryTarget:"commonjs2",
    },
    externals:nodeExternals(),
    module:{
        rules:[{
            test:"/\.js$/",
            exclude:"/node_modules/",
            use:"babel-loader"
        }]
    }
}
module.exports=config