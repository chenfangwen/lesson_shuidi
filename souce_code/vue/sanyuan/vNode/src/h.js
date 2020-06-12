import VNodeFlags from './flags'

export function h(tag, data = null, children = null) {
    let flags = null;  //节点类型
    if (typeof tag === 'string') {
        flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
    }
    return {
        _isVNode: true ,   // 文本节点没有子节点,属性
        flags,  //利于diff,把节点类型判断提前, 加快diff
    }
}