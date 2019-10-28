module.exports = {
  title: "深入理解CSS",
  description: '更完备、更直观、更精简',
  dest: 'dist',
  themeConfig: {
    nav: [
      { text: '首页', link: '/index.md' }
    ],
    sidebar: [
      '/render-model.md',
      '/houdini.md',
      '/base/main.md',
      '/base/text.md',
      {
        title: '动画',
        children: [
          '/transition/main.md',
          '/animation/main.md',
          '/transform/main.md',
        ]
      },
      {
        title: '盒模型',
        children: [
          '/box-model/main.md',
          '/box-model/margin/main.md',
          '/box-model/margin/margin-zhe-die.md',
          '/box-model/margin/negative-margins.md',
          '/box-model/box-collapse.md'
        ]
      },
      {
        title: '专题',
        children: [
          '/zhuan-ti/align.md',
          '/zhuan-ti/overflow.md'
        ]
      },
      {
        title: '选择器',
        children: [
          '/selector/main.md',
          '/selector/selector-type.md',
          '/selector/priority.md',
          '/selector/media-queries.md',
          '/selector/about-selector.md'
        ]
      },
      {
        title: '布局',
        children: [
          '/layout/main.md',
          '/layout/layout.md',
          '/layout/doc-flow.md',
          '/layout/float.md',
          '/layout/position.md',
        ]
      },
      {
        title: '一些概念',
        children: [
          '/concept/bfc.md',
          '/concept/containing-block.md',
          '/concept/replaced-element.md',
          '/concept/display-type.md',
          '/concept/stacking-context.md',
          '/concept/Visual_formatting_model.md',
          '/concept/css-object-model.md'
        ]
      }
    ]
  }
}
