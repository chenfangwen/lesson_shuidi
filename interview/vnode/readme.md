<div id="root">
    <span class="demo">
      This is a span.
    </span>
    <p>DOM</p>
</div>

--> js

{
    tag:'div',
    attr:{
        id:'root'
    }
    child:[
        {
            tag:'span',
            attr:{
                className:'demo'
            }
            child:[
                {
                    tag:'undefined',
                    text:'This is a span.'
                }
            ]
        },
        {
            tag:'p',
            attr:{
            }
            child:[
                {
                    tag:'undefined',
                    text:'DOM'
                }
            ]
        }
    ]
}