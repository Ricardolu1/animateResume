/* 把代码写到#code和style标签里*/
function writeCss(prefix, code, fn) {
  let domCode = document.querySelector("#code")
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(
      prefix + code.substring(0, n),
      Prism.languages.css,
      'css'
    )
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 20)
}

function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector("#paper>.content")
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 20)
}

var result = `/*
 *面试官你好，我是余晨阳
 *只用文字介绍太单调
 *我就用代码来介绍吧
 *首先准备一些样式*/

*{
   transition:all 1s;
 }
html{
  background: #eee;
}
#code{
  border:1px solid #aaa;
  padding:16px;
}

/* 我需要一些代码高亮 */
 
.token.selector{color:#690;}
.token.property{color:#905;}
.token.function{color:#dd4a68;}

/* 加一个呼吸效果*/
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 我来介绍一下我自己吧 */

/* 我需要一张白纸 */

#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}
#paper > .content {
  display: block;
}

/* 于是我就可以在白纸上写字了，请看右边 */
`
var result2 = `
/*
*接下来用一个优秀的库 marked.js
*把markdown变成HTML
*/
`

var md = `
# 自我介绍

我叫余晨阳
1997 年 4 月出生,今年22岁
毕业于海南大学
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉JavaScript CSS

# 项目介绍

1. 无缝轮播图
2. web简历
3. canvas画板

# 联系方式

- 微信 ycy568082704
- Email 568082704@qq.com
- 手机 13215805887


`
let result3 = `
/*
*这就是我的会动的简历了
*谢谢观看
*/
`


writeCss("", result, () => {
  createPaper(() => {
    writeMarkdown(md, () => {
      writeCss(result, result2, () => {
        convertMarkdownToHtml(() => {
          writeCss(result + result2, result3, () => {})
        })
      })
    })
  })
})

function createPaper(fn) {
  var paper = document.createElement("div")
  paper.id = "paper"
  var content = document.createElement("pre")
  content.className = "content"
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function convertMarkdownToHtml(fn) {
  var div = document.createElement("div")
  div.className = "html markdown-body"
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector("#paper>.content")
  markdownContainer.replaceWith(div)
  fn && fn.call()
}














// function fn3(preResult) {

//   var n=0
//   var id=setInterval(() => {
//     n+=1
//     code.innerHTML=preResult+result.substring(0,n)//用了闭包
//     code.innerHTML=
//       Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
//       styleTag.innerHTML=preResult+result.substring(0,n)
//     if (n>=result.length) {
//       window.clearInterval(id)
//     }
//   }, 10);
// }
