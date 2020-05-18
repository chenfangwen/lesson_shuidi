
module.exports = function (babelTypes) {
    const { types } = babelTypes;
    return {
        visitor: {
            ImportDeclaration(path, { opts }) {
                if(!path.node.specifiers[0].imported) return;
                const imported = path.node.specifiers[0].imported.name; //被引入的组件
                let local = path.node.specifiers[0].local;  //这组件在代码里的位置
                const source = path.node.source.value;  //组件来源库
                // console.log(imported,source)
                let newSource = types.stringLiteral(`antd/${imported}`);    //babel后的组件文件位置
                let specifiers = types.importDefaultSpecifier(local);   
                const node = types.importDeclaration([specifiers],newSource);
                path.replaceWith(node)
            }
        }
    }
}