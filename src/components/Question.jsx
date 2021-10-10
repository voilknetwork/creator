import React from 'react'

function Question({question, index}) {
    let key = index;
    return (
        <div class="panel panel-default" key={key}>
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${key}`}>{key+1}. {question[0]}<i class="fa fa-angle-down"></i></a>
                </h4>
            </div>
            <div id={"collapse"+key} class="panel-collapse collapse">
                <div class="panel-body">
                    <p>{question[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default Question
