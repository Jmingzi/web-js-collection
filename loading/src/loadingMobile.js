(function(win) {
    var mask = createDom('div'),
        img = createDom('img'),
        p = createDom('div'),
        animateTime = 0.5,
        maskDom = null

    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjBweCIgIGhlaWdodD0iNjBweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWR1YWwtcmluZyIgc3R5bGU9IiI+CiAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1zdHJva2U9Int7Y29uZmlnLnN0cm9rZX19IiBuZy1hdHRyLXN0cm9rZS1kYXNoYXJyYXk9Int7Y29uZmlnLmRhc2hhcnJheX19IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHI9IjQwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iIzQ5OTlmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDMwNiA1MCA1MCkiPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgPC9zdmc+'
    p.innerText = '加载中'

    addStyle(mask)('position:fixed;z-index:100;top:0;left:0;bottom:0;width:100%;background-color:rgba(255,255,255, .8);opacity:0;transition:opacity '+ animateTime +'s;-webkit-transition:opacity '+ animateTime +'s')
    addStyle(img)('position:absolute;width:50px;height:50px;top:50%;left:50%;margin-top:-50px;margin-left:-25px')
    addStyle(p)('position:absolute;text-align:center;width:100%;top:50%;left:0;color:#4999ff;font-size:14px')

    mask.id = 'loading-mobile'
    mask.appendChild(img)
    mask.appendChild(p)

    win.loading = {
        show: show,
        hide: hide
    }

    function show() {
        if (maskDom) {
            maskDom.style.display = 'block'
        } else {
            document.body.appendChild(mask)
            maskDom = document.getElementById(mask.id)
        }

        setTimeout(function() {
            maskDom.style.opacity = 1
        }, 0)
    }

    function hide() {
        if (maskDom) {
            maskDom.style.opacity = 0

            setTimeout(function() {
                maskDom.style.display = 'none'
            }, animateTime * 1000)
        }
    }

    function createDom(type) {
        return document.createElement(type)
    }

    function addStyle(dom) {
        var arr, style

        return function(str) {
            arr = str.split(';')

            for (var i = 0; i < arr.length; i++) {
                style = arr[i].split(':')
                dom.style[style[0]] = style[1]
            }
        }
    }
}(window))
